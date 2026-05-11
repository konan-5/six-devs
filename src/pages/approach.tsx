import { useRef, useState, useCallback, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import PageLayout from "@/components/layout/page-layout";

const PHASE01_IMAGE = "/assets/approach-phase01-image.png";
const PHASE02_IMAGE = "/assets/approach-phase02-image.png";
const PHASE03_IMAGE = "/assets/approach-phase03-image.png";
const INTEGRITY_IMAGE = "/assets/approach-integrity-image.png";
const EXPERTISE_IMAGE = "/assets/approach-expertise-image.png";

const TEAM_MEMBERS = [
  { name: "Elias Thorne", role: "Distributed Systems", image: "/assets/team-1.png" },
  { name: "Elias Thorne", role: "Distributed Systems", image: "/assets/team-2.png" },
  { name: "Sarah Chen", role: "Quantum Security", image: "/assets/team-3.png" },
  { name: "Marcus Vogt", role: "Compiler Design", image: "/assets/team-4.png" },
  { name: "Elias Thorne", role: "Distributed Systems", image: "/assets/team-5.png" },
  { name: "Elias Thorne", role: "Distributed Systems", image: "/assets/team-6.png" },
];

const VP = { once: true, margin: "-80px" };

export default function ApproachPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { fadeUp, fadeIn, transition, slowTransition } = useMotionConfig();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = 252;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) setScrollProgress(252 / maxScroll);
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) setScrollProgress(el.scrollLeft / maxScroll);
  }, []);

  return (
    <PageLayout>
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
            Our Philosophy
          </motion.p>
          <motion.h1
            className="text-[40px] md:text-[64px] lg:text-[92px] font-normal leading-[1] text-white max-w-[1223px]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.1 }}
          >
            Engineering is not a service; it is a signature.
          </motion.h1>
          <motion.p
            className="text-[15px] md:text-[16px] text-white leading-[34px] max-w-[890px] font-sans"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
          >
            SixDevs was founded on the principle that code is structural integrity. We do not
            "build features"—we architect sovereign systems designed for the next century of
            computing.
          </motion.p>
        </div>
      </section>

      {/* The Collective */}
      <section className="bg-[#fdfdfd] py-20 overflow-hidden">
        <div className="flex flex-col items-center gap-10">
          <motion.div
            className="flex flex-col items-center gap-[38px] px-6 w-full max-w-[871px] mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={transition}
          >
            <div className="flex flex-col items-center gap-6 max-w-[516px] w-full">
              <h2
                className="text-[46px] md:text-[55px] font-normal text-[#0a0402]"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                The Collective
              </h2>
              <p
                className="text-[18px] uppercase tracking-[0.13em] font-sans"
                style={{ color: "#650c0e" }}
              >
                Six Sovereign Engineers. One Unified Ethos.
              </p>
            </div>
            <p className="text-[16px] text-[#0a0402] leading-[27px] font-sans">
              Every project is personally overseen by our six founding partners. No junior
              associates. No hand-offs. Direct engineering authority from inception to deployment.
            </p>
          </motion.div>

          <motion.div
            className="max-w-[1320px] w-full mx-auto px-6"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={{ ...slowTransition, delay: 0.1 }}
          >
            <div
              ref={scrollRef}
              className="overflow-x-auto [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
              onScroll={handleScroll}
            >
            <div className="flex flex-row gap-[25px] w-max">
              {TEAM_MEMBERS.map((member, i) => {
                const isFeature = i === 3;
                const isLuminosity = [0, 2, 4, 5].includes(i);
                return (
                  <div
                    key={i}
                    className="relative w-[397px] h-[397px] shrink-0 rounded-[10px] overflow-hidden"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={isLuminosity ? { mixBlendMode: "luminosity" } : undefined}
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 rounded-b-[10px]"
                      style={{
                        height: isFeature ? "164px" : "138px",
                        background: isFeature
                          ? "linear-gradient(180deg, rgba(100,12,13,0) 0%, #640C0D 100%)"
                          : "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)",
                      }}
                    />
                    <div className="absolute bottom-8 left-[39px]">
                      <p
                        className="text-[30px] font-normal text-white"
                        style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "51px" }}
                      >
                        {member.name}
                      </p>
                      <p className="text-[16px] text-white font-sans" style={{ lineHeight: "27px" }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </motion.div>

          <div
            className="relative w-[402px] max-w-[calc(100%-3rem)] h-[14px] rounded-[40px]"
            style={{ background: "rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.1)" }}
          >
            <div
              className="absolute left-0 top-0 h-full rounded-[40px] bg-[#640c0d]"
              style={{ width: `${Math.max(scrollProgress * 402, 24)}px`, transition: "width 0.1s linear" }}
            />
          </div>
        </div>
      </section>

      {/* The Methodology */}
      <section className="bg-[#fdfdfd] py-20 border-t border-black/5">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div
            className="flex flex-col gap-4 mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={transition}
          >
            <p
              className="text-[14px] uppercase tracking-[2.4px] font-sans"
              style={{ color: "#650c0e" }}
            >
              The Methodology / PHASE 01 — 03
            </p>
            <h2
              className="text-[40px] md:text-[55px] font-normal text-[#0a0402] max-w-[639px]"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              The Rigorous Path from Concept to Concrete.
            </h2>
          </motion.div>

          {/* Phase 01 + 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {[
              {
                phase: "Phase 01",
                title: "Discovery & Blueprints",
                body: "We don't start with code. We start with structural analysis. We map every edge case, every potential bottleneck, and every security vector to create a technical blueprint that serves as the project's constitution.",
                image: PHASE01_IMAGE,
                imageAlt: "Discovery & Blueprints",
                list: null,
              },
              {
                phase: "Phase 02",
                title: "Foundational Assembly",
                body: "Using the blueprint, we forge the core infrastructure. This is where sovereignty is built—ensuring the system is self-contained, performant, and independent of fragile third-party dependencies.",
                image: PHASE02_IMAGE,
                imageAlt: "Foundational Assembly",
                list: ["Low-Latency Kernels", "Zero-Trust Architecture", "Immutable Deployment"],
              },
            ].map(({ phase, title, body, image, imageAlt, list }, i) => (
              <motion.div
                key={phase}
                className="bg-white border border-black/10 rounded-[5px] p-10 flex flex-col gap-4 min-h-[534px]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                transition={{ ...transition, delay: i * 0.1 }}
              >
                <p
                  className="text-[14px] uppercase tracking-[2.4px] font-sans"
                  style={{ color: "#650c0e" }}
                >
                  {phase}
                </p>
                <h3
                  className="text-[30px] font-normal text-[#0a0402]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  {title}
                </h3>
                <p className="text-[16px] text-[#0a0402] leading-[1.7] font-sans flex-1">{body}</p>
                {list && (
                  <ul className="flex flex-col gap-1 font-sans text-[16px] text-[#0a0402] mt-2">
                    {list.map((item) => (
                      <li key={item} className="py-2 border-b border-black/10">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto overflow-hidden rounded-[10px]">
                  <img src={image} alt={imageAlt} className="w-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phase 03 */}
          <motion.div
            className="bg-white border border-black/10 rounded-[5px] p-10 flex flex-col items-center text-center gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={transition}
          >
            <p
              className="text-[14px] uppercase tracking-[2.4px] font-sans"
              style={{ color: "#650c0e" }}
            >
              Phase 03
            </p>
            <h3
              className="text-[30px] font-normal text-[#0a0402]"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              The Stress Test
            </h3>
            <p className="text-[16px] text-[#0a0402] leading-[1.7] font-sans max-w-[1104px]">
              A SixDevs product never leaves the lab without a trial by fire. We subject the system
              to simulated chaos—network partitioning, massive load spikes, and adversarial
              attacks—to ensure its signature remains unbroken.
            </p>
            <div className="max-w-[614px] w-full overflow-hidden rounded-[10px]">
              <img src={PHASE03_IMAGE} alt="The Stress Test" className="w-full object-cover" />
            </div>
          </motion.div>

          {/* Integrity + Expertise */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {[
              {
                title: "Structural Integrity",
                body: "We adhere to the 'no-line' rule of physical architecture. Our digital structures are defined by tonal shifts and calculated negative space, echoing the precision of high-end blueprints.",
                image: INTEGRITY_IMAGE,
                imageAlt: "Structural Integrity",
              },
              {
                title: "Expertise Stack",
                body: "From Distributed Systems to Kernel Optimization, each founder brings a specific technical signature that ensures no part of the architecture is left to chance.",
                image: EXPERTISE_IMAGE,
                imageAlt: "Expertise Stack",
              },
            ].map(({ title, body, image, imageAlt }, i) => (
              <motion.div
                key={title}
                className="bg-white border border-black/10 rounded-[5px] p-10 flex flex-col gap-4 min-h-[534px]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                transition={{ ...transition, delay: i * 0.1 }}
              >
                <h3
                  className="text-[30px] font-normal text-[#0a0402]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  {title}
                </h3>
                <p className="text-[16px] text-[#0a0402] leading-[1.7] font-sans">{body}</p>
                <div className="mt-auto overflow-hidden rounded-[10px]">
                  <img src={image} alt={imageAlt} className="w-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={transition}
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
