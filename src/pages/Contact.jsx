import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import SectionReveal from "../components/SectionReveal";

const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // Replace with actual Formspree ID

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Full name is required.";
  if (!fields.phone.trim()) errors.phone = "Phone number is required.";
  if (!fields.city.trim()) errors.city = "City is required.";
  if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email))
    errors.email = "A valid email is required.";
  if (!fields.message.trim() || fields.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name])
      setErrors((e) => {
        const n = { ...e };
        delete n[e.target.name];
        return n;
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      // Fallback: mailto
      const body = encodeURIComponent(
        `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}\n\n${fields.message}`,
      );
      window.location.href = `mailto:info@lainfra.com?subject=${encodeURIComponent(fields.subject || "LA Infra Enquiry")}&body=${body}`;
      setStatus("idle");
    }
  };

  const inputClass = (name) =>
    `w-full bg-white border rounded-sm px-4 py-3 font-body text-sm text-forest placeholder-forest/30 
     focus:outline-none focus:ring-1 transition-colors
     ${
       errors[name]
         ? "border-red-400 focus:border-red-400 focus:ring-red-200"
         : "border-brand-200 focus:border-brand-500 focus:ring-brand-200"
     }`;

  return (
    <>
      <SEO
        title="Contact LA Infra – Enquire About Farmland Projects"
        description="Get in touch with LA Infra for enquiries about farmland investments, garden lands, estate developments, and eco-resort projects across Telangana and Andhra Pradesh."
        url="https://lainfra.com/contact"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      {/* Hero */}
      <section
        className="bg-forest pt-32 pb-20 relative overflow-hidden"
        aria-label="Contact page header"
      >
        <div className="container-site relative z-10">
          <SectionReveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-cream/40 font-body">
                <li>
                  <Link
                    to="/"
                    className="hover:text-brand-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-cream/20">/</li>
                <li className="text-cream/60">Contact</li>
              </ol>
            </nav>
            <span className="section-label text-brand-400 mb-4 block">
              Get In Touch
            </span>
            <h1 className="font-display text-display-lg text-cream mb-5">
              Contact LA Infra
            </h1>
            <p className="text-cream/60 font-body max-w-2xl leading-relaxed">
              Whether you are exploring land ownership opportunities, seeking
              more information about our developments, or interested in learning
              about upcoming projects, our team will be happy to assist you.
              <br />
              <br />
              We welcome your inquiries and look forward to helping you take the
              next step toward responsible land ownership.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-24 bg-cream"
        aria-labelledby="contact-form-heading"
      >
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionReveal>
                <h2
                  id="contact-form-heading"
                  className="font-display text-2xl font-semibold text-forest mb-8"
                >
                  Send Us a Message
                </h2>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-50 border border-brand-300 rounded-sm p-8 text-center"
                  >
                    <div className="text-3xl mb-3">✅</div>
                    <h3 className="font-display text-xl text-forest mb-2">
                      Message Received
                    </h3>
                    <p className="text-forest/65 text-sm font-body">
                    Thank you for contacting LA Infra. Our team will connect with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-body font-semibold text-forest/70 uppercase tracking-wide mb-1.5"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Your full name"
                          value={fields.name}
                          onChange={handleChange}
                          className={inputClass("name")}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            className="text-red-500 text-xs mt-1"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-body font-semibold text-forest/70 uppercase tracking-wide mb-1.5"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@email.com"
                          value={fields.email}
                          onChange={handleChange}
                          className={inputClass("email")}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            className="text-red-500 text-xs mt-1"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-body font-semibold text-forest/70 uppercase tracking-wide mb-1.5"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={fields.phone}
                          onChange={handleChange}
                          className={inputClass("phone")}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="city"
                          className="block text-xs font-body font-semibold text-forest/70 uppercase tracking-wide mb-1.5"
                        >
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          placeholder="Your city"
                          value={fields.city}
                          onChange={handleChange}
                          className={inputClass("city")}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-body font-semibold text-forest/70 uppercase tracking-wide mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us about your enquiry or site visit requirement…"
                        value={fields.message}
                        onChange={handleChange}
                        className={inputClass("message") + " resize-none"}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-sm font-body">
                        Something went wrong. Please email us directly at
                        info@lainfra.com.
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-cream border-t-transparent rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>

                    <p className="text-xs text-forest/40 font-body text-center">
                      We respect your privacy. Your information is never shared.{" "}
                      <Link
                        to="/privacy-policy"
                        className="text-brand-600 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                )}
              </SectionReveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <SectionReveal delay={0.2}>
                <div className="space-y-6">
                  <div>
                   <h3 className="font-display text-xl font-semibold text-forest mb-5">Project Inquiries</h3>
<p className="text-forest/60 text-sm mb-6">
  For information about our developments, site visits, or investment opportunities, please contact our team.
</p>
                    <div className="space-y-4">
                      {[
                        {
                          icon: (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          ),
                          label: "Office Address",
                          value:
                            "4th Floor, Piller, 36 Square, H.No.8-2-293/82/A/481/IV-2, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
                        },
                        {
                          icon: (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          ),
                          label: "Phone",
                          value: "78422 62261",
                          href: "tel:7842262261",
                        },
                        {
                          icon: (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          ),
                          label: "Email",
                          value: "Contact@thelainfra.com",
                          href: "mailto:Contact@thelainfra.com",
                        },
                        {
                          icon: (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M2 12h20"
                              />
                            </svg>
                          ),
                          label: "Visit Our Office",
                          value: "View on Google Maps",
                          href: "https://share.google/BtUw3NLWUOJ6QRJrh",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-4 p-4 bg-brand-50/50 border border-brand-100 rounded-sm"
                        >
                          <div className="w-8 h-8 rounded-sm bg-brand-100 flex items-center justify-center text-brand-700 shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-xs font-body text-forest/40 uppercase tracking-wide mb-0.5">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="font-body text-sm text-forest hover:text-brand-700 transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="font-body text-sm text-forest">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-forest rounded-sm text-center">
                    <p className="text-cream/60 text-xs font-body uppercase tracking-widest mb-3">
                      Operating Regions
                    </p>
                    <p className="text-cream font-display text-lg font-semibold">
                      Telangana · Andhra Pradesh · Karnataka
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-body text-forest/40 uppercase tracking-wide mb-3">
                      Office Hours
                    </p>
                    <div className="space-y-1.5 text-sm font-body text-forest/65">
                      <div className="flex justify-between">
                        <span>Monday – Saturday</span>
                        <span className="font-semibold">9:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
