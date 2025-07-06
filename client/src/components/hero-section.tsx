import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slideUp">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
              Fusion
              <span className="block text-muted-foreground">Art Gallery</span>
            </h1>
            <div className="w-24 h-1 bg-foreground"></div>
          </div>

          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            An arts & entertainment brand based in Surat, Gujarat. We specialize in unique handcrafted resin art products designed to capture your memories beautifully.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("gallery")}
              className="gallery-button-primary"
            >
              View Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="gallery-button-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="relative animate-fadeIn">
          <img
            src="/images/WhatsApp Image 2025-07-06 at 15.58.28_567e755e_1751810786389.jpg"
            alt="Handcrafted resin art - LED photo frame showcase"
            className="rounded-2xl shadow-2xl w-full h-auto animate-float"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-muted rounded-full opacity-20"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-muted rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
