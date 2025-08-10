import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CourseCardProps {
  to: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const CourseCard = ({ to, title, description, image, imageAlt }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col border border-border hover-scale shadow-sm hover:shadow-lg transition-shadow" aria-labelledby={`${title}-title`}>
      <img src={image} alt={imageAlt} loading="lazy" className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle id={`${title}-title`} className="font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button asChild className="mt-auto">
          <Link to={to} aria-label={`Ver curso: ${title}`}>Ver Curso</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
