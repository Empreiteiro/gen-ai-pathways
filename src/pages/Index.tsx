import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { SEO } from "@/components/SEO";
import { Bot, Brain, Cpu, Github, Linkedin, Mail, Youtube } from "lucide-react";

const Index = () => {
  const icons = { introducao: Bot, fundamentos: Brain, avancado: Cpu } as const;

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
    <>
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

      <main className="container py-12 md:py-16">
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
                icon={c.icon}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container py-10 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} IA Academy — Contato: <a href="mailto:contato@ia.academy" className="story-link">contato@ia.academy</a>
            </p>
          </div>
          <nav className="flex items-center justify-start md:justify-end gap-4 text-muted-foreground">
            <a href="https://github.com/" aria-label="GitHub" className="hover:text-foreground"><Github /></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin /></a>
            <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:text-foreground"><Youtube /></a>
            <a href="mailto:contato@ia.academy" aria-label="Email" className="hover:text-foreground"><Mail /></a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Index;
