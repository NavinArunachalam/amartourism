import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import styles from './CustomerDetails.module.css';

const ComingSoon = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    whatsapp: '',
    destination: '',
    date: '',
    people: '',
    vacationType: ''
  });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Google Apps Script Web App URL
    const WEB_APP_URL =
      "https://script.google.com/macros/s/AKfycbzQu3v4ZDvEEMATRjVP9xxhWbuRzSe-o0a8gvrNBE6htSI4B2ErmgSm57Z02i5OOI61/exec";

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send all form data
      });

      // no-cors prevents reading response, assume success if no error thrown
      setStatus("success");
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        city: '',
        email: '',
        phone: '',
        whatsapp: '',
        destination: '',
        date: '',
        people: '',
        vacationType: ''
      });
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        "Failed to submit the form. Please check your internet connection or contact support."
      );
      console.error("Submission error:", error.message);
    }
  };

  return (
    <>
      <section className={styles.creativeTemplate}>
        <div className={styles.comingSoonContent}>
          <h6>Welcome</h6>
          <h1>Plan Your Journey</h1>
          <div className={styles.row}>
            <div className={styles.colMd9}>
              <p>We're under construction. Share your travel details below and we’ll connect with you!</p>
            </div>
          </div>

          <div className={styles.clientForm}>
            {status === "success" && (
              <p className={styles.successMessage}>
                Thank you! Your inquiry has been submitted successfully. We'll
                contact you soon.
              </p>
            )}
            {status === "error" && (
              <p className={styles.errorMessage}>{errorMsg}</p>
            )}
            <div className={styles.formGroup}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <i className="fas fa-city"></i>
              <input
                type="text"
                name="city"
                placeholder="City of Residence *"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <i className="fas fa-phone"></i>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <i className="fab fa-whatsapp"></i>
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number *"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <i className="fas fa-plane-departure"></i>
              <input
                type="text"
                name="destination"
                placeholder="Travel Destination *"
                value={formData.destination}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <i className="fas fa-calendar-alt"></i>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <i className="fas fa-users"></i>
              <input
                type="number"
                name="people"
                placeholder="No of People *"
                value={formData.people}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <i className="fas fa-suitcase-rolling"></i>
              <select
                name="vacationType"
                value={formData.vacationType}
                onChange={handleInputChange}
                required
              >
                <option value="">Vacation Type *</option>
                <option>HONEYMOON</option>
                <option>FAMILY TRIP</option>
                <option>FRIENDS TRIP</option>
                <option>SOLO TRIP</option>
                <option>GROUP TOUR</option>
              </select>
            </div>
            <button type="submit" onClick={handleSubmit} disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Submit"}
            </button>
          </div>

          <ul className={styles.socialIcon}>
            <li>
              <a href="https://www.facebook.com/451964597997414?ref=pro_upsell_xav_ig_profile_page_web">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/amar_tourism/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@AmarTourism">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/in/amar-tourism-b069a0354">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

        <img
          src="https://i.ibb.co/Xfkk7380/shape-46-creativesalahu.png"
          alt=""
          className={`${styles.shapes} ${styles.shapeOne}`}
        />
        <img
          src="https://i.ibb.co/W4kRJs0T/shape-47-creativesalahu.png"
          alt=""
          className={`${styles.shapes} ${styles.shapeTwo}`}
        />
        <img
          src="https://i.ibb.co/yFPBGfWd/shape-48-creativesalahu.png"
          alt=""
          className={`${styles.shapes} ${styles.shapeThree}`}
        />
        <img
          src="https://i.ibb.co/rft2vzg0/shape-49-creativesalahu.png"
          alt=""
          className={`${styles.shapes} ${styles.shapeFour}`}
        />
        <img
          src="https://i.ibb.co/35q6g9yS/shape-50-creativesalahu.png"
          alt=""
          className={`${styles.shapes} ${styles.shapeFive}`}
        />
        <img
          src="https://i.ibb.co/35q6g9yS/shape-50-creativesalahu.png"
          alt=""
          className={`${styles.shapes} ${styles.shapeSix}`}
        />
      </section>

      <a href="tel:+919876543210" className={styles.coffeeButton}>
        <span className={styles.coffeeIcon}>
          <i className="fas fa-phone-alt"></i>
        </span>
        Call Us
      </a>
    </>
  );
};

export default ComingSoon;