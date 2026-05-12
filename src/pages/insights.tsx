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
const ARTICLE_3 = "/assets/insights-article-3.png";

const CATEGORIES = [
  {
    label: "Modern Programming",
    description: "Functional patterns in the age of generative code.",
    Icon: CategoryModernProgrammingIcon,
  },
  {
    label: "Web3 Architecture",
    description: "The reality of zero-knowledge proofs and scaling.",
    Icon: CategoryWeb3ArchitectureIcon,
  },
  {
    label: "Agentic AI",
    description: "Developing autonomous reasoning loops for enterprise.",
    Icon: CategoryAgenticAIIcon,
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
    image: ARTICLE_1,
  },
  {
    tag: "Engineering Pattern",
    title: "Rust vs C++: High Performance Systems",
    image: ARTICLE_2,
  },
  {
    tag: "Decentralization",
    title: "The Sovereign Stack: Engineering Beyond Cloud Dependencies",
    image: ARTICLE_3,
  },
];

const VP = { once: true, margin: "-100px" };

export default function InsightsPage() {
  const { fadeUp, slideLeft, slideRight, transition, slowTransition } = useMotionConfig();

  return (
    <PageLayout newsletterVariant="dispatch">
      {/* Header */}
      <section className="relative min-h-[541px] bg-[#060a10] overflow-hidden pt-20">
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
          style={{ width: 230, height: 230, top: -85, left: -39, background: "#7D1113", filter: "blur(175px)" }}
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
      <section className="bg-[#fdfdfd] pt-[72px] pb-[91px]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] items-stretch">
            {/* Main featured — image bg with overlay */}
            <motion.div
              className="relative rounded-[5px] overflow-hidden min-h-[500px] flex flex-col"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={transition}
            >
              <img
                src={ARTICLE_MAIN}
                alt="The Sovereign Stack"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(6,10,16,0) 20%, rgba(6,10,16,0.95) 100%)" }}
              />
              <div className="relative z-10 flex flex-col gap-5 justify-end flex-1 p-8">
                <p
                  className="text-[13px] uppercase font-sans text-white/60"
                  style={{ letterSpacing: "0.13em" }}
                >
                  Decentralization / 12 Min Read
                </p>
                <h2
                  className="text-[28px] md:text-[30px] font-normal text-white"
                  style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "39px" }}
                >
                  The Sovereign Stack: Engineering Beyond Cloud Dependencies
                </h2>
                <p
                  className="text-[15px] text-white/70"
                  style={{ fontFamily: "var(--font-poppins)", lineHeight: "27px" }}
                >
                  A deep dive into building infrastructure that survives the coming era of platform
                  volatility. How we are implementing zero-trust deployment pipelines for the next
                  generation of fintech.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[52px] text-[13px] font-medium uppercase tracking-[0.04em] text-white hover:bg-[#7a0f12] transition-colors font-sans mt-2"
                >
                  Read Manuscript
                  <span className="flex items-center justify-center bg-white rounded-full w-[40px] h-[40px] shrink-0">
                    <ArrowRight className="w-4 h-4 text-[#650c0e]" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Side articles */}
            <motion.div
              className="flex flex-col gap-[22px]"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={{ ...slowTransition, delay: 0.1 }}
            >
              {ARTICLES.map((article) => (
                <div
                  key={article.title}
                  className="flex items-stretch border border-black/10 rounded-[5px] overflow-hidden bg-white flex-1"
                >
                  <div className="w-[120px] shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-5 flex-1 justify-center">
                    <p
                      className="text-[12px] uppercase font-sans text-[#650c0e]"
                      style={{ letterSpacing: "0.13em" }}
                    >
                      {article.tag}
                    </p>
                    <h3
                      className="text-[20px] md:text-[22px] font-normal text-[#0a0402]"
                      style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "1.3" }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center pr-5 shrink-0">
                    <Link
                      to="#"
                      aria-label={`Read ${article.title}`}
                      className="w-[42px] h-[42px] rounded-full border border-black/20 flex items-center justify-center hover:bg-[#650c0e] hover:border-[#650c0e] transition-colors group shrink-0"
                    >
                      <ArrowRight className="w-4 h-4 text-[#650c0e] group-hover:text-white transition-colors" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-[72px] bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CATEGORIES.map(({ label, description, Icon }, index) => (
              <motion.div
                key={label}
                className="flex items-center gap-5 md:gap-8 px-6 md:px-[60px] py-8 border border-[#D5D5D5] rounded-[10px] bg-white"
                style={{ boxShadow: "0px 4px 44px rgba(0,0,0,0.04)" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                transition={{ ...transition, delay: index * 0.1 }}
              >
                <div className="shrink-0">
                  <Icon />
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-[30px] font-normal text-[#650c0e]"
                    style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "33px" }}
                  >
                    {label}
                  </h3>
                  <p
                    className="text-[16px] text-[#0a0402]"
                    style={{ fontFamily: "var(--font-poppins)", lineHeight: "25px" }}
                  >
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
