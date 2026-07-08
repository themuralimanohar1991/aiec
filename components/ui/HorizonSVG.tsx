/**
 * Engraved Houston-energy "horizon" line-art — refineries, towers, rigs.
 * Rendered as strokes so DrawSVG can draw it in. Uses the energy-blue palette.
 */
export function HorizonSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="112" x2="1200" y2="112" stroke="var(--blue)" strokeWidth="1" opacity="0.55" />
      <g stroke="var(--blue)" strokeWidth="1" opacity="0.34" fill="none">
        <line x1="150" y1="112" x2="150" y2="78" />
        <line x1="150" y1="78" x2="178" y2="78" />
        <line x1="178" y1="78" x2="178" y2="112" />
        <line x1="320" y1="112" x2="320" y2="56" />
        <line x1="350" y1="112" x2="350" y2="56" />
        <line x1="320" y1="56" x2="350" y2="56" />
        <line x1="520" y1="112" x2="520" y2="90" />
        <line x1="540" y1="112" x2="540" y2="68" />
        <line x1="560" y1="112" x2="560" y2="90" />
        <line x1="760" y1="112" x2="760" y2="62" />
        <line x1="760" y1="62" x2="800" y2="62" />
        <line x1="800" y1="62" x2="800" y2="112" />
        <line x1="980" y1="112" x2="980" y2="84" />
        <line x1="1000" y1="112" x2="1000" y2="50" />
        <line x1="1000" y1="50" x2="1012" y2="50" />
      </g>
    </svg>
  );
}
