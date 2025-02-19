import { ModeToggle } from "@/components/mode-toggle";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { AppDownloadSection } from "@/components/app-download-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";

export function Home() {
  return (
    <>
      <header className="container flex h-16 items-center justify-between">
        <div className="text-xl font-bold text-primary">FitTrack Pro</div>
        <ModeToggle />
      </header>

      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <FeaturesSection />
        <AppDownloadSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FitTrack Pro. 保留所有权利。
        </div>
      </footer>
    </>
  );
}