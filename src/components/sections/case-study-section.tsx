import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import type { CaseStudyConfig } from "@/data/case-studies";

const VP = { once: true, margin: "-100px" };

const THEME = {
  light: {
    section: "bg-[#fdfdfd]",
    label: "#650c0e",
    title: "text-[#0a0402]",
    titleInline: "text-[#061b31]",
    body: "text-[#060a10]",
    bodyAlt: "text-[#0a0402]",
    stackChip:
      "border border-[rgba(215,215,215,0.5)] bg-white/30 rounded-[5px] px-6 h-[46px] flex items-center text-[16px] text-[#060a10] font-sans",
  },
  dark: {
    section: "bg-[#111]",
    label: "#fbe9a2",
    title: "text-white",
    titleInline: "text-white",
    body: "text-white/70",
    bodyAlt: "text-white/70",
    stackChip:
      "border border-[rgba(215,215,215,0.3)] rounded-[5px] px-6 h-[46px] flex items-center text-[16px] text-white font-sans",
  },
} as const;

type Props = CaseStudyConfig & {
  index: number;
};

function StackList({
  stack,
  chipClassName,
}: {
  stack: string[];
  chipClassName: string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {stack.map((tech) => (
        <span key={tech} className={chipClassName}>
          {tech}
        </span>
      ))}
    </div>
  );
}

function CtaButton({ label }: { label: string }) {
  return (
    <Link
      to="/contact"
      className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[58px] text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans"
    >
      {label}
      <span className="flex items-center justify-center bg-white rounded-full w-[46px] h-[46px] shrink-0">
        <ArrowRight className="w-5 h-5 text-[#060a10]" />
      </span>
    </Link>
  );
}

function ProjectImage({
  project,
  aspectClass,
  variants,
  transition,
}: {
  project: CaseStudyConfig["project"];
  aspectClass: string;
  variants: ReturnType<typeof useMotionConfig>["slideLeft"];
  transition: ReturnType<typeof useMotionConfig>["slowTransition"];
}) {
  return (
    <motion.div
      className={`group w-full md:w-[300px] lg:w-[579px] shrink-0 ${aspectClass} rounded-[20px] overflow-hidden`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VP}
      transition={{ ...transition, delay: 0.1 }}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </motion.div>
  );
}

export default function CaseStudySection({
  index,
  project,
  Icon,
  theme,
  layout,
  imageAspect,
  header,
  blocks,
  stackLabel,
  ctaLabel,
  stats,
  footerTagline,
}: Props) {
  const { fadeUp, slideLeft, slideRight, transition, slowTransition } = useMotionConfig();
  const colors = THEME[theme];
  const caseLabel = `Case Study ${String(index + 1).padStart(2, "0")}`;
  const aspectClass = imageAspect === "portrait" ? "aspect-[1/1.1]" : "aspect-[16/10]";
  const titleClass =
    header === "inline" && theme === "light" ? colors.titleInline : colors.title;

  const contentColumn = (
    <motion.div
      className={`flex flex-col gap-8 flex-1 ${layout === "standard" ? "max-w-[573px]" : layout === "editorial" ? "max-w-[523px]" : ""}`}
      variants={layout === "reverse" ? slideRight : slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={VP}
      transition={transition}
    >
      <Icon />

      {header === "inline" && (
        <>
          <p
            className="text-[14px] uppercase tracking-[2.4px] font-sans"
            style={{ color: colors.label }}
          >
            {caseLabel}
          </p>
          <h2
            className={`text-[46px] md:text-[55px] font-normal leading-[1.05] ${titleClass}`}
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {project.name}
          </h2>
        </>
      )}

      {(layout === "standard" || layout === "reverse") && (
        <p className={`text-[16px] ${colors.body} leading-[1.7] font-sans`}>
          {project.description}
        </p>
      )}

      {blocks.map(({ title, field }) => (
        <div
          key={title}
          className={layout === "standard" ? "flex flex-col gap-2" : "flex flex-col gap-4"}
        >
          <h3
            className={`text-[30px] font-normal ${theme === "light" ? "text-[#0a0402]" : "text-white"}`}
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {title}
          </h3>
          <p
            className={`text-[16px] ${layout === "editorial" ? colors.bodyAlt : colors.body} leading-[1.7] font-sans`}
          >
            {project[field]}
          </p>
        </div>
      ))}

      {stats?.map(({ value, label, description }) => (
        <div key={label} className="flex items-start gap-12">
          <span
            className="text-[40px] font-normal text-white shrink-0"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {value}
          </span>
          <div>
            <p className="text-[14px] uppercase tracking-[2.4px] text-white font-sans mb-1">
              {label}
            </p>
            <p className="text-[16px] text-white/70 font-sans leading-[1.7]">
              {description}
            </p>
          </div>
        </div>
      ))}

      <div className={`flex flex-col gap-4 ${layout === "reverse" ? "pt-4" : ""}`}>
        <h3
          className={`text-[30px] font-normal ${theme === "light" ? "text-[#0a0402]" : "text-white"}`}
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          {stackLabel}
        </h3>
        <StackList stack={project.stack} chipClassName={colors.stackChip} />
      </div>

      <CtaButton label={ctaLabel} />
    </motion.div>
  );

  const imageColumn = (
    <ProjectImage
      project={project}
      aspectClass={aspectClass}
      variants={layout === "reverse" ? slideLeft : slideRight}
      transition={slowTransition}
    />
  );

  return (
    <section className={`${colors.section} py-20`}>
      <div className="max-w-[1320px] mx-auto px-6">
        {header === "centered" && (
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
              style={{ color: colors.label }}
            >
              {caseLabel}
            </p>
            <h2
              className={`text-[46px] md:text-[55px] font-normal ${colors.title}`}
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              {project.name}
            </h2>
          </motion.div>
        )}

        <div
          className={`flex flex-col md:flex-row items-start gap-12 md:gap-10 lg:gap-16 xl:gap-[120px] ${
            layout === "reverse" ? "flex-col-reverse md:flex-row items-center" : ""
          }`}
        >
          {layout === "reverse" ? (
            <>
              {imageColumn}
              {contentColumn}
            </>
          ) : (
            <>
              {contentColumn}
              {imageColumn}
            </>
          )}
        </div>

        {footerTagline && (
          <div className="pt-6">
            <div className="text-center mx-auto max-w-[910px]">
              <h3
                className="text-[46px] md:text-[55px] font-normal text-white leading-[1.05]"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                {project.name}
              </h3>
              <p className="text-[16px] text-white/70 font-sans leading-[1.7] mt-3">
                {project.tagline}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
