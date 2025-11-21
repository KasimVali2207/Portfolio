const Projects = () => {
    const projects = [
        {
            title: "AI-Powered Multilingual Video Summarization",
            desc: "Automated multilingual video summarization achieving 95% accuracy using Groq Whisper API. Features dual-language summarization, PDF downloads, and interactive quizzes.",
            tech: ["Groq API", "Whisper", "React", "Chart.js"],
            link: "https://ai-lecture-extractor-2.onrender.com/"
        },
        {
            title: "Hospital Patient Registration Web App",
            desc: "Full-stack CRUD application reducing manual processing by 40%. Features real-time screenshot capture for auditability and mobile-friendly UI.",
            tech: ["Flask", "MongoDB", "Bootstrap", "html2canvas"],
            link: "https://hospital-patient-registration-f2sr.onrender.com/"
        },
        {
            title: "AI-Based Multi-Agent Travel Booking",
            desc: "Designed a multi-agent AI system that dynamically routes user requests to specialized assistants for flight, hotel, and car rental bookings.",
            tech: ["Python", "LangChain", "Multi-Agent"],
            link: "https://github.com/KasimVali2207/Next-Gen-AI-Travel-Assistant"
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
