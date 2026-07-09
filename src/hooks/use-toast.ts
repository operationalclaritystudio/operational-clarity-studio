import * as React from "react";

type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

const listeners: Array<(toasts: Toast[]) => void> = [];
let toasts: Toast[] = [];

function notify() {
  listeners.forEach((listener) => listener(toasts));
}

export function toast({ title, description }: Omit<Toast, "id">) {
  const id = Math.random().toString(36).slice(2);
  toasts = [{ id, title, description }, ...toasts].slice(0, 1);
  notify();
}

export function useToast() {
  const [state, setState] = React.useState<Toast[]>(toasts);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    toasts: state,
    toast,
    dismiss: (toastId?: string) => {
      toasts = toastId ? toasts.filter((t) => t.id !== toastId) : [];
      notify();
    },
  };
}
