const Skills = () => {
    const skillsData = [
        {
            category: "Programming Languages",
            items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "XML", "C", "C++", "Git", "GitHub"]
        },
        {
            category: "Web Development",
            items: ["React", "Node.js", "Express", "HTML", "CSS", "JavaScript", "SQL", "DBMS", "DSA", "OOP", "Computer Networks", "Flask", "MongoDB"]
        },
        {
            category: "Machine Learning & AI",
            items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "LangGraph", "LangChain", "Artificial Intelligence"]
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD", "Jenkins", "Linux", "Operating Systems"]
        }
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
