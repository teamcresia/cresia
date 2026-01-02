import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const Contact = ({ onOpenProBono }) => {
  const EMPTY_FORM = {
    name: "",
    email: "",
    stage: "Idea / Pre-Revenue",
  };

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed");

      // clear data immediately
      setFormData(EMPTY_FORM);

      // hard UI switch
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  /* 🔥 HARD EXIT — THIS IS THE KEY FIX */
  if (success) {
    return (
      <section
        id="contact"
        className="py-32 bg-neutral-950 flex justify-center"
      >
        <div className="max-w-md text-center px-6">
          <h3 className="text-2xl text-white font-bold mb-4 font-serif">
            Request Submitted Successfully 🎉
          </h3>
          <p className="text-neutral-400 font-light mb-6">
            We’ve received your details and will get back to you shortly.
          </p>
          <p className="text-sm text-neutral-600">
            You can safely close this page.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-amber-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-neutral-900 border border-neutral-800 p-8 md:p-16 text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-serif">
            Ready to stabilize your scale?
          </h2>

          <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto font-light font-sans">
            Book a free 30-minute discovery call to see if your vision aligns with
            our systems.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-4 text-left font-sans"
          >
            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-950 border border-neutral-800 text-white p-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-neutral-950 border border-neutral-800 text-white p-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Current Stage
              </label>
              <select
                name="stage"
                value={formData.stage}
                onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-800 text-neutral-400 p-3 focus:outline-none focus:border-white transition-colors"
              >
                <option>Idea / Pre-Revenue</option>
                <option>Early Traction ($1k - $10k MRR)</option>
                <option>Scaling ($10k+ MRR)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-neutral-950 font-bold py-4 mt-4 hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{loading ? "Submitting..." : "Request Discovery Call"}</span>
              <ChevronRight size={16} />
            </button>

            {error && (
              <p className="text-red-500 text-sm text-center mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
