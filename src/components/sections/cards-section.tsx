import { motion } from "motion/react";
import { useMotionConfig } from "@/hooks/use-motion-config";

const IMAGE_COLLECTIVE = "/assets/card-reach.png";
const IMAGE_REACH = "/assets/card-collective.png";
const VIDEO_PRECISION = "/assets/precision_vid.mp4";

const CARDS = [
  {
    id: "collective",
    title: "The Collective",
    description:
      "We bridge the gap between visionary ambition and technical reality. A specialized collective delivering high-stakes solutions across the digital frontier.",
    bg: "#ffffff",
    titleColor: "#061b31",
    textColor: "#060a10",
    image: IMAGE_COLLECTIVE,
    video: null,
    topAccent: false,
  },
  {
    id: "precision",
    title: "The Precision",
    description:
      "Every line of code is an architectural decision. We prioritize long-term stability and security over reckless speed.",
    bg: "#eee0dd",
    titleColor: "#650c0e",
    textColor: "#060a10",
    image: null,
    video: VIDEO_PRECISION,
    topAccent: true,
  },
  {
    id: "reach",
    title: "The Reach",
    description:
      "Global delivery for industry leaders. From cryptographic protocols to generative intelligence pipelines.",
    bg: "#ffffff",
    titleColor: "#061b31",
    textColor: "#060a10",
    image: IMAGE_REACH,
    video: null,
    topAccent: false,
  },
];

export default function CardsSection() {
  const { fadeUp, transition } = useMotionConfig();

  return (
    <section className="bg-white py-16 md:pt-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              className="group relative rounded-[5px] overflow-hidden flex flex-col border border-black/10"
              style={{ backgroundColor: card.bg, minHeight: "clamp(480px, 52vw, 706px)" }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...transition, delay: i * 0.1 }}
            >
              {card.topAccent && (
                <div className="h-[6px] bg-[#650c0e] w-full shrink-0" />
              )}

              <div className="p-6 md:p-8 flex flex-col gap-4">
                <h3
                  className="text-[26px] md:text-[30px] font-normal leading-tight"
                  style={{
                    fontFamily: "var(--font-noto-serif)",
                    color: card.titleColor,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[15px] md:text-[16px] leading-[1.7] font-sans"
                  style={{ color: card.textColor }}
                >
                  {card.description}
                </p>
              </div>

              {card.video ? (
                <div className="flex-1 overflow-hidden flex items-center">
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                  />
                </div>
              ) : card.image ? (
                <div className="flex-1 overflow-hidden flex items-center justify-center px-4 pb-6">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full max-h-[320px] object-contain transition-transform duration-500 group-hover:scale-130"
                  />
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
