import React, { useState, useEffect } from 'react';
import {
    ArrowUpRight, Mail, Github, Linkedin, Figma,
    Layers, Layout, Smartphone, Code, MoveRight,
    Dribbble, Palette, X, CheckCircle2
} from 'lucide-react';

// --- DATA ---
const PROJECTS = [
    {
        id: 1,
        title: "Kariera Group",
        category: "Digital Designer",
        type: "Professional",
        year: "2024-2026",
        role: "Digital Designer",
        description: "Spearheaded the modernization of legacy advertising assets and established data-validated creative guidelines.",
        challenge: "The company relied on legacy visual assets that were performing poorly in generic brand awareness campaigns. There was no standardized system for creating new ads, leading to inconsistent branding and unmeasured effectiveness.",
        solution: "I introduced a 'Data-First' creative workflow. Instead of guessing, I executed structured A/B testing across three pillars: Text Hierarchy, Composition, and Aesthetics. I also implemented the Celtra tool for Meta automation to scale asset production.",
        results: [
            "Redesigned all legacy brand creatives and expanded assets for audience segmentation.",
            "Reduced video ad production time by 40% using Heygen templates.",
            "Won Gold & Silver at Peak Awards 2025: Best Performance in Employment (AI-Driven Lead Gen) & Best Use of Data."
        ],
        tags: ["Figma", "Adobe CC", "Zoho Analytics", "Wordpress", "Heygen"],
        image: "/images/award_ceremony.jpg", // Ensure this file exists in public/images/
        color: "from-blue-600 to-cyan-400",

        // BENTO GRID DATA (The new part)
        bentoData: {
            hero: "/images/award_ceremony.jpg", // Using your uploaded image here
            metric: "+25%",
            metricLabel: "Increase in CTR",
            subMetric: "Gold Award 2025",
            variations: [
                // Replace these with your real /public/images/ paths when you have them
                "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
                "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&q=80",
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
            ]
        }
    },
    {
        id: 2,
        title: "AEGEAN",
        category: "Digital Designer",
        type: "Professional",
        year: "2019-2024",
        role: "Digital Designer",
        description: "Dark-mode analytics dashboard for a SaaS platform. Features real-time data graphing and modular widgets.",
        challenge: "AEGEAN needed a robust internal tool to visualize complex flight data. The existing spreadsheets were difficult to read and slowed down decision-making processes.",
        solution: "Designed a high-contrast dark mode interface that prioritized data legibility. Created a modular widget system allowing users to customize their view based on their specific role.",
        results: [
            "Improved data retrieval speed by 30%",
            "Adopted by 5 different internal departments",
            "Zero downtime during transition"
        ],
        tags: ["Email Marketing", "Social Media", "UI Design", "Branding"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        color: "from-purple-600 to-pink-400",
        bentoData: {
            hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
            metric: "30%",
            metricLabel: "Faster Workflow",
            subMetric: "Internal Tool",
            variations: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
                "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
                "https://images.unsplash.com/photo-1543286386-713df548e9cc?w=400&q=80"
            ]
        }
    },
    {
        id: 3,
        title: "Freelance",
        category: "Digital Designer",
        type: "Freelance",
        year: "2016-2019",
        role: "Graphic Designer",
        description: "Brand guidelines, typography system, and logo design for a modern audio streaming startup.",
        challenge: "The startup needed a visual identity that stood out in a crowded market dominated by giants like Spotify.",
        solution: "Developed a bold, typography-led identity system using neon accents and brutalist layouts.",
        results: [
            "Launched across 3 major streaming platforms",
            "Consistent branding across web and mobile",
            "Positive user feedback on visual identity"
        ],
        tags: ["Branding", "Identity", "Video Editing"],
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        color: "from-orange-500 to-red-500",
        bentoData: {
            hero: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000",
            metric: "3",
            metricLabel: "Platforms Launched",
            subMetric: "Brand Identity",
            variations: [
                "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=400&q=80",
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
                "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=400&q=80"
            ]
        }
    },
    {
        id: 4,
        title: "University of Edinburgh",
        category: "MSc Digital Media Design",
        type: "Academic",
        year: "2022-2025",
        role: "Student",
        description: "Minimalist fashion e-commerce storefront with a focus on high-quality imagery and seamless checkout flow.",
        challenge: "To design an immersive e-commerce experience that balanced high-fidelity 3D assets with web performance.",
        solution: "Utilized WebGL for 3D product previews and a headless CMS structure.",
        results: [
            "Graded Distinction (A)",
            "Integrated 3D view with <2s load time",
            "Responsive across all devices"
        ],
        tags: ["3D Design", "Web Design", "Game Design", "Media Ethics"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        color: "from-green-500 to-emerald-400",
        bentoData: {
            hero: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
            metric: "A+",
            metricLabel: "MSc Distinction",
            subMetric: "Academic",
            variations: [
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
                "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80"
            ]
        }
    }
];

const SERVICES = [
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Product Design",
        desc: "End-to-end product design from initial research and wireframing to high-fidelity prototyping."
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Frontend Dev",
        desc: "Bridging the gap between design and code with React, Tailwind CSS, and interaction design."
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Design Systems",
        desc: "Creating scalable design languages and component libraries for consistent user experiences."
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Mobile Apps",
        desc: "Native-feeling iOS and Android app designs that follow the latest human interface guidelines."
    }
];

// --- COMPONENTS ---

const Nav = () => (
    <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-bold text-xl tracking-tighter">ALEXANDROS_PREPIS.DESIGN</div>
        <div className="flex gap-6 text-sm font-medium">
            <a href="#work" className="hover:opacity-50 transition-opacity">WORK</a>
            <a href="#about" className="hover:opacity-50 transition-opacity">ABOUT</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">CONTACT</a>
        </div>
    </nav>
);

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 bg-black text-white relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-700"></div>

            <div className="container mx-auto relative z-10">
                <div className="max-w