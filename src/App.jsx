import React, { useState, useEffect } from 'react';
import {
    ArrowUpRight, Mail, Github, Linkedin, Figma,
    Layers, Layout, Smartphone, Code, MoveRight,
    Dribbble, Palette, X, CheckCircle2, Image as ImageIcon, Play
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
            "Part of the success of Google Case study and best practice for 2025, +155% conversion rates for jobseekers, -49% cost per application (CPA).",
            "Our team won Gold & Silver at Peak Awards 2025: Best Performance in Employment (AI-Driven Lead Gen) & Best Use of Data."
        ],
        tags: ["Figma", "Adobe CC", "Zoho Analytics", "Wordpress", "Heygen"],
        image: "/images/award_ceremony.jpg",
        color: "from-blue-600 to-cyan-400",

        // 1. IMAGE GALLERY (BENTO)
        bentoData: {
            hero: "/images/case_study.jpg",
            metric: "+155%",
            metricLabel: "Increase in Conversions",
            subMetric: "Google Case Study 2025",
            variations: [
                "/images/AI_Sqaure_noAI.jpg",
                "/images/HKT25.jpg",
                "/images/dashboard.jpg",
                "/images/dashboard2.jpg",
                "/images/dashboard3.jpg",
                "/images/generic1.jpg",
                "/images/generic2.jpg",
                "/images/generic3.jpg",
                "/images/skg1.jpg",
                "/images/skg2.jpg",
                "/images/skg3.jpg",
                "/images/square.png",
                "/images/square2.png",
                "/images/square3.png",
                "/images/square4.png",
            ]
        },

        // 2. VIDEO GALLERY (SPECIFIC TO THIS PROJECT)
        videos: [
            {
                id: "v1",
                title: "Heygen launch",
                category: "Social Media",
                src: "/videos/Alex__Update your profile__vertical.mp4", // Make sure file exists in public/videos/
                className: "md:col-span-2 md:row-span-2" // Big Box
            },
            {
                id: "v2",
                title: "Animated creative",
                category: "Brand Awareness",
                src: "/videos/1920x1080_idea1.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "v3",
                title: "Heygen use",
                category: "Instagram,TikTok",
                src: "/videos/Alex__For you page__Vertical.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "v4",
                title: "Kinetic typography",
                category: "Instagram, TikTok",
                src: "/videos/1080x1080_video_generic.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "v5",
                title: "Kinetic typography",
                category: "Instagram, TikTok, Meta",
                src: "/videos/1080x1080_video_premium.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "v6",
                title: "Kinetic typography",
                category: "Instagram, TikTok, Meta",
                src: "/videos/1080x1080_video_standard.mp4",
                className: "md:col-span-1 md:row-span-1"
            },

        ]
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
        image: "/images/HEADER_A3.jpg",
        color: "from-purple-600 to-pink-400",
        bentoData: {
            hero: "/images/template_NL_3.jpg",
            metric: "+15",
            metricLabel: "product launches",
            subMetric: "Internal Tool",
            variations: [
                "/images/Story_ATH_nl.jpg",
                "/images/Story_SKG_nl.jpg",
                "/images/NL_second_subject_wifi_280122.jpg",
                "/images/NL_second_subject_grid_wifi_DE_280122.jpg",
                "/images/NL_OA_GR.png",
                "/images/NL_gr.jpg",
                "/images/NL_b2b.jpg",
                "/images/NL_640x500_EN.jpg",
                "/images/NL_600x500_GR.jpg",
                "/images/NL_600x500_EN.jpg",
                "/images/NL_600x400_GR.jpg",
                "/images/NL_600x150_EN.jpg",
                "/images/NL_600x150_GR.jpg",
                "/images/NL.jpg",
                "/images/MB_activation_NL_2_EN_A3.jpg",
                "/images/OPA.gif",
                "/images/OA_Logo.gif",
                "/images/where_to_next_res.gif",
                "/images/OA_Plane_test.gif",
                "/images/kalimera2.gif",
                "/images/kalinyhta.gif",
                "/images/I_love_Greece.gif",
                "/images/Greek_Moments.gif",
                "/images/Discovering_Gree.gif",

            ]
        },
        videos: [
            {
                id: "a1",
                title: "Dashboard Interactions",
                category: "UX/UI",
                src: "/videos/all_dom_EN.mp4", // Replace with your file
                className: "md:col-span-2 md:row-span-2" // Big Box
            },
            {
                id: "a2",
                title: "Live Data Graph",
                category: "Data Viz",
                src: "/videos/all_int_GR.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a3",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/DXB_Square.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a4",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/GR_Destinations_DE_audience_Horizontal.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a5",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/INT_Destinations_GR_audience.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a6",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/main_Story_A3_EN.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a7",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/mainYT_OA.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a8",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/NewYear_A3.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a9",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/NewYear_OA.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a10",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/Tik_Tok.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a11",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/tik_tok_family_promo.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a12",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/TikTok_Gen.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a13",
                title: "Mobile Responsiveness",
                category: "Mobile View",
                src: "/videos/Video_Tik_tok_250822.mp4",
                className: "md:col-span-1 md:row-span-1"
            },


        ] // No videos for this one yet, so it won't show the section
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

