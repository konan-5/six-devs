import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import PageLayout from "@/components/layout/page-layout";
import FintechCoreIcon from "@/components/svg/FintechCoreIcon";
import DistributedSystemsIcon from "@/components/svg/DistributedSystemsIcon";
import AIInfrastructureIcon from "@/components/svg/AIInfrastructureIcon";
import CaseStudy01Icon from "@/components/svg/CaseStudy01Icon";
import CaseStudy02Icon from "@/components/svg/CaseStudy02Icon";
import CaseStudy03Icon from "@/components/svg/CaseStudy03Icon";

const CS01_IMAGE = "/assets/project-cs01-image.png";
const CS02_IMAGE = "/assets/project-cs02-image.png";
const CS03_IMAGE = "/assets/project-cs03-image.png";

const VP = { once: true, margin: "-100px" };

export default function ProjectsPage() {
  const { fadeUp, slideLeft, slideRight, transition, slowTransition } = useMotionConfig();

  return (
    <PageLayout newsletterVariant="cta">
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
            Portfolio of Precision
          </motion.p>
          <motion.h1
            className="text-[52px] md:text-[76px] lg:text-[92px] font-normal leading-[1] text-white max-w-[900px]"
            style={{ fontFamily: "var(--font-noto-serif)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.1 }}
          >
            Projects &amp; Artifacts.
          </motion.h1>
          <motion.p
            className="text-[15px] md:text-[16px] text-white leading-[34px] max-w-[691px] font-sans"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
          >
            A curated selection of architectural engineering feats. We treat code as a high-stakes
            manuscript, balancing structural integrity with technical elegance.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-6 sm:gap-10 md:gap-12 mt-4 pb-4 w-full">
            {[
              { label: "Fintech Core", Icon: FintechCoreIcon },
              { label: "Distributed Systems", Icon: DistributedSystemsIcon },
              { label: "AI Infrastructure", Icon: AIInfrastructureIcon },
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
                <span className="text-[16px] text-white font-sans">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study 01 */}
      <section className="bg-[#fdfdfd] py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-10 lg:gap-16">
            <motion.div
              className="flex flex-col gap-8 flex-1 max-w-[573px]"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={transition}
            >
              <CaseStudy01Icon />
              <p
                className="text-[14px] uppercase tracking-[2.4px] font-sans"
                style={{ color: "#650c0e" }}
              >
                Case Study 01
              </p>
              <h2
                className="text-[46px] md:text-[55px] font-normal leading-[1.05] text-[#061b31]"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                Aura Ledger Engine
              </h2>
              <p className="text-[16px] text-[#060a10] leading-[1.7] font-sans">
                Re-engineering a high-frequency settlement engine processing $2B daily. The
                challenge was reducing latency from 150ms to &lt;10ms without compromising ACID
                compliance.
              </p>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-[30px] font-normal text-[#0a0402]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  The Result
                </h3>
                <p className="text-[16px] text-[#060a10] leading-[1.7] font-sans">
                  Successfully deployed a multi-threaded execution model that achieved 99.999%
                  uptime during the 2023 market volatility peaks.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3
                  className="text-[30px] font-normal text-[#0a0402]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  The Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Rust", "PostgreSQL", "Kafka", "AWS Nitro"].map((tech) => (
                    <span
                      key={tech}
                      className="border border-[rgba(215,215,215,0.5)] bg-white/30 rounded-[5px] px-6 h-[46px] flex items-center text-[16px] text-[#060a10] font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[58px] text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans"
              >
                View Technical Artifacts
                <span className="flex items-center justify-center bg-white rounded-full w-[46px] h-[46px] shrink-0">
                  <ArrowRight className="w-5 h-5 text-[#060a10]" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              className="group w-full md:w-[300px] lg:w-[579px] shrink-0 aspect-[1/1.1] rounded-[20px] overflow-hidden"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={{ ...slowTransition, delay: 0.1 }}
            >
              <img
                src={CS01_IMAGE}
                alt="Aura Ledger Engine"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study 02 */}
      <section className="bg-[#111] py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-10 lg:gap-16 xl:gap-[120px]">
            <motion.div
              className="group w-full md:w-[300px] lg:w-[579px] shrink-0 aspect-[1/1.1] rounded-[20px] overflow-hidden"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={{ ...slowTransition, delay: 0.1 }}
            >
              <img
                src={CS02_IMAGE}
                alt="Vortex Mesh Protocol"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-8 flex-1"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={transition}
            >
              <CaseStudy02Icon />
              <p
                className="text-[14px] uppercase tracking-[2.4px] font-sans text-[#fbe9a2]"
              >
                Case Study 02
              </p>
              <h2
                className="text-[46px] md:text-[55px] font-normal leading-[1.05] text-white"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                Deep Dive: The Result
              </h2>

              <div className="flex items-start gap-12">
                <span
                  className="text-[40px] font-normal text-white shrink-0"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  40%
                </span>
                <div>
                  <p className="text-[14px] uppercase tracking-[2.4px] text-white font-sans mb-1">
                    Payload Efficiency
                  </p>
                  <p className="text-[16px] text-white/70 font-sans leading-[1.7]">
                    Reduction in overhead via custom binary serialization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-12">
                <span
                  className="text-[40px] font-normal text-white shrink-0"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  0ms
                </span>
                <div>
                  <p className="text-[14px] uppercase tracking-[2.4px] text-white font-sans mb-1">
                    Packet Loss Tolerance
                  </p>
                  <p className="text-[16px] text-white/70 font-sans leading-[1.7]">
                    Integration of Forward Error Correction at the application layer.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <h3
                  className="text-[30px] font-normal text-white"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  Architectural Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Go-Lang Core", "WebRTC", "Protocol Buffers", "Kubernetes"].map((tech) => (
                    <span
                      key={tech}
                      className="border border-[rgba(215,215,215,0.3)] rounded-[5px] px-6 h-[46px] flex items-center text-[16px] text-white font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[58px] text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans"
              >
                Read Manuscript
                <span className="flex items-center justify-center bg-white rounded-full w-[46px] h-[46px] shrink-0">
                  <ArrowRight className="w-5 h-5 text-[#060a10]" />
                </span>
              </Link>
            </motion.div>
          </div>
          <div className="pt-6">
            <div className="text-center mx-auto max-w-[910px]">
              <h3
                className="text-[46px] md:text-[55px] font-normal text-white leading-[1.05]"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                Vortex Mesh Protocol
              </h3>
              <p className="text-[16px] text-white/70 font-sans leading-[1.7] mt-3">
                Implementing a custom P2P communication layer for edge-computing networks in
                low-bandwidth environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 03 */}
      <section className="bg-[#fdfdfd] py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={transition}
          >
            <p
              className="text-[14px] uppercase tracking-[2.4px] mb-4 font-sans"
              style={{ color: "#650c0e" }}
            >
              Case Study 03
            </p>
            <h2
              className="text-[46px] md:text-[55px] font-normal text-[#0a0402]"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              Neural Stream Orchestrator
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-10 lg:gap-16 xl:gap-[120px]">
            <motion.div
              className="flex flex-col gap-8 flex-1 max-w-[523px]"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={transition}
            >
              <CaseStudy03Icon />
              <div className="flex flex-col gap-4">
                <h3
                  className="text-[30px] font-normal text-[#0a0402]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  The Challenge
                </h3>
                <p className="text-[16px] text-[#0a0402] leading-[1.7] font-sans">
                  Scaling AI inference pipelines to handle 50k concurrent streams without linear
                  cost scaling.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3
                  className="text-[30px] font-normal text-[#0a0402]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  The Solution
                </h3>
                <p className="text-[16px] text-[#0a0402] leading-[1.7] font-sans">
                  Dynamic resource allocation using a custom-built WASM orchestration layer.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3
                  className="text-[30px] font-normal text-[#0a0402]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  The Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Python", "PyTorch", "WebAssembly", "Redis"].map((tech) => (
                    <span
                      key={tech}
                      className="border border-[rgba(215,215,215,0.5)] rounded-[5px] px-6 h-[46px] flex items-center text-[16px] text-[#0a0402] font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[58px] text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans"
              >
                Read Manuscript
                <span className="flex items-center justify-center bg-white rounded-full w-[46px] h-[46px] shrink-0">
                  <ArrowRight className="w-5 h-5 text-[#060a10]" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              className="group w-full md:w-[300px] lg:w-[579px] shrink-0 aspect-square rounded-[20px] overflow-hidden"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              transition={{ ...slowTransition, delay: 0.1 }}
            >
              <img
                src={CS03_IMAGE}
                alt="Neural Stream Orchestrator"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
