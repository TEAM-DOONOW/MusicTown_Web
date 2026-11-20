import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { StartButton } from "./StartButton";
import { Footer } from "./Footer";
export function Layout({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        본문으로 이동
      </a>
      <header className="header">
        <a href="#/" className="brand" aria-label="뮤직타운 홈">
          <img
            className="brand-logo"
            src="/images/busking-town-logo.png"
            alt="MUSIC TOWN"
          />
        </a>
        <button
          className="menu-button"
          aria-label={menu ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav
          className={menu ? "navigation open" : "navigation"}
          aria-label="주 메뉴"
        >
          <a href="#/" onClick={() => setMenu(false)}>
            마을 소개
          </a>
          <a href="#/releases" onClick={() => setMenu(false)}>
            마을 소식 <span className="nav-dot" />
          </a>
          <StartButton small />
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
