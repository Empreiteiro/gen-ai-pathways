# Gen AI Pathways — Plataforma de Cursos de IA Generativa

Aprenda Inteligência Artificial do básico ao avançado, com foco em IA generativa, por meio de trilhas curtas e objetivas em formato de slides interativos.

Este projeto oferece três cursos complementares que cobrem desde conceitos introdutórios até aplicações práticas e temas avançados. A experiência é leve, responsiva e otimizada para SEO.

## Visão geral

Gen AI Pathways é uma plataforma educacional simples e extensível construída em React. Cada curso é definido via dados estruturados e renderizado como um deck de slides dentro da aplicação. Ideal para estudos individuais, workshops rápidos e trilhas internas de capacitação.

### Para quem é
- Iniciantes que querem entender IA e IA generativa do zero
- Profissionais que desejam fundamentos práticos
- Times e instrutores que precisam de um material direto ao ponto

## Conteúdos dos cursos

1. Introdução à Inteligência Artificial e IA Generativa (`introducao`)
   - O que é IA e IA generativa, breve história, áreas da IA
   - Exemplos práticos, riscos de alucinação, ética e impacto

2. Fundamentos e Técnicas da IA (`fundamentos`)
   - Aprendizado supervisionado/não supervisionado/reforço, redes neurais
   - Transformers, difusão, embeddings, vector stores, RAG, prompt engineering

3. IA Generativa Avançada e Aplicações Reais (`avancado`)
   - Arquiteturas, LLMs, imagem/áudio/vídeo, aplicações e tendências (AGI, segurança)

Os conteúdos dos slides ficam em `src/data/courses.ts`.

## Principais recursos

- UI moderna com componentes `shadcn-ui` e Tailwind
- Navegação por trilhas de curso e decks de slides
- SEO pronto: titles, descriptions e JSON-LD (`ItemList`, `Course`)
- Totalmente responsivo e acessível
- Estrutura de dados simples para criar/editar cursos

## Tecnologias

- React + Vite + TypeScript
- Tailwind CSS + shadcn-ui (Radix UI)
- React Router
- Lucide Icons

## Como rodar localmente

Pré-requisitos: Node.js 18+ e npm.

```bash
git clone <URL-DO-REPO>
cd gen-ai-pathways
npm install
npm run dev
```

Aplicação abrirá em `http://localhost:5173` (padrão do Vite).

### Scripts úteis
- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção
- `npm run preview`: pré-visualização do build
- `npm run lint`: checagem de lint

## Estrutura do projeto (essencial)

```
src/
  pages/
    Index.tsx         # Página inicial com cards dos cursos
    CoursePage.tsx    # Página de um curso com o deck de slides
  data/
    courses.ts        # Definição dos cursos e seus slides
  components/
    CourseCard.tsx    # Card de curso
    SlideDeck.tsx     # Renderização dos slides
    SEO.tsx           # Metadados e JSON-LD
```

## Como adicionar ou editar um curso

1. Edite `src/data/courses.ts`
2. Adicione um novo objeto ao array `courses` com:
   - `id`: identificador único (ex.: `introducao`)
   - `title`, `description`, `image`, `imageAlt`, `icon`
   - `slides`: lista de slides com `title` e `bullets`
3. A rota é resolvida automaticamente em `/curso/<id>` via `CoursePage`.

## SEO e acessibilidade

- Componente `SEO` gera tags básicas + JSON-LD (`ItemList` na home, `Course` na página do curso)
- Marcadores, hierarquia de headings e contraste respeitam boas práticas

## Roadmap (sugestões)

- Busca por conteúdo dentro dos slides
- Progresso do aluno e salvamento local
- Exportação/compartilhamento de trilhas
- Suporte a conteúdo multimídia nos slides

## Contato

- GitHub: https://github.com/Empreiteiro/gen-ai-pathways
- LinkedIn: https://www.linkedin.com/in/lucas-democh-goularte-8b290356/
- E-mail: democh@oriontech.me

