import { CourseCard } from "@/components/CourseCard";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ThemeToggle } from "@/components/ThemeToggle";
import { courses } from "@/data/courses";

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
          <div className="flex justify-end mb-8">
            <ThemeToggle />
          </div>
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
          <div className="flex justify-center">
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
