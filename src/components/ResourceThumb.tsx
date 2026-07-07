type Kind = "sop" | "checklist" | "prompts" | "docs";

// Small UI-shaped mockups used as "cover" thumbnails on Coming Soon resource cards.
export const ResourceThumb = ({ kind }: { kind: Kind }) => (
  <div className="relative h-32 w-full rounded-xl overflow-hidden bg-gradient-to-br from-fog to-white border border-border/60">
    <div
      className="absolute inset-0 opacity-40"
      style={{ backgroundImage: "radial-gradient(hsl(174 59% 27% / 0.14) 1px, transparent 1px)", backgroundSize: "12px 12px" }}
    />
    <div className="absolute inset-0 grid place-items-center p-3">
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {kind === "sop" && (
          <g>
            <rect x="30" y="8"  width="140" height="104" rx="8" fill="#fff" stroke="hsl(165 15% 88%)" />
            <rect x="42" y="20" width="60"  height="6"   rx="3" fill="hsl(170 79% 54%)" />
            <rect x="42" y="34" width="116" height="4"   rx="2" fill="hsl(212 21% 18% / 0.7)" />
            <rect x="42" y="44" width="96"  height="3"   rx="1.5" fill="hsl(212 21% 18% / 0.25)" />
            {[0,1,2,3].map((i) => (
              <g key={i} transform={`translate(42 ${58 + i * 12})`}>
                <rect width="8" height="8" rx="2" fill={i < 2 ? "hsl(170 79% 54%)" : "hsl(165 15% 92%)"} />
                {i < 2 && <path d="M2 4 l2 2 l4 -4" stroke="#fff" strokeWidth="1.2" fill="none" />}
                <rect x="14" y="2" width={90 - i * 8} height="4" rx="2" fill="hsl(212 21% 18% / 0.55)" />
              </g>
            ))}
          </g>
        )}
        {kind === "checklist" && (
          <g>
            <rect x="20" y="12" width="160" height="96" rx="8" fill="#fff" stroke="hsl(165 15% 88%)" />
            <rect x="32" y="24" width="40" height="6" rx="3" fill="hsl(174 59% 27%)" />
            {[0,1,2,3,4].map((i) => (
              <g key={i} transform={`translate(32 ${42 + i * 12})`}>
                <circle cx="4" cy="4" r="4" fill={i < 3 ? "hsl(170 79% 54%)" : "#fff"} stroke="hsl(165 15% 85%)" />
                {i < 3 && <path d="M1.5 4 l2 2 l4 -4" stroke="#fff" strokeWidth="1.2" fill="none" />}
                <rect x="14" y="2" width={110 - i * 12} height="4" rx="2" fill="hsl(212 21% 18% / 0.5)" />
              </g>
            ))}
          </g>
        )}
        {kind === "prompts" && (
          <g>
            <rect x="14" y="18" width="120" height="24" rx="8" fill="hsl(165 21% 97%)" stroke="hsl(165 15% 88%)" />
            <rect x="22" y="26" width="60"  height="4"  rx="2" fill="hsl(212 21% 18% / 0.55)" />
            <rect x="22" y="34" width="90"  height="3"  rx="1.5" fill="hsl(212 21% 18% / 0.3)" />
            <rect x="66" y="52" width="120" height="24" rx="8" fill="hsl(170 79% 54% / 0.15)" stroke="hsl(170 79% 54% / 0.4)" />
            <rect x="74" y="60" width="50"  height="4"  rx="2" fill="hsl(174 59% 27%)" />
            <rect x="74" y="68" width="96"  height="3"  rx="1.5" fill="hsl(174 59% 27% / 0.6)" />
            <rect x="14" y="86" width="140" height="20" rx="8" fill="hsl(165 21% 97%)" stroke="hsl(165 15% 88%)" />
            <rect x="22" y="93" width="80"  height="4"  rx="2" fill="hsl(212 21% 18% / 0.55)" />
          </g>
        )}
        {kind === "docs" && (
          <g>
            <rect x="50" y="18" width="120" height="90" rx="6" fill="#fff" stroke="hsl(165 15% 88%)" />
            <rect x="40" y="14" width="120" height="90" rx="6" fill="#fff" stroke="hsl(165 15% 88%)" />
            <rect x="30" y="10" width="120" height="90" rx="6" fill="#fff" stroke="hsl(165 15% 85%)" />
            <rect x="42" y="22" width="46"  height="6"  rx="3" fill="hsl(170 79% 54%)" />
            <rect x="42" y="36" width="94"  height="4"  rx="2" fill="hsl(212 21% 18% / 0.55)" />
            <rect x="42" y="46" width="80"  height="3"  rx="1.5" fill="hsl(212 21% 18% / 0.3)" />
            <rect x="42" y="54" width="70"  height="3"  rx="1.5" fill="hsl(212 21% 18% / 0.3)" />
            <rect x="42" y="70" width="30"  height="14" rx="3" fill="hsl(170 79% 54% / 0.2)" />
            <rect x="76" y="70" width="30"  height="14" rx="3" fill="hsl(174 59% 27% / 0.15)" />
          </g>
        )}
      </svg>
    </div>
  </div>
);

export default ResourceThumb;