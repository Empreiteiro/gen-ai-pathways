import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CourseCardProps {
  to: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  disabled?: boolean;
  badgeText?: string;
}

export const CourseCard = ({ to, title, description, image, imageAlt, disabled, badgeText }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col border border-border hover-scale shadow-sm hover:shadow-lg transition-shadow" aria-labelledby={`${title}-title`}>
      <div className="relative">
        <img src={image} alt={imageAlt} loading="lazy" className="w-full h-48 object-cover" />
        {disabled && (
          <span className="absolute top-2 right-2 text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md border border-yellow-200">
            {badgeText ?? 'Em breve'}
          </span>
        )}
      </div>
      <CardHeader>
        <CardTitle id={`${title}-title`} className="font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {disabled ? (
          <Button className="mt-auto" disabled aria-disabled>
            Em breve
          </Button>
        ) : (
          <Button asChild className="mt-auto">
            <Link to={to} aria-label={`Ver curso: ${title}`}>Ver Curso</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
