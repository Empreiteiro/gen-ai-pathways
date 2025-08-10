import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slide } from "@/data/courses";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SlideDeckProps {
  slides: Slide[];
}

export const SlideDeck = ({ slides }: SlideDeckProps) => {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const progress = useMemo(() => ((index + 1) / total) * 100, [index, total]);

  const next = () => setIndex((i) => Math.min(i + 1, total - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const slide = slides[index];

  return (
    <section aria-label="Apresentação do curso" className="w-full">
      <div className="mb-6">
        <Progress value={progress} aria-label={`Progresso: ${Math.round(progress)}%`} />
        <p className="mt-2 text-xs text-muted-foreground">Slide {index + 1} de {total}</p>
      </div>

      <article className="rounded-lg border border-border p-6 bg-card shadow-sm animate-enter">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 font-display">{slide.title}</h2>
        {slide.bullets && (
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
            {slide.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </article>

      <div className="flex items-center justify-between mt-6 gap-3">
        <Button variant="secondary" onClick={prev} disabled={index === 0} aria-label="Anterior">
          <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
        </Button>
        <Button onClick={next} disabled={index === total - 1} aria-label="Próximo">
          Próximo <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
