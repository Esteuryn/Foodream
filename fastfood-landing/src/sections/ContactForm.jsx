import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:3000/api/contact", {	
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full bg-neutral-800 p-3 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full bg-neutral-800 p-3 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            className="w-full bg-neutral-800 p-3 rounded"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            className="w-full bg-neutral-800 p-3 rounded"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            Send Message
          </button>

          {status === "success" && <p className="text-green-400">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
