const Experience = () => {
    return (
        <section id="experience" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="exp-header">
                            <div>
                                <h3 className="exp-role">Machine Learning Intern</h3>
                                <h4 className="exp-company">Marquee Equity</h4>
                            </div>
                            <span className="exp-date">May 2024 – June 2024</span>
                        </div>
                        <ul className="exp-details">
                            <li>Engineered a scalable Retrieval-Augmented Generation (RAG) system using LangChain to answer user queries from uploaded financial statements.</li>
                            <li>Utilized LLMs, transformer models, and semantic search with vector databases to extract contextual insights.</li>
                            <li>Analyzed market behavior with Random Forest, XGBoost, and time series models like ARIMA and LSTM.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
