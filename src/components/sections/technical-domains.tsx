import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import CloudNativeIcon from "../svg/CloudNativeIcon";

const DOMAIN_IMAGE = "/assets/section-tech-domains.png";

const VP = { once: true, margin: "-100px" };

export default function TechnicalDomains() {
  const { fadeUp, slideLeft, slideRight, transition, slowTransition } = useMotionConfig();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.h2
          className="text-[36px] md:text-[52px] font-normal text-center text-[#060a10] mb-12 md:mb-16"
          style={{ fontFamily: "var(--font-noto-serif)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          transition={transition}
        >
          Technical Domains
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <motion.div
            className="flex-1 flex flex-col gap-6"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={transition}
          >
            <CloudNativeIcon />

            <h3
              className="text-[26px] md:text-[32px] font-normal text-[#060a10]"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              Cloud-Native Architectures
            </h3>

            <p className="text-[15px] md:text-[16px] text-[#060a10]/70 leading-[1.8] font-sans max-w-[520px]">
              Building resilient, distributed systems capable of handling
              millions of concurrent users with sub-millisecond latency.
            </p>

            <Link
              to="/projects"
              className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[52px] md:h-[58px] text-[13px] md:text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans mt-2"
            >
              View Case Studies
              <span className="flex items-center justify-center bg-white rounded-full w-[40px] h-[40px] md:w-[46px] md:h-[46px] shrink-0">
                <ArrowRight className="w-5 h-5 text-[#060a10]" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center items-center"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={{ ...slowTransition, delay: 0.1 }}
          >
            <img
              src={DOMAIN_IMAGE}
              alt=""
              className="w-full max-w-[540px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
