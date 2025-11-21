const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/kasimvali-88a4a9213/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/KasimVali2207" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:dudekulak43@gmail.com">Email</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Dudekula Kasim Vali. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
