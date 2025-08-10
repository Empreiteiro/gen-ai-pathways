import avancadoImg from "@/assets/course-avancado.jpg";
import fundamentosImg from "@/assets/course-fundamentos.jpg";
import introImg from "@/assets/course-intro.jpg";

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
        title: "IA determinística (regras)",
        bullets: [
          "Baseada em regras explícitas (if-else, tabelas de decisão)",
          "Previsível e explicável: mesma saída para mesma entrada",
          "Ideal quando as regras são claras e controladas",
          "Exemplo: antifraude com regras fixas",
        ],
      },
      {
        title: "Agentes (visão geral)",
        bullets: [
          "Sistemas baseados em LLMs que planejam e executam ações",
          "Podem usar ferramentas (APIs) e memória para cumprir objetivos",
          "Exemplos: assistentes que agendam, buscam e integram serviços",
        ],
      },
      {
        title: "Hallucination (atenção)",
        bullets: [
          "Quando o modelo 'inventa' fatos de forma convincente",
          "Mitigar: pedir fontes, usar RAG, validar saídas",
          "Importante para uso responsável e confiável",
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
      {
        title: "Modelos generativos",
        bullets: [
          "Aprendem a gerar dados similares ao treinamento",
          "Geram texto, imagens, áudio e vídeo",
          "Aplicações em criatividade, síntese e simulação",
        ],
      },
      {
        title: "Transformers (detalhes)",
        bullets: [
          "Atenção permite modelar contexto em paralelo",
          "Base de LLMs modernos (GPT, LLaMA, etc.)",
          "Escalam bem em dados e parâmetros",
        ],
      },
      {
        title: "Large Language Models (LLMs)",
        bullets: [
          "Treinados em grandes corpora de texto",
          "Tarefas: QA, resumo, geração, código",
          "Limitações: alucinação, contexto finito, custo",
        ],
      },
      {
        title: "Prompt engineering",
        bullets: [
          "Especificar instruções, contexto e formato de saída",
          "Padrões: papel/tarefa/contexto/exemplos",
          "Use restrições, verificações e auto-reflexão",
        ],
      },
      {
        title: "Zero-shot e few-shot",
        bullets: [
          "Resolver tarefas sem (ou com poucos) exemplos",
          "Melhora com exemplos de qualidade no prompt",
          "Avaliar generalização e confiabilidade",
        ],
      },
      {
        title: "Embeddings",
        bullets: [
          "Representações vetoriais para medir similaridade",
          "Texto, imagens ou áudio no mesmo espaço",
          "Base para busca semântica e clustering",
        ],
      },
      {
        title: "Vector stores / vector databases",
        bullets: [
          "Armazenam embeddings e suportam busca por similaridade",
          "Exemplos: Pinecone, FAISS, Astra DB",
          "Integração com pipelines de IA generativa",
        ],
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        bullets: [
          "Combina busca (retrieval) com geração",
          "Respostas mais precisas e atualizadas",
          "Requer embeddings e base vetorial",
        ],
      },
      {
        title: "Prompt chaining",
        bullets: [
          "Dividir tarefas em etapas com prompts encadeados",
          "Melhora controle, rastreabilidade e qualidade",
          "Ferramentas: LangChain, LangFlow",
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
          "RAG (busca + geração)",
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
      {
        title: "Fine-tuning (em profundidade)",
        bullets: [
          "Ajuste fino de modelos pré-treinados",
          "Dados específicos do domínio e instruções",
          "Cuidados: overfitting, segurança, licenças",
        ],
      },
      {
        title: "MCP / A2A",
        bullets: [
          "Padrões para conectar agentes e ferramentas (Model Context Protocol)",
          "Agent-to-Agent: colaboração/orquestração entre agentes",
          "Foco em interoperabilidade e segurança",
        ],
      },
      {
        title: "APA",
        bullets: [
          "Automação de processos orientada a agentes",
          "Definição de fluxos, guardrails e auditoria",
          "Integração com sistemas corporativos",
        ],
      },
    ],
  },
];
