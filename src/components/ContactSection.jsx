import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

// --- Animation Variants ---
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset(); // Clear the form after sending
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Touch</span>
          </h2>
          <p className="text-slate-300/80 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {/* Email */}
                <motion.div variants={itemVariant} className="flex items-start space-x-5 group">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:hello@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
                      hello@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariant} className="flex items-start space-x-5 group">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div variants={itemVariant} className="flex items-start space-x-5 group">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <span className="text-slate-400">
                      India
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="font-semibold text-white mb-6">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <Linkedin size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Twitter size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                  <Instagram size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                  <Twitch size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)]"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Send a Message</h3>

            {/* Note: Moved onSubmit to the form tag */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  placeholder="Oshim Raeen"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  placeholder="john@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                )}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending Transmission...</span>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};