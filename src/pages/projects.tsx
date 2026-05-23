import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import PageLayout from "@/components/layout/page-layout";
import CaseStudySection from "@/components/sections/case-study-section";
import FintechCoreIcon from "@/components/svg/FintechCoreIcon";
import DistributedSystemsIcon from "@/components/svg/DistributedSystemsIcon";
import AIInfrastructureIcon from "@/components/svg/AIInfrastructureIcon";
import { CASE_STUDIES } from "@/data/case-studies";

const HERO_CATEGORIES = [
  { label: "Fintech Core", Icon: FintechCoreIcon },
  { label: "Distributed Systems", Icon: DistributedSystemsIcon },
  { label: "AI Infrastructure", Icon: AIInfrastructureIcon },
] as const;

export default function ProjectsPage() {
  const { fadeUp, transition } = useMotionConfig();

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
            Projects &amp; Artifacts
          </motion.h1>
          <motion.p
            className="text-[15px] md:text-[16px] text-white leading-[34px] max-w-[691px] font-sans"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
          >
            A curated selection of architectural engineering feats. We treat code as a high-stakes
            manuscript, balancing structural integrity with technical elegance
          </motion.p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-6 sm:gap-10 md:gap-12 mt-4 pb-4 w-full">
            {HERO_CATEGORIES.map(({ label, Icon }, i) => (
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

      {CASE_STUDIES.map((caseStudy, index) => (
        <CaseStudySection key={caseStudy.project.id} index={index} {...caseStudy} />
      ))}
    </PageLayout>
  );
}
