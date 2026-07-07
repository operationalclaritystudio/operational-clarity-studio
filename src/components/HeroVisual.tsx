// Premium hero visual: unstructured "before" list on the left flows into a
// clean workflow board on the right (Linear / Notion / Monday inspired).
// No floating rectangles — real UI-shaped surfaces with real hierarchy.

export const HeroVisual = () => (
  <svg
    viewBox="0 0 720 520"
    className="w-full h-auto"
    role="img"
    aria-label="Unstructured task list on the left flowing into an organized three-column workflow board on the right"
  >
    <defs>
      <linearGradient id="hv-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(0 0% 100%)" />
        <stop offset="100%" stopColor="hsl(165 21% 97%)" />
      </linearGradient>
      <linearGradient id="hv-mint" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="hsl(170 79% 54%)" />
        <stop offset="100%" stopColor="hsl(174 59% 32%)" />
      </linearGradient>
      <linearGradient id="hv-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="hsl(165 21% 97%)" stopOpacity="0" />
        <stop offset="100%" stopColor="hsl(165 21% 97%)" stopOpacity="1" />
      </linearGradient>
      <filter id="hv-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="hsl(212 21% 18%)" floodOpacity="0.06" />
      </filter>
      <pattern id="hv-dots" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="hsl(174 59% 27% / 0.14)" />
      </pattern>
    </defs>

    <rect width="720" height="520" rx="24" fill="url(#hv-bg)" />
    <rect width="720" height="520" rx="24" fill="url(#hv-dots)" opacity="0.6" />

    {/* ---------- CHAOS (left column) ---------- */}
    <g opacity="0.5">
      {/* messy list rows, unaligned */}
      <g className="chaos-piece" style={{ animationDelay: "0s" }}>
        <rect x="34" y="72"  width="200" height="14" rx="4" fill="hsl(212 21% 18% / 0.22)" />
        <rect x="46" y="94"  width="170" height="10" rx="3" fill="hsl(212 21% 18% / 0.16)" />
      </g>
      <g className="chaos-piece" style={{ animationDelay: "0.4s" }}>
        <rect x="28" y="128" width="220" height="14" rx="4" fill="hsl(174 59% 27% / 0.28)" transform="rotate(-1.5 138 135)" />
        <rect x="52" y="150" width="140" height="10" rx="3" fill="hsl(212 21% 18% / 0.16)" transform="rotate(-1.5 122 155)" />
      </g>
      <g className="chaos-piece" style={{ animationDelay: "0.9s" }}>
        <rect x="40" y="188" width="180" height="14" rx="4" fill="hsl(212 21% 18% / 0.2)" transform="rotate(2 130 195)" />
        <rect x="60" y="210" width="120" height="10" rx="3" fill="hsl(212 21% 18% / 0.14)" transform="rotate(2 120 215)" />
      </g>
      <g className="chaos-piece" style={{ animationDelay: "1.3s" }}>
        <rect x="34" y="248" width="200" height="14" rx="4" fill="hsl(170 79% 54% / 0.35)" />
        <rect x="46" y="270" width="150" height="10" rx="3" fill="hsl(212 21% 18% / 0.14)" />
      </g>
      <g className="chaos-piece" style={{ animationDelay: "0.7s" }}>
        <rect x="30" y="308" width="210" height="14" rx="4" fill="hsl(212 21% 18% / 0.2)" transform="rotate(-1 135 315)" />
        <rect x="54" y="330" width="130" height="10" rx="3" fill="hsl(212 21% 18% / 0.14)" transform="rotate(-1 120 335)" />
      </g>
      <g className="chaos-piece" style={{ animationDelay: "0.2s" }}>
        <rect x="38" y="368" width="180" height="14" rx="4" fill="hsl(174 59% 27% / 0.22)" transform="rotate(1.5 128 375)" />
      </g>
      <g className="chaos-piece" style={{ animationDelay: "1.1s" }}>
        <rect x="32" y="410" width="220" height="14" rx="4" fill="hsl(212 21% 18% / 0.18)" />
        <rect x="52" y="432" width="90"  height="10" rx="3" fill="hsl(212 21% 18% / 0.12)" />
      </g>

      {/* small tags */}
      <circle cx="20" cy="79"  r="3" fill="hsl(0 84% 60% / 0.6)" />
      <circle cx="20" cy="135" r="3" fill="hsl(38 92% 55% / 0.7)" />
      <circle cx="20" cy="195" r="3" fill="hsl(212 21% 18% / 0.4)" />
      <circle cx="20" cy="255" r="3" fill="hsl(170 79% 54%)" />
      <circle cx="20" cy="315" r="3" fill="hsl(0 84% 60% / 0.5)" />
      <circle cx="20" cy="375" r="3" fill="hsl(38 92% 55% / 0.6)" />
      <circle cx="20" cy="417" r="3" fill="hsl(212 21% 18% / 0.4)" />
    </g>

    {/* label above chaos */}
    <text x="20" y="52" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="600" letterSpacing="1.4" fill="hsl(212 21% 18% / 0.5)">BEFORE — SCATTERED WORK</text>

    {/* fade to hide chaos into midline */}
    <rect x="240" y="40" width="60" height="440" fill="url(#hv-fade)" />

    {/* ---------- Bridge flow lines ---------- */}
    <g>
      <path className="flow-line" d="M270 130 C 320 130, 340 108, 380 108" stroke="hsl(170 79% 54%)" strokeWidth="1.5" fill="none" />
      <path className="flow-line" d="M270 250 C 320 250, 340 240, 380 240" stroke="hsl(174 59% 27%)"  strokeWidth="1.5" fill="none" />
      <path className="flow-line" d="M270 370 C 320 370, 340 380, 380 380" stroke="hsl(170 79% 54%)" strokeWidth="1.5" fill="none" />
    </g>

    {/* label above clarity */}
    <text x="380" y="52" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="600" letterSpacing="1.4" fill="hsl(174 59% 27%)">AFTER — OPERATIONAL CLARITY</text>

    {/* ---------- CLARITY (right) — 3-column workflow board ---------- */}
    <g filter="url(#hv-shadow)">
      <rect x="370" y="66" width="330" height="416" rx="18" fill="#fff" stroke="hsl(165 15% 90%)" />
    </g>

    {/* board header */}
    <g>
      <circle cx="386" cy="86" r="4" fill="hsl(170 79% 54%)" />
      <rect x="396" y="82" width="70" height="8" rx="3" fill="hsl(212 21% 18% / 0.75)" />
      <rect x="632" y="79" width="52" height="16" rx="8" fill="hsl(170 79% 54% / 0.18)" />
      <rect x="642" y="85" width="32" height="4"  rx="2" fill="hsl(174 59% 27%)" />
      <line x1="380" y1="104" x2="690" y2="104" stroke="hsl(165 15% 92%)" />
    </g>

    {/* column headers */}
    {[
      { x: 386, label: "Backlog", n: "4" },
      { x: 490, label: "In Progress", n: "3" },
      { x: 594, label: "Done", n: "6" },
    ].map((c, i) => (
      <g key={i}>
        <rect x={c.x} y={116} width="50" height="6" rx="3" fill="hsl(212 21% 18% / 0.6)" />
        <rect x={c.x + 56} y={114} width="16" height="10" rx="5" fill="hsl(165 21% 92%)" />
        <text x={c.x + 64} y={122} textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="7" fontWeight="700" fill="hsl(174 59% 27%)">{c.n}</text>
      </g>
    ))}

    {/* Column: Backlog */}
    <g className="clarity-piece" style={{ animationDelay: "0s" }}>
      <rect x="382" y="136" width="94" height="58" rx="8" fill="hsl(165 21% 97%)" stroke="hsl(165 15% 90%)" />
      <rect x="390" y="146" width="18" height="6" rx="3" fill="hsl(174 59% 27% / 0.5)" />
      <rect x="390" y="158" width="72" height="6" rx="3" fill="hsl(212 21% 18% / 0.75)" />
      <rect x="390" y="170" width="52" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.3)" />
      <circle cx="392" cy="184" r="4" fill="hsl(170 79% 54%)" />
      <circle cx="400" cy="184" r="4" fill="hsl(174 59% 27%)" />
    </g>
    <g className="clarity-piece" style={{ animationDelay: "0.35s" }}>
      <rect x="382" y="202" width="94" height="52" rx="8" fill="hsl(165 21% 97%)" stroke="hsl(165 15% 90%)" />
      <rect x="390" y="212" width="24" height="6" rx="3" fill="hsl(38 92% 55% / 0.7)" />
      <rect x="390" y="224" width="76" height="6" rx="3" fill="hsl(212 21% 18% / 0.75)" />
      <rect x="390" y="236" width="40" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.3)" />
    </g>
    <g className="clarity-piece" style={{ animationDelay: "0.7s" }}>
      <rect x="382" y="262" width="94" height="48" rx="8" fill="hsl(165 21% 97%)" stroke="hsl(165 15% 90%)" />
      <rect x="390" y="272" width="66" height="6" rx="3" fill="hsl(212 21% 18% / 0.75)" />
      <rect x="390" y="284" width="48" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.3)" />
      <rect x="390" y="296" width="30" height="8" rx="4" fill="hsl(170 79% 54% / 0.2)" />
    </g>

    {/* Column: In Progress */}
    <g className="clarity-piece" style={{ animationDelay: "0.2s" }}>
      <rect x="486" y="136" width="94" height="72" rx="8" fill="#fff" stroke="hsl(170 79% 54% / 0.5)" />
      <rect x="494" y="146" width="24" height="6" rx="3" fill="hsl(174 59% 27% / 0.55)" />
      <rect x="494" y="158" width="76" height="6" rx="3" fill="hsl(212 21% 18% / 0.8)" />
      <rect x="494" y="170" width="60" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.3)" />
      {/* progress */}
      <rect x="494" y="184" width="72" height="5" rx="2.5" fill="hsl(165 15% 92%)" />
      <rect x="494" y="184" width="46" height="5" rx="2.5" fill="url(#hv-mint)" />
      <circle className="pulse-node" cx="500" cy="200" r="3.5" fill="hsl(170 79% 54%)" />
      <rect x="508" y="197" width="26" height="6" rx="3" fill="hsl(212 21% 18% / 0.5)" />
    </g>
    <g className="clarity-piece" style={{ animationDelay: "0.55s" }}>
      <rect x="486" y="216" width="94" height="60" rx="8" fill="#fff" stroke="hsl(165 15% 90%)" />
      <rect x="494" y="226" width="20" height="6" rx="3" fill="hsl(38 92% 55% / 0.7)" />
      <rect x="494" y="238" width="70" height="6" rx="3" fill="hsl(212 21% 18% / 0.75)" />
      <rect x="494" y="250" width="52" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.3)" />
      <rect x="494" y="262" width="60" height="5" rx="2.5" fill="hsl(165 15% 92%)" />
      <rect x="494" y="262" width="24" height="5" rx="2.5" fill="url(#hv-mint)" />
    </g>
    <g className="clarity-piece" style={{ animationDelay: "0.9s" }}>
      <rect x="486" y="284" width="94" height="50" rx="8" fill="#fff" stroke="hsl(165 15% 90%)" />
      <rect x="494" y="294" width="66" height="6" rx="3" fill="hsl(212 21% 18% / 0.75)" />
      <rect x="494" y="306" width="42" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.3)" />
      <circle cx="497" cy="322" r="4" fill="hsl(170 79% 54%)" />
      <circle cx="506" cy="322" r="4" fill="hsl(174 59% 27%)" />
      <circle cx="515" cy="322" r="4" fill="hsl(212 21% 18% / 0.4)" />
    </g>

    {/* Column: Done */}
    <g className="clarity-piece" style={{ animationDelay: "0.15s" }}>
      <rect x="590" y="136" width="94" height="50" rx="8" fill="hsl(170 79% 54% / 0.08)" stroke="hsl(170 79% 54% / 0.35)" />
      <circle cx="600" cy="150" r="6" fill="hsl(170 79% 54%)" />
      <path d="M597 150 l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="612" y="146" width="60" height="6" rx="3" fill="hsl(174 59% 27%)" />
      <rect x="598" y="162" width="72" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.3)" />
      <rect x="598" y="172" width="44" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.25)" />
    </g>
    <g className="clarity-piece" style={{ animationDelay: "0.5s" }}>
      <rect x="590" y="194" width="94" height="48" rx="8" fill="hsl(170 79% 54% / 0.08)" stroke="hsl(170 79% 54% / 0.35)" />
      <circle cx="600" cy="208" r="6" fill="hsl(170 79% 54%)" />
      <path d="M597 208 l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="612" y="204" width="52" height="6" rx="3" fill="hsl(174 59% 27%)" />
      <rect x="598" y="220" width="70" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.3)" />
      <rect x="598" y="230" width="40" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.25)" />
    </g>
    <g className="clarity-piece" style={{ animationDelay: "0.85s" }}>
      <rect x="590" y="250" width="94" height="48" rx="8" fill="hsl(170 79% 54% / 0.08)" stroke="hsl(170 79% 54% / 0.35)" />
      <circle cx="600" cy="264" r="6" fill="hsl(170 79% 54%)" />
      <path d="M597 264 l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="612" y="260" width="58" height="6" rx="3" fill="hsl(174 59% 27%)" />
      <rect x="598" y="276" width="66" height="5" rx="2.5" fill="hsl(212 21% 18% / 0.3)" />
    </g>
    <g className="clarity-piece" style={{ animationDelay: "1.15s" }}>
      <rect x="590" y="306" width="94" height="34" rx="8" fill="hsl(170 79% 54% / 0.08)" stroke="hsl(170 79% 54% / 0.35)" />
      <circle cx="600" cy="323" r="6" fill="hsl(170 79% 54%)" />
      <path d="M597 323 l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="612" y="319" width="48" height="6" rx="3" fill="hsl(174 59% 27%)" />
    </g>

    {/* Bottom metrics strip inside board */}
    <g>
      <line x1="380" y1="358" x2="690" y2="358" stroke="hsl(165 15% 92%)" />
      {/* metric 1 */}
      <text x="392" y="382" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="22" fontWeight="700" fill="hsl(212 21% 18%)">14</text>
      <text x="392" y="398" fontFamily="Montserrat, sans-serif" fontSize="8" letterSpacing="1" fill="hsl(212 21% 18% / 0.55)">SOPs SHIPPED</text>
      {/* metric 2 */}
      <text x="486" y="382" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="22" fontWeight="700" fill="hsl(174 59% 27%)">−38%</text>
      <text x="486" y="398" fontFamily="Montserrat, sans-serif" fontSize="8" letterSpacing="1" fill="hsl(212 21% 18% / 0.55)">MANUAL WORK</text>
      {/* metric 3 */}
      <text x="596" y="382" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="22" fontWeight="700" fill="hsl(212 21% 18%)">2.1×</text>
      <text x="596" y="398" fontFamily="Montserrat, sans-serif" fontSize="8" letterSpacing="1" fill="hsl(212 21% 18% / 0.55)">ONBOARDING SPEED</text>

      {/* sparkline */}
      <polyline
        points="392,450 420,442 448,446 476,430 504,432 532,418 560,422 588,406 616,410 644,394 672,396"
        fill="none" stroke="url(#hv-mint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle className="pulse-node" cx="672" cy="396" r="4" fill="hsl(170 79% 54%)" />
      <line x1="380" y1="466" x2="690" y2="466" stroke="hsl(165 15% 92%)" />
      <rect x="392" y="474" width="90" height="4" rx="2" fill="hsl(165 15% 92%)" />
      <rect x="392" y="474" width="60" height="4" rx="2" fill="hsl(170 79% 54%)" />
    </g>
  </svg>
);

export default HeroVisual;