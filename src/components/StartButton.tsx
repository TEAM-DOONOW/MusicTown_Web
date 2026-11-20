import { APP_URL } from "../data/site";
export function StartButton({ small = false }: { small?: boolean }) {
  return (
    <a
      className={`start-button ${small ? "small" : ""}`}
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>뮤직타운 시작하기</span>
      <span className="sr-only"> (새 탭)</span>
    </a>
  );
}
