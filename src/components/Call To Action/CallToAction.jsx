import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="w-[90%] mx-auto my-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-(--brand-soft) dark:bg-[#0f2e35] border border-(--brand)/20 p-10 md:p-16 text-center"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-linear-to-r from-(--brand)/10 to-transparent blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--brand)">
            Ready to Take Control of Your Financial Future?
          </h2>

          <p className="text-base-content/70 text-lg">
            Apply for loans, manage applications, and track your finances
            securely — all in one powerful platform built for simplicity and
            trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/application"
              className="btn rounded-2xl bg-(--brand) text-white px-8 hover:bg-[#245a66] transition"
            >
              Apply for Loan
            </Link>
            <Link
              to="/register"
              className="btn rounded-2xl bg-transparent border-2 border-(--brand) text-(--brand) hover:bg-(--brand) hover:text-white transition"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
