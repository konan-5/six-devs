import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import PageLayout from "@/components/layout/page-layout";
import CategoryModernProgrammingIcon from "@/components/svg/CategoryModernProgrammingIcon";
import CategoryAgenticAIIcon from "@/components/svg/CategoryAgenticAIIcon";
import CategoryWeb3ArchitectureIcon from "@/components/svg/CategoryWeb3ArchitectureIcon";
import CategoryCyberSovereigntyIcon from "@/components/svg/CategoryCyberSovereigntyIcon";

const ARTICLE_MAIN = "/assets/insights-article-main.png";
const ARTICLE_1 = "/assets/insights-article-1.png";
const ARTICLE_2 = "/assets/insights-article-2.png";

const CATEGORIES = [
  {
    label: "Modern Programming",
    description: "Functional patterns in the age of generative code.",
    Icon: CategoryModernProgrammingIcon,
  },
  {
    label: "Agentic AI",
    description: "Developing autonomous reasoning loops for enterprise.",
    Icon: CategoryAgenticAIIcon,
  },
  {
    label: "Web3 Architecture",
    description: "The reality of zero-knowledge proofs and scaling.",
    Icon: CategoryWeb3ArchitectureIcon,
  },
  {
    label: "Cyber-Sovereignty",
    description: "Hardening infrastructure against state-level actors.",
    Icon: CategoryCyberSovereigntyIcon,
  },
];

const ARTICLES = [
  {
    tag: "Case Study 04",
    title: "LLM-Native Development Workflows",
    description:
      "How SixDevs leverages specialized autonomous agents to accelerate legacy codebase migrations by 400%.",
    image: ARTICLE_1,
  },
  {
    tag: "Engineering Pattern",
    title: "Rust vs C++: High Performance Systems",
    description:
      "The economic argument for memory safety in mission-critical sovereign financial systems.",
    image: ARTICLE_2,
  },
];

const VP = { once: true, margin: "-100px" };

export default function InsightsPage() {
  const { fadeUp, slideLeft, slideRight, transition, slowTransition } = useMotionConfig();

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
            Technical Editorial
          </motion.p>
          <motion.h1
            className="text-[52px] md:text-[76px] lg:text-[92px] font-normal leading-[1] text-white max-w-[1223px]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.1 }}
          >
            Insights &amp;
            <br />
            Architectural Thought.
          </motion.h1>
          <motion.p
            className="text-[15px] md:text-[16px] text-white leading-[34px] max-w-[930px] font-sans"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
          >
            Strategic engineering intelligence for the modern era. We explore the intersection of
            high-frequency AI integration, decentralized trust architectures, and the future of
            sovereign codebases.
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[#fdfdfd] pt-[108px] pb-[91px]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {/* Main featured */}
            <motion.div
              className="flex flex-col"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={transition}
            >
              <div className="bg-[#10121c] rounded-[5px] overflow-hidden h-[378px]">
                <img
                  src={ARTICLE_MAIN}
                  alt="The Sovereign Stack"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 pt-10">
                <p
                  className="text-[18px] uppercase font-sans"
                  style={{ color: "#650c0e", letterSpacing: "0.13em", lineHeight: "13px" }}
                >
                  Decentralization / 12 Min Read
                </p>
                <h2
                  className="text-[30px] font-normal text-[#0a0402]"
                  style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "39px" }}
                >
                  The Sovereign Stack: Engineering Beyond Cloud Dependencies
                </h2>
                <p
                  className="text-[16px] text-[#0a0402]"
                  style={{ fontFamily: "var(--font-poppins)", lineHeight: "27px" }}
                >
                  A deep dive into building infrastructure that survives the coming era of platform
                  volatility. How we are implementing zero-trust deployment pipelines for the next
                  generation of fintech.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[58px] text-[14px] font-medium uppercase tracking-[0.04em] text-white hover:bg-[#7a0f12] transition-colors font-sans mt-2"
                >
                  Read Manuscript
                  <span className="flex items-center justify-center bg-white rounded-full w-[46px] h-[46px] shrink-0">
                    <ArrowRight className="w-5 h-5 text-[#650c0e]" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Side articles */}
            <motion.div
              className="flex flex-col gap-[30px]"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={{ ...slowTransition, delay: 0.1 }}
            >
              {ARTICLES.map((article) => (
                <div
                  key={article.title}
                  className="bg-white border border-black/10 rounded-[5px] flex flex-col sm:flex-row overflow-hidden"
                  style={{ minHeight: "341px" }}
                >
                  <div className="sm:w-[206px] shrink-0 overflow-hidden bg-[#10121c]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-6 flex-1">
                    <p
                      className="text-[18px] uppercase font-sans"
                      style={{ color: "#650c0e", letterSpacing: "0.13em", lineHeight: "13px" }}
                    >
                      {article.tag}
                    </p>
                    <h3
                      className="text-[30px] font-normal text-[#0a0402]"
                      style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "38px" }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="text-[16px] text-[#0a0402]"
                      style={{ fontFamily: "var(--font-poppins)", lineHeight: "27px" }}
                    >
                      {article.description}
                    </p>
                    <Link
                      to="#"
                      className="mt-auto self-start w-[42px] h-[42px] rounded-full bg-[#650c0e] flex items-center justify-center hover:bg-[#7a0f12] transition-colors shrink-0"
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-[119px]" style={{ background: "#f4f4f4" }}>
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start gap-[52px]">
            {CATEGORIES.map(({ label, description, Icon }, index) => (
              <React.Fragment key={label}>
                <motion.div
                  className="flex flex-col gap-[23px] w-full sm:w-[249px] shrink-0"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VP}
                  transition={{ ...transition, delay: index * 0.1 }}
                >
                  <Icon />
                  <div className="flex flex-col gap-[13px]">
                    <h3
                      className="text-[30px] font-normal text-[#0a0402]"
                      style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "33px" }}
                    >
                      {label}
                    </h3>
                    <p
                      className="text-[16px] text-[#0a0402]"
                      style={{ fontFamily: "var(--font-poppins)", lineHeight: "27px" }}
                    >
                      {description}
                    </p>
                  </div>
                </motion.div>
                {index < CATEGORIES.length - 1 && (
                  <div
                    className="hidden sm:block w-px h-[245px] shrink-0 self-center"
                    style={{ background: "rgba(10, 4, 2, 0.15)" }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
