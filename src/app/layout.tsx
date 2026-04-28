import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Brad Nguyen — Full-Stack Engineer",
    description:
        "Portfolio of Brad Nguyen, a Full-Stack Software Engineer specializing in Java, React, Next.js, and scalable microservices.",
    keywords: ["Brad Nguyen", "Full-Stack Engineer", "Software Engineer", "React", "Next.js", "Portfolio"],
    authors: [{ name: "Brad Nguyen" }],
    openGraph: {
        title: "Brad Nguyen — Full-Stack Engineer",
        description: "Portfolio of Brad Nguyen, a Full-Stack Software Engineer specializing in Java, React, Next.js, and scalable microservices.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>{children}</body>
        </html>
    );
}
