import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slide } from "@/data/courses";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface SlideDeckProps {
  slides: Slide[];
}

export const SlideDeck = ({ slides }: SlideDeckProps) => {
  const [index, setIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
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

  useEffect(() => {
    // reset fallback state when slide changes
    setImageFailed(false);
  }, [slide?.image]);

  return (
    <section aria-label="Apresentação do curso" className="w-full">
      <div className="mb-4">
        <Progress value={progress} aria-label={`Progresso: ${Math.round(progress)}%`} />
        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">Slide {index + 1} de {total}</p>
          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={prev} disabled={index === 0} aria-label="Anterior">
              <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
            <Button onClick={next} disabled={index === total - 1} aria-label="Próximo">
              Próximo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <article className="rounded-lg border border-border p-6 bg-card shadow-sm animate-enter">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 font-display">{slide.title}</h2>
        {slide.description && (
          <p className="mb-4 text-sm md:text-base text-muted-foreground leading-relaxed">{slide.description}</p>
        )}
        {slide.image && (
          <figure className="mb-4">
            {!imageFailed ? (
              <img
                src={slide.image}
                alt={slide.imageAlt ?? "Imagem ilustrativa do slide"}
                className="max-w-full rounded-md border border-border mx-auto"
                style={{ width: slide.imageScale ? `${slide.imageScale * 100}%` : undefined }}
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="w-full rounded-md border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                Não foi possível carregar a imagem.
                {slide.image && (
                  <div className="mt-2">
                    Caminho: <code className="bg-muted px-1 py-0.5 rounded">{slide.image}</code>
                  </div>
                )}
              </div>
            )}
            {slide.imageCaption && (
              <figcaption className="mt-2 text-xs text-muted-foreground text-center">
                {slide.imageCaption}
              </figcaption>
            )}
          </figure>
        )}
        {slide.extraImages && slide.extraImages.length > 0 && slide.extraImagesPosition !== 'after' && (
          <div className="mt-4 space-y-4">
            {slide.extraImages.map((img, i) => (
              <figure key={i} className="">
                <img
                  src={img.src}
                  alt={img.alt ?? "Imagem adicional do slide"}
                  className="max-w-full rounded-md border border-border mx-auto"
                  style={{ width: img.scale ? `${img.scale * 100}%` : undefined }}
                />
                {img.caption && (
                  <figcaption className="mt-2 text-xs text-muted-foreground text-center">
                    {img.caption}
                  </figcaption>
                )}
                {img.note && (
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
                    {img.note}
                  </p>
                )}
              </figure>
            ))}
          </div>
        )}
        {slide.topics && slide.topics.length > 0 && (
          <div className="mt-4 space-y-4 text-sm md:text-base text-muted-foreground">
            {slide.topics.map((t, i) => (
              <div key={i}>
                {t.title && (
                  <h3 className="font-semibold text-foreground mb-1">{t.title}</h3>
                )}
                <p className={t.isQuote ? "leading-relaxed italic border-l-2 pl-3 border-muted-foreground/40" : "leading-relaxed"}>{t.content}</p>
                {t.code && (
                  <pre className="mt-3 bg-muted/40 border border-border rounded-md p-3 overflow-auto text-xs md:text-sm">
                    <code>{t.code}</code>
                  </pre>
                )}
                {t.subtopics && t.subtopics.length > 0 && (
                  <div className="mt-3 space-y-3 pl-4 md:pl-6">
                    {t.subtopics.map((st, j) => (
                      <div key={j} className="flex items-start gap-2">
                        {typeof st.isPositive === 'boolean' ? (
                          <span
                            className={
                              st.isPositive
                                ? 'text-green-600 mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center leading-none'
                                : 'text-red-600 mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center leading-none'
                            }
                            aria-hidden
                          >
                            {st.isPositive ? '✓' : '✕'}
                          </span>
                        ) : null}
                        <div className={st.isQuote ? 'w-full' : undefined}>
                          {st.title && (
                            <h4 className="font-medium text-foreground mb-1">{st.title}</h4>
                          )}
                          <p
                            className={
                              st.isQuote
                                ? 'leading-relaxed italic text-base md:text-lg border-l-2 pl-3 border-muted-foreground/40'
                                : 'leading-relaxed'
                            }
                          >
                            {st.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {slide.extraImages && slide.extraImages.length > 0 && slide.extraImagesPosition === 'after' && (
          <div className="mt-4 space-y-4">
            {slide.extraImages.map((img, i) => (
              <figure key={i} className="">
                <img
                  src={img.src}
                  alt={img.alt ?? "Imagem adicional do slide"}
                  className="max-w-full rounded-md border border-border mx-auto"
                  style={{ width: img.scale ? `${img.scale * 100}%` : undefined }}
                />
                {img.caption && (
                  <figcaption className="mt-2 text-xs text-muted-foreground text-center">
                    {img.caption}
                  </figcaption>
                )}
                {img.note && (
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
                    {img.note}
                  </p>
                )}
              </figure>
            ))}
          </div>
        )}
        {slide.bullets && (!slide.topics || slide.topics.length === 0) && (
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
            {slide.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </article>

      
    </section>
  );
};
