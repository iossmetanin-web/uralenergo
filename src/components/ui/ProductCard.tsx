import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  href: string;
  features?: string[];
}

export function ProductCard({
  title,
  description,
  image,
  href,
  features,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
              {title.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-[#003366] mb-2 group-hover:text-[#0073e6] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="space-y-1 mb-4">
            {features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00aaff] rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Button
          asChild
          variant="ghost"
          className="w-full text-[#0073e6] hover:text-[#003366] hover:bg-[#f0f0f0] group/btn"
        >
          <Link href={href}>
            Подробнее
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
