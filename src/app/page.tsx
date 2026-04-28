"use client";

import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <>
            {/* Ambient background orbs */}
            <div className="orb orb-blue" aria-hidden="true" />
            <div className="orb orb-purple" aria-hidden="true" />
            <div className="orb orb-cyan" aria-hidden="true" />

            {/* Noise texture overlay */}
            <div className="noise-overlay" aria-hidden="true" />

            {/* Main content */}
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Projects />
                <Skills />
            </main>
            <Footer />
        </>
    );
}
