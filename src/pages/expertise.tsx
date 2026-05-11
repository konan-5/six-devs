import { Link } from "react-router";
import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import PageLayout from "@/components/layout/page-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Web2Icon from "@/components/svg/Web2Icon";
import Web3Icon from "@/components/svg/Web3Icon";
import AIModelIcon from "@/components/svg/AIModelIcon";

const WEB2_IMAGE = "/assets/expertise-web2-image.png";
const WEB3_IMAGE = "/assets/expertise-web3-image.png";
const AI_IMAGE = "/assets/expertise-ai-image.png";

const VP = { once: true, margin: "-100px" };

export default function ExpertisePage() {
  const { fadeUp, fadeIn, slideLeft, slideRight, transition, slowTransition } = useMotionConfig();

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
            Programming Agency
          </motion.p>
          <motion.h1
            className="text-[52px] md:text-[76px] lg:text-[92px] font-normal leading-[1] text-white max-w-[1223px]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.1 }}
          >
            Architecting the Sovereign Web.
          </motion.h1>
          <motion.p
            className="text-[15px] md:text-[16px] text-white leading-[34px] max-w-[890px] font-sans"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
          >
            We don't build software; we engineer digital equity. Our founder-led team bridges the
            gap between legacy reliability and frontier innovation across Web2, Web3, and AI.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 mt-4 pb-4 w-full">
            {[
              { label: "Web2 Product Engineering", Icon: Web2Icon },
              { label: "Web3 & Smart Contracts", Icon: Web3Icon },
              { label: "AI Model Integration", Icon: AIModelIcon },
            ].map(({ label, Icon }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-4"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...transition, delay: 0.35 + i * 0.1 }}
              >
                <div
                  className="w-[68px] h-[68px] rounded-full shrink-0 flex items-center justify-center"
                  style={{
                    background: "rgba(251, 233, 162, 0.08)",
                    border: "1px solid rgba(251, 233, 162, 0.15)",
                  }}
                >
                  <Icon />
                </div>
                <span className="text-[16px] text-white font-sans whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integrations */}
      <section className="bg-[#fdfdfd] py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[200px]">
            <motion.div
              className="flex flex-col gap-8 flex-1 max-w-[544px]"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={transition}
            >
              <h2
                className="text-[46px] md:text-[55px] font-normal text-[#0a0402] leading-[1.05]"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                AI Integrations
              </h2>
              <p className="text-[16px] text-[#060a10] leading-[1.7] font-sans">
                The future of engineering is hybrid. We integrate custom-tuned models directly into
                your workflows, ensuring AI acts as an accelerator, not a bolt-on.
              </p>
              <Accordion className="w-full">
                {[
                  {
                    title: "Custom RAG Pipelines",
                    content:
                      "We architect retrieval-augmented generation pipelines tailored to your proprietary data, enabling LLMs to reason over your knowledge base with precision and low hallucination rates.",
                  },
                  {
                    title: "Agentic Workflows",
                    content:
                      "Multi-step autonomous agents that orchestrate tools, APIs, and decision logic — built for reliability in production, not just demos.",
                  },
                  {
                    title: "Vector Database Management",
                    content:
                      "End-to-end design and operation of vector stores including embedding strategies, indexing, hybrid search, and lifecycle management for enterprise-scale retrieval.",
                  },
                ].map((item) => (
                  <AccordionItem
                    key={item.title}
                    value={item.title}
                    className="border-b border-black/10"
                  >
                    <AccordionTrigger className="py-5 text-[16px] text-[#060a10] font-sans font-normal hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                      <span className="flex-1 text-left">{item.title}</span>
                      <div className="w-[43px] h-[43px] rounded-full bg-[#f0f0f0] flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-[#060a10]/60 font-sans leading-[1.7] pb-5">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
            <motion.div
              className="w-full lg:w-[579px] shrink-0 aspect-square rounded-[20px] overflow-hidden"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={{ ...slowTransition, delay: 0.1 }}
            >
              <img src={AI_IMAGE} alt="AI Integrations" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web3 Protocols */}
      <section className="bg-[#111] py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="w-full lg:w-[579px] shrink-0 aspect-square rounded-[20px] overflow-hidden"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={{ ...slowTransition, delay: 0.1 }}
            >
              <img
                src={WEB3_IMAGE}
                alt="Web3 Protocols"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-8 flex-1 max-w-[482px]"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={transition}
            >
              <h2
                className="text-[46px] md:text-[55px] font-normal text-white leading-[1.05]"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                Web3 Protocols &amp; Contracts
              </h2>
              <p className="text-[16px] text-white/80 leading-[1.7] font-sans">
                Security-first development for the decentralized frontier. We build hardened smart
                contracts and custom DeFi protocols where precision is the only currency that
                matters.
              </p>
              <div className="flex flex-col gap-6 pt-4">
                <div className="border-t border-white/10 pt-6">
                  <p className="text-[14px] uppercase tracking-[2.4px] text-white font-sans mb-2">
                    Auditing
                  </p>
                  <p className="text-[16px] text-white/70 font-sans">
                    Zero-compromise security analysis of existing logic.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-[14px] uppercase tracking-[2.4px] text-white font-sans mb-2">
                    EVM Customization
                  </p>
                  <p className="text-[16px] text-white/70 font-sans">
                    Bespoke protocol engineering on Ethereum and L2s.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web2 Product Engineering */}
      <section className="bg-[#fdfdfd] py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[317px]">
            <motion.div
              className="flex flex-col gap-8 flex-1 max-w-[421px]"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={transition}
            >
              <h2
                className="text-[46px] md:text-[55px] font-normal text-[#0a0402] leading-[1.05]"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                Web2 Product Engineering
              </h2>
              <p className="text-[16px] text-[#060a10] leading-[1.7] font-sans">
                Scalable systems for the modern enterprise. We focus on high-performance backends
                and meticulously crafted user interfaces that convert technical complexity into
                seamless interaction.
              </p>
              <ul className="flex flex-col gap-0 font-sans text-[16px] text-[#060a10]">
                {[
                  "Microservices Architecture",
                  "Real-time Data Engines",
                  "Cloud Infrastructure",
                  "Performance Optimization",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-black/10 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#650c0e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="w-full lg:w-[579px] shrink-0 aspect-square rounded-[20px] overflow-hidden"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={{ ...slowTransition, delay: 0.1 }}
            >
              <img
                src={WEB2_IMAGE}
                alt="Web2 Product Engineering"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Senior-Only Mandate */}
      <section className="bg-[#fdfdfd] py-20 border-t border-black/5">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col items-center text-center gap-10">
          <motion.div
            className="flex flex-col gap-6 max-w-[981px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={transition}
          >
            <h2
              className="text-[46px] md:text-[55px] font-normal text-[#0a0402]"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              The Senior-Only Mandate.
            </h2>
            <p className="text-[16px] text-[#060a10] leading-[1.7] font-sans">
              At SixDevs, your project is never handed off to a junior associate. We maintain a
              small, elite roster where every line of code is reviewed or written by a founder.
              High-precision engineering requires high-accountability leadership.
            </p>
          </motion.div>
          <div className="flex items-center gap-16 md:gap-24">
            {[
              { stat: "100%", label: "Founder Led" },
              { stat: "12+", label: "Years Avg Exp." },
            ].map(({ stat, label }, i) => (
              <motion.div
                key={stat}
                className="flex flex-col items-center gap-2"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                transition={{ ...transition, delay: i * 0.1 }}
              >
                <span
                  className="text-[52px] md:text-[55px] font-normal text-[#640c0d]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  {stat}
                </span>
                <span className="text-[16px] text-[#060a10] font-sans">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </PageLayout>
  );
}
