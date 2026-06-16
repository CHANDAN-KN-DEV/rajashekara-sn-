"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Send, CheckCircle2, Loader2, ExternalLink } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setStatus("sending");

    const recipientEmail = "rajashekarasn1994@gmail.com";
    const subject = encodeURIComponent(
      data.subject || `Portfolio Contact: Message from ${data.name}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );

    // Open the visitor's email client pre-filled with the form data
    window.open(`mailto:${recipientEmail}?subject=${subject}&body=${body}`, "_blank");

    setStatus("sent");
    reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-blue-500/10 to-blue-600/5 border-blue-200 dark:border-blue-800/40",
      iconBg: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "from-emerald-500/10 to-emerald-600/5 border-emerald-200 dark:border-emerald-800/40",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: personalInfo.linkedin,
      href: personalInfo.linkedinUrl,
      color: "from-primary-500/10 to-primary-600/5 border-primary-200 dark:border-primary-800/40",
      iconBg: "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400",
    },
  ];

  return (
    <section id="contact" className="section bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Get In Touch"
          title="Contact"
          highlight="Me"
          description="Have a research collaboration or inquiry? I'd love to connect!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Profile card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-900 to-secondary text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-x-8 -translate-y-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-x-6 translate-y-6" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl mb-4">
                  👨‍💼
                </div>
                <h3 className="text-xl font-bold font-poppins mb-1">{personalInfo.name}</h3>
                <p className="text-primary-200 text-sm mb-1">{personalInfo.title}</p>
                <p className="text-primary-300 text-xs">{personalInfo.institution}</p>

                <div className="mt-5 pt-4 border-t border-white/20">
                  <p className="text-xs text-primary-200 font-inter">
                    Open for research collaboration, academic consultations, and library management discussions.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact items */}
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br ${item.color} border shadow-sm`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-inter mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-semibold font-poppins text-gray-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center gap-1 group truncate"
                    >
                      <span className="truncate">{item.value}</span>
                      {item.href.startsWith("http") && (
                        <ExternalLink size={12} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold font-poppins text-gray-900 dark:text-white">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-card dark:shadow-card-dark">
              <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium font-inter text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-inter bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all ${
                        errors.name ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-700"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 font-inter">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-inter text-gray-700 dark:text-gray-300 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                      })}
                      type="email"
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-inter bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all ${
                        errors.email ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-700"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 font-inter">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium font-inter text-gray-700 dark:text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="Research collaboration / Library inquiry / General"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-inter bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium font-inter text-gray-700 dark:text-gray-300 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={5}
                    placeholder="Tell me about your research, project, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-inter bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none ${
                      errors.message ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-700"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 font-inter">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className={`w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold font-inter transition-all duration-300 shadow-md ${
                    status === "sent"
                      ? "bg-green-500 text-white cursor-default"
                      : status === "sending"
                      ? "bg-gray-400 dark:bg-gray-600 text-white cursor-wait"
                      : "bg-gradient-to-r from-primary-900 to-secondary text-white hover:opacity-90 hover:shadow-glow hover:scale-[1.01] active:scale-[0.99]"
                  }`}
                >
                  {status === "sending" ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : status === "sent" ? (
                    <><CheckCircle2 size={18} /> Message Sent Successfully!</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            </div>

            {/* Google Maps placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-card h-48 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800/50 dark:to-gray-900/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📍</div>
                <p className="text-sm font-semibold font-poppins text-primary-700 dark:text-primary-300">
                  Jyothy Institute of Commerce & Management
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-inter mt-1">Bengaluru, Karnataka, India</p>
                <a
                  href="https://maps.google.com/?q=Jyothy+Institute+of+Commerce+and+Management+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold font-inter text-primary-600 dark:text-primary-400 hover:underline"
                >
                  View on Google Maps <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
