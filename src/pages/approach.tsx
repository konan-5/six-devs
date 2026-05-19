import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import PageLayout from "@/components/layout/page-layout";

const METHODOLOGY_IMAGE = "/assets/approach-phase01-image.png";
const INTEGRITY_IMAGE = "/assets/approach-integrity-image.png";
const EXPERTISE_IMAGE = "/assets/approach-expertise-image.png";

const TEAM_MEMBERS = [
  { nickname: "Clau", role: "CEO", image: "/avatars/1.png" },
  { nickname: "Konan", role: "Co-founder, Technical Director", image: "/avatars/2.png" },
  { nickname: "Rustinja", role: "Principal Engineer", image: "/avatars/4.jpg" },
  { nickname: "SerendipitySeeker", role: "Full-Stack Engineer", image: "/avatars/3.jpg" },
  { nickname: "Callum", role: "Backend Engineer", image: "/avatars/5.jpg" },
];

const PHASES = [
  {
    number: "01",
    title: "Discovery & Blueprints",
    body: "We don't start with code. We start with structural analysis. We map every edge case, every potential bottleneck, and every security vector to create a technical blueprint that serves as the project's constitution.",
  },
  {
    number: "02",
    title: "Foundational Assembly",
    body: "Using the blueprint, we forge the core infrastructure. This is where sovereignty is built—ensuring the system is self-contained, performant, and independent of fragile third-party dependencies.",
  },
  {
    number: "03",
    title: "The Stress Test",
    body: "A SixDevs product never leaves the lab without a trial by fire. We subject the system to simulated chaos—network partitioning, massive load spikes, and adversarial attacks—to ensure its signature remains unbroken.",
  },
];

const VP = { once: true, margin: "-80px" };

