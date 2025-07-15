import React from "react";
import * as Label from "@radix-ui/react-label";
import "./styles.css";

export default function App() {
  return (
    <>
    <header className="main-header">
  <div className="header-container">
    <div className="logo">
      <a href="/">
        <img
          src="/logo-evolvian.svg"
          alt="Evolvian logo"
          style={{ height: "40px" }}
        />
      </a>
    </div>
    <nav className="nav-links">
      <a href="#plans">Services</a>
      <a href="#contact">Contact</a>
      <a href="#about-us">About</a>
     
    </nav>
    <div
      className="header-cta"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <a
        href="https://www.evolvianai.com"
        target="_blank"
        rel="noopener noreferrer"
        className="login-button"
      >
        Log in
      </a>
      <a
        href="https://www.evolvianai.com/register"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "1rem",
          marginTop: "0.3rem",
          color: "#4a90e2",
          textDecoration: "underline",
          fontWeight: "500",
        }}
      >
        Register here
      </a>
    </div>
  </div>
</header>




    <section className="hero-split">
  <div className="hero-content">
    <h1>Welcome to Your AI Assistant Hub</h1>
    <p>Create custom AI assistants with your own documents — no code required.</p>
    <a href="#plans" className="hero-button">Get Started</a>
  </div>
 <div className="hero-media">
  <img
    src="/Efficiency.gif"
    alt="Evolvian in action"
    style={{ width: "400px", height: "auto" }}
  />
</div>


</section>


<section class="plans" id="plans">
  <h2 class="plans-title">Choose your plan</h2>
  <div class="plan-grid">
    <div class="plan-card">
      <div class="plan-content">
        <div class="plan-header">
          <h3>Free</h3>
          <span class="price">$0/mo</span>
        </div>
        <p class="plan-description">Perfect to explore Evolvian.</p>
        <ul>
          <li>✅ 50 messages/month</li>
          <li>✅ 1 document</li>
          <li>✅ Evolvian branding</li>
        </ul>
      </div>
      <a href="https://www.evolvianai.com" class="plan-cta yellow">Start for Free</a>
    </div>

    <div class="plan-card">
      <div class="plan-content">
        <div class="plan-header">
          <h3>Starter</h3>
          <span class="price">$19/mo</span>
        </div>
        <p class="plan-description">For small teams and projects.</p>
        <ul>
          <li>✅ 200 messages/month</li>
          <li>✅ 2 documents</li>
          <li>✅ Email support</li>
        </ul>
      </div>
      <a href="#contact" class="plan-cta">Contact Us</a>
    </div>

    <div class="plan-card highlighted">
      <div class="plan-content">
        <div class="plan-header">
          <h3>Premium</h3>
          <span class="price">$49/mo</span>
        </div>
        <p class="plan-description">Best for support & automation.</p>
        <ul>
          <li>✅ 1000 messages/month</li>
          <li>✅ 5 documents</li>
          <li>✅ Custom prompt</li>
          <li>✅ Multi-channel (Chat, Email, WhatsApp)</li>
        </ul>
      </div>
      <a href="#contact" class="plan-cta">Contact Us</a>
    </div>

    <div class="plan-card">
      <div class="plan-content">
        <div class="plan-header">
          <h3>White Label</h3>
          <span class="price">Custom</span>
        </div>
        <p class="plan-description">Tailored for enterprise & agencies.</p>
        <ul>
          <li>✅ Unlimited usage</li>
          <li>✅ Priority support</li>
          <li>✅ No Evolvian branding</li>
        </ul>
      </div>
      <a href="#contact" class="plan-cta">Contact Us</a>
    </div>
  </div>
</section>



<section className="why-evolvian-section">
  <h2 className="why-title">Why Evolvian AI?</h2>
  <div className="bubble-grid">
    <div className="info-bubble">
      <div className="front">Efficiency</div>
      <div className="back">Automate 70% of repetitive questions.</div>
    </div>
    <div className="info-bubble">
      <div className="front">Smart Assistant</div>
      <div className="back">Built with your own documents using RAG.</div>
    </div>
    <div className="info-bubble">
      <div className="front">Fast Setup</div>
      <div className="back">Create your assistant in minutes, no code needed.</div>
    </div>
    <div className="info-bubble">
      <div className="front">Multi-Channel</div>
      <div className="back">Works on website, WhatsApp, email, and more.</div>
    </div>
  </div>
</section>



