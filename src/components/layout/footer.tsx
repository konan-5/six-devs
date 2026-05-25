import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const LOGO_ASSET = "/assets/logo-mark.png";
const CTA_IMAGE = "/assets/footer-cta-image.png";

type NewsletterVariant = "default" | "cta" | "dispatch";
type FooterTopTone = "light" | "dark";

const FOOTER_TOP_BG: Record<FooterTopTone, string> = {
  light: "#ffffff",
  dark: "#111111",
};

interface FooterProps {
  newsletterVariant?: NewsletterVariant;
  footerTopTone?: FooterTopTone;
}

export default function Footer({
  newsletterVariant = "default",
  footerTopTone = "light",
}: FooterProps) {
  const [email, setEmail] = useState("");
  const topBg = FOOTER_TOP_BG[footerTopTone];

  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${topBg} 180px, #111111 180px)` }}
    >
      {/* Red glow ellipse */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          width: 202,
          height: 202,
          left: -58,
          top: 180 + 65,
          background: "#7D1113",
          opacity: 0.5,
          filter: "blur(140px)",
          borderRadius: "50%",
        }}
      />
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        {/* Newsletter card */}
        <div
          className="relative overflow-hidden rounded-[30px] px-6 py-14 sm:px-10 md:px-16 md:py-20"
          style={{
            background: "linear-gradient(74.03deg, #7B2222 -1.43%, #501B1B 21.16%, #501B1B 21.17%, #AC2626 65.86%, #4B0909 99.26%)",
          }}
        >
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
            className="absolute inset-0 opacity-20 pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse at 70% 50%, rgba(227,28,33,0.4) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 w-full">
            {newsletterVariant === "cta" && (
              <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-0">
                <div className="relative z-10 flex min-w-0 flex-col gap-6 lg:basis-[48%] lg:max-w-[560px] lg:py-0">
                  <h2
                    className="text-[28px] md:text-[40px] lg:text-[48px] font-normal text-white leading-tight"
                    style={{ fontFamily: "var(--font-noto-serif)" }}
                  >
                    Have a technical challenge that demands precision?
                  </h2>
                  <p className="text-[16px] text-white/80 font-sans">
                    We partner with founders to build sovereign technical infrastructure that scales.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-4 self-start bg-[#650c0e] border border-[#650c0e] rounded-full pl-6 pr-1.5 h-[58px] text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:bg-[#7a0f12] transition-colors font-sans"
                  >
                    Initialize Project
                    <span className="flex items-center justify-center bg-white rounded-full w-[46px] h-[46px] shrink-0">
                      <ArrowRight className="w-5 h-5 text-[#060a10]" />
                    </span>
                  </Link>
                </div>

                {/* Mobile: flush left/right/bottom, mask top */}
                <div className="lg:hidden -mx-6 -mb-14 sm:-mx-10 md:-mx-16 md:-mb-20" aria-hidden="true">
                  <img
                    src={CTA_IMAGE}
                    alt=""
                    className="w-full h-auto object-cover"
                    style={{
                      maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
                      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
                    }}
                  />
                </div>

                {/* Desktop: flush right/top/bottom, mask left */}
                <div className="hidden min-w-0 lg:block lg:flex-1 -mr-16 -my-20 self-stretch" aria-hidden="true">
                  <img
                    src={CTA_IMAGE}
                    alt=""
                    className="w-full h-full object-cover object-left"
                    style={{
                      maskImage: "linear-gradient(to right, transparent 0%, black 45%)",
                      WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 45%)",
                    }}
                  />
                </div>
              </div>
            )}

            {newsletterVariant === "dispatch" && (
              <div className="flex flex-col items-center gap-8 text-center">
                <h2
                  className="text-[28px] md:text-[44px] lg:text-[52px] font-normal text-white leading-tight"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  Receive the Sovereign Dispatch.
                </h2>
                <p className="text-[16px] text-white/70 font-sans max-w-[520px] leading-[1.7]">
                  Monthly technical breakdowns on distributed systems, fintech infrastructure, and AI architecture from the SixDevs collective.
                </p>
                <form
                  className="flex items-center w-full md:max-w-[520px] rounded-full overflow-hidden bg-white/10 border border-white/20 pr-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="min-w-0 flex-1 bg-transparent border-0 text-white placeholder:text-white/40 text-[15px] font-sans rounded-full focus-visible:ring-0 focus-visible:ring-offset-0 h-[56px] px-4 sm:px-6"
                  />
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="w-[44px] h-[44px] rounded-full bg-[#4A0E0E] hover:bg-[#1a0203] transition-colors flex items-center justify-center shrink-0"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
                <p className="text-[13px] text-white/40 font-sans">
                  Strictly confidential. No third-party data sharing.
                </p>
              </div>
            )}

            {newsletterVariant === "default" && (
              <div className="flex flex-col items-center gap-10">
                <h2
                  className="text-[28px] md:text-[44px] lg:text-[52px] font-normal text-white text-center leading-tight"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  Begin the Engineering Inquiry.
                </h2>
                <form
                  className="flex items-center w-full md:max-w-[520px] rounded-full overflow-hidden bg-white/10 border border-white/20 pr-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="min-w-0 flex-1 bg-transparent border-0 text-white placeholder:text-white/40 text-[15px] font-sans rounded-full focus-visible:ring-0 focus-visible:ring-offset-0 h-[56px] px-4 sm:px-6"
                  />
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="w-[44px] h-[44px] rounded-full bg-[#4A0E0E] hover:bg-[#1a0203] transition-colors flex items-center justify-center shrink-0"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 pt-14 md:pt-16 pb-7 md:pb-10 border-b border-white/10 text-center md:text-left justify-items-center md:justify-items-stretch">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={LOGO_ASSET}
                alt="SixDevs logo mark"
                className="object-contain w-[45px] h-[50px] brightness-0 invert opacity-80"
              />
              <span
                className="text-[24px] font-medium capitalize text-white"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                SixDevs
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mt-1">
              Architectural Rigor.
              <br />
              Engineering Precision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3 pt-4 md:pt-0">
            <p className="text-[16px] font-normal text-white mb-1" style={{ fontFamily: "var(--font-noto-serif)" }}>
              Practice
            </p>
            <Link to="/approach" className="text-sm text-white/70 hover:text-white transition-colors">
              Methodology
            </Link>
            <Link to="/expertise" className="text-sm text-white/70 hover:text-white transition-colors">
              Global
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-[16px] font-normal text-white mb-1" style={{ fontFamily: "var(--font-noto-serif)" }}>
              Offices
            </p>
            <span className="text-sm text-white/70">Legal</span>
            <span className="text-sm text-white/70">Archive</span>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3 pt-4 md:pt-0">
            <p className="text-[16px] font-normal text-white mb-1" style={{ fontFamily: "var(--font-noto-serif)" }}>
              Status
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
              <span className="text-sm text-white/70">Available for Q3 Projects</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-7 md:pt-6 pb-7 md:pb-8 gap-5 md:gap-4">
          <p className="text-sm text-white/40">© 2026 SixDevs.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="opacity-40 hover:opacity-100 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-40 hover:opacity-100 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="opacity-40 hover:opacity-100 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
