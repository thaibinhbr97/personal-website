"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
    "software engineer",
    "full stack developer",
    "pickleball & tennis enthusiast",
    "avid hiker",
    "coffee lover",
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
    const [text, setText] = useState("");
    const [wordIdx, setWordIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIdx % words.length];
        const timeout = setTimeout(
            () => {
                if (!deleting) {
                    setText(current.slice(0, text.length + 1));
                    if (text.length + 1 === current.length) {
                        setTimeout(() => setDeleting(true), pause);
                    }
                } else {
                    setText(current.slice(0, text.length - 1));
                    if (text.length - 1 === 0) {
                        setDeleting(false);
                        setWordIdx((w) => w + 1);
                    }
                }
            },
            deleting ? speed / 2 : speed
        );
        return () => clearTimeout(timeout);
    }, [text, deleting, wordIdx, words, speed, pause]);

    return text;
}

export default function Hero() {
    const typedText = useTypewriter(ROLES);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fade in on mount
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            id="hero"
            ref={ref}
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                padding: "120px 24px 80px",
            }}
        >
            {/* Animated grid background */}
            <div
                className="dot-grid"
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.8,
                }}
            />

            {/* Hero content */}
            <div
                style={{
                    maxWidth: 900,
                    width: "100%",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
            >
                {/* Available badge */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 16px",
                        borderRadius: 9999,
                        background: "rgba(29, 77, 79, 0.05)",
                        border: "1px solid rgba(29, 77, 79, 0.15)",
                        color: "var(--color-accent)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        marginBottom: 32,
                    }}
                >
                    <span
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#059669",
                            display: "inline-block",
                        }}
                    />
                    OPEN FOR NEW ADVENTURES
                </div>

                {/* Name */}
                <h1
                    style={{
                        fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.05,
                        letterSpacing: "-0.04em",
                        marginBottom: 20,
                        color: "var(--color-text-primary)",
                    }}
                >
                    Hi there, I&apos;m <span style={{ color: "#2D6A6D" }}>Brad</span>
                </h1>

                {/* Typewriter role */}
                <div
                    style={{
                        fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                        fontWeight: 600,
                        color: "var(--color-text-secondary)",
                        marginBottom: 32,
                        minHeight: "2.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8
                    }}
                >
                    <span style={{ color: "#8A9A9B" }}>—</span>
                    <span>{typedText}</span>
                    <span className="typewriter-cursor" style={{ width: 12, height: 12, borderRadius: "50%" }} />
                </div>

                {/* Pitch */}
                <p
                    style={{
                        fontSize: "clamp(1.1rem, 2.2vw, 1.25rem)",
                        color: "var(--color-text-secondary)",
                        maxWidth: 680,
                        margin: "0 auto 48px",
                        lineHeight: 1.7,
                        fontWeight: 500
                    }}
                >
                    A full-stack software engineer driven by the idea of building
                    scalable solutions that simplify complex human experiences.
                </p>

                {/* CTAs */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <a
                        href="#projects"
                        className="btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        style={{ padding: "12px 32px", fontSize: "1rem" }}
                    >
                        Check out my work ↓
                    </a>
                </div>

                {/* Social quick links */}
                <div
                    style={{
                        display: "flex",
                        gap: 24,
                        justifyContent: "center",
                        marginTop: 64,
                        paddingTop: 40,
                        borderTop: "1px solid rgba(29, 77, 79, 0.08)",
                    }}
                >
                    {[
                        {
                            label: "GitHub",
                            href: "https://github.com/thaibinhbr97",
                            icon: (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            ),
                        },
                        {
                            label: "LinkedIn",
                            href: "https://linkedin.com/in/bradnguyen",
                            icon: (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            ),
                        },
                        {
                            label: "Email",
                            href: "mailto:brad.nguyen.uw@gmail.com",
                            icon: (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            ),
                        },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target={social.href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            style={{
                                color: "var(--color-text-secondary)",
                                transition: "all 0.25s ease",
                                textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.color = "var(--color-accent)";
                                el.style.transform = "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.color = "var(--color-text-secondary)";
                                el.style.transform = "translateY(0)";
                            }}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
