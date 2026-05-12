import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";

const HERO_IMAGE = "/assets/hero_vid.gif";
const ICON_WEB3 = "/assets/icon-web3.svg";
const ICON_WEB2 = "/assets/icon-web2.svg";
const ICON_AI = "/assets/icon-ai.svg";

const EXPERTISE_ITEMS = [
  { icon: ICON_WEB3, label: "High-Scale Web2 Systems" },
  { icon: ICON_WEB2, label: "Web3 Infrastructure & DeFi" },
  { icon: ICON_AI, label: "Applied AI & Neural Patterns" },
];

export default function HeroSection() {
  const { fadeUp, fadeIn, transition, slowTransition } = useMotionConfig();

  return (
    <section className="relative bg-[#060a10] overflow-hidden flex flex-col pt-10 lg:h-[800px]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-[230px] h-[230px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(101,12,14,0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-[1320px] mx-auto w-full px-6 flex-1 flex flex-col">
          <div className="flex flex-col items-center gap-8 pt-10 text-center lg:flex-row lg:items-start lg:text-left lg:pt-16">
            <div className="flex w-full max-w-[620px] flex-col items-center gap-6 md:gap-8 lg:items-start">
              <motion.p
                className="text-[13px] md:text-[16px] font-light uppercase tracking-[3px] text-[#fbe9a2]"
                style={{ fontFamily: "var(--font-poppins)" }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...transition, delay: 0 }}
              >
                Founder-Led Engineering Delivery
              </motion.p>

              <motion.h1
                className="text-[52px] md:text-[80px] lg:text-[92px] font-normal leading-[1] text-white"
                style={{ fontFamily: "var(--font-noto-serif)" }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...transition, delay: 0.1 }}
              >
                Architectural
                <br />
                Rigor.
              </motion.h1>

              <motion.div
                className="flex flex-col items-center gap-4 lg:flex-row lg:items-stretch"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...transition, delay: 0.2 }}
              >
                <div className="h-[3px] w-[84px] bg-[#650c0e] shrink-0 rounded-full lg:h-auto lg:w-[3px] lg:self-stretch" />
                <p className="text-[14px] md:text-[16px] text-white/80 leading-[2] font-sans">
                  We bridge the gap between visionary ambition and technical
                  reality. A specialized collective delivering high-stakes
                  solutions across the digital frontier.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...transition, delay: 0.3 }}
              >
                <Link
                  to="/expertise"
                  className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[52px] md:h-[58px] text-[13px] md:text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans mt-2"
                >
                  Explore Expertise
                  <span className="flex items-center justify-center bg-white rounded-full w-[40px] h-[40px] md:w-[46px] md:h-[46px] shrink-0">
                    <ArrowRight className="w-5 h-5 text-[#060a10]" />
                  </span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="relative w-full max-w-[560px] lg:max-w-none lg:w-[620px] lg:shrink-0 lg:self-center"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ ...slowTransition, delay: 0.2 }}
            >
              <img
                src={HERO_IMAGE}
                alt="Architectural 3D render"
                className="object-contain w-full h-full"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 pointer-events-none" style={{ background: "linear-gradient(to right, #060a10, transparent)" }} />
              <div className="absolute inset-y-0 right-0 w-1/6 pointer-events-none" style={{ background: "linear-gradient(to left, #060a10, transparent)" }} />
              <div className="absolute inset-x-0 top-0 h-1/4 pointer-events-none" style={{ background: "linear-gradient(to bottom, #060a10, transparent)" }} />
              <div className="absolute inset-x-0 bottom-0 h-1/5 pointer-events-none" style={{ background: "linear-gradient(to top, #060a10, transparent)" }} />
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-6 sm:gap-10 md:gap-16 py-8 mt-auto">
            {EXPERTISE_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-4"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...transition, delay: 0.45 + i * 0.1 }}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="object-contain w-[50px] h-[50px] md:w-[62px] md:h-[62px] shrink-0"
                />
                <span className="text-[14px] md:text-[16px] text-white font-sans">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
