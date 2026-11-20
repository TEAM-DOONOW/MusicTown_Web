import { ReleaseCard } from "../components/ReleaseCard";
import { releases } from "../data/releases";
export function ReleasesPage() {
  return (
    <section className="section inner-page">
      <span className="section-kicker">TOWN NOTICE BOARD</span>
      <h1>마을에서 온 소식</h1>
      <p className="page-description">
        뮤직타운의 새로운 변화와 업데이트를 전해요.
      </p>
      <div className="release-grid">
        {releases.map((release, i) => (
          <ReleaseCard
            key={release.version}
            release={release}
            latest={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
