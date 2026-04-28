"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
    emoji: string;
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    color: string;
}

const PROJECTS: Project[] = [
    {
        emoji: "🎵",
        title: "Chorus Flow",
        description:
            "An immersive web app that identifies music playing around you in real-time and displays beautifully synchronized lyrics. Features AI-powered song recognition and smart progress tracking.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "AI"],
        liveUrl: "https://chorus-flow.vercel.app/",
        featured: true,
        color: "#134E4A",
    },
    {
        emoji: "👄",
        title: "SilenceVoice",
        description:
            "A visual speech recognition tool that reads lips in real-time and types whatever you silently mouth. Powered by computer vision and Google Gemini.",
        tags: ["Next.js", "Tailwind CSS", "Google Gemini", "Computer Vision"],
        liveUrl: "https://silence-voice.vercel.app/",
        featured: true,
        color: "#0F766E",
    },
    {
        emoji: "🐾",
        title: "Healtogochi",
        description:
            "An AI-powered virtual pet companion for chronically ill children. Kids nurture their pet 'Finny' through self-care actions like drinking water and taking medicine.",
        tags: ["Next.js", "Google Gemini", "Solana", "ElevenLabs", "MongoDB"],
        liveUrl: "https://healtochi.vercel.app/",
        featured: true,
        color: "#115E59",
    },
    {
        emoji: "🗣️",
        title: "Listen.me",
        description:
            "A specialized speech assistant for people with Anomic Aphasia (Anomia), designed to silently help users find the words they're looking for mid-conversation.",
        tags: ["React", "AI", "Speech Recognition", "Accessibility"],
        githubUrl: "https://github.com/Bardia-Masudy/nwHacks-listen.me",
        color: "#064E3B",
    },
    {
        emoji: "📈",
        title: "Stock Portfolio Tracker",
        description:
            "A desktop application to manage stock investments with OOP principles and a GUI. Supports buying/selling transactions and portfolio valuation.",
        tags: ["Java", "OOP", "GUI", "Swing", "Data Structures"],
        githubUrl: "https://github.com/thaibinhbr97/stock-portfolio-tracker",
        color: "#334155",
    },
    {
        emoji: "✏️",
        title: "Drawing App",
        description:
            "A web app where players draw objects and an ML neural network guesses what they drew. Built without libraries learning neural network basics.",
        tags: ["HTML", "CSS", "JavaScript", "Python", "Neural Network"],
        githubUrl: "https://github.com/thaibinhbr97/drawing-app",
        color: "#475569",
    },
];

function useInView(threshold = 0.08) {
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

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
    return (
        <div
            className="glass"
            style={{
                padding: "32px",
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                position: "relative",
                overflow: "hidden",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s ease ${index * 0.08}s`,
                gridColumn: project.featured ? "span 1" : undefined,
            }}
        >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "2.5rem", lineHeight: 1 }}>{project.emoji}</span>
                {project.featured && (
                    <span className="badge">Featured</span>
                )}
            </div>

            {/* Title */}
            <h3
                style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                }}
            >
                {project.title}
            </h3>

            {/* Description */}
            <p
                style={{
                    fontSize: "0.95rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    flex: 1,
                    fontWeight: 500
                }}
            >
                {project.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                    <span key={tag} className="code-tag" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            padding: "8px 18px",
                            fontSize: "0.85rem",
                            flex: 1,
                            justifyContent: "center"
                        }}
                    >
                        Live Demo
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{
                            padding: "8px 18px",
                            fontSize: "0.85rem",
                            flex: 1,
                            justifyContent: "center"
                        }}
                    >
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    const { ref, inView } = useInView();

    return (
        <section id="projects" style={{ padding: "120px 24px", position: "relative" }}>
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
                    <p className="section-label">04 — Projects</p>
                    <h2
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: "var(--color-text-primary)",
                        }}
                    >
                        Things I&apos;ve built
                    </h2>
                </div>

                {/* Bento grid */}
                <div
                    className="projects-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 24,
                    }}
                >
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} inView={inView} />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
