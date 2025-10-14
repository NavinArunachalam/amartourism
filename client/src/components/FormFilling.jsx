import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: "1 Person",
    message: "",
  });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Use your Google Apps Script Web App URL here
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxdCbWl7Mw4GLATs4m54iLK4_0Cvki87SSHEd96kyDc0IyENotWAs61uDMY8wDZcqAi/exec"
    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // no-cors prevents reading response, assume success if no error thrown
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        people: "1 Person",
        message: "",
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
    <section id="booking">
      <form onSubmit={handleSubmit}>
        {status === "success" && (
          <p style={{ color: "green" }}>
            Thank you! Your inquiry has been submitted successfully. We'll
            contact you soon.
          </p>
        )}
        {status === "error" && <p style={{ color: "red" }}>{errorMsg}</p>}
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@example.com"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Preferred Travel Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Number of People</label>
            <select
              name="people"
              value={formData.people}
              onChange={handleChange}
            >
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4+ People</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Additional Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any special requests?"
          ></textarea>
        </div>
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
