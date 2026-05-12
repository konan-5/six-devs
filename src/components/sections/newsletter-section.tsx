import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "linear-gradient(to bottom, #ffffff 50%, #060a10 50%)" }}
    >
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[30px] px-6 py-14 sm:px-10 md:px-16 md:py-20"
          style={{
            background:
              "linear-gradient(74.03deg, #7B2222 -1.43%, #501B1B 21.16%, #501B1B 21.17%, #AC2626 65.86%, #4B0909 99.26%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 70% 50%, rgba(227,28,33,0.4) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-10">
            <h2
              className="text-[32px] md:text-[52px] font-normal text-white max-w-[700px] text-center leading-tight"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              Begin the Engineering Inquiry.
            </h2>

            <form
              className="flex items-center w-full max-w-[520px] rounded-full overflow-hidden bg-white/10 border border-white/20 pr-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="min-w-0 flex-1 bg-transparent border-0 text-white placeholder:text-white/40 text-[15px] font-sans rounded-full focus-visible:ring-0 focus-visible:ring-offset-0 h-[56px] px-4 sm:px-6"
              />
              <button
                type="submit"
                aria-label="Submit"
                className="w-[44px] h-[44px] rounded-full bg-[#650c0e] hover:bg-[#7a0f12] transition-colors flex items-center justify-center shrink-0"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
