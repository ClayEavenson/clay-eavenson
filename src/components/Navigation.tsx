import Link from "next/link";

export default function Navigation() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">Clay Eavenson</Link>
      <nav className="site-nav" aria-label="Main">
        <Link className="nav-link is-current" href="/" aria-current="page">Home</Link>
        <Link className="nav-link" href="#about">About</Link>
        <Link className="nav-link" href="#the-book">The Book</Link>
        <Link className="nav-link" href="#contact">Contact</Link>
        <a className="btn btn-primary nav-cta" href="https://www.amazon.com/" rel="noopener noreferrer" target="_blank">Buy The Book</a>
      </nav>
    </header>
  );
}
