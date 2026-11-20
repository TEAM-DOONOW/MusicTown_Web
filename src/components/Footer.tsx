import { Github, Mail, ArrowUpRight } from "lucide-react";
import { APP_URL, REPOSITORY_URL } from "../data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-information">
          <a className="footer-logo" href="#/" aria-label="뮤직타운 홈">
            <img src="/images/busking-town-logo.png" alt="MUSIC TOWN" width="200" />
          </a>
          <p className="footer-copyright">Copyright © {new Date().getFullYear()} TEAM DOONOW. All Rights Reserved.</p>
          <p className="footer-description">산책하다 만나는, 새로운 음악.<br />나만의 캐릭터로 걷고, 노래하고, 함께 듣는 음악 소셜 웹앱.<br />설치 없이 브라우저에서 뮤직타운을 만나보세요.</p>
        </div>
        <nav className="footer-socials" aria-label="뮤직타운 외부 링크">
          <a href={REPOSITORY_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub 저장소 (새 탭)" title="GitHub"><Github size={23}/></a>
          <a href="mailto:teamsda01@gmail.com" aria-label="이메일 문의" title="이메일 문의"><Mail size={23}/></a>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" aria-label="뮤직타운 웹앱 (새 탭)" title="뮤직타운 시작하기"><ArrowUpRight size={24}/></a>
        </nav>
        <nav className="footer-links" aria-label="푸터 메뉴">
          <a href="#/">마을 소개</a><a href="#/releases">업데이트 소식</a><a href="mailto:teamsda01@gmail.com">문의하기</a>
        </nav>
      </div>
    </footer>
  );
}
