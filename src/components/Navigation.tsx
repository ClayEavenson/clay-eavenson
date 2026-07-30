"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/">Clay Eavenson</Link>
      <nav className="site-nav" aria-label="Main">
        <Link 
          className={`nav-link ${pathname === "/" ? "is-current" : ""}`} 
          href="/" 
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
        <Link 
          className={`nav-link ${pathname === "/about" ? "is-current" : ""}`} 
          href="/about"
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
        <Link 
          className={`nav-link ${pathname === "/the-book" ? "is-current" : ""}`} 
          href="/the-book"
          aria-current={pathname === "/the-book" ? "page" : undefined}
        >
          The Book
        </Link>
        <Link 
          className={`nav-link ${pathname === "/gallery" ? "is-current" : ""}`} 
          href="/gallery"
          aria-current={pathname === "/gallery" ? "page" : undefined}
        >
          Gallery
        </Link>
        <Link 
          className={`nav-link ${pathname === "/contact" ? "is-current" : ""}`} 
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Contact
        </Link>
        <a 
          className="btn btn-primary nav-cta" 
          href="https://www.amazon.com/Sit-Down-Shut-Hold-Circumstances/dp/B0HBYMB5ZH/ref=sr_1_1" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          Buy The Book
        </a>
      </nav>
    </header>
  );
}
