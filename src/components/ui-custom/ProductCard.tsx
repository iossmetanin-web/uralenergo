import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description?: string;
  image?: string;
  href: string;
  badge?: string;
  specs?: { label: string; value: string }[];
  price?: string;
}

export default function ProductCard({
  title,
  description,
  image,
  href,
  badge,
  specs,
  price,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#003366] to-[#0073e6]">
            <span className="text-white text-4xl font-bold">Т</span>
          </div>
        )}
        {badge && (
          <Badge className="absolute top-3 left-3 bg-[#0073e6] text-white">
            {badge}
          </Badge>
        )}
      </div>

      {/* Content */}
      <CardContent className="p-4 flex-1">
        <h3 className="font-bold text-lg text-[#003366] group-hover:text-[#0073e6] transition-colors mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        )}
        {specs && specs.length > 0 && (
          <div className="space-y-1">
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-gray-500">{spec.label}:</span>
                <span className="font-medium text-gray-700">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        {price ? (
          <span className="text-lg font-bold text-[#003366]">{price}</span>
        ) : (
          <span className="text-sm text-gray-500">По запросу</span>
        )}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-[#0073e6] hover:text-[#00aaff] hover:bg-transparent group/btn"
        >
          <Link href={href}>
            Подробнее
            <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
