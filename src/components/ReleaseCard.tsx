import { ArrowRight } from "lucide-react";
import type { Release } from "../types/content";
import { formatDate } from "../utils/formatDate";
import { AnimalCharacter } from "./AnimalCharacter";
export function ReleaseCard({
  release,
  latest = false,
}: {
  release: Release;
  latest?: boolean;
}) {
  return (
    <a
      className={`release-banner ${latest ? "release-banner-blue" : "release-banner-yellow"}`}
      href={`#/releases/${release.version}`}
    >
      <span className="release-bubble">
        <b>{release.version}</b>
        <span>{latest ? "새로운 업데이트" : "마을 소식"}</span>
      </span>
      <div className="release-art">
        <img
          src={latest ? "/images/stage.png" : "/images/park.png"}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="release-banner-copy">
        <time dateTime={release.date}>{formatDate(release.date)}</time>
        <h3>{release.title}</h3>
        <p>{release.summary}</p>
        <span className="release-cta">
          자세히 보기 <ArrowRight size={18} />
        </span>
      </div>
      <AnimalCharacter
        character={latest ? 1 : 2}
        className="release-character"
      />
    </a>
  );
}
