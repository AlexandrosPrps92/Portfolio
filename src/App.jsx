import React, { useState, useEffect } from 'react';
import {
    ArrowUpRight, Mail, Github, Linkedin, Figma,
    Layers, Layout, Smartphone, Code, MoveRight,
    Palette, X, CheckCircle2, Image as ImageIcon, Play,
    ChevronLeft, ChevronRight, Instagram, Menu // <--- Added Instagram & Menu
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
        videos: [
            {
                id: "v1",
                title: "Heygen launch",
                category: "Social Media",
                src: "/videos/Alex__Update your profile__vertical.mp4",
                className: "md:col-span-2 md:row-span-2"
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
            "Updated most of AEGEAN'S digital and some physical touchpoints with the new rebranded logo and tagline",
            "Designed the first animated stickers for social media use",
            "Multiple Company profit records in sales via email campaigns"
        ],
        tags: ["Email Marketing", "Social Media", "UI Design", "Branding"],
        image: "/images/HEADER_A3.jpg",
        color: "from-purple-600 to-pink-400",
        bentoData: {
            hero: "/images/template_NL_3.jpg",
            metric: "Rebrand",
            metricLabel: "Updated Digital Touchpoints",
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
                "/images/Οpa.gif",
                "/images/ΟΑ_Logo.gif",
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
                title: "Performance Ads",
                category: "Social Media",
                src: "/videos/all_dom_EN.mp4",
                className: "md:col-span-2 md:row-span-2"
            },
            {
                id: "a2",
                title: "International Ads",
                category: "Social Media",
                src: "/videos/all_int_GR.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a3",
                title: "DXB Square",
                category: "Social Media",
                src: "/videos/DXB_Square.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a4",
                title: "GR Destinations",
                category: "Social Media",
                src: "/videos/GR_Destinations_DE_audience_Horizontal.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a5",
                title: "INT Destinations",
                category: "Social Media",
                src: "/videos/INT_Destinations_GR_audience.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a6",
                title: "Main Story",
                category: "Social Media",
                src: "/videos/main_Story_A3_EN.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a7",
                title: "Mobile Responsiveness",
                category: "Social Media",
                src: "/videos/mainYT_OA.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a8",
                title: "New Year A3",
                category: "Social Media",
                src: "/videos/NewYear_A3.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a9",
                title: "New Year OA",
                category: "Social Media",
                src: "/videos/NewYear_OA.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a10",
                title: "TikTok Offer",
                category: "Social Media",
                src: "/videos/Tik_Tok.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a11",
                title: "Family Promo",
                category: "Social Media",
                src: "/videos/tik_tok_family_promo.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a12",
                title: "Genairation",
                category: "Social Media",
                src: "/videos/TikTok_Gen.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a13",
                title: "TikTok Video 1",
                category: "Social Media",
                src: "/videos/Video_Tik_tok_250822.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a14",
                title: "TikTok Video 2",
                category: "Social Media",
                src: "/videos/Tik_Tok_080922.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
        ]
    },
    {
        id: 3,
        title: "University of Edinburgh",
        category: "MSc Digital Media Design",
        type: "Academic",
        year: "2022-2025",
        role: "Student",
        description: "A comprehensive exploration of digital media, ranging from 3D interactive environments to web development and game design ethics.",
        challenge: "To master a diverse set of digital tools while maintaining critical academic rigor across multiple disciplines.",
        solution: "Delivered distinct high-fidelity projects for each module, utilizing WebGL for 3D, React for web, and Unreal Engine for game design.",
        results: [
            "Graded Distinction (A)",
            "Integrated 3D view with <2s load time",
            "Responsive across all devices"
        ],
        tags: ["3D Design", "Web Design", "Game Design", "Media Ethics"],
        image: "/images/edin_home.jpg",
        color: "from-green-500 to-emerald-400",
        courses: [
            {
                id: "c1",
                title: "Final Project: Podcast Remediation Game",
                description: "Remediation of a humorous motorsport podcast into a racing game.",
                bentoData: {
                    hero: "/images/final1.jpg",
                    metric: "B",
                    metricLabel: "Grade",
                    subMetric: "Maya & Unity",
                    variations: [
                        "/images/final2.jpg",
                        "/images/final3.jpg",
                        "/images/final4.jpg",
                        "/images/final5.jpg",
                        "/images/final6.jpg",
                        "/images/final7.jpg",
                        "/images/final8.jpg",
                        "/images/final9.jpg",
                        "/images/final10.jpg",
                        "/images/final11.jpg",
                        "/images/final12.jpg",
                        "/images/final13.jpg"
                    ]
                },
                videos: [
                    {
                        id: "v_int1",
                        title: "Game Walkthrough",
                        category: "Unity Gameplay",
                        src: "/videos/final_game.mp4",
                        className: "md:col-span-2 md:row-span-2"
                    }
                ]
            },
            {
                id: "c2",
                title: "Course 1: Design for Interactive Media",
                description: "Building responsive, data-driven web applications.",
                bentoData: {
                    hero: "/images/in_game.jpg",
                    metric: "B",
                    metricLabel: "Grade",
                    subMetric: "Interaction Design",
                    variations: [
                        "/images/last_render.jpg",
                        "/images/2last_render.jpg",
                        "/images/3last_render.jpg",
                        "/images/first_render.jpg",
                        "/images/2first_render.jpg",
                        "/images/3first_render.jpg",
                        "/images/4first_render.jpg",
                        "/images/5first_render.jpg",
                        "/images/6first_render.jpg",
                        "/images/7first_render.jpg",
                        "/images/8first_render.jpg",
                        "/images/9first_render.jpg",
                        "/images/10first_render.jpg"
                    ]
                },
                videos: [
                    {
                        id: "v_int1_demo",
                        title: "Build Walkthrough",
                        category: "Process",
                        src: "/videos/design_for_interactive_media_before.mp4",
                        className: "md:col-span-2 md:row-span-2"
                    },
                    {
                        id: "v_int2_demo",
                        title: "Interaction Walkthrough",
                        category: "Unity",
                        src: "/videos/S2464169_D4IM_SUB2.mp4",
                        className: "md:col-span-2 md:row-span-2"
                    }
                ]
            },
            {
                id: "c3",
                title: "Course 2: Game Design Studio",
                description: "Creating immersive spaces using Blender and Unity.",
                bentoData: {
                    hero: "/images/game_design.jpg",
                    metric: "B",
                    metricLabel: "Grade",
                    subMetric: "3D Design",
                    variations: [
                        "/images/game2.jpg",
                        "/images/game3.jpg"
                    ]
                },
                videos: [
                    {
                        id: "v_3d1",
                        title: "Game Walkthrough",
                        category: "Unity Engine",
                        src: "/videos/game_design_studio.mp4",
                        className: "md:col-span-2 md:row-span-2"
                    }
                ]
            },
            {
                id: "c4",
                title: "Course 3: Digital Playgrounds",
                description: "Narrative structure and level design mechanics.",
                bentoData: {
                    hero: "/images/play_hero.jpg",
                    metric: "B-",
                    metricLabel: "Grade",
                    subMetric: "Game Dev",
                    variations: [
                        "/images/play2.jpg",
                        "/images/play3.jpg",
                        "/images/play4.jpg"
                    ]
                },
                videos: [
                    {
                        id: "v_game1",
                        title: "Gameplay Demo",
                        category: "Unity",
                        src: "/videos/Digital_playgrounds.mp4",
                        className: "md:col-span-2 md:row-span-1"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
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
        image: "/images/FREE_HOME.jpg",
        color: "from-orange-500 to-red-500",
        courses: [
            {
                id: "f_khora",
                title: "Client: Khora",
                description: "Brand identity and logo design for Khora.",
                bentoData: {
                    hero: "/images/khora.jpg",
                    metric: "Brand",
                    metricLabel: "Identity System",
                    subMetric: "Logo Design",
                    variations: [
                        "/images/finalizing.jpg",
                        "/images/khora_blue.png",
                        "/images/khora_col.png",
                        "/images/khora_idea.png"
                    ]
                },
            },
            {
                id: "f_aya",
                title: "Client: Aya Sofia",
                description: "Visual identity and social media assets.",
                bentoData: {
                    hero: "/images/AYA_SOFIA.jpg",
                    metric: "Social",
                    metricLabel: "Visual Assets",
                    subMetric: "Graphic Design",
                    variations: [
                        "/images/preview_aya_sofia-01.jpg",
                        "/images/preview_aya_sofia_color-01.jpg",
                    ]
                },
            },
            {
                id: "f_GST",
                title: "Client: GST",
                description: "Visual identity and social media assets.",
                bentoData: {
                    hero:  "/images/GST_social.jpg",
                    metric: "Social",
                    metricLabel: "Visual Assets",
                    subMetric: "Graphic Design",
                    variations: [
                        "/images/GST.jpg",
                        "/images/GST_social.jpg",
                    ]
                },
            },
            {
                id: "f_Chicken",
                title: "Client: Chicken bar and More",
                description: "Social media assets.",
                bentoData: {
                    hero:  "/images/CHICKEN.jpg",
                    metric: "Social",
                    metricLabel: "Visual Assets",
                    subMetric: "Graphic Design",
                    variations: [
                        "/images/CHICKEN.jpg",

                    ]
                },
            },
            {
                id: "f_music",
                title: "Music & Cover Art",
                description: "Album covers and promotional video content for music artists.",
                bentoData: {
                    hero: "/images/neegold3000.jpg",
                    metric: "Cover Art",
                    metricLabel: "Album Design",
                    subMetric: "Music Industry",
                    variations: [

                        "/images/spotify3000.jpg",
                        "/images/music1.jpg",
                        "/images/music2.jpg",
                        "/images/music3.jpg",
                        "/images/music4.jpg",
                        "/images/music5.jpg",
                        "/images/music6.jpg",
                    ]
                },

            }
        ]
    },
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

// --- UPDATED NAV WITH HAMBURGER MENU ---
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center text-white mix-blend-difference">
                <div className="font-bold text-xl tracking-tighter z-50">ALEXANDROS_PREPIS.DESIGN</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#work" className="hover:opacity-50 transition-opacity">WORK</a>
                    <a href="#playground" className="hover:opacity-50 transition-opacity">PLAYGROUND</a>
                    <a href="#contact" className="hover:opacity-50 transition-opacity">CONTACT</a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Full Screen Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-8 text-2xl font-bold text-white animate-fade-in">
                    <a href="#work" onClick={() => setIsMenuOpen(false)}>WORK</a>
                    <a href="#playground" onClick={() => setIsMenuOpen(false)}>PLAYGROUND</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
                </div>
            )}
        </>
    );
};

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

// --- UPDATED WORK COMPONENT WITH SCROLLABLE FILTERS ---
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

                    {/* Scrollable Filter Container */}
                    <div className="flex gap-2 mt-6 md:mt-0 bg-zinc-900 p-1 rounded-full border border-white/10 overflow-x-auto w-full md:w-auto scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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

// --- UPDATED CONTACT (INSTAGRAM ICON) ---
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
                    {/* INSTAGRAM ICON SWAP */}
                    <a href="https://www.instagram.com/alexandros_prepis" className="p-4 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Instagram className="w-6 h-6 text-pink-500" />
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
    const [currentIndex, setCurrentIndex] = useState(null);

    // Combine hero and variations into one list for gallery navigation
    const allImages = [data.hero, ...data.variations];

    const openLightbox = (index) => {
        setCurrentIndex(index);
    };

    const closeLightbox = () => setCurrentIndex(null);

    const showNext = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    const showPrev = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    // Keyboard navigation
    useEffect(() => {
        if (currentIndex === null) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    return (
        <div className="flex flex-col gap-4 mb-12">

            {/* TOP SECTION: Hero & Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[400px]">

                {/* Hero Box */}
                <div
                    onClick={() => openLightbox(0)}
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
                            onClick={() => openLightbox(i + 1)} // +1 because index 0 is hero
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
            {currentIndex !== null && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[210]">
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={showPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-[210] hidden md:block"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={showNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-[210] hidden md:block"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Image */}
                    <img
                        src={allImages[currentIndex]}
                        alt="Full Screen"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Mobile Tip */}
                    <div className="absolute bottom-4 left-0 w-full text-center text-white/40 text-xs md:hidden">
                        Swipe or tap sides to navigate
                    </div>
                </div>
            )}
        </div>
    );
};

