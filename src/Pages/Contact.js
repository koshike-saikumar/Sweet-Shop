import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Goes back to previous page
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill all fields.");
            return;
        }

        setLoading(true);
        try {
            // Submit data to backend if needed
            // await axios.post('/api/contact', formData);

            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            toast.error("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="contact-container">
                <div className="contact-form-container">
                    <button onClick={goBack} className="back-button">
                        ← Back
                    </button>
                    <h1 className="contact-title">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="contact-input"
                            />
                            <label className="input-label">Your Name</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="contact-input"
                            />
                            <label className="input-label">Your Email</label>
                        </div>
                        <div className="input-group">
                            <textarea
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="contact-input"
                            />
                            <label className="input-label">Your Message</label>
                        </div>
                        <button type="submit" className="contact-button" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
