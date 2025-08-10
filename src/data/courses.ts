import introImg from "@/assets/course-intro.jpg";
import fundamentosImg from "@/assets/course-fundamentos.jpg";
import avancadoImg from "@/assets/course-avancado.jpg";

export type Slide = {
  title: string;
  bullets?: string[];
  imageAlt?: string;
};

export type Course = {
  id: "introducao" | "fundamentos" | "avancado";
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string; // lucide icon name
  slides: Slide[];
};

export const courses: Course[] = [
  {
    id: "introducao",
    title: "Introdução à Inteligência Artificial e IA Generativa",
    description:
      "Entenda os conceitos fundamentais de IA e descubra como a IA generativa está transformando o mundo.",
    image: introImg,
    imageAlt: "Ilustração minimalista de robô e padrões generativos em azul e roxo",
    icon: "Bot",
    slides: [
      {
        title: "O que é Inteligência Artificial e IA generativa",
        bullets: [
          "IA: sistemas que executam tarefas que normalmente exigem inteligência humana",
          "IA generativa: modelos capazes de criar texto, imagens, áudio e vídeo",
          "Modelos aprendem padrões a partir de grandes conjuntos de dados",
        ],
      },
      {
        title: "Breve história e evolução da IA",
        bullets: [
          "Das regras simbólicas ao aprendizado de máquina",
          "Ressurgimento com deep learning (2012)",
          "Explosão de modelos generativos na década de 2020",
        ],
      },
      {
        title: "Áreas da IA",
        bullets: [
          "Machine Learning e Deep Learning",
          "NLP (Processamento de Linguagem Natural)",
          "Visão Computacional",
          "IA Generativa (texto, imagem, áudio, vídeo)",
        ],
      },
      {
        title: "Exemplos do dia a dia",
        bullets: [
          "Assistentes como ChatGPT, Claude",
          "Geração de imagens: MidJourney, DALL·E, Stable Diffusion",
          "Aplicações em produtividade, educação e criatividade",
        ],
      },
      {
        title: "Considerações éticas e impacto",
        bullets: [
          "Viés algorítmico e transparência",
          "Privacidade e segurança de dados",
          "Impacto no trabalho e na sociedade",
        ],
      },
    ],
  },
  {
    id: "fundamentos",
    title: "Fundamentos e Técnicas da IA",
    description:
      "Aprenda as bases do aprendizado de máquina, redes neurais e técnicas usadas em IA generativa.",
    image: fundamentosImg,
    imageAlt: "Ilustração abstrata de rede neural e conexões em azul e roxo",
    icon: "Brain",
    slides: [
      {
        title: "Tipos de aprendizado",
        bullets: [
          "Supervisionado, não supervisionado e por reforço",
          "Tarefas: classificação, regressão, clustering, controle",
          "Métricas de avaliação e overfitting",
        ],
      },
      {
        title: "Redes neurais artificiais",
        bullets: [
          "Perceptrons, camadas e funções de ativação",
          "Backpropagation e otimização",
          "Regularização e generalização",
        ],
      },
      {
        title: "Técnicas em IA generativa",
        bullets: [
          "Transformers e atenção",
          "Modelos de difusão",
          "Fine-tuning e instrução",
        ],
      },
      {
        title: "Dados para modelos generativos",
        bullets: [
          "Coleta, limpeza e balanceamento",
          "Tokenização e normalização",
          "Avaliação e mitigação de viés",
        ],
      },
      {
        title: "Ferramentas populares",
        bullets: [
          "TensorFlow e PyTorch",
          "Hugging Face, OpenAI API",
          "Stability AI e ecossistema open-source",
        ],
      },
    ],
  },
  {
    id: "avancado",
    title: "IA Generativa Avançada e Aplicações Reais",
    description:
      "Aprofunde-se em arquiteturas de ponta e descubra aplicações práticas em diversos setores.",
    image: avancadoImg,
    imageAlt: "Ilustração de blocos transformer e fluxos generativos em azul e roxo",
    icon: "Cpu",
    slides: [
      {
        title: "Arquiteturas avançadas",
        bullets: [
          "GANs, VAEs e Transformers",
          "Escalonamento de modelos e eficiência",
          "Técnicas de controle e condicionamento",
        ],
      },
      {
        title: "Modelos de texto",
        bullets: [
          "LLMs como GPT, Claude, LLaMA",
          "Capacidades e limitações",
          "RAG e agentes",
        ],
      },
      {
        title: "Imagem, áudio e vídeo",
        bullets: [
          "Stable Diffusion, MidJourney, Sora",
          "Synthesis e edição generativa",
          "Avaliação de qualidade",
        ],
      },
      {
        title: "Aplicações práticas",
        bullets: [
          "Negócios, arte e jogos",
          "Geração de conteúdo e produtividade",
          "Automação e prototipagem",
        ],
      },
      {
        title: "Tendências e AGI",
        bullets: [
          "Modelos multimodais",
          "Segurança e alinhamento",
          "Caminhos para AGI",
        ],
      },
    ],
  },
];
