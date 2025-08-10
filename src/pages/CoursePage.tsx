import { SEO } from "@/components/SEO";
import { SlideDeck } from "@/components/SlideDeck";
import { courses } from "@/data/courses";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const CoursePage = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <main className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Curso não encontrado</h1>
        <Link to="/" className="story-link text-primary">Voltar para a página inicial</Link>
      </main>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: { '@type': 'Organization', name: 'IA Academy' },
  };

  return (
    <>
      <SEO
        title={`${course.title} | Cursos de IA`}
        description={course.description}
        jsonLd={jsonLd}
      />
      <header className="w-full border-b border-border bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
        <div className="container py-6 md:py-8 text-white">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 opacity-90 hover:opacity-100">
            <ArrowLeft /> <span>Voltar</span>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight font-display">
              {course.title}
            </h1>
            <p className="mt-3 text-white/90 max-w-prose">
              {course.description}
            </p>
          </div>
        </div>
      </header>
      <main className="container py-10 md:py-16">
        <SlideDeck slides={course.slides} />
      </main>
      <footer className="border-t border-border">
        <div className="container py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} IA Academy — Todos os direitos reservados
        </div>
      </footer>
    </>
  );
};

export default CoursePage;
