import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

interface PageLayoutProps {
  children: React.ReactNode;
  newsletterVariant?: "default" | "cta" | "dispatch";
  footerTopTone?: "light" | "dark";
}

export default function PageLayout({
  children,
  newsletterVariant,
  footerTopTone,
}: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">{children}</main>
      <Footer newsletterVariant={newsletterVariant} footerTopTone={footerTopTone} />
    </>
  );
}
