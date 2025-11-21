import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwm97aYGjw_JBzcJTmBg2rIvylSlD-yS1KUjcRNmU0cw48ASvxQaFMmLEhzI-oSusGohA/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script
                body: new URLSearchParams(formData),
            });

            // With no-cors, we get an opaque response, so we can't check response.ok
            // If the fetch doesn't throw, we assume it went through.
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error('Error!', error.message);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-info">
                    <p>Email: dudekulak43@gmail.com</p>
                    <p>Phone: +91-6303537549</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-submit">
                        {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status && <p style={{ textAlign: 'center', marginTop: '1rem', color: status.includes('success') ? 'green' : 'red' }}>{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
