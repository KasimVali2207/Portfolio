const Skills = () => {
    const skillsData = [
        { category: "Languages", items: ["Python", "C", "C++", "HTML", "CSS", "JavaScript"] },
        { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "CI/CD", "Linux"] },
        { category: "Database", items: ["SQL", "MongoDB"] },
        { category: "Machine Learning", items: ["NLP", "Deep Learning", "Generative AI", "LangGraph", "LangChain"] },
        { category: "Tools", items: ["Git", "GitHub", "Flask", "PowerPoint"] }
    ];

    return (
        <section id="skills" style={{ background: '#fff' }}>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="skill-category">
                            <h3>{skillGroup.category}</h3>
                            <div className="skill-tags">
                                {skillGroup.items.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
