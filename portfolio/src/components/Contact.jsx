import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  // ✅ RETURN MUST BE INSIDE FUNCTION
  return (
    <section id="contact" className="px-10 md:px-20 py-20">
      <h2 className="text-3xl font-bold mb-8 text-orange-500">
        Contact Me
      </h2>

      <div className="mb-10 space-y-3">
        <p className="text-gray-300">
          📧 Email:{" "}
          <a
            href="mailto: rakshitabilki5@gmail.com"
            className="text-orange-400 hover:underline"
          >
            rakshitabilki5@gmail.com
          </a>
        </p>

        <p className="text-gray-300">
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/rakshita-bilki-45bbb632a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
           linkedin.com/in/rakshita-bilki-45bbb632a
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-4 rounded bg-[#1f2937]"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-4 rounded bg-[#1f2937]"
          required
        />

        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-4 rounded bg-[#1f2937]"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-orange-500 px-6 py-3 rounded-md hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
