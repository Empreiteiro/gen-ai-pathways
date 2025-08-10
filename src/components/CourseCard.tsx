import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Lucide from "lucide-react";

interface CourseCardProps {
  to: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon?: string;
}

export const CourseCard = ({ to, title, description, image, imageAlt, icon }: CourseCardProps) => {
  const IconComp = icon && (Lucide as any)[icon] ? (Lucide as any)[icon] : (Lucide as any).Sparkles;
  return (
    <Card className="overflow-hidden border border-border hover-scale shadow-sm hover:shadow-lg transition-shadow" aria-labelledby={`${title}-title`}>
      <img src={image} alt={imageAlt} loading="lazy" className="w-full h-48 object-cover" />
      <CardHeader>
        <div className="flex items-center gap-2 text-primary">
          <IconComp aria-hidden size={22} />
          <CardTitle id={`${title}-title`} className="font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button asChild>
          <Link to={to} aria-label={`Ver curso: ${title}`}>Ver Curso</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
