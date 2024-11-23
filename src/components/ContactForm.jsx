import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3000/send-email", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section id="contact" className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Contact Us
        </h2>
        <form className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-lg p-2"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border-gray-300 rounded-lg p-2"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-lg p-2"
              value={formData.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full border-gray-300 rounded-lg p-2"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            onClick={onSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
