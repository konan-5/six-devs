import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

interface PageLayoutProps {
  children: React.ReactNode;
  newsletterVariant?: "default" | "cta" | "dispatch";
}

export default function PageLayout({ children, newsletterVariant }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">{children}</main>
      <Footer newsletterVariant={newsletterVariant} />
    </>
  );
}
