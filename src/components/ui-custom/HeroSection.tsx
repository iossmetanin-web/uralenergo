import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  overlay?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  overlay = true,
  size = 'lg',
}: HeroSectionProps) {
  const heightClasses = {
    sm: 'min-h-[300px] py-12',
    md: 'min-h-[400px] py-20',
    lg: 'min-h-[500px] py-24',
  };

  return (
    <section
      className={`relative ${heightClasses[size]} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background gradient (default if no image) */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#005bb5] to-[#0073e6]" />
      )}

      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-[#003366]/70" />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {subtitle && (
          <p className="text-[#00aaff] text-sm md:text-base font-medium mb-2 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {description}
          </p>
        )}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-wrap gap-4 justify-center">
            {primaryButtonText && primaryButtonHref && (
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#0073e6] to-[#00aaff] hover:from-[#00aaff] hover:to-[#0073e6] text-white shadow-lg"
              >
                <Link href={primaryButtonHref}>
                  {primaryButtonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            )}
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#003366]"
              >
                <Link href={secondaryButtonHref}>
                  {secondaryButtonText}
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Decorative shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f0f0f0] to-transparent" />
    </section>
  );
}