<section className="contact-section" id="contact">
  <div className="contact-wrapper">
    <div className="contact-left">
      <h2>Contact Us</h2>
      <form
        className="form-grid"
        onSubmit={(e) => {
          e.preventDefault();
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const subject = document.getElementById("subject").value;
          const plan = document.getElementById("plan").value;
          const usage = document.getElementById("usage").value;

          const mailtoLink = `mailto:support@evolvianai.com?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nInterested Plan: ${plan}\n\nWhat would you use Evolvian for:\n${usage}`
          )}`;

          window.location.href = mailtoLink;
        }}
      >
        <div className="form-group">
          <Label.Root htmlFor="name">Name</Label.Root>
          <input id="name" type="text" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <Label.Root htmlFor="email">Email</Label.Root>
          <input id="email" type="email" placeholder="you@example.com" required />
        </div>

        <div className="form-group full-width">
          <Label.Root htmlFor="subject">Subject</Label.Root>
          <input id="subject" type="text" placeholder="What's your message about?" required />
        </div>

        <div className="form-group full-width">
          <Label.Root htmlFor="plan">What plan are you interested in?</Label.Root>
          <select
            id="plan"
            required
            defaultValue=""
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #274472',
              borderRadius: '6px',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '16px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
          >
            <option value="" disabled>Select a plan</option>
            <option value="Starter">Starter</option>
            <option value="Premium">Premium</option>
            <option value="White Label">White Label</option>
          </select>
        </div>

        <div className="form-group full-width">
          <Label.Root htmlFor="usage">What would you use Evolvian for?</Label.Root>
          <textarea
            id="usage"
            rows="5"
            placeholder="Tell us a bit about your use case..."
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #274472',
              borderRadius: '6px',
              color: '#333',
              fontSize: '16px',
              backgroundColor: '#fff',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              resize: 'vertical',
            }}
          />
        </div>

        <div className="form-group full-width align-right">
          <button type="submit" className="submit-btn">Send Message</button>
        </div>
      </form>
    </div>

    <div className="contact-right">
      <p>If you need more information about plans or want to start with a paid plan, feel free to send us your details using the form.</p>
      <p>To learn more about Evolvian, open the chat in the bottom right corner and ask our assistant. They can help you find the best plan for your needs.</p>
      <button
        className="chat-btn"
        onClick={() => {
          const iframe = document.querySelector("iframe[title='Evolvian AI Widget']");
          if (iframe) iframe.style.display = "block";
        }}
      >
        Start a chat with Evolvian
      </button>
    </div>
  </div>
</section>



<section
  id="about-us"
  style={{
    backgroundColor: "#ffffff",
    padding: "4rem 2rem",
    borderTop: "1px solid #ededed"
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem",
      alignItems: "center",
      justifyContent: "space-between"
    }}
  >
    {/* Video Placeholder */}
    <div
  style={{
    flex: "1 1 500px",
    minHeight: "300px",
    backgroundColor: "#ededed",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
  <img
    src="/Aboutuseai.gif"
    alt="Evolvian AI preview"
    style={{
      width: "100%",
      height: "auto",
      objectFit: "cover",
      borderRadius: "8px"
    }}
  />
</div>


    {/* Text Content */}
    <div style={{ flex: "1 1 500px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#274472" }}>About Evolvian</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#333" }}>
        Evolvian empowers businesses to create their own intelligent assistants trained on their documents —
        no code required. Our platform automates support, improves communication, and boosts productivity
        across channels. Whether you're a startup or an enterprise, Evolvian helps you scale efficiently with
        AI tailored to your needs.
      </p>
    </div>
  </div>
</section>




<footer className="footer">
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "2rem",
      color: "#1b2a41"
    }}
  >
    <div style={{ flex: "1 1 200px" }}>
      <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#274472" }}>Location</h4>
      <p style={{ lineHeight: "1.6", color: "#333" }}>
        1001 S Main St Ste 500<br />
        Kalispell, MT 59901
      </p>
    </div>

    <div style={{ flex: "1 1 200px" }}>
      <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#274472" }}>Contact</h4>
      <p style={{ lineHeight: "1.6", color: "#333" }}>
        support@evolvianai.com<br />
        +1 (760) 589-5148
      </p>
    </div>

    <div style={{ flex: "1 1 200px" }}>
      <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#274472" }}>Legal</h4>
      <p>
        <a
          href="https://www.evolvianai.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1b2a41", textDecoration: "none" }}
        >
          Terms & Conditions
        </a>
      </p>
    </div>
  </div>

  <div
    style={{
      textAlign: "center",
      marginTop: "2rem",
      fontSize: "0.9rem",
      color: "#666"
    }}
  >
    © {new Date().getFullYear()} Evolvian AI. All rights reserved.
  </div>
</footer>


    </>
  );
}
