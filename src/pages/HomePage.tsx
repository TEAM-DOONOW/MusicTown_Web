import { ArrowRight } from "lucide-react";
import { StartButton } from "../components/StartButton";
import { ReleaseCard } from "../components/ReleaseCard";
import { features } from "../data/site";
import { releases } from "../data/releases";
export function HomePage() {
  return (
    <>
      <section className="hero hero-illustrated">
        <img className="hero-background" src="/images/hero-town-v2.png" alt="" fetchPriority="high" />
        <div className="hero-copy">
          <h1 className="hero-brand-title">
            <img className="hero-brand-image" src="/images/busking-town-logo.png" alt="뮤직타운" fetchPriority="high" />
          </h1>
          <StartButton />
          <span className="browser-note">설치 없이 바로 시작할 수 있어요</span>
        </div>
      </section>
      <section className="intro section" id="discover">
        <span className="town-ribbon">음악이 있는 작은 일상</span>
        <h2 className="cloud-heading">
          <span>뮤직타운</span>에서는 이런 즐거움이!
        </h2>
        <p>
          노래 한 곡, 반가운 인사, 잠깐의 쉼.
          <br />
          뮤직타운에서는 당신의 속도로 하루를 즐겨요.
        </p>
        <div className="activity-strip">
          <span>
            <span className="activity-icon activity-walk" aria-hidden="true">
              🌳
            </span>
            <span>나답게 산책하고</span>
          </span>
          <span>
            <span className="activity-icon activity-sing" aria-hidden="true">
              🎤
            </span>
            <span>마음껏 노래하고</span>
          </span>
          <span>
            <span className="activity-icon activity-rest" aria-hidden="true">
              ☕
            </span>
            <span>느긋하게 쉬어가요</span>
          </span>
        </div>
      </section>
      <section
        className="features section"
        aria-label="뮤직타운에서 즐기는 일상"
      >
        {features.map((feature) => (
          <article className="feature" key={feature.number}>
            <div className="feature-image">
              <img loading="lazy" src={feature.image} alt={feature.alt} />
              <span className="photo-tape" />
            </div>
            <div className="feature-copy">
              <span className="feature-number">{feature.number}</span>
              <h2>
                {feature.title.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="news section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">TOWN NOTICE BOARD</span>
            <h2>
              마을에서 온 소식 <span aria-hidden="true">✉</span>
            </h2>
          </div>
          <a className="text-link" href="#/releases">
            모든 소식 보기 <ArrowRight size={18} />
          </a>
        </div>
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
      <section className="invitation">
        <span className="section-kicker">SEE YOU IN MUSIC TOWN</span>
        <h2>오늘, 잠깐 들렀다 갈래요?</h2>
        <p>좋은 음악과 새로운 만남이 기다리고 있어요.</p>
        <StartButton />
        <div className="device-guide">
          <span>PC · WASD 또는 방향키</span>
          <span>모바일 · 가로 화면과 터치 조이스틱</span>
        </div>
      </section>
    </>
  );
}
