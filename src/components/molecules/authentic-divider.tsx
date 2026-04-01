export default function AuthenticDivider() {
  const darkColor = "#5d4037"; // Marrón ceniza
  const goldColor = "#c19a6b"; // Dorado tierra
  return (
    <div className="w-full flex items-center justify-center py-12 px-6 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
      <svg
        viewBox="0 0 1000 80"
        className="w-full max-w-6xl h-auto overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="roughen">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
        <g filter="url(#roughen)">
          <path
            d="M0 40 L350 40"
            stroke={darkColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M650 40 L1000 40"
            stroke={darkColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <g transform="translate(500, 40)">
            <path
              d="M-45 0 L0 -35 L45 0 L0 35 Z M-25 0 L0 20 L25 0 L0 -20 Z"
              fill={darkColor}
              fillRule="evenodd"
            />
            <path d="M-18 0 L0 -14 L18 0 L0 14 Z" fill={goldColor} />
            <rect
              x="-58"
              y="-3"
              width="6"
              height="6"
              fill={darkColor}
              transform="rotate(45 -55 0)"
            />
            <rect
              x="52"
              y="-3"
              width="6"
              height="6"
              fill={darkColor}
              transform="rotate(45 55 0)"
            />
          </g>
          <g transform="translate(400, 40)">
            <path d="M-45 0 L-22 -18 L0 0 L-22 18 Z" fill={darkColor} />
            <path d="M-28 0 L-18 -8 L-8 0 L-18 8 Z" fill={goldColor} />
            <path d="M-75 0 L-65 -8 L-55 0 L-65 8 Z" fill={darkColor} />
          </g>
          <g transform="translate(600, 40) scale(-1, 1)">
            <path d="M-45 0 L-22 -18 L0 0 L-22 18 Z" fill={darkColor} />
            <path d="M-28 0 L-18 -8 L-8 0 L-18 8 Z" fill={goldColor} />
            <path d="M-75 0 L-65 -8 L-55 0 L-65 8 Z" fill={darkColor} />
          </g>
        </g>
      </svg>
    </div>
  );
}
