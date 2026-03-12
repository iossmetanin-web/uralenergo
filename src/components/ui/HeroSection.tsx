import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  showContact?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryButton,
  secondaryButton,
  showContact = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        background: backgroundImage
          ? `linear-gradient(135deg, rgba(0, 51, 102, 0.9) 0%, rgba(0, 115, 230, 0.85) 100%), url(${backgroundImage})`
          : "linear-gradient(135deg, #003366 0%, #0073e6 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00aaff] opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {subtitle && (
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 mb-4">
              {subtitle}
            </div>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            {primaryButton && (
              <Button
                asChild
                size="lg"
                className="bg-white text-[#003366] hover:bg-gray-100 font-semibold"
              >
                <Link href={primaryButton.href}>
                  {primaryButton.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {secondaryButton && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href={secondaryButton.href}>
                  {secondaryButton.text}
                </Link>
              </Button>
            )}
            {showContact && (
              <Button
                asChild
                size="lg"
                className="bg-[#00aaff] text-white hover:bg-[#005bb5]"
              >
                <a href="tel:+73433835658">
                  <Phone className="mr-2 h-4 w-4" />
                  Связаться с нами
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
