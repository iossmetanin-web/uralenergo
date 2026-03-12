import { LucideIcon } from "lucide-react";

interface InfoSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  bgColor?: "white" | "gray";
}

export function InfoSection({
  title,
  description,
  children,
  bgColor = "white",
}: InfoSectionProps) {
  return (
    <section
      className={`py-12 md:py-16 lg:py-20 ${
        bgColor === "gray" ? "bg-[#f0f0f0]" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003366] mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-[#003366] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

interface ContentBlockProps {
  title?: string;
  content: string;
  image?: string;
  imageAlt?: string;
  reversed?: boolean;
}

export function ContentBlock({
  title,
  content,
  image,
  imageAlt,
  reversed = false,
}: ContentBlockProps) {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-12 items-center`}
    >
      <div className="flex-1">
        {title && (
          <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4">
            {title}
          </h3>
        )}
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
      {image && (
        <div className="flex-1">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt={imageAlt || title || ""}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}
