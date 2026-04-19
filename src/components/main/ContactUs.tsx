"use client";

import { site } from "@/config/site";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FC, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaRegCopy,
  FaSpinner,
  FaUser,
} from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { buttonVariants } from "../ui/button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs: FC = () => {
  const { t } = useLocale();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(t.contact.success);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(t.contact.fail);
      }
    } catch {
      setStatus(t.contact.error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t.contact.copied(label));
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const inputVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.1 },
    }),
  };

  return (
    <section
      id="contact"
      className="relative py-20 text-foreground transition-colors overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-10 shadow-2xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              className="w-full md:w-1/2 space-y-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-foreground via-primary to-teal-500 bg-clip-text text-transparent">
                {t.contact.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t.contact.intro}
              </p>

              <div className="space-y-5 text-foreground">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary text-lg" />
                  <span className="text-sm font-medium select-text">
                    {site.email}
                  </span>
                  <button
                    title={t.contact.copyEmail}
                    type="button"
                    onClick={() => copyToClipboard(site.email, t.contact.email)}
                    className="text-muted-foreground hover:text-primary transition"
                    aria-label={t.contact.copyEmail}
                  >
                    <FaRegCopy />
                  </button>
                </div>
                {site.phone ? (
                  <div className="flex items-center gap-3">
                    <FaSquarePhone className="text-primary text-lg" />
                    <span className="text-sm font-medium select-text">
                      {site.phone}
                    </span>
                    <button
                      title={t.contact.copyPhone}
                      type="button"
                      onClick={() =>
                        copyToClipboard(site.phone!, t.contact.phone)
                      }
                      className="text-muted-foreground hover:text-primary transition"
                      aria-label={t.contact.copyPhone}
                    >
                      <FaRegCopy />
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-primary text-lg" />
                  <span className="text-sm font-medium select-text">
                    {site.location}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 space-y-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label={t.contact.title}
              >
                <motion.div
                  custom={0}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="relative">
                    <FaUser className="absolute top-3.5 left-3 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.name}
                      className="w-full pl-10 pr-4 py-3 bg-background/50 text-foreground rounded-none focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground transition-all"
                      required
                      aria-label={t.contact.name}
                    />
                  </div>
                </motion.div>
                <motion.div
                  custom={1}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="relative">
                    <FaEnvelope className="absolute top-3.5 left-3 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.email}
                      className="w-full pl-10 pr-4 py-3 bg-background/50 text-foreground rounded-none focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground transition-all"
                      required
                      aria-label={t.contact.email}
                    />
                  </div>
                </motion.div>
                <motion.div
                  custom={2}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="relative">
                    <MessageCircle className="absolute top-3.5 left-3 text-muted-foreground" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.contact.subject}
                      className="w-full pl-10 pr-4 py-3 bg-background/50 text-foreground rounded-none focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground transition-all"
                      required
                      aria-label={t.contact.subject}
                    />
                  </div>
                </motion.div>
                <motion.div
                  custom={3}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full pl-4 pr-4 py-3 bg-background/50 text-foreground rounded-none h-36 resize-none focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground transition-all"
                    required
                    aria-label={t.contact.message}
                  />
                </motion.div>
                <motion.button
                  title={isSubmitting ? t.contact.sending : t.contact.send}
                  type="submit"
                  className={cn(
                    buttonVariants({
                      className:
                        "w-full py-3 rounded-none flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                    }),
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> {t.contact.send}
                    </>
                  )}
                </motion.button>
                {status && (
                  <motion.p
                    className={`text-center text-sm ${
                      status === t.contact.success
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
