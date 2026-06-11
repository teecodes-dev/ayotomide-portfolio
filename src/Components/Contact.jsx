import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleEmailSend = (e) => {
    e.preventDefault();

    const subject = form.subject || `Portfolio Message from ${form.name}`;

    const body = `
Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}

${form.file ? `Attachment: ${form.file.name}` : ""}
`;

    window.location.href = `mailto:ayotomideadeyanju@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  
  const handleWhatsAppSend = () => {
    const message = `
Hello Ayotomide 👋

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}
`;

    const url = `https://wa.me/2348061520324?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-32 container-custom">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Have a project or opportunity? Send a message and I’ll respond as soon
          as possible.
        </p>
      </motion.div>

      
      <div className="grid md:grid-cols-2 gap-10">
        
        <motion.form
          onSubmit={handleEmailSend}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 bg-white/5 border border-white/10 p-6 rounded-xl"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg outline-none"
          />

          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg outline-none"
          />

          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg outline-none"
          />

          
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            className="
              w-full
              p-3
              bg-slate-900
              border border-slate-700
              rounded-lg
              outline-none
              resize-none
            "
          />

         
          <div className="text-slate-400 text-sm">
            <label className="block mb-1">Attach File (optional)</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full text-sm"
            />
          </div>

         
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="submit"
              className="
                bg-gradient-to-r from-violet-500 to-purple-600
                hover:from-violet-600 hover:to-purple-700
                px-5 py-3
                rounded-lg
                transition
                font-medium
                shadow-lg
                hover:scale-[1.02]
              "
            >
              Send Email
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="
                bg-gradient-to-r from-green-500 to-emerald-600
                hover:from-green-600 hover:to-emerald-700
                px-5 py-3
                rounded-lg
                transition
                font-medium
                shadow-lg
                hover:scale-[1.02]
              "
            >
              WhatsApp
            </button>
          </div>
        </motion.form>

        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
            <FaEnvelope className="text-violet-500 mb-2" />
            <p className="text-slate-300">ayotomideadeyanju@gmail.com</p>
          </div>

          <a
            href="https://github.com/teecodes-dev"
            target="_blank"
            className="p-5 block bg-white/5 border border-white/10 rounded-xl hover:border-violet-500/40 transition"
          >
            <FaGithub className="text-2xl mb-2" />
            GitHub Profile
          </a>

          <a
            href="https://ng.linkedin.com/in/adeyanju-ayotomide"
            target="_blank"
            className="p-5 block bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/40 transition"
          >
            <FaLinkedin className="text-2xl mb-2 text-blue-400" />
            LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