// --- GALLERY DATA ---
const GALLERY_ITEMS = [
    {
        id: 1,
        title: "3D Motion Exploration",
        description: "Blender Cycles Render",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        className: "md:col-span-2 md:row-span-2"
    },
    {
        id: 2,
        title: "Typography Layout",
        description: "Editorial Design System",
        image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?auto=format&fit=crop&q=80&w=400",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        title: "Neon Gradients",
        description: "Mesh Gradient Experiments",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=400",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 4,
        title: "App Interaction",
        description: "Figma Micro-interactions",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        className: "md:col-span-2 md:row-span-1"
    },
    {
        id: 5,
        title: "Vinyl Cover Art",
        description: "Freelance Commission",
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&q=80&w=400",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 6,
        title: "Poster Series",
        description: "Swiss Style Print",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=400",
        className: "md:col-span-1 md:row-span-1"
    },
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
            <a href="#playground" className="hover:opacity-50 transition-opacity">PLAYGROUND</a>
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
                <div className="max-w-4xl">
                    <p className="text-blue-400 font-mono mb-4 tracking-wider text-sm animate-fade-in">
                        HELLO, I'M ALEX
                    </p>
                    <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
                        DIGITAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              EXPERIENCES
            </span> <br />
                        THAT MATTER.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                        I craft user-centric interfaces and digital products for forward-thinking brands.
                        Blending aesthetics with functionality to solve complex problems.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#work" className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all">
                            View Projects
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                        </a>
                        <a href="#contact" className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full border-t border-white/10 py-6 overflow-hidden bg-black/50 backdrop-blur-sm">
                <div className="flex gap-12 animate-scroll whitespace-nowrap text-gray-500 font-mono text-sm uppercase tracking-widest">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span>UI Design</span>
                            <span>•</span>
                            <span>UX Research</span>
                            <span>•</span>
                            <span>Prototyping</span>
                            <span>•</span>
                            <span>React</span>
                            <span>•</span>
                            <span>Design Systems</span>
                            <span>•</span>
                            <span>Motion Graphics</span>
                            <span>•</span>
                            <span>Figma</span>
                            <span>•</span>
                            <span>Strategy</span>
                            <span>•</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Work = ({ onProjectClick }) => {
    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "Professional", "Freelance", "Academic"];

    const filteredProjects = activeTab === "All"
        ? PROJECTS
        : PROJECTS.filter(project => project.type === activeTab);

    return (
        <section id="work" className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
                        <p className="text-gray-400 max-w-md">A collection of projects exploring the intersection of design and technology.</p>
                    </div>

                    <div className="flex gap-2 mt-6 md:mt-0 bg-zinc-900 p-1 rounded-full border border-white/10">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeTab === tab
                                        ? "bg-white text-black shadow-lg"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => onProjectClick(project)}
                            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 animate-fade-in cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-sm text-gray-400 font-mono mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Playground = () => {
    return (
        <section id="playground" className="py-24 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Playground</h2>
                    <p className="text-gray-400 max-w-md">Experiments, 3D renders, and miscellaneous creative explorations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {GALLERY_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className={`relative rounded-2xl overflow-hidden group border border-white/10 bg-zinc-900 ${item.className}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    return (
        <section className="py-24 bg-zinc-950 text-white border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((service, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        More than just <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">pixels on a screen.</span>
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I believe that great design is invisible. It's about removing friction and creating pathways that users intuitively follow.
                        </p>
                        <p>
                            With a background in both graphic design and frontend development, I speak the language of both teams. I don't just hand off static mockups; I consider the responsiveness, interaction states, and feasibility of every element.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-8">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">5+</div>
                            <div className="text-sm text-gray-500 font-mono">YEARS</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">50+</div>
                            <div className="text-sm text-gray-500 font-mono">PROJECTS</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-sm text-gray-500 font-mono">COMMITMENT</div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-900 p-6 rounded-2xl h-64 flex flex-col justify-between border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                            <Figma className="w-8 h-8 text-pink-500" />
                            <div>
                                <div className="font-bold text-xl">Figma</div>
                                <div className="text-sm text-gray-500">Mastery</div>
                            </div>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-2xl h-64 flex flex-col justify-between border border-white/5 mt-12 hover:-translate-y-2 transition-transform duration-300">
                            <Code className="w-8 h-8 text-blue-500" />
                            <div>
                                <div className="font-bold text-xl">React</div>
                                <div className="text-sm text-gray-500">Development</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to create?</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    I'm currently available for freelance projects and open to full-time opportunities.
                </p>

                <a
                    href="mailto:prepis92@hotmail.com"
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
                >
                    <Mail className="w-5 h-5" />
                    prepis92@hotmail.com
                </a>

                <div className="mt-16 flex justify-center gap-8">
                    <a href="#" className="p-4 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Dribbble className="w-6 h-6 text-pink-500" />
                    </a>
                    <a href="https://www.linkedin.com/in/alexandros-prepis-792796163" className="p-4 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Linkedin className="w-6 h-6 text-blue-500" />
                    </a>
                    <a href="https://github.com/AlexandrosPrps92" className="p-4 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Github className="w-6 h-6 text-white" />
                    </a>
                </div>
            </div>
        </section>
    );
};

// --- BENTO GRID (IMAGES) ---
const BentoGrid = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="flex flex-col gap-4 mb-12">

            {/* TOP SECTION: Hero & Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[400px]">

                {/* Hero Box */}
                <div
                    onClick={() => setSelectedImage(data.hero)}
                    className="md:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 group cursor-zoom-in"
                >
                    <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-white pointer-events-none">
                        HIGHLIGHT
                    </div>
                    <img
                        src={data.hero}
                        alt="Final Design"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                </div>

                {/* Metric Box */}
                <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col justify-center items-center border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] group-hover:bg-blue-500/30 transition-all"></div>
                    <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tighter text-center">
                        {data.metric}
                    </h3>
                    <p className="text-gray-400 mt-2 font-medium text-center text-sm">{data.metricLabel}</p>
                    <div className="mt-6 px-4 py-2 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-xs font-bold uppercase tracking-wider text-center">
                        {data.subMetric}
                    </div>
                </div>
            </div>

            {/* BOTTOM SECTION: Gallery Grid */}
            <div>
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4 mt-4">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.variations.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedImage(img)}
                            // Interlocking logic: (2, 1, 1, 2) pattern
                            className={`relative rounded-2xl overflow-hidden border border-white/10 group cursor-zoom-in h-64 ${
                                (i % 4 === 0 || i % 4 === 3) ? 'md:col-span-2' : 'md:col-span-1'
                            }`}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                            <img
                                src={img}
                                alt={`Gallery item ${i}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX OVERLAY */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full Screen"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

// --- NEW COMPONENT: PROJECT VIDEO GRID (LIVES INSIDE MODAL) ---
const ProjectVideoGrid = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div className="mt-16 border-t border-white/10 pt-12">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Motion & Video Assets</h3>

            {/* GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        onClick={() => setSelectedVideo(video)}
                        className={`relative rounded-2xl overflow-hidden group border border-white/10 bg-zinc-900 cursor-pointer ${video.className}`}
                    >
                        {/* The Preview Video (Muted, Loop) */}
                        <video
                            src={video.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                <Play className="w-6 h-6 text-white fill-current" />
                            </div>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold">{video.title}</h3>
                            <p className="text-sm text-gray-400 font-mono">{video.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* FULLSCREEN VIDEO MODAL */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[250] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedVideo(null)}
                >
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
                        <X className="w-8 h-8" />
                    </button>

                    <div className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 relative" onClick={e => e.stopPropagation()}>
                        <video
                            src={selectedVideo.src}
                            controls
                            autoPlay
                            className="w-full h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

// 2. PROJECT MODAL COMPONENT (UPDATED TO INCLUDE VIDEOS)
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-zinc-950 animate-fade-in">
            {/* Sticky Close Button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-50 p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-lg"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-20`}></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-zinc-950 to-transparent">
                    <div className="container mx-auto">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono border border-white/30 rounded-full text-white/80">
                            {project.category} • {project.year}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 py-16 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <h3 className="text-gray-400 font-mono text-sm mb-2">MY ROLE</h3>
                            <p className="text-xl font-medium">{project.role}</p>
                        </div>
                        <div>
                            <h3 className="text-gray-400 font-mono text-sm mb-2">TOOLS & TECH</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" /> Key Results
                            </h3>
                            <ul className="space-y-3">
                                {project.results?.map((result, i) => (
                                    <li key={i} className="text-sm text-gray-300 leading-relaxed border-l-2 border-white/10 pl-4">
                                        {result}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Story */}
                    <div className="lg:col-span-8 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">The Challenge</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.challenge || project.description}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">The Solution</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.solution}
                            </p>
                        </section>

                        {/* --- BENTO GRID SECTION (IMAGES) --- */}
                        <div className="space-y-6 mt-12">
                            {project.bentoData && <BentoGrid data={project.bentoData} />}
                        </div>

                        {/* --- VIDEO GALLERY SECTION (VIDEOS) --- */}
                        {/* Only renders if the project has videos array */}
                        {project.videos && <ProjectVideoGrid videos={project.videos} />}

                    </div>
                </div>
            </div>
        </div>
    );
};

// 3. MAIN APP COMPONENT
export default function App() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 20s linear infinite;
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-out;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans">
            <Nav />
            <Hero />
            <Work onProjectClick={setSelectedProject} />
            <Playground />

            {/* Note: Global Video Gallery removed as requested */}

            <Services />
            <About />
            <Contact />

            <footer className="py-8 bg-black text-center text-gray-600 text-sm border-t border-zinc-900">
                © {new Date().getFullYear()} Alexandros Prepis. Crafted with React & Tailwind.
            </footer>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}