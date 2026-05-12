import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const LOGO_ASSET = "/assets/logo-mark.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="w-full bg-white border-b border-black/8 z-50">
      <nav className="mx-auto flex h-[80px] w-full max-w-[1320px] items-center justify-between px-6 lg:h-[117px]">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={LOGO_ASSET}
            alt="SixDevs logo mark"
            className="object-contain w-[55px] h-[60px] lg:w-[72px] lg:h-[80px]"
          />
          <span
            className="text-[28px] lg:text-[38px] font-medium capitalize"
            style={{
              fontFamily: "var(--font-noto-serif)",
              backgroundImage:
                "linear-gradient(104.89deg, rgb(101,12,14) 17.138%, rgb(170,85,9) 41.75%, rgb(227,28,33) 72.185%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SixDevs
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-[14px] font-medium uppercase tracking-[0.64px] transition-colors font-sans ${pathname === link.href ? "text-[#650c0e]" : "text-[#060a10]/80 hover:text-[#060a10]"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-4 border border-[#0e131b] rounded-full pl-6 pr-1.5 h-[52px] text-[14px] font-medium uppercase tracking-[0.64px] text-[#0e131b] hover:border-[#0e131b]/70 transition-colors font-sans"
        >
          Make Inquiry
          <span className="flex items-center justify-center bg-[#650c0e] rounded-full w-[40px] h-[40px] shrink-0">
            <ArrowRight className="w-5 h-5 text-white" />
          </span>
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden text-[#060a10] p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(280px,calc(100vw-2rem))] bg-[#060a10] border-white/10"
          >
            <div className="flex flex-col h-full gap-8 pt-12 pb-8 px-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[16px] font-medium uppercase tracking-[0.64px] text-white/90 hover:text-white transition-colors font-sans"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-auto flex items-center gap-4 border border-white/30 rounded-full pl-6 pr-1.5 h-[52px] text-[14px] font-medium uppercase tracking-[0.64px] text-white hover:border-white/60 transition-colors font-sans"
              >
                Inquiry
                <span className="flex items-center justify-center bg-accent rounded-full w-[40px] h-[40px] shrink-0 ml-auto">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
