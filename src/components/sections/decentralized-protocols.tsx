import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";
import DecentralizedProtocolsIcon from "../svg/DecentralizedProtocolsIcon";

const PROTOCOL_IMAGE = "/assets/section-decentralized.png";

const VP = { once: true, margin: "-100px" };

export default function DecentralizedProtocols() {
  const { slideLeft, slideRight, slowTransition, transition } = useMotionConfig();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            className="flex-1 flex flex-col gap-6"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            transition={transition}
          >
            <DecentralizedProtocolsIcon />

            <h2
              className="text-[32px] md:text-[44px] font-normal text-[#060a10]"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              Decentralized Protocols
            </h2>

            <p className="text-[15px] md:text-[16px] text-[#060a10]/70 leading-[1.8] font-sans max-w-[520px]">
              Smart contract engineering, cross-chain bridge architecture, and
              institutional-grade security audits for the next financial
              frontier.
            </p>

            <Link
              to="/projects"
              className="inline-flex items-center gap-4 self-start bg-[#650c0e] rounded-full pl-6 pr-1.5 h-[52px] md:h-[58px] text-[13px] md:text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans mt-2"
            >
              Audit Our Portfolio
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
              src={PROTOCOL_IMAGE}
              alt=""
              className="w-full max-w-[540px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
