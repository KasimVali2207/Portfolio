const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-table-container">
                    <table className="education-table">
                        <thead>
                            <tr>
                                <th>Degree/Certificate</th>
                                <th>Institute/Board</th>
                                <th>CGPA/Percentage</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>B.Tech.</td>
                                <td>VIT-AP University, Amaravathi</td>
                                <td>9.36</td>
                                <td>2022-2026</td>
                            </tr>
                            <tr>
                                <td>Senior Secondary</td>
                                <td>Sri Chaitanya Boys JR College</td>
                                <td>98%</td>
                                <td>2021</td>
                            </tr>
                            <tr>
                                <td>Secondary</td>
                                <td>Om Sai Vikas Vidyaniketan</td>
                                <td>10 CGPA</td>
                                <td>2019</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Education;
