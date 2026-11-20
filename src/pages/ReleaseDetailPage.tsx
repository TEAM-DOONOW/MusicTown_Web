import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { releases } from "../data/releases";
import { formatDate } from "../utils/formatDate";
export function ReleaseDetailPage({ version }: { version: string }) {
  const release = releases.find((item) => item.version === version);
  if (!release)
    return (
      <section className="section inner-page">
        <h1>소식을 찾을 수 없어요</h1>
        <a className="text-link" href="#/releases">
          소식 목록으로 돌아가기 <ArrowLeft size={18} />
        </a>
      </section>
    );
  return (
    <article className="section inner-page detail-page">
      <a className="text-link" href="#/releases">
        <ArrowLeft size={17} /> 모든 소식
      </a>
      <div className="release-meta">
        <span className="tag">{release.version}</span>
        <time dateTime={release.date}>{formatDate(release.date)}</time>
      </div>
      <h1>{release.title}</h1>
      <p className="page-description">{release.summary}</p>
      <h2>이렇게 달라졌어요</h2>
      <ul>
        {release.changes.map((change) => (
          <li key={change}>{change}</li>
        ))}
      </ul>
      <a
        className="text-link"
        href={release.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub에서 전체 릴리즈 보기 <ArrowUpRight size={17} />
      </a>
    </article>
  );
}
