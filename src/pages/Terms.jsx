import React from "react";
import { motion } from "framer-motion";

export default function Terms() {
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
          Terms and Conditions
        </h1>
        <p className="text-center text-[#a3d9b1]/70 mb-10">
          Last updated: October 2025
        </p>

        <section className="space-y-6 leading-relaxed text-lg">
          <p>
            Welcome to <strong>Evolvian™</strong> (“we,” “our,” or “us”). These
            Terms and Conditions (“Terms”) govern your access and use of the
            Evolvian platform, tools, and related services (collectively, the
            “Service”). By accessing or using the Service, you agree to these
            Terms. If you do not agree, please discontinue use.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            1. Eligibility and Use
          </h2>
          <p>
            You must be at least 18 years of age to use the Service. You agree
            to use Evolvian only for lawful purposes and in accordance with
            these Terms and any applicable local laws.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            2. Account and Security
          </h2>
          <p>
            You are responsible for safeguarding your login credentials and for
            all activities under your account. If you suspect unauthorized
            access, you must notify us immediately at{" "}
            <a
              href="mailto:support@evolvianai.com"
              className="underline text-[#4a90e2]"
            >
              support@evolvianai.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            3. Confidentiality and Document Privacy
          </h2>
          <p>
            All documents uploaded to Evolvian are stored securely and are never
            shared with third parties or used to train public AI models. We
            access your data only when required for troubleshooting, support, or
            compliance with legal obligations.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            4. Ownership and Intellectual Property
          </h2>
          <p>
            Evolvian retains ownership of its platform, interface, software, and
            brand assets. You retain full ownership of any files, documents, or
            data you upload. By uploading content, you grant Evolvian a limited
            license to process it solely for the operation of the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            5. Acceptable Use
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Do not upload or transmit malicious, illegal, or infringing
              content.
            </li>
            <li>Do not hack, modify, or reverse-engineer the platform.</li>
            <li>Do not violate privacy rights or applicable regulations.</li>
            <li>Do not exceed usage limits or circumvent plan restrictions.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            6. Service Availability
          </h2>
          <p>
            While we strive for uninterrupted uptime, Evolvian does not
            guarantee constant availability. Temporary interruptions may occur
            due to maintenance, updates, or external issues beyond our control.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            7. Disclaimer and Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Evolvian shall not be liable
            for indirect, incidental, or consequential damages resulting from
            the use or inability to use the Service. Our total liability shall
            not exceed the amount paid by you (if any) for the Service within
            the previous 12 months.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            8. Modifications
          </h2>
          <p>
            We may revise these Terms at any time. Changes will take effect upon
            posting to this page. Continued use of Evolvian after updates
            constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#f5a623]">
            9. Contact
          </h2>
          <p>
            For legal or compliance inquiries, contact us at{" "}
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
