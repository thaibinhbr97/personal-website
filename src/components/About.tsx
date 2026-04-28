"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
    { value: "4+", label: "Years Experience" },
    { value: "10K+", label: "Users Served" },
    { value: "400%", label: "Latency Reduction" },
    { value: "140%", label: "Productivity Boost" },
];

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

export default function About() {
    const { ref, inView } = useInView();

    return (
        <section id="about" style={{ padding: "120px 24px", position: "relative" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
                {/* Section header */}
                <div
                    style={{
                        marginBottom: 64,
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    <p className="section-label">01 — About Me</p>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: "var(--color-text-primary)",
                        }}
                    >
                        My background
                    </h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.4fr",
                        gap: 64,
                        alignItems: "start",
                    }}
                    className="about-grid"
                >
                    {/* Left: Avatar + contact */}
                    <div
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateX(0)" : "translateX(-20px)",
                            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
                        }}
                    >
                        {/* Avatar placeholder */}
                        <div
                            style={{
                                width: "100%",
                                aspectRatio: "1/1",
                                maxWidth: 360,
                                borderRadius: 12,
                                overflow: "hidden",
                                marginBottom: 32,
                                background: "#EBE7D9",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                border: "1px solid rgba(29, 77, 79, 0.1)"
                            }}
                        >
                            <img
                                src="/photo.jpeg"
                                alt="Brad Nguyen"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </div>

                        {/* Contact info card */}
                        <div className="glass" style={{ padding: 24 }}>
                            <p className="section-label" style={{ marginBottom: 20 }}>Connect</p>
                            {[
                                {
                                    label: "GitHub",
                                    value: "github.com/thaibinhbr97",
                                    href: "https://github.com/thaibinhbr97",
                                    icon: "◈",
                                },
                                {
                                    label: "LinkedIn",
                                    value: "linkedin.com/in/bradnguyen",
                                    href: "https://linkedin.com/in/bradnguyen",
                                    icon: "⟁",
                                },
                                {
                                    label: "Email",
                                    value: "brad.nguyen.uw@gmail.com",
                                    href: "mailto:brad.nguyen.uw@gmail.com",
                                    icon: "✉",
                                },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex",
                                        gap: 16,
                                        padding: "12px 0",
                                        borderBottom: "1px solid rgba(29, 77, 79, 0.05)",
                                        textDecoration: "none",
                                        color: "inherit",
                                        alignItems: "center",
                                    }}
                                >
                                    <span style={{ color: "var(--color-accent)", fontSize: "1.1rem" }}>{item.icon}</span>
                                    <div>
                                        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 700, textTransform: "uppercase" }}>
                                            {item.label}
                                        </p>
                                        <p style={{ fontSize: "0.95rem", color: "var(--color-text-primary)", fontWeight: 500 }}>
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Bio + Stats */}
                    <div
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateX(0)" : "translateX(20px)",
                            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "1.15rem",
                                color: "var(--color-text-secondary)",
                                lineHeight: 1.8,
                                marginBottom: 24,
                            }}
                        >
                            Born and raised in the organized chaos of Ho Chi Minh City, I’ve always found beauty in the buzz. To me, a city is just a complex system of people, coffee, and stories—much like the code I write today.
                        </p>
                        <p
                            style={{
                                fontSize: "1.15rem",
                                color: "var(--color-text-secondary)",
                                lineHeight: 1.8,
                                marginBottom: 24,
                            }}
                        >
                            As a Full-Stack Software Engineer with 4+ years of experience, I specialize in building
                            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}> scalable microservices</span> and
                            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}> intuitive front-ends</span>.
                        </p>
                        <p
                            style={{
                                fontSize: "1.15rem",
                                color: "var(--color-text-secondary)",
                                lineHeight: 1.8,
                                marginBottom: 48,
                            }}
                        >
                            At <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>nextech3d.ai</span> I
                            migrated a PHP monolith to a Java microservices architecture, achieving a 400% reduction in latency.
                            I have grown up living amongst all kinds of people around the world, making me open to all
                            kinds of experiences and enthusiastic about embracing anomalies.
                        </p>

                        {/* Stats grid */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: 24,
                            }}
                        >
                            {STATS.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className="glass"
                                    style={{
                                        padding: "24px",
                                        opacity: inView ? 1 : 0,
                                        transform: inView ? "translateY(0)" : "translateY(12px)",
                                        transition: `opacity 0.6s ease ${0.35 + i * 0.1}s, transform 0.6s ease ${0.35 + i * 0.1}s`,
                                    }}
                                >
                                    <p style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-accent)", lineHeight: 1 }}>
                                        {stat.value}
                                    </p>
                                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginTop: 8, fontWeight: 600 }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
        </section>
    );
}
