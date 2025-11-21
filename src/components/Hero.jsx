import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <div className="hero-image-container">
                    <img src={profileImg} alt="Dudekula Kasim Vali" className="hero-image" />
                </div>
                <h1>Dudekula Kasim Vali</h1>
                <h2 className="hero-subtitle">Full Stack Machine Learning & DevOps Engineer</h2>
                <p className="hero-tagline">
                    Building intelligent systems and scalable applications.
                </p>
                <a href="#contact" className="btn-primary">Get in Touch</a>
            </div>
        </section>
    );
};

export default Hero;
