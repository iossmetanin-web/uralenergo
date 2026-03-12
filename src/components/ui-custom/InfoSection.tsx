import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface InfoSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgLight?: boolean;
}

export function InfoSection({
  title,
  subtitle,
  children,
  className = '',
  bgLight = false,
}: InfoSectionProps) {
  return (
    <section className={`py-12 md:py-16 ${bgLight ? 'bg-white' : 'bg-[#f0f0f0]'} ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">{title}</h2>
            {subtitle && (
              <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
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
    <Card className="h-full bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 text-center">
        <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#0073e6] rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-bold text-lg text-[#003366] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

interface TextBlockProps {
  title?: string;
  content: string | React.ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  list?: string[];
}

export function TextBlock({
  title,
  content,
  image,
  imageAlt,
  imagePosition = 'right',
  list,
}: TextBlockProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 items-center ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1">
        {title && (
          <h3 className="text-xl font-bold text-[#003366] mb-4">{title}</h3>
        )}
        {typeof content === 'string' ? (
          <p className="text-gray-600 leading-relaxed">{content}</p>
        ) : (
          content
        )}
        {list && list.length > 0 && (
          <ul className="mt-4 space-y-2">
            {list.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <span className="w-2 h-2 bg-[#0073e6] rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {image && (
        <div className="flex-1 w-full">
          <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
            <img
              src={image}
              alt={imageAlt || ''}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <Card className="bg-gradient-to-br from-[#003366] to-[#0073e6] text-white border-0 shadow-lg">
      <CardContent className="p-6 text-center">
        <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
        <div className="text-sm text-gray-200">{label}</div>
      </CardContent>
    </Card>
  );
}
