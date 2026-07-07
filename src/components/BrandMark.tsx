type BrandMarkProps = {
  size?: number;
};

const BrandMark = ({ size = 32 }: BrandMarkProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="9" cy="12" r="2.5" fill="#2EE6C5" />
      <circle cx="9" cy="28" r="2.5" fill="#1D7069" />
      <circle cx="20" cy="20" r="3" fill="#2EE6C5" />
      <circle cx="31" cy="10" r="2.5" fill="#1D7069" />
      <circle cx="31" cy="30" r="2.5" fill="#2EE6C5" />
      <path d="M11 13.5L18 19M22 20L29 11.5M22 21L29 28.5M11 27L18 21" stroke="#1D7069" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export default BrandMark;
