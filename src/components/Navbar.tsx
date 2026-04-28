"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                padding: "0 24px",
                transition: "all 0.4s ease",
            }}
        >
            <nav
                style={{
                    maxWidth: 1100,
                    margin: "12px auto",
                    padding: "12px 24px",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                    border: scrolled ? "1px solid rgba(29, 77, 79, 0.1)" : "1px solid transparent",
                    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
                    transition: "all 0.4s ease",
                }}
                aria-label="Main navigation"
            >
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, "#hero")}
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        textDecoration: "none",
                        color: "var(--color-accent)",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Brad Nguyen
                </a>

                {/* Desktop links */}
                <div
                    style={{
                        display: "flex",
                        gap: 40,
                        alignItems: "center",
                    }}
                    className="desktop-nav"
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="nav-link"
                            style={{
                                textDecoration: "none",
                                fontWeight: 600
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/12PWSF4mkAD0oRP_n8Zc6Vb94GZU7E8wq/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: "10px 24px", borderRadius: 8, fontSize: "0.9rem" }}
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 8,
                        color: "var(--color-accent)",
                        display: "none",
                    }}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {menuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                                <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                                <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
                            </>
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="glass"
                    style={{
                        maxWidth: 1100,
                        margin: "0 auto 12px",
                        padding: "16px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                    }}
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            style={{
                                textDecoration: "none",
                                color: "#94a3b8",
                                fontWeight: 500,
                                fontSize: "0.9rem",
                                padding: "8px 0",
                                borderBottom: "1px solid rgba(56,189,248,0.08)",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
