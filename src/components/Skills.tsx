"use client";

import { useEffect, useRef, useState } from "react";

interface SkillCategory {
    title: string;
    emoji: string;
    skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Languages",
        emoji: "💻",
        skills: ["JavaScript", "TypeScript", "Java", "Python", "PHP", "Go", "C", "C++"],
    },
    {
        title: "Frontend & Frameworks",
        emoji: "⚡",
        skills: ["React", "Next.js", "Three.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
    },
    {
        title: "Backend & APIs",
        emoji: "🔧",
        skills: ["Spring Boot", "REST APIs", "Node.js", "Django"],
    },
    {
        title: "Databases & Cloud",
        emoji: "☁️",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Azure", "Docker", "Kubernetes"],
    },
    {
        title: "Tools & Testing",
        emoji: "🛠️",
        skills: ["Git", "Postman", "Selenium", "Jest", "Jenkins", "CI/CD", "Linux", "Bash"],
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

function SkillCard({ category, index, inView }: { category: SkillCategory; index: number; inView: boolean }) {
    return (
        <div
            className="glass"
            style={{
                padding: "32px",
                borderRadius: 12,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s ease ${index * 0.1}s`,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 24,
                }}
            >
                <div
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 10,
                        background: "var(--color-accent-soft)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        flexShrink: 0,
                    }}
                >
                    {category.emoji}
                </div>
                <div>
                    <h3
                        style={{
                            fontWeight: 800,
                            fontSize: "1.15rem",
                            color: "var(--color-accent)",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {category.title}
                    </h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 600 }}>
                        {category.skills.length} tools
                    </p>
                </div>
            </div>

            {/* Skills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {category.skills.map((skill) => (
                    <span
                        key={skill}
                        className="skill-pill"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    const { ref, inView } = useInView();

    return (
        <section id="skills" style={{ padding: "120px 24px", position: "relative" }}>
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
                    <p className="section-label">04 — Skills</p>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: "var(--color-text-primary)",
                        }}
                    >
                        My toolkit
                    </h2>
                </div>

                {/* Bento grid */}
                <div
                    className="skills-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 24,
                    }}
                >
                    {SKILL_CATEGORIES.map((category, i) => (
                        <SkillCard key={category.title} category={category} index={i} inView={inView} />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
