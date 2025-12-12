const Publications = () => {
    const publications = [
        {
            title: "Active Dreaming Memory: Biologically-Inspired Episodic Consolidation for Lifelong Learning in Autonomous Agents",
            doi: "https://doi.org/10.31224/5919",
            description: "A novel framework for lifelong learning in autonomous agents inspired by biological memory consolidation processes, enabling efficient episodic memory management and knowledge retention.",
            venue: "engrXiv",
            year: "2025"
        },
        {
            title: "Autonomous QA Agent: A Retrieval-Augmented Framework for Reliable Selenium Script Generation",
            doi: "https://doi.org/10.31224/5891",
            description: "An intelligent QA automation system leveraging RAG and LLM technology to automatically generate comprehensive test cases and production-ready Selenium scripts.",
            venue: "engrXiv",
            year: "2025"
        }
    ];

    return (
        <section id="publications">
            <div className="container">
                <h2 className="section-title">Research Publications</h2>
                <div className="publications-grid">
                    {publications.map((pub, index) => (
                        <div key={index} className="publication-card">
                            <div className="publication-content">
                                <h3 className="publication-title">{pub.title}</h3>
                                <p className="publication-desc">{pub.description}</p>
                                <div className="publication-meta">
                                    <span className="publication-venue">{pub.venue}</span>
                                    <span className="publication-year">{pub.year}</span>
                                </div>
                                <div className="publication-links">
                                    <a href={pub.doi} className="publication-link doi" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-link"></i> View Publication
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
