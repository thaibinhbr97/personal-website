"use client";

import { useEffect, useRef, useState } from "react";

interface Degree {
    school: string;
    degree: string;
    location: string;
    period: string;
}

const DEGREES: Degree[] = [
    {
        school: "The University of British Columbia",
        degree: "Bachelor of Computer Science, Minor in Statistics",
        location: "Vancouver, BC",
        period: "2025 – Present",
    },
    {
        school: "University of Waterloo",
        degree: "Bachelor of Science in Mathematical Physics, Honors",
        location: "Waterloo, ON",
        period: "2016 – 2021",
    },
];

function useInView(threshold = 0.1) {
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

export default function Education() {
    const { ref, inView } = useInView();

    return (
        <section id="education" style={{ padding: "120px 24px", position: "relative" }}>
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
                    <p className="section-label">03 — Education</p>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: "var(--color-text-primary)",
                        }}
                    >
                        Academic background
                    </h2>
                </div>

                {/* Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {DEGREES.map((deg, i) => (
                        <div
                            key={i}
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(24px)",
                                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                            }}
                        >
                            <div
                                className="glass"
                                style={{
                                    padding: "32px",
                                    borderRadius: 12,
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        flexWrap: "wrap",
                                        gap: 16,
                                    }}
                                >
                                    <div>
                                        <h3
                                            style={{
                                                fontSize: "1.35rem",
                                                fontWeight: 800,
                                                color: "var(--color-text-primary)",
                                                marginBottom: 6,
                                            }}
                                        >
                                            {deg.school}
                                        </h3>
                                        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                                            <span style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "1rem" }}>
                                                {deg.degree}
                                            </span>
                                            <span style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", fontWeight: 500 }}>
                                                📍 {deg.location}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="badge" style={{ padding: "6px 14px", fontSize: "0.8rem" }}>
                                        {deg.period}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
