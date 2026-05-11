import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import PageLayout from "@/components/layout/page-layout";

const PROJECT_TYPES = [
  "Web2 Product Engineering",
  "Web3 / Smart Contracts",
  "AI Integration",
  "Infrastructure",
  "Security Audit",
  "Other",
];

const VP = { once: true, margin: "-80px" };

export default function ContactPage() {
  const [projectType, setProjectType] = useState("");
  const { fadeUp, slideLeft, transition } = useMotionConfig();

  return (
    <PageLayout newsletterVariant="dispatch">
      {/* Header */}
      <section className="relative min-h-[541px] bg-[#060a10] overflow-hidden pt-[117px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ mixBlendMode: "screen", opacity: 0.08 }}
          aria-hidden="true"
        >
          <source src="/assets/expertise-hero-bg.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 230,
            height: 230,
            top: -85,
            left: -39,
            background: "#7D1113",
            filter: "blur(175px)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col items-center text-center pt-10 pb-16 gap-6">
          <motion.p
            className="text-[18px] font-light uppercase tracking-[0.17em] text-[#fbe9a2]"
            style={{ fontFamily: "var(--font-poppins)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0 }}
          >
            Technical Leadership
          </motion.p>
          <motion.h1
            className="text-[52px] md:text-[76px] lg:text-[92px] font-normal leading-[1] text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.1 }}
          >
            Start the Conversation.
          </motion.h1>
          <motion.p
            className="text-[15px] md:text-[16px] text-white leading-[34px] font-sans"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
          >
            Direct access to our technical leadership. No intermediaries.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#fdfdfd] py-20 relative overflow-hidden">
        <div
          className="absolute right-[-99px] top-[173px] w-[890px] h-[890px] opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(101,12,14,0.25) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          {/* Info banners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { label: "Response Time", value: "Estimated response time: 24-48 hours" },
              { label: "Privacy Protocol", value: "Secure communication guaranteed." },
            ].map(({ label, value }, i) => (
              <motion.div
                key={label}
                className="bg-[rgba(101,12,14,0.05)] rounded-[5px] px-8 py-6"
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                transition={{ ...transition, delay: i * 0.08 }}
              >
                <p
                  className="text-[13px] uppercase tracking-[2.4px] font-sans mb-2"
                  style={{ color: "#650c0e" }}
                >
                  {label}
                </p>
                <p className="text-[16px] text-[#0a0402] font-sans">{value}</p>
              </motion.div>
            ))}
          </div>

          <motion.form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={{ ...transition, delay: 0.15 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  className="text-[18px] font-normal text-[#650c0e]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="bg-white border border-black/20 rounded-[5px] h-[78px] px-5 text-[16px] text-[#0a0402] font-sans outline-none focus:border-[#650c0e] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[18px] font-normal text-[#650c0e]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  Company/Protocol
                </label>
                <input
                  type="text"
                  placeholder="Your company or protocol name"
                  className="bg-white border border-black/20 rounded-[5px] h-[78px] px-5 text-[16px] text-[#0a0402] font-sans outline-none focus:border-[#650c0e] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-[18px] font-normal text-[#650c0e]"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                Project Type
              </label>
              <div className="relative">
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="appearance-none bg-white border border-black/20 rounded-[5px] h-[78px] px-5 text-[16px] text-[#0a0402] font-sans outline-none focus:border-[#650c0e] transition-colors w-full"
                >
                  <option value="" disabled>
                    Select Discipline
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="20"
                    height="10"
                    viewBox="0 0 20 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 1l9 8 9-8" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-[18px] font-normal text-[#650c0e]"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                Project Details
              </label>
              <textarea
                placeholder="Detail your technical requirements and objectives..."
                rows={8}
                className="bg-white border border-black/20 rounded-[5px] px-5 py-5 text-[16px] text-[#0a0402] font-sans outline-none focus:border-[#650c0e] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[58px] text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans mt-2"
            >
              Submit Inquiry
              <span className="flex items-center justify-center bg-white rounded-full w-[46px] h-[46px] shrink-0">
                <ArrowRight className="w-5 h-5 text-[#060a10]" />
              </span>
            </button>
          </motion.form>
        </div>
      </section>


    </PageLayout>
  );
}
