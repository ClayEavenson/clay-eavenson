"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "The Book", href: "/the-book" },
  { label: "Gallery",  href: "/gallery" },
  { label: "Contact",  href: "/contact" },
];

const AMAZON_URL =
  "https://www.amazon.com/Sit-Down-Shut-Hold-Circumstances/dp/B0HBYMB5ZH/ref=sr_1_1";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/">Clay Eavenson</Link>

        {/* ── Desktop nav (hidden on mobile via CSS) ── */}
        <nav className="site-nav" aria-label="Main">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              className={`nav-link${pathname === href ? " is-current" : ""}`}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <a
            className="btn btn-primary nav-cta"
            href={AMAZON_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Buy The Book
          </a>
        </nav>

        {/* ── Hamburger button (mobile only) ── */}
        <button
          id="mobile-menu-toggle"
          className="hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`hamburger-bar${open ? " open" : ""}`} />
          <span className={`hamburger-bar${open ? " open" : ""}`} />
          <span className={`hamburger-bar${open ? " open" : ""}`} />
        </button>
      </header>

      {/* ── Mobile drawer + backdrop ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.nav
              key="drawer"
              id="mobile-drawer"
              className="mobile-drawer"
              aria-label="Mobile menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="drawer-inner">
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    className={`drawer-link${pathname === href ? " is-current" : ""}`}
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}

                <div className="drawer-cta">
                  <a
                    className="btn btn-primary btn-wide"
                    href={AMAZON_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => setOpen(false)}
                  >
                    Buy The Book <span aria-hidden="true">&#8594;</span>
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
