"use client";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid rgba(29, 77, 79, 0.08)",
                padding: "48px 24px",
                textAlign: "center",
                background: "#EBE7D9"
            }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 24,
                        marginBottom: 32,
                    }}
                >
                    {/* Logo */}
                    <span
                        style={{
                            fontWeight: 800,
                            fontSize: "1.25rem",
                            color: "var(--color-accent)",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Brad Nguyen
                    </span>

                    {/* Nav */}
                    <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                        {["About", "Experience", "Projects", "Skills"].map((label) => (
                            <a
                                key={label}
                                href={`#${label.toLowerCase()}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(`#${label.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                                }}
                                style={{
                                    fontSize: "0.9rem",
                                    color: "var(--color-text-secondary)",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-secondary)"; }}
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Social icons */}
                    <div style={{ display: "flex", gap: 20 }}>
                        {[
                            { href: "https://github.com/thaibinhbr97", label: "GitHub" },
                            { href: "https://linkedin.com/in/thaibinhbr97", label: "LinkedIn" },
                            { href: "mailto:brad.nguyen.uw@gmail.com", label: "Email" },
                        ].map((s) => (
                            <a
                                key={s.href}
                                href={s.href}
                                target={s.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                    color: "var(--color-text-secondary)",
                                    textDecoration: "none",
                                    transition: "all 0.2s",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-secondary)"; }}
                            >
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>

                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                    © {new Date().getFullYear()} Brad Nguyen. Built with ❤️ using Next.js & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
