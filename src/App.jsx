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
        challenge: " The company relied on legacy visual assets that were performing poorly in generic brand awareness campaigns. There was no standardized system for creating new ads, leading to inconsistent branding and unmeasured effectiveness.",
        solution: "I introduced a 'Data-First' creative workflow. Instead of guessing, I executed structured A/B testing across three pillars: Text Hierarchy, Composition, and Aesthetics. I also implemented the Celtra tool for Meta automation to scale asset production.",
        results: [
            "Redesign of all older brand creatives, created additional for further audience segmentation, enriched with additional video creatives",
            "Reduced video ad production time by 40% using Heygen templates",
            "Won Gold & Silver at Peak Awards 2025 for Best Performance in Employment → AI-Driven Omnichannel Lead Gen and Best Use of Data Data-Driven Lead Generation 1st-Party Data & ML Customer Segmentation"
        ],
        tags: ["Figma", "Adobe CC", "Zoho Analytics", "Wordpress", "Heygen"],
        image: "/images/award_ceremony.jpg",
        gallery: [
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
        ],
        color: "from-blue-600 to-cyan-400"
    },
    {
        id: 2,
        title: "AEGEAN",
        category: "Digital Designer",
        type: "Professional",
        year: "2019-2024",
        role: "Digital Designer",
        description: "Dark-mode analytics dashboard for a SaaS platform. Features real-time data graphing and modular widgets.",
        tags: ["Email Marketing Design", "Social Media Design", "UI Design", "Branding"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        color: "from-purple-600 to-pink-400"
    },
    {
        id: 3,
        title: "Freelance",
        category: "Digital Designer",
        type: "Freelance",
        year: "2016-2019",
        role: "Graphic Designer",
        description: "Brand guidelines, typography system, and logo design for a modern audio streaming startup.",
        tags: ["Branding", "Identity","Video editing"],
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        color: "from-orange-500 to-red-500"
    },
    {
        id: 4,
        title: "University of Edinburgh",
        category: "MSc Digital Media Design",
        type: "Academic",
        year: "2022-2025",
        role: "Student",
        description: "Minimalist fashion e-commerce storefront with a focus on high-quality imagery and seamless checkout flow.",
        tags: ["3D Design", "Web Design","Game Design", "Media and Culture Ethics"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        color: "from-green-500 to-emerald-400"
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

// 1. UPDATED WORK COMPONENT
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

const Services = () => {
    return (
        <section className="py-24 bg-black text-white border-t border-white/10">
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
        <section id="about" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
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

// 2. PROJECT MODAL COMPONENT
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

                    {/* Sidebar Info (Left Column) */}
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

                    {/* Main Story (Right Column) */}
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
                                {project.solution || "Detailed breakdown of the design process, A/B testing variations, and final implementation strategy."}
                            </p>
                        </section>

                        {/* Image Gallery */}
                        <div className="space-y-6 mt-12">
                            {project.gallery?.map((img, index) => (
                                <div key={index} className="rounded-2xl overflow-hidden border border-white/5 bg-zinc-900">
                                    <img src={img} alt={`Gallery ${index}`} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 3. MAIN APP COMPONENT
export default function App() {
    // 1. Create the state to remember which project was clicked
    const [selectedProject, setSelectedProject] = useState(null);

    // 2. Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    // 3. Define the Animation Styles
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

            {/* 4. PASS the function to the Work component */}
            <Work onProjectClick={setSelectedProject} />

            <Services />
            <About />
            <Contact />

            <footer className="py-8 bg-black text-center text-gray-600 text-sm border-t border-zinc-900">
                © {new Date().getFullYear()} Alexandros Prepis. Crafted with React & Tailwind.
            </footer>

            {/* 5. If a project is selected, show the Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}