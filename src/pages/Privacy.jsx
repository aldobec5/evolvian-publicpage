import React from "react";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div
      className="min-h-screen py-20 px-6 md:px-24"
      style={{ backgroundColor: "#0f1c2e", color: "#ededed" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1
          className="text-4xl font-bold mb-6 text-center"
          style={{ color: "#a3d9b1" }}
        >
          Privacy Policy
        </h1>
        <p className="text-center text-[#a3d9b1]/70 mb-10">
          Last updated: October 2025
        </p>

        <section className="space-y-6 leading-relaxed text-lg">
          <p>
            At <strong>Evolvian™</strong>, your privacy is our priority. This
            Privacy Policy explains how we collect, use, and protect your
            information when you use our platform and related services
            (“Service”).
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            1. Information We Collect
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Account Information:</strong> Name, email, and login
              details.
            </li>
            <li>
              <strong>Usage Data:</strong> Platform interactions and session
              analytics to improve performance and user experience.
            </li>
            <li>
              <strong>Uploaded Files:</strong> Documents you voluntarily upload
              to your private workspace.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            2. How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide, operate, and improve our platform.</li>
            <li>Respond to inquiries and offer support.</li>
            <li>Prevent fraud and enforce our Terms of Service.</li>
            <li>Send important administrative communications.</li>
          </ul>
          <p>
            We <strong>never sell, rent, or share your personal data</strong>{" "}
            with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            3. Data Security
          </h2>
          <p>
            We implement advanced security measures, including encryption,
            access control, and secure cloud storage, to protect your data from
            unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            4. Data Retention
          </h2>
          <p>
            Your data is stored only as long as necessary to provide the
            Service. You may request deletion of your account and all associated
            data at any time by contacting{" "}
            <a
              href="mailto:support@evolvianai.com"
              className="underline text-[#4a90e2]"
            >
              privacy@evolvianai.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            5. Cookies and Analytics
          </h2>
          <p>
            We use essential cookies to ensure proper platform functionality,
            and optional analytics tools such as Google Analytics to understand
            usage patterns. You can manage or disable cookies through your
            browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            6. User Rights
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access and correct your personal information.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Withdraw consent for certain processing activities.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            7. International Data Transfers
          </h2>
          <p>
            Your data may be processed in the United States or other countries
            where Evolvian operates. We ensure that adequate safeguards are in
            place to protect your information in compliance with applicable
            data-protection laws.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            8. Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy periodically. Updates will be
            posted on this page, and continued use of the Service indicates your
            acceptance of any revisions.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            9. Contact Us
          </h2>
          <p>
            For any privacy-related inquiries, please contact us at{" "}
            <a
              href="mailto:support@evolvianai.com"
              className="underline text-[#4a90e2]"
            >
              support@evolvianai.com
            </a>
            .
          </p>
        </section>
      </motion.div>
    </div>
  );
}
