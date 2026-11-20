/** Use the standing pose's actual bounds, excluding adjacent pose rows. */
export function AnimalCharacter({
  character = 0,
  className = "",
}: {
  character?: 0 | 1 | 2 | 3;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`animal-character ${className}`}
      viewBox={`${character * 280.5} 855 280.5 273`}
    >
      <image href="/images/animal.png" width="1122" height="1402" />
    </svg>
  );
}
