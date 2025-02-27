import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";

// template_rc9e7gg
// service_0v13jko
// P3sP7uroiJUDB6cno

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0v13jko",
        "template_rc9e7gg",
        {
          from_name: form.name,
          to_name: "Harsh",
          from_email: form.email,
          to_email: "harshuu9982@gmail.com",
          message: form.message,
        },
        "P3sP7uroiJUDB6cno"
      )
      .then(() => {
        setLoading(false);
        alert("I will get back to you as soon as possible");
        setForm({ name: "", message: "", email: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something Went Wrong");
      });
  };

  return (
    <section id="contact" className="w-full relative py-16">
      <div className="mx-auto sm:px-16 px-6 max-w-7xl flex-col-reverse flex xl:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-[0.75] bg-[#0B0D22] p-8 rounded-2xl"
        >
          <p className="text-sm text-gray-500">Get In Touch</p>
          <p className="text-3xl font-semibold">Contact</p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Name:</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Email:</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your mail"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Message:</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="rounded-xl w-fit px-8 py-3 bg-tertiary outline-none font-bold shadow-md shadow-primary text-white"
            >
              {loading ? "Sending ..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
