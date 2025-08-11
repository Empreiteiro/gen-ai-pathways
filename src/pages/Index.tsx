import { CourseCard } from "@/components/CourseCard";
import { SEO } from "@/components/SEO";
import { courses } from "@/data/courses";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  // icons removidos dos cards

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${window.location.origin}/curso/${c.id}`,
      name: c.title,
      description: c.description,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cursos de Inteligência Artificial | Aprenda IA do Básico ao Avançado"
        description="Três cursos modernos de IA e IA generativa com conteúdo claro, prático e atualizado. Do início ao avançado."
        jsonLd={jsonLd}
      />
      <header className="border-b border-border">
        <div className="container py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display text-center">
            Aprenda Inteligência Artificial do Básico ao Avançado
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-center text-muted-foreground text-lg">
            Entenda o impacto da IA e da IA generativa no mundo atual e desenvolva
            habilidades para aplicar essas tecnologias em projetos reais.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="h-2 w-40 rounded-full" style={{ background: 'var(--gradient-primary)' as unknown as string }} />
          </div>
        </div>
      </header>

      <main className="container py-12 md:py-16 flex-1">
        <section aria-labelledby="cursos" className="animate-fade-in">
          <h2 id="cursos" className="sr-only">Cursos em destaque</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((c) => (
              <CourseCard
                key={c.id}
                to={`/curso/${c.id}`}
                title={c.title}
                description={c.description}
                image={c.image}
                imageAlt={c.imageAlt}
                 
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container py-10 grid gap-4 md:grid-cols-[1fr_auto_1fr] items-center">
          <p className="text-sm text-muted-foreground text-center md:col-start-2">
            © {new Date().getFullYear()} IA Academy
          </p>
          <nav className="flex items-center justify-center md:justify-end gap-4 text-muted-foreground md:col-start-3">
            <a href="https://github.com/Empreiteiro/gen-ai-pathways" aria-label="GitHub" className="hover:text-foreground"><Github /></a>
            <a href="https://www.linkedin.com/in/lucas-democh-goularte-8b290356/" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin /></a>
            <a href="mailto:democh@oriontech.me" aria-label="Email" className="hover:text-foreground"><Mail /></a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
