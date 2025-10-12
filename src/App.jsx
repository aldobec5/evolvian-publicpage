import React from "react";
import * as Label from "@radix-ui/react-label";
import { trackEvent } from "./utils/tracking";




export default function App() {
  return (
    <>
      {/* 🧭 HEADER */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo">
            <a href="/" onClick={() => trackEvent({ name: "Logo_Click" })}>
              <img
                src="/logo-evolvian.svg"
                alt="Evolvian logo"
                style={{ height: "40px" }}
              />
            </a>
          </div>

          <nav className="nav-links">
            <a href="#plans" onClick={() => trackEvent({ name: "Nav_Services_Click" })}>
              Services
            </a>
            <a href="#contact" onClick={() => trackEvent({ name: "Nav_Contact_Click" })}>
              Contact
            </a>
            <a href="#about-us" onClick={() => trackEvent({ name: "Nav_About_Click" })}>
              About
            </a>
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
              href="https://www.evolvianai.net"
              target="_blank"
              rel="noopener noreferrer"
              className="login-button"
              onClick={() => trackEvent({ name: "Login_Click" })}
            >
              Log in
            </a>

            <a
              href="https://www.evolvianai.net/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent({ name: "Register_Click" })}
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

      {/* 🚀 HERO */}
      <section className="hero-split">
        <div className="hero-content">
          <h1>Welcome to Your AI Assistant Hub</h1>
          <p>
            Create custom AI assistants with your own documents — no code
            required.
          </p>
          <a
            href="#plans"
            className="hero-button"
            onClick={() => trackEvent({ name: "GetStarted_Click", label: "Hero" })}
          >
            Get Started
          </a>
        </div>
        <div className="hero-media">
          <img
            src="/Efficiency.gif"
            alt="Evolvian in action"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
      </section>

      {/* 💼 PLANS SECTION */}
      <section className="plans" id="plans">
        <h2 className="plans-title">Choose the plan that fits your business</h2>
        <div className="plan-grid">

          {/* Free Plan */}
          <div className="plan-card">
            <div className="plan-content">
              <div className="plan-header">
                <h3>Free</h3>
                <span className="price">$0/mo</span>
              </div>
              <p className="plan-description">Test Evolvian with no cost.</p>
              <ul>
                <li>✅ 100 messages / month</li>
                <li>✅ 1 document</li>
                <li>✅ Basic dashboard</li>
                <li>✅ Evolvian Chat Support</li>
              </ul>
            </div>
            <a
              href="https://www.evolvianai.net/register"
              className="plan-cta yellow"
              onClick={() =>
                trackEvent({ name: "StartForFree_Click", label: "Free Plan" })
              }
            >
              Start for Free
            </a>
          </div>

          {/* Starter Plan */}
          <div className="plan-card">
            <div className="plan-content">
              <div className="plan-header">
                <h3>Starter</h3>
                <span className="price">$29/mo</span>
              </div>
              <p className="plan-description">Perfect for small businesses.</p>
              <ul>
                <li>✅ enjoy 1,000 monthly messages (soon 500)</li>
                <li>✅ 1 document</li>
                <li>✅ Evolvian Chat Support</li>
              </ul>
            </div>
            <a
              href="#contact"
              className="plan-cta"
              onClick={() =>
                trackEvent({ name: "Email_Click", label: "Starter Plan" })
              }
            >
              Send us an email
            </a>
          </div>

          {/* Premium Plan */}
          <div className="plan-card highlighted">
            <div className="plan-content">
              <div className="plan-header">
                <h3>
                  Premium <span className="badge">Most Popular</span>
                </h3>
                <span className="price">$49/mo <small>(soon $79)</small></span>
              </div>
              <p className="plan-description">Best for growth and automation.</p>
              <ul>
                <li>✅ 5,000 messages / month</li>
                <li>✅ 3 documents</li>
                <li>✅ Custom Prompt</li>
                <li>✅ Evolvian Chat Support</li>
              </ul>
            </div>
            <a
              href="#contact"
              className="plan-cta"
              onClick={() =>
                trackEvent({ name: "Email_Click", label: "Premium Plan" })
              }
            >
              Send us an email
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="plan-card">
            <div className="plan-content">
              <div className="plan-header">
                <h3>Enterprise</h3>
                <span className="price">Custom</span>
              </div>
              <p className="plan-description">
                Designed for enterprises & agencies.
              </p>
              <ul>
                <li>✅ Unlimited messages & documents</li>
                <li>✅ Dedicated support & onboarding</li>
              </ul>
            </div>
            <a
              href="#contact"
              className="plan-cta"
              onClick={() =>
                trackEvent({ name: "Email_Click", label: "Enterprise Plan" })
              }
            >
              Send us an email
            </a>
          </div>
        </div>
      </section>



     {/* WHY EVOLVIAN SECTION */}
<section className="why-evolvian-section">
  <h2 className="why-title">Why Evolvian AI?</h2>
  <div className="bubble-grid">
    <div
      className="info-bubble"
      onClick={() => trackEvent({ name: "Why_Click_Efficiency", label: "Efficiency" })}
      style={{ cursor: "pointer" }}
    >
      <div className="front">Efficiency</div>
      <div className="back">Automate 70% of repetitive questions.</div>
    </div>

    <div
      className="info-bubble"
      onClick={() => trackEvent({ name: "Why_Click_SmartAssistant", label: "Smart Assistant" })}
      style={{ cursor: "pointer" }}
    >
      <div className="front">Smart Assistant</div>
      <div className="back">Built with your own documents using RAG.</div>
    </div>

    <div
      className="info-bubble"
      onClick={() => trackEvent({ name: "Why_Click_FastSetup", label: "Fast Setup" })}
      style={{ cursor: "pointer" }}
    >
      <div className="front">Fast Setup</div>
      <div className="back">Create your assistant in minutes, no code needed.</div>
    </div>

    <div
      className="info-bubble"
      onClick={() => trackEvent({ name: "Why_Click_MultiChannel", label: "Multi-Channel" })}
      style={{ cursor: "pointer" }}
    >
      <div className="front">Multi-Channel</div>
      <div className="back">Works on website using an Iframe or floating widget.</div>
    </div>
  </div>
</section>

{/* CONTACT SECTION */}
<section className="contact-section" id="contact">
  <div className="contact-wrapper">
    <div className="contact-left">
      <h2>Contact Us</h2>

      <form
        className="form-grid"
        onSubmit={(e) => {
          e.preventDefault();

          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const subject = document.getElementById("subject").value.trim();
          const plan = document.getElementById("plan").value;
          const usage = document.getElementById("usage").value.trim();

          // 🧠 Tracking del formulario
          trackEvent({
            name: "Contact_Form_Submit",
            category: "Lead",
            label: plan,
            value: email,
          });

          const mailBody = `Name: ${name}\nEmail: ${email}\nInterested Plan: ${plan}\n\nWhat would you use Evolvian for:\n${usage}`;
          const encodedSubject = encodeURIComponent(subject || "Evolvian Inquiry");
          const encodedBody = encodeURIComponent(mailBody);

          const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@evolvianai.com&su=${encodedSubject}&body=${encodedBody}`;
          const outlookUrl = `https://outlook.live.com/mail/deeplink/compose?to=support@evolvianai.com&subject=${encodedSubject}&body=${encodedBody}`;
          const mailtoUrl = `mailto:support@evolvianai.com?subject=${encodedSubject}&body=${encodedBody}`;

          const gmailTab = window.open(gmailUrl, "_blank");

          setTimeout(() => {
            if (!gmailTab || gmailTab.closed || typeof gmailTab.closed === "undefined") {
              const outlookTab = window.open(outlookUrl, "_blank");
              setTimeout(() => {
                if (!outlookTab || outlookTab.closed || typeof outlookTab.closed === "undefined") {
                  window.location.href = mailtoUrl;
                }
              }, 800);
            }
          }, 800);
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
              width: "100%",
              padding: "10px",
              border: "1px solid #274472",
              borderRadius: "6px",
              backgroundColor: "#fff",
              color: "#333",
              fontSize: "16px",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
          >
            <option value="" disabled>
              Select a plan
            </option>
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
              width: "100%",
              padding: "10px",
              border: "1px solid #274472",
              borderRadius: "6px",
              color: "#333",
              fontSize: "16px",
              backgroundColor: "#fff",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              resize: "vertical",
            }}
          />
        </div>

        <div className="form-group full-width align-right">
          <button
            type="submit"
            className="submit-btn"
            onClick={() => trackEvent({ name: "SendMessage_Click", label: "Form Button" })}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    <div className="contact-right">
      <p>
        If you need more information about plans or want to start with a paid plan, feel free to send us your details using the form.
      </p>
      <p>
        To learn more about Evolvian, open the chat in the bottom right corner and ask our assistant. Welcome can help you find the best plan for your needs.
      </p>
    </div>
  </div>
</section>


      <section
  id="about-us"
  style={{
    backgroundColor: "#ffffff",
    padding: "4rem 2rem",
    borderTop: "1px solid #ededed",
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
      justifyContent: "space-between",
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
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={() => trackEvent({ name: "About_Image_Click" })}
    >
      <img
        src="/aboutuseai.gif"
        alt="Evolvian AI preview"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>

    {/* Text Content */}
    <div
      style={{ flex: "1 1 500px", cursor: "pointer" }}
      onClick={() => trackEvent({ name: "About_Text_Click" })}
    >
      <h2
        style={{ fontSize: "2rem", marginBottom: "1rem", color: "#274472" }}
      >
        About Evolvian
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#333" }}>
        Evolvian empowers businesses to create their own intelligent
        assistants trained on their documents — no code required. Our
        platform automates support, improves communication, and boosts
        productivity across channels. Whether you're a startup or an
        enterprise, Evolvian helps you scale efficiently with AI tailored
        to your needs.
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
      color: "#1b2a41",
    }}
  >
    {/* Location */}
    <div style={{ flex: "1 1 200px" }}>
      <h4
        style={{
          fontSize: "1.2rem",
          marginBottom: "1rem",
          color: "#274472",
        }}
      >
        Location
      </h4>
      <p style={{ lineHeight: "1.6", color: "#333" }}>
        1001 S Main St Ste 500
        <br />
        Kalispell, MT 59901
      </p>
    </div>

    {/* Contact */}
    <div style={{ flex: "1 1 200px" }}>
      <h4
        style={{
          fontSize: "1.2rem",
          marginBottom: "1rem",
          color: "#274472",
        }}
      >
        Contact
      </h4>
      <p style={{ lineHeight: "1.6", color: "#333" }}>
        <a
          href="mailto:support@evolvianai.com"
          onClick={() => trackEvent({ name: "Footer_Contact_Click", label: "Email" })}
          style={{ color: "#333", textDecoration: "none" }}
        >
          support@evolvianai.com
        </a>
        <br />
        <a
          href="tel:+17605895148"
          onClick={() => trackEvent({ name: "Footer_Contact_Click", label: "Phone" })}
          style={{ color: "#333", textDecoration: "none" }}
        >
          +1 (760) 589-5148
        </a>
      </p>
    </div>

    {/* Legal */}
    <div style={{ flex: "1 1 200px" }}>
      <h4
        style={{
          fontSize: "1.2rem",
          marginBottom: "1rem",
          color: "#274472",
        }}
      >
        Legal
      </h4>
      <p style={{ lineHeight: "1.6" }}>
        <a
          href="/terms"
          onClick={() => trackEvent({ name: "Footer_Terms_Click" })}
          style={{
            color: "#1b2a41",
            textDecoration: "none",
            display: "block",
            marginBottom: "0.5rem",
          }}
        >
          Terms & Conditions
        </a>
        <a
          href="/privacy"
          onClick={() => trackEvent({ name: "Footer_Privacy_Click" })}
          style={{
            color: "#1b2a41",
            textDecoration: "none",
            display: "block",
          }}
        >
          Privacy Policy
        </a>
      </p>
    </div>
  </div>

  {/* Footer bottom text */}
  <div
    style={{
      textAlign: "center",
      marginTop: "2rem",
      fontSize: "0.9rem",
      color: "#666",
    }}
  >
    © {new Date().getFullYear()} Evolvian AI. All rights reserved.
  </div>
</footer>
</>
);
}