// --- PROJECT VIDEO GRID (LIVES INSIDE MODAL) ---
const ProjectVideoGrid = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div className="mt-16 border-t border-white/10 pt-12">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Motion & Video Assets</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        onClick={() => setSelectedVideo(video)}
                        className={`relative rounded-2xl overflow-hidden group border border-white/10 bg-zinc-900 cursor-pointer ${video.className}`}
                    >
                        <video
                            src={video.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                <Play className="w-6 h-6 text-white fill-current" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold">{video.title}</h3>
                            <p className="text-sm text-gray-400 font-mono">{video.category}</p>
                        </div>
                    </div>
                ))}
            </div>

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

// 2. PROJECT MODAL COMPONENT (UPDATED FOR COURSES)
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-zinc-950 animate-fade-in">
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

                        {/* --- DYNAMIC RENDER LOGIC --- */}

                        {/* SCENARIO A: Project has Multiple Courses (University or Freelance) */}
                        {project.courses ? (
                            project.courses.map((course) => (
                                <div key={course.id} className="mt-24 pt-12 border-t border-white/10">
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-white mb-2">{course.title}</h2>
                                        <p className="text-gray-400">{course.description}</p>
                                    </div>
                                    {/* Render Bento Grid for this Course */}
                                    {course.bentoData && <BentoGrid data={course.bentoData} />}
                                    {/* Render Video Grid for this Course */}
                                    {course.videos && <ProjectVideoGrid videos={course.videos} />}
                                </div>
                            ))
                        ) : (
                            /* SCENARIO B: Standard Project (Kariera, Aegean) */
                            <>
                                <div className="space-y-6 mt-12">
                                    {project.bentoData && <BentoGrid data={project.bentoData} />}
                                </div>
                                {project.videos && <ProjectVideoGrid videos={project.videos} />}
                            </>
                        )}

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
      /* Hide scrollbar utility */
      .scrollbar-hide::-webkit-scrollbar {
          display: none;
      }
      .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
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