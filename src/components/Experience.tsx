"use client";

import { useEffect, useRef, useState } from "react";

interface Job {
    role: string;
    company: string;
    location: string;
    period: string;
    bullets: string[];
    tags: string[];
}

const JOBS: Job[] = [
    {
        role: "Software Engineer",
        company: "MapD / nextech3d.ai",
        location: "Toronto, ON",
        period: "2022 – 2024",
        bullets: [
            "Migrated PHP backend to a scalable microservices architecture utilizing Java, Spring Boot, PostgreSQL, and Docker, reducing client-server latency by 400% relative to legacy REST API.",
            "Optimized and deployed PostgreSQL databases on Azure, implementing replication and indexing strategies that scaled token-based reward distribution to thousands of event attendees with high performance and reliability.",
            "Secured API endpoints with JWT-based authentication and Spring Security, integrating facial recognition and sign-in methods to ensure data security and privacy.",
            "Developed RESTful APIs using Java and Hibernate, facilitating push notification management, resulting in a 20% increase in user engagement.",
            "Built administrative tools using React, allowing the seamless management and deployment of notification campaigns without developer intervention.",
            "Contributed to Technical Design Documents (TDDs) focusing on system scalability, robustness, and compliance with industry standards.",
        ],
        tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "React", "PHP", "CI/CD"],
    },
    {
        role: "Web Developer",
        company: "ARitize3D / NexTech AR Solutions",
        location: "Toronto, ON",
        period: "2021",
        bullets: [
            "Designed, developed, and maintained a full-stack web application using React, Django, and MySQL, enabling 10,000+ monthly active users to generate 3D models with computational geometry and Generative AI.",
            "Wrote automation scripts and optimized web scraping processes for 30,000+ SKUs, accelerating production speed by 140% and reducing delivery time by 40%.",
            "Developed and optimized Web AR front-ends using React and Three.js across desktop and mobile platforms, significantly enhancing UI/UX and cross-platform compatibility.",
            "Managed projects for enterprise clients, facilitating the integration of 3D & AR products into E-commerce websites, directly increasing model production orders and brand recognition.",
            "Automated product usability processes by creating Zendesk documentation, reducing internal engineering workload and improving customer satisfaction by 20% based on internal surveys.",
        ],
        tags: ["React", "Django", "MySQL", "Python", "JavaScript", "Web AR", "3D Modeling", "Selenium"],
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

export default function Experience() {
    const { ref, inView } = useInView();
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <section id="experience" style={{ padding: "120px 24px", position: "relative" }}>
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
                    <p className="section-label">02 — Experience</p>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: "var(--color-text-primary)",
                        }}
                    >
                        Work history
                    </h2>
                </div>

                {/* Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                    {JOBS.map((job, i) => (
                        <div
                            key={i}
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(24px)",
                                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                            }}
                        >

                            {/* Card */}
                            <div
                                className="glass"
                                style={{
                                    padding: "32px",
                                    borderRadius: 12,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                                onClick={() => setExpanded(expanded === i ? null : i)}
                            >
                                {/* Header */}
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
                                            {job.role}
                                        </h3>
                                        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                                            <span style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "1rem" }}>
                                                {job.company}
                                            </span>
                                            <span style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", fontWeight: 500 }}>
                                                📍 {job.location}
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                        <span className="badge" style={{ padding: "6px 14px", fontSize: "0.8rem" }}>
                                            {job.period}
                                        </span>
                                        <span
                                            style={{
                                                color: "var(--color-accent)",
                                                fontSize: "1.25rem",
                                                transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)",
                                                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                                display: "inline-block",
                                            }}
                                        >
                                            ↓
                                        </span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 10,
                                        flexWrap: "wrap",
                                        marginTop: 24,
                                    }}
                                >
                                    {job.tags.map((tag) => (
                                        <span key={tag} className="code-tag" style={{ fontSize: "0.8rem", padding: "4px 10px" }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Expandable bullets */}
                                {expanded === i && (
                                    <ul
                                        style={{
                                            marginTop: 32,
                                            paddingLeft: 0,
                                            listStyle: "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 16,
                                        }}
                                    >
                                        {job.bullets.map((b, j) => (
                                            <li
                                                key={j}
                                                style={{
                                                    display: "flex",
                                                    gap: 16,
                                                    fontSize: "1rem",
                                                    color: "var(--color-text-secondary)",
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: "var(--color-accent)",
                                                        flexShrink: 0,
                                                        marginTop: 6,
                                                        fontSize: "0.6rem",
                                                    }}
                                                >
                                                    ●
                                                </span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .experience-card {
            padding: 24px !important;
          }
        }
      `}</style>
        </section>
    );
}