export default function ApproachPage() {
  const [activePhase, setActivePhase] = useState(0);
  const { fadeUp, fadeIn, transition, slowTransition } = useMotionConfig();

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative min-h-[541px] bg-[#060a10] overflow-hidden pt-20">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ mixBlendMode: "screen", opacity: 0.08 }}
          aria-hidden="true"
        >
          <source src="/assets/expertise-hero-bg.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 230, height: 230, top: -85, left: -39, background: "#7D1113", filter: "blur(175px)" }}
          aria-hidden="true"
        />
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col items-center text-center pt-10 pb-16 gap-6">
          <motion.p
            className="text-[18px] font-light uppercase tracking-[0.17em] text-[#fbe9a2]"
            style={{ fontFamily: "var(--font-poppins)" }}
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ ...transition, delay: 0 }}
          >
            Our Philosophy
          </motion.p>
          <motion.h1
            className="text-[40px] md:text-[64px] lg:text-[92px] font-normal leading-[1.05] text-white max-w-[1223px]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ ...transition, delay: 0.1 }}
          >
            Engineering is not a service it is a signature
          </motion.h1>
          <motion.p
            className="text-[15px] md:text-[16px] text-white leading-[34px] max-w-[890px] font-sans"
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ ...transition, delay: 0.2 }}
          >
            SixDevs was founded on the principle that code is structural integrity. We do not
            "build features"—we architect sovereign systems designed for the next century of computing
          </motion.p>
        </div>
      </section>

      {/* The Collective */}
      <section className="bg-[#fdfdfd] py-20">
        <div className="flex flex-col items-center gap-10">
          <motion.div
            className="flex flex-col items-center gap-[38px] px-6 w-full max-w-[871px] mx-auto text-center"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} transition={transition}
          >
            <div className="flex flex-col items-center gap-6 max-w-[516px] w-full">
              <h2 className="text-[46px] md:text-[55px] font-normal text-[#0a0402]" style={{ fontFamily: "var(--font-noto-serif)" }}>
                The Collective
              </h2>
              <p className="text-[18px] uppercase tracking-[0.13em] font-sans" style={{ color: "#650c0e" }}>
                Five Sovereign Engineers. One Unified Ethos.
              </p>
            </div>
            <p className="text-[16px] text-[#0a0402] leading-[27px] font-sans text-center">
              Every project is personally overseen by our five founding partners. No junior
              associates. No hand-offs. Direct engineering authority from inception to deployment.
            </p>
          </motion.div>

          <motion.div
            className="max-w-[1320px] w-full mx-auto px-6"
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={VP}
            transition={{ ...slowTransition, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.image}
                  className="group flex flex-col items-center gap-5 rounded-[10px] bg-white border border-black/10 px-4 py-8 md:px-6 md:py-10 shadow-sm"
                >
                  <div className="relative shrink-0 w-full flex justify-center">
                    <div
                      className="rounded-full p-[3px]"
                      style={{ background: "linear-gradient(135deg, #650c0e 0%, #fbe9a2 100%)" }}
                    >
                      <img
                        src={member.image}
                        alt={member.nickname}
                        className="w-[min(140px,55vw)] h-[min(140px,55vw)] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <p
                      className="text-[16px] md:text-[18px] font-medium text-[#0a0402] leading-tight"
                      style={{ fontFamily: "var(--font-noto-serif)" }}
                    >
                      {member.nickname}
                    </p>
                    <p className="text-[13px] md:text-[14px] text-[#0a0402]/60 font-sans leading-snug">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Methodology */}
      <section className="bg-[#fdfdfd] py-20 border-t border-black/5">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div
            className="flex flex-col items-center gap-4 mb-16 text-center"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} transition={transition}
          >
            <p className="text-[14px] md:text-[18px] uppercase tracking-[0.13em] font-sans" style={{ color: "#650c0e" }}>
              The Methodology / Phase 01 — 03
            </p>
            <h2
              className="text-[40px] md:text-[55px] font-normal text-[#0a0402] leading-[1.05]"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              The Rigorous Path from<br />Concept to Concrete.
            </h2>
          </motion.div>

          {/* Phase stepper */}
          <motion.div
            className="flex items-start justify-center mb-16"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}
            transition={{ ...transition, delay: 0.1 }}
          >
            {PHASES.map((phase, i) => (
              <div key={phase.number} className="flex items-start">
                <button
                  onClick={() => setActivePhase(i)}
                  className="flex flex-col items-center gap-4 w-[90px] sm:w-[140px] md:w-[200px]"
                >
                  <div
                    className="w-[83px] h-[83px] rounded-full flex items-center justify-center transition-colors"
                    style={{ background: i === activePhase ? "rgba(101,12,14,0.08)" : "rgba(101,12,14,0.05)" }}
                  >
                    <span
                      className="text-[22px] md:text-[25px] font-normal transition-colors"
                      style={{
                        fontFamily: "var(--font-poppins)",
                        color: i === activePhase ? "#650c0e" : "rgba(0,0,0,0.3)",
                        letterSpacing: "0.13em",
                      }}
                    >
                      {phase.number}
                    </span>
                  </div>
                  <span
                    className="text-[14px] md:text-[16px] font-normal text-center leading-tight transition-colors"
                    style={{
                      fontFamily: "var(--font-noto-serif)",
                      color: i === activePhase ? "#640c0d" : "#0a0402",
                    }}
                  >
                    {phase.title}
                  </span>
                </button>

                {i < PHASES.length - 1 && (
                  <div className="flex-1 mt-[41px] mx-1">
                    <div
                      className="h-[2px] w-full"
                      style={{ background: "rgba(101,12,14,0.3)" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Phase illustration */}
          <motion.div
            className="flex justify-center mb-10"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}
            transition={{ ...transition, delay: 0.15 }}
          >
            <div className="relative w-full max-w-[591px]" style={{ aspectRatio: "590.89 / 397.09" }}>
              {/* Glow left */}
              <div className="absolute rounded-full pointer-events-none"
                style={{ width: "23.9%", height: "35.6%", left: "0%", top: "17.9%", background: "#7D1113", opacity: 0.4, filter: "blur(140px)" }}
              />
              {/* Glow right */}
              <div className="absolute rounded-full pointer-events-none"
                style={{ width: "23.9%", height: "35.6%", left: "76.1%", top: "45.7%", background: "#7D1113", opacity: 0.4, filter: "blur(140px)" }}
              />
              {/* Rect 54 — smaller card, peeks from top behind larger */}
              <div className="absolute bg-white"
                style={{ left: "14.3%", top: "0%", width: "70.8%", height: "75.2%", borderRadius: 37, boxShadow: "0px 4px 114px 10px rgba(0,0,0,0.03)" }}
              />
              {/* Rect 53 — larger front card, covers most of smaller */}
              <div className="absolute bg-white"
                style={{ left: "4.2%", top: "7%", width: "91.1%", height: "93%", borderRadius: 37, boxShadow: "0px 4px 114px 10px rgba(0,0,0,0.03)" }}
              />
              <img
                src={METHODOLOGY_IMAGE}
                alt="Methodology illustration"
                className="absolute object-contain"
                style={{ left: "17.8%", top: "15.1%", width: "64.4%", height: "76.9%" }}
              />
            </div>
          </motion.div>

          {/* Phase description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activePhase}
              className="text-[16px] text-[#0a0402] leading-[1.8] font-sans max-w-[944px] mx-auto text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {PHASES[activePhase].body}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>

      {/* About A Project */}
      <section className="py-20" style={{ background: "#EEEEEE" }}>
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.h2
            className="text-[40px] md:text-[55px] font-normal text-[#111111] text-center mb-12"
            style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "1.05" }}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} transition={transition}
          >
            About A Project
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Structural Integrity",
                body: "We adhere to the 'no-line' rule of physical architecture. Our digital structures are defined by tonal shifts and calculated negative space, echoing the precision of high-end blueprints.",
                image: INTEGRITY_IMAGE,
              },
              {
                title: "Expertise Stack",
                body: "From Distributed Systems to Kernel Optimization, each founder brings a specific technical signature that ensures no part of the architecture is left to chance.",
                image: EXPERTISE_IMAGE,
              },
            ].map(({ title, body, image }, i) => (
              <motion.div
                key={title}
                className="bg-white border border-black/10 rounded-[5px] overflow-hidden flex flex-col"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}
                transition={{ ...transition, delay: i * 0.1 }}
              >
                <div className="px-6 pt-6">
                  <img src={image} alt={title} className="w-full h-[295px] object-cover rounded-[5px]" />
                </div>
                <div className="p-6 sm:pl-[45px] sm:pr-10 sm:pt-11 sm:pb-14 flex flex-col gap-[21px]">
                  <h3
                    className="text-[30px] font-normal text-[#111111]"
                    style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "37px" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[16px] text-[#111111]"
                    style={{ fontFamily: "var(--font-poppins)", lineHeight: "27px" }}
                  >{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} transition={transition}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[58px] text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans"
            >
              Inquire About A Project
              <span className="flex items-center justify-center bg-white rounded-full w-[46px] h-[46px] shrink-0">
                <ArrowRight className="w-5 h-5 text-[#060a10]" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
