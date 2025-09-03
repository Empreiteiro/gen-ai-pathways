import avancadoImg from "@/assets/course-avancado.jpg";
import ragImg from "@/assets/course-rag.jpg";
import mcpImg from "@/assets/course-mcp.jpg";
import lovableImg from "@/assets/course-lovable.jpg";

export type SlideTopic = {
  title?: string;
  content: string;
  subtopics?: SlideTopic[];
  isQuote?: boolean;
  isPositive?: boolean; // for checklist visuals (true = check, false = x)
  code?: string; // optional code/snippet block
};

export type SlideImage = {
  src: string;
  alt?: string;
  caption?: string;
  scale?: number; // 0..1 fraction of container width
  note?: string; // extra explanation shown below the caption
};

export type Slide = {
  title: string;
  description?: string;
  bullets?: string[];
  topics?: SlideTopic[];
  image?: string;
  imageCaption?: string;
  imageScale?: number; // 0..1 fraction of container width
  imageAlt?: string;
  extraImages?: SlideImage[];
  extraImagesPosition?: 'before' | 'after';
  video?: string; // YouTube embed URL
  videoTitle?: string; // Title for the video
};

export type Course = {
  id: "introducao" | "avancado" | "ferramentas" | "rag" | "mcp" | "lovable";
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
         image: avancadoImg,
    imageAlt: "Ilustração minimalista de robô e padrões generativos em azul e roxo",
    icon: "Bot",
    slides: [
      {
        title: "O que é Inteligência Artificial e IA generativa",
        description:
          "Uma visão clara sobre como a IA simula capacidades humanas e como a IA generativa cria novos conteúdos a partir de padrões, com foco no papel do contexto e da probabilidade.",
        topics: [
          {
            title: "IA – Inteligência Artificial",
            content:
              "São sistemas computacionais projetados para executar tarefas cognitivas — como percepção, raciocínio, tomada de decisão e reconhecimento de padrões — que, até pouco tempo, eram exclusivas da inteligência humana. A IA pode atuar em contextos específicos (IA fraca) ou de forma mais ampla e adaptativa (IA forte, ainda em pesquisa).",
          },
          
          {
            title: "IA Generativa",
            content:
              "Refere-se a um conjunto de modelos capazes de criar novos conteúdos — textos, imagens, áudios, vídeos ou códigos — a partir de padrões aprendidos em grandes volumes de dados. Ao contrário de sistemas puramente reativos, a IA generativa não apenas classifica ou prevê, mas produz resultados originais, mantendo coerência e relevância com o contexto solicitado.",
            subtopics: [
              {
                title: "Probabilidade e Contexto",
                content:
                  "A geração de conteúdo ocorre por meio da amostragem probabilística de tokens (unidades de texto ou dados), considerando tanto o histórico de entradas quanto o contexto atual fornecido pelo prompt. O modelo avalia, a cada etapa, qual é a sequência mais provável de continuar o conteúdo, equilibrando coerência, criatividade e aderência ao objetivo solicitado.",
              },
            ],
          },
        ],
        
      },
      
      {
        title: "Breve história e evolução da IA",
        description:
          "De sistemas simbólicos a modelos de deep learning e transformers, um panorama dos marcos que tornaram a IA generativa viável em escala.",
        image: import.meta.env.BASE_URL + "ia-hyple-cycle-2023.png",
        imageAlt: "Gráfico Gartner Hype Cycle for Artificial Intelligence 2023",
        imageCaption: "Fonte: Gartner — Hype Cycle for Artificial Intelligence (2023)",
        imageScale: 0.7,
        topics: [
          {
            title: "Era simbólica",
            content:
              "Sistemas baseados em regras e lógica (good old-fashioned AI) dominaram as primeiras décadas. O conhecimento era codificado manualmente e a generalização era limitada.",
          },
          {
            title: "Aprendizado de máquina",
            content:
              "Modelos estatísticos passaram a aprender a partir de dados rotulados ou não rotulados, reduzindo a necessidade de regras feitas à mão e melhorando a performance em tarefas específicas.",
          },
          {
            title: "Deep learning",
            content:
              "Com GPUs e grandes datasets, redes neurais profundas elevaram o desempenho em visão e linguagem a partir de 2012, habilitando aplicações antes impraticáveis.",
          },
          {
            title: "Era generativa",
            content:
              "Transformers e modelos de difusão tornaram viável gerar texto, imagens e áudio de alta qualidade, abrindo espaço para copilotos e automação criativa em massa.",
          },
        ],
        bullets: [
          "Era simbólica: sistemas de regras e lógica formal dominaram as primeiras décadas.",
          "Aprendizado de máquina: dados e estatística substituem regras manuais em várias tarefas.",
          "Deep learning (2012): GPUs + grandes datasets impulsionam visão e linguagem.",
          "Anos 2020: Transformers/difusão popularizam copilotos, geração de mídia e automação criativa.",
        ],
        extraImages: [
          {
            src: import.meta.env.BASE_URL + "ia-hyple-cycle-2025.png",
            alt: "Gráfico Gartner Hype Cycle for Artificial Intelligence 2025",
            caption: "Fonte: Gartner — Hype Cycle for Artificial Intelligence (2025)",
            scale: 0.7,
          },
        ],
      },
      {
        title: "Áreas da IA",
        description:
          "Principais domínios e como se conectam com aplicações generativas modernas em texto, imagem e além.",
        topics: [
          {
            title: "Machine Learning e Deep Learning",
            content:
              "Conjunto de técnicas em que modelos aprendem padrões diretamente dos dados para classificar, prever ou gerar saídas. No aprendizado supervisionado, o modelo mapeia entradas para rótulos; no não supervisionado, descobre estruturas ocultas; e no reforço, aprende por tentativa e erro a maximizar recompensas. Deep learning utiliza redes com múltiplas camadas para extrair representações hierárquicas (de sinais brutos a características semânticas), dominando tarefas de visão, linguagem e áudio.",
          },
          {
            title: "NLP (Linguagem Natural)",
            content:
              "Área dedicada a processar e produzir linguagem humana. Envolve compreensão (classificação, extração de entidades, QA), geração (redação, resumo, tradução), diálogo e alinhamento ao tom/políticas. LLMs pré-treinados em grandes corpora e posteriormente ajustados por instruções tornaram-se o estado da arte, mas exigem engenharia de prompts, detecção de alucinações e, em cenários críticos, integração com bases (RAG) e validações.",
          },
          {
            title: "Visão Computacional",
            content:
              "Capta informações de imagens/vídeos para tarefas como detecção, segmentação, rastreamento e OCR. Além do reconhecimento, modelos generativos permitem síntese e edição guiadas por texto (ex.: inpainting/outpainting, mudança de estilo), úteis em design, documentação e análise visual assistida. Cuidados incluem avaliação de qualidade, viés em datasets visuais e diretrizes de uso responsável (evitar deepfakes).",
          },
          {
            title: "IA Generativa",
            content:
              "Modelagem de distribuições para criar novos exemplos plausíveis de texto, imagem, áudio ou vídeo. A geração pode ser condicionada por rótulos, texto ou imagens de referência para controlar conteúdo e estilo. Na prática, usa-se controle de temperatura, guidance, máscaras/áreas de edição e checagens de segurança. Em aplicações reais, combine com RAG, validações e políticas para assegurar qualidade, autoria e conformidade.",
          },
        ],
        bullets: [
          "Machine Learning e Deep Learning: aprender funções a partir de dados (classificar, prever, gerar).",
          "NLP (Linguagem Natural): compreensão, geração, tradução e diálogo em linguagem humana.",
          "Visão Computacional: detecção, segmentação, reconhecimento e síntese de imagens/vídeos.",
          "IA Generativa: criação condicionada ou livre de texto, imagem, áudio e vídeo com controle fino.",
        ],
        extraImages: [
          {
            src: import.meta.env.BASE_URL + "ia-generativa.png",
            alt: "Diagrama ilustrativo de IA generativa",
            caption: "Exemplos de modalidades e fluxos em IA generativa",
            scale: 0.7,
          },
        ],
        extraImagesPosition: 'after',
      },
      {
        title: "Exemplos do dia a dia",
        description:
          "Aplicações imediatas que geram valor em rotinas pessoais e de trabalho. Foque em medir impacto (tempo, qualidade e custo) e manter revisão humana quando necessário.",
        topics: [
          {
            title: "Assistentes",
            content:
              "Copilotos de escrita e raciocínio que aceleram a primeira versão e ajudam a estruturar ideias. Em prática: rascunhos de e‑mails com tom adequado, preparação de briefings e respostas sugeridas para atendimento. Para confiabilidade, forneça contexto claro (objetivo, público, restrições) e peça checagens de coerência e referências quando houver fatos críticos.",
            subtopics: [
              {
                title: "Exemplos",
                content:
                  "Plataformas: ChatGPT, Claude, Microsoft Copilot, Gemini.",
              },
            ],
          },
          {
            title: "Imagens",
            content:
              "Sistemas de geração e edição guiados por texto que agilizam marketing e design. Úteis para criar variações de criativos, mockups e thumbnails, além de edições como remoção/adição de elementos e ajuste de estilo mantendo composição. Observe políticas de licença e evite uso indevido de marcas ou rostos sem autorização.",
            subtopics: [
              {
                title: "Exemplos",
                content:
                  "Plataformas: Midjourney, DALL·E, Stable Diffusion (Automatic1111/ComfyUI).",
              },
            ],
          },
          {
            title: "Produtividade",
            content:
              "Automação de etapas repetitivas e padronização de entregas. Exemplos: sumarização de documentos longos, extração estruturada de campos, geração de relatórios e apoio a código (boilerplate, testes e pequenas refatorações). Mesmo com alto ganho de velocidade, mantenha validação por linters, testes e revisão humana.",
            subtopics: [
              {
                title: "Exemplos",
                content:
                  "Plataformas: Cursor, Lovable, V0, Notion AI, Google Workspace (Gemini), Microsoft 365 Copilot.",
              },
            ],
          },
          {
            title: "Educação e criatividade",
            content:
              "Aprendizagem personalizada e aceleração de ideação. A ferramenta pode explicar conceitos no seu nível, propor exercícios progressivos, sugerir roteiros e storyboards e apoiar protótipos rápidos. Preserve autoria e ética acadêmica: cite fontes, declare uso de IA quando necessário e evite submissões não originais.",
            subtopics: [
              {
                title: "Exemplos",
                content:
                  "Plataformas: Khanmigo (Khan Academy), Canva Magic Studio, Adobe Firefly.",
              },
            ],
          },
        ],
        bullets: [
          "Assistentes aceleram rascunhos e estruturação de ideias com contexto claro e checagens.",
          "Imagens generativas e edição guiada otimizam marketing/design respeitando licenças.",
          "Produtividade: sumarização, extração, relatórios e apoio a código com revisão e testes.",
          "Educação/criatividade: tutoria personalizada, roteiros e protótipos com responsabilidade autoral.",
        ],
        extraImages: [
          {
            src: import.meta.env.BASE_URL + "radar-de-oportunidades-de-prontidao-para-a-ia.png",
            alt: "Radar de oportunidades de prontidão para a IA",
            caption: "Fonte: Gartner — Radar de oportunidades de IA (2024)",
            scale: 0.85,
          },
        ],
        extraImagesPosition: 'after',
      },
      {
        title: "IA determinística (regras)",
        description:
          "Quando regras fixas superam modelos: entenda previsibilidade, auditoria e cenários ideais de uso.",
        topics: [
          {
            title: "O que é",
            content:
              "Sistemas que operam por regras explícitas (if–else, árvores de decisão manuais, tabelas/DMN) e fluxos de processo (BPMN). A lógica é escrita por especialistas e não depende de dados para aprender. O comportamento é determinístico: para a mesma entrada, a saída é sempre a mesma, o que facilita depuração e auditoria.",
          },
          {
            title: "Vantagens",
            content:
              "Alta previsibilidade e explicabilidade, baixa variabilidade, latência e custos controlados. É simples demonstrar conformidade regulatória quando as regras são públicas e rastreáveis. Atualizações podem ser feitas com versionamento de políticas sem retreinar modelos.",
          },
          {
            title: "Quando usar",
            content:
              "Cenários com requisitos estáveis/legais (tarifas, elegibilidade), baixa ambiguidade, dados escassos ou onde a justificativa detalhada é mandatória. Também é útil como camada de guardrails em sistemas com IA generativa (ex.: bloqueio de ações fora de política).",
          },
          {
            title: "Limitações",
            content:
              "Cobertura limitada para casos não previstos e manutenção difícil quando o número de exceções explode. Em domínios com alta variação e sinais sutis, regras tornam-se frágeis. A prática comum é combinar regras para políticas/segurança com ML/LLMs para interpretação, priorizando controle e qualidade.",
          },
          {
            title: "Exemplo prático: seguro automotivo (determinístico)",
            content:
              "Fatores de risco definidos por atuários e reguladores são combinados por regras/tabelas para calcular o prêmio de forma explicável e auditável.",
            subtopics: [
              {
                title: "Fatores de risco",
                content:
                  "Idade do condutor, anos de CNH, histórico de sinistros e multas, localidade/CEP (índice de roubo/colisão), uso (particular/comercial; km/telemática), modelo/ano/potência do veículo, coberturas e franquias, crédito, entre outros.",
              },
              {
                title: "Cálculo de fatores",
                content:
                  "Cada fator é mapeado para classes e multiplicadores em tabelas de tarifa. Ex.: idade < 25 ⇒ 1,25; região de alta sinistralidade ⇒ 1,30; veículo com alto índice de roubo ⇒ 1,20.",
              },
              {
                title: "Score e prêmio",
                content:
                  "scoreDet = produto dos multiplicadores (ou soma ponderada com pesos definidos por atuários). prêmioBase = tarifaBase × scoreDet. Regras adicionais aplicam bônus/penalidades (classe de bônus, dispositivos, franquia maior/menor) e limites mínimos/máximos.",
              },
              {
                title: "Motor de regras",
                content:
                  "Implementado via DMN/BPMN/if‑else: valida elegibilidade, aplica faixas e arredondamentos, gera trilha de explicações por fator e atende exigências regulatórias.",
              },
              {
                title: "Aplicação em IA",
                content:
                  "Neste modelo de IA determinística, o ‘raciocínio’ é a própria composição das regras/tabelas. Em arquiteturas híbridas, previsões de ML (ex.: probabilidade de sinistro/fraude) são convertidas em faixas por regras e guardrails antes de ajustar o prêmio.",
              },
              {
                content:
                  "\"Diferentemente da IA probabilística, esse tipo de IA sempre retorna o mesmo resultado para a mesma entrada, reforçando o caráter determinístico.\"",
                isQuote: true,
              },
            ],
          },
        ],
        bullets: [
          "Baseada em regras explícitas (if-else, tabelas de decisão) com caminhos controlados.",
          "Alta previsibilidade/explicabilidade: mesma entrada ⇒ mesma saída; fácil auditoria.",
          "Boa para domínios com requisitos regulatórios e regras estáveis.",
          "Exemplos: validações cadastrais, antifraude simples, cálculo de tarifas.",
        ],
      },
      {
        title: "LLMs (Large Language Models)",
        description:
          "Modelos de linguagem de grande porte capazes de compreender e gerar texto. Estão por trás de assistentes, copilotos de escrita/código e diversas automações de conhecimento.",
        topics: [
          {
            title: "O que são LLMs",
            content:
              "Redes neurais treinadas em grandes corpora de texto para prever o próximo token, aprendendo padrões de linguagem, conhecimento factual e estilos. Com instruções e reforço, passam a seguir comandos em linguagem natural.",
          },
          {
            title: "Como funcionam em linhas gerais",
            content:
              "Usam a arquitetura Transformer (atenção) para considerar contexto amplo; representam palavras como embeddings e geram saídas token a token. O comportamento pode ser ajustado por temperatura, top‑p e políticas.",
          },
          {
            title: "Usos no dia a dia",
            content:
              "Rascunho e revisão de textos, resumo de documentos, tradução, brainstorming, atendimento ao cliente, respostas a perguntas sobre materiais fornecidos (RAG) e copilotos de programação que sugerem código e testes.",
          },
          {
            title: "Limitações e cuidados",
            content:
              "Podem alucinar, têm janela de contexto finita e custos variáveis. Sempre forneça contexto, restrinja escopo, valide informações críticas e trate privacidade de dados ao usar prompts.",
          },
        ],
        bullets: [
          "Treinados para prever o próximo token em grandes corpora",
          "Aplicações: escrita, resumo, tradução, atendimento e código",
          "Exigem contexto e validação para usos críticos",
        ],
        extraImages: [
          {
            src: import.meta.env.BASE_URL + "sketchnote_agents.png",
            caption: "Diferentes usos dos LLMs",
            scale: 0.75,
          },
        ],
        extraImagesPosition: 'after',
      },
      {
        title: "Agentes (visão geral)",
        description:
          "Agentes combinam LLM + ferramentas + memória para perceber, raciocinar e agir em direção a um objetivo. Eles decompõem problemas, escolhem ações, verificam resultados e replanejam até concluir a tarefa, sob políticas e guardrails.",
        topics: [
          {
            title: "Planejamento",
            content:
              "A partir de uma meta, o agente decompõe o problema em etapas (plan → act → observe → replan). Ele escolhe a próxima ação com base no estado atual, critérios de sucesso e restrições (tempo/custo/políticas). O replanejamento trata falhas e desvios, reduzindo alucinações quando há verificação intermediária e metas bem definidas.",
          },
          {
            title: "Ferramentas",
            content:
              "Acesso a APIs e sistemas (busca, bases internas, CRMs, e‑mail, automação). Boas práticas: contratos claros (nome, descrição, parâmetros), validação de entradas/saídas, limites de uso e tratamento de erros/retries. O uso de ferramentas ‘aterra’ o modelo na realidade (grounding), reduzindo respostas especulativas.",
          },
          {
            title: "Memória",
            content:
              "Mantém contexto e histórico úteis ao longo do fluxo. Curto prazo: estado da sessão, objetivos e resultados parciais. Longo prazo: preferências, fatos verificados e conhecimento recuperável (p.ex., via embeddings + vector store). Trate privacidade e expiração de dados; registre o mínimo necessário.",
          },
          {
            title: "Orquestração",
            content:
              "Coordena múltiplos passos/agentes com regras, verificações e auditoria. Padrões comuns: supervisor/worker, avaliador‑gerador e delegação por especialidade. Guardrails impedem ações proibidas; observabilidade registra prompts, ferramentas acionadas, erros e custos. Protocolos como MCP e A2A facilitam interoperabilidade.",
          },
        ],
        bullets: [
          "Sistemas orientados a objetivos que planejam, decidem e executam ações com LLMs.",
          "Ferramentas (APIs) e memória: buscar dados, acionar serviços e manter contexto ao longo do tempo.",
          "Orquestração: dividir tarefas em etapas, verificar resultados e iterar até a meta.",
          "Exemplos: agendamento, pesquisa com RAG, integração entre sistemas (MCP/A2A).",
        ],
        extraImages: [
          {
            src: import.meta.env.BASE_URL + "agency-gap.jpg",
            alt: "Gartner - Mind the AI Agency Gap",
            caption: "Fonte: Gartner — Mind the AI Agency Gap (2024)",
            scale: 0.8,
            note: "Como ler: no eixo esquerdo, as capacidades de baixa agência (estático, reativo, tarefas simples, ambiente simples, supervisionado). No eixo direito, alta agência (adaptativo, planejamento proativo, metas complexas, ambiente complexo, autônomo). Os pontos mostram a posição relativa de agentes humanos, chatbots determinísticos e assistentes baseados em LLM. O ‘agency gap’ representa a distância entre soluções atuais e a atuação autônoma desejada. Use o gráfico para avaliar onde seu caso de uso está hoje e que capacidades (planejamento, ferramentas, memória, guardrails) seriam necessárias para avançar com segurança."
          },
          {
            src: import.meta.env.BASE_URL + "sketchnote_agents.png",
            alt: "Esboço comparando RAG e agentes",
            caption: "Sketchnote: RAG vs. Agent — contexto, memória, ferramentas e raciocínio",
            scale: 0.9,
          },
        ],
        extraImagesPosition: 'after',
      },
      {
        title: "Prompt: princípios e práticas eficazes",
        description:
          "Como orientar modelos para obter respostas úteis, consistentes e seguras. Estruture bem a instrução, forneça contexto relevante e defina claramente o formato e os critérios de qualidade.",
        topics: [
          {
            title: "O que é um prompt",
            content:
              "É a instrução enviada ao modelo para orientar a resposta. Pode incluir papel (quem responde), tarefa, contexto (trechos/dados), restrições (tom, tamanho, políticas), formato de saída e critérios de qualidade. Prompts bem definidos reduzem ambiguidade, variabilidade e alucinação, aumentando a utilidade prática.",
          },
          {
            title: "Estrutura do prompt",
            content:
              "Use o padrão papel → tarefa → contexto → restrições → formato → critérios. Ex.: ‘Você é um analista. Tarefa: resumir. Contexto: relatório X. Restrição: até 5 bullets, linguagem simples. Formato: JSON. Critérios: cobertura, fidelidade, sem opiniões’.",
          },
          {
            title: "Contexto e grounding",
            content:
              "Inclua informações essenciais (trechos, dados, suposições válidas) e, quando possível, use RAG para ancorar a resposta em fontes verificáveis. Forneça IDs/citações para rastreabilidade.",
          },
          {
            title: "Exemplos e contraexemplos",
            content:
              "Few‑shot com exemplos de alta qualidade guia estilo e formato. Inclua contraexemplos (‘não faça’) para reduzir vieses e erros comuns. Prefira poucos exemplos excelentes a muitos medianos.",
          },
          {
            title: "Restrições e validações",
            content:
              "Defina limites (tamanho, tom, listas permitidas) e peça auto‑checagens: ‘verifique inconsistências’, ‘liste fontes usadas’, ‘avalie se atendeu aos critérios’. Quando possível, valide programaticamente a saída.",
          },
          {
            title: "Raciocínio e decomposição",
            content:
              "Estimule pensamento passo a passo de forma moderada e peça planos ou decomposição em etapas para tarefas complexas. Em produção, evite expor raciocínios sensíveis e prefira validação externa.",
          },
          {
            title: "Antipadrões",
            content:
              "Prompts vagos (‘faça o melhor’), pedidos múltiplos em um único turno, falta de público‑alvo, ausência de critérios e formato, e não fornecer contexto suficiente. Esses hábitos aumentam alucinação e variabilidade.",
          },
          {
            title: "Checklist rápido",
            content:
              "Resumo prático para usar no dia a dia ao escrever prompts.",
            subtopics: [
              {
                title: "Faça",
                content:
                  "Defina papel/tarefa/contexto/formatos/critérios; anexe trechos/dados (grounding/RAG); inclua exemplos de alta qualidade; peça auto‑checagens e citações; teste variações com avaliação; mantenha prompts modulares e versionados.",
                isPositive: true,
              },
              {
                title: "Não faça",
                content:
                  "Objetivos vagos ou múltiplos no mesmo turno; pedir tudo sem decompor; aceitar respostas sem validação; expor dados sensíveis; depender de raciocínio detalhado em produção sem revisões; ignorar métricas de qualidade/custo.",
                isPositive: false,
              },
            ],
          },
          {
            title: "Exemplo de prompt",
            content:
              "Modelo de prompt estruturado para sumarização com grounding e critérios.",
            code:
              "Você é um analista sênior de comunicação.\nTarefa: resumir o documento abaixo para executivos não técnicos.\nContexto (trecho):\n---\n{trecho_documento}\n---\nRestrições: até 5 bullets curtos; linguagem simples; não incluir opiniões; cite IDs das fontes entre colchetes.\nFormato de saída (JSON):\n{\n  \"bullets\": [\"...\"],\n  \"fontes\": [\"ID1\", \"ID2\"]\n}\nCritérios de qualidade: cobertura dos pontos principais, fidelidade ao texto citado, clareza e concisão.\nVerificação antes de responder: confirme se todos os bullets têm suporte em trechos fornecidos e liste os IDs em \"fontes\".",
          },
        ],
        bullets: [
          "Estruture papel/tarefa/contexto/restrições/forma/critérios",
          "Use RAG/grounding e exemplos de qualidade",
          "Peça auto‑checagens e valide saídas quando possível",
          "Evite prompts vagos e objetivos simultâneos sem decomposição",
        ],
      },
      {
        title: "Hallucination (atenção)",
        description:
          "Alucinação é quando o modelo produz conteúdo plausível porém falso ou não suportado. Reduza com contexto adequado, checagens e integração com fontes verificáveis.",
        topics: [
          {
            title: "Definição",
            content:
              "Geração de informações incorretas, inventadas ou sem suporte nas fontes fornecidas. Pode ocorrer mesmo com linguagem confiante e bem estruturada, exigindo validação explícita.",
          },
          {
            title: "Causas",
            content:
              "Janela de contexto limitada, falta de grounding, prompts genéricos, extrapolação fora do domínio e vieses/ruído nos dados de treino. Temperatura alta e objetivos ambíguos também ampliam o risco.",
          },
          {
            title: "Mitigação",
            content:
              "Use RAG com citações, forneça trechos relevantes, restrinja formato (campos obrigatórios), reduza temperatura, decomponha tarefas e peça validações (‘mostre trechos que embasam’). Faça verificação externa quando crítico.",
          },
          {
            title: "Boas práticas",
            content:
              "Peça referências, destaque nível de confiança, sinalize incertezas, restrinja domínios de resposta e implemente guardrails/políticas. Monitore métricas de factualidade e revise exemplos que induzem erro.",
          },
          {
            title: "Checklist",
            content:
              "Boas práticas rápidas para reduzir e detectar alucinações.",
            subtopics: [
              {
                title: "Faça",
                content:
                  "Forneça contexto e trechos relevantes; use RAG com citações; reduza temperatura; restrinja formato e domínios; peça nível de confiança e verificação; valide externamente em casos críticos; monitore factualidade.",
                isPositive: true,
              },
              {
                title: "Não faça",
                content:
                  "Prompts genéricos sem contexto; aceitar URLs/dados inventados; permitir respostas fora do escopo; usar saídas sem revisão para decisões sensíveis; ignorar sinais de incerteza do modelo.",
                isPositive: false,
              },
            ],
          },
        ],
        bullets: [
          "Ocorre quando o modelo produz conteúdo plausível porém incorreto ou inventado.",
          "Mitigação: citar fontes, verificar com RAG, chain-of-thought moderado e validações externas.",
          "Uso de ferramentas: consultas a bases confiáveis, chamadas a APIs e checagens programáticas.",
          "Fundamental para aplicações críticas (jurídico, saúde, finanças).",
        ],
      },
    ],
  },

  {
    id: "avancado",
    title: "Aplicações Reais",
    description:
      "Descubra aplicações práticas de IA generativa em diversos setores e aprenda a implementar soluções reais.",
    image: avancadoImg,
    imageAlt: "Ilustração de blocos transformer e fluxos generativos em azul e roxo",
    icon: "Cpu",
    slides: [
      {
        title: "Casos de Uso de IA Generativa",
        description:
          "Neste curso, exploraremos 8 casos de uso práticos e específicos de IA generativa que estão gerando valor real em diferentes setores. Cada caso será apresentado com sua definição, aplicações, arquitetura técnica, métricas de sucesso e estratégias de implementação rápida. O foco é em soluções que você pode implementar hoje, com exemplos concretos e dicas para começar rapidamente.",
        topics: [
          {
            title: "Por que casos de uso específicos",
            content:
              "Cada setor e processo tem necessidades únicas que demandam soluções customizadas. Entender os casos de uso específicos ajuda a identificar oportunidades reais de valor e implementar soluções que geram ROI mensurável.",
          },
          {
            title: "Padrão de implementação",
            content:
              "Todos os casos seguem um padrão: definição clara do problema, identificação de métricas de sucesso, implementação incremental com validações e monitoramento contínuo de performance e impacto.",
          },
          {
            title: "Considerações comuns",
            content:
              "Governança de dados, compliance regulatório, segurança, escalabilidade e integração com sistemas existentes são pontos críticos em qualquer implementação de IA generativa.",
          },
          {
            title: "Estratégia de adoção",
            content:
              "Comece com casos de uso de alto valor e baixa complexidade, valide resultados rapidamente e expanda gradualmente para casos mais complexos conforme ganha experiência e confiança.",
          },
        ],
        bullets: [
          "Foco em valor de negócio específico",
          "Implementação incremental e validada",
          "Governança e compliance integrados",
          "Estratégia de adoção gradual",
        ],
      },
      {
        title: "Document Intelligence",
        description:
          "Extração, classificação e entendimento de documentos com OCR + NLP/LLMs para automatizar processos de negócio.",
        video: "https://www.youtube.com/embed/5DuS6uRI5OM",
        videoTitle: "Document Intelligence com IA Generativa",
        topics: [
          {
            title: "O que é Document Intelligence",
            content:
              "Sistema inteligente que combina OCR (Reconhecimento Óptico de Caracteres), NLP (Processamento de Linguagem Natural) e LLMs para extrair, classificar e compreender informações de documentos não estruturados. Vai além da simples digitalização, entendendo o contexto, significado e relacionamentos entre dados em contratos, notas fiscais, relatórios, formulários e outros documentos de negócio.",
            subtopics: [
              {
                title: "Componentes principais",
                content:
                  "OCR para digitalização, modelos de layout para detectar estruturas (tabelas, campos, seções), extração de entidades nomeadas (CNPJ, valores, datas, endereços), classificação automática de tipos de documento, e RAG para responder perguntas sobre o conteúdo.",
              },
              {
                title: "Diferença da abordagem tradicional",
                content:
                  "Enquanto sistemas tradicionais dependem de templates rígidos, Document Intelligence usa IA para adaptar-se a variações de layout, entender contexto e extrair informações mesmo de documentos não padronizados.",
              },
            ],
          },
          {
            title: "Casos de uso e aplicações",
            content:
              "Aplicações práticas em diversos setores que geram valor imediato e ROI mensurável através da automação de processos manuais e redução de erros.",
            subtopics: [
              {
                title: "Financeiro e bancário",
                content:
                  "KYC/Onboarding (análise de documentos de identidade), processamento de contas a pagar/receber, análise de extratos bancários, validação de comprovantes, detecção de fraudes em documentos.",
              },
              {
                title: "Fiscal e contábil",
                content:
                  "Processamento de notas fiscais eletrônicas (NFe), boletos, recibos, declarações fiscais, reconciliação automática de documentos, extração de dados para relatórios.",
              },
              {
                title: "Jurídico e compliance",
                content:
                  "Análise de contratos, comparação de versões, detecção de cláusulas críticas, sumarização de documentos legais, extração de obrigações e prazos, análise de riscos contratuais.",
              },
              {
                title: "Saúde e seguros",
                content:
                  "Processamento de laudos médicos, análise de apólices de seguro, validação de sinistros, extração de informações de prontuários, classificação de documentos médicos.",
              },
            ],
          },
          {
            title: "Arquitetura técnica e funcionamento",
            content:
              "Fluxo completo desde a ingestão do documento até a entrega de insights estruturados, com validações e auditoria em cada etapa.",
            subtopics: [
              {
                title: "Pipeline de processamento",
                content:
                  "1) Ingestão e pré-processamento (normalização, limpeza); 2) OCR com pós-processamento (correção de erros); 3) Detecção de layout e estruturação; 4) Extração de entidades e campos; 5) Validação e enriquecimento; 6) Classificação e roteamento; 7) RAG para consultas complexas.",
              },
              {
                title: "Tecnologias e modelos",
                content:
                  "OCR: Tesseract, Azure Computer Vision, Google Vision API; Layout: LayoutLM, PaddleOCR; Extração: NER customizado, regex inteligente, LLMs para campos complexos; Classificação: modelos de transformer fine-tuned para tipos de documento.",
              },
              {
                title: "Validações e qualidade",
                content:
                  "Regras de negócio (faixas de valores, formatos), validação cruzada entre campos, checagem de consistência lógica, validação contra bases de dados externas (CNPJ, CEP), score de confiança por extração.",
              },
            ],
          },
          {
            title: "Métricas e KPIs de sucesso",
            content:
              "Indicadores quantitativos e qualitativos para medir o desempenho do sistema e seu impacto no negócio.",
            subtopics: [
              {
                title: "Métricas de precisão",
                content:
                  "Precisão de extração por campo (ex: 95% para valores, 98% para CNPJ), taxa de falsos positivos/negativos, acurácia de classificação de documentos, score de confiança médio.",
              },
              {
                title: "Métricas de eficiência",
                content:
                  "Taxa de automação (STP - Straight Through Processing), tempo médio de processamento por documento, throughput (documentos/hora), redução de tempo manual vs. automático.",
              },
              {
                title: "Métricas de negócio",
                content:
                  "Custo por documento processado, ROI da implementação, redução de erros manuais, satisfação dos usuários, tempo de resposta para consultas complexas.",
              },
            ],
          },
          {
            title: "Considerações críticas e cuidados",
            content:
              "Aspectos essenciais para implementação segura, escalável e em conformidade com regulamentações.",
            subtopics: [
              {
                title: "Privacidade e compliance",
                content:
                  "LGPD/GDPR para dados pessoais, criptografia em repouso e trânsito, controle de acesso baseado em roles, retenção e expurgo de dados, auditoria de acesso e processamento.",
              },
              {
                title: "Segurança e antifraude",
                content:
                  "Detecção de documentos falsificados, validação de assinaturas digitais, análise de metadados para detectar manipulação, verificação de consistência entre dados extraídos e visuais.",
              },
              {
                title: "Qualidade e validação",
                content:
                  "Human-in-the-loop (HITL) para campos críticos, versionamento de templates e regras, monitoramento contínuo de performance, feedback loop para melhoria dos modelos.",
              },
            ],
          },
          {
            title: "Estratégia de implementação",
            content:
              "Abordagem incremental para maximizar valor e minimizar riscos, começando com casos de uso de alto impacto.",
            subtopics: [
              {
                title: "Quick win inicial",
                content:
                  "Comece com 10-20 campos de alto valor (valor, impostos, vencimento, CNPJ) em documentos padronizados, com validações de negócio simples e HITL para exceções.",
                isPositive: true,
              },
              {
                title: "Expansão gradual",
                content:
                  "Adicione novos tipos de documento, campos complexos, e funcionalidades avançadas (RAG, análise semântica) conforme valida os resultados e ganha confiança.",
              },
              {
                title: "Integração e automação",
                content:
                  "Conecte com sistemas existentes (ERP, CRM), implemente workflows automatizados, e adicione alertas e notificações para exceções e anomalias.",
              },
            ],
          },
        ],
        bullets: [
          "OCR + NLP + LLMs para extração inteligente de dados",
          "Validações robustas e trilha completa de auditoria",
          "HITL para campos críticos e exceções",
          "Antifraude, compliance e segurança integrados",
          "ROI mensurável através de automação e redução de erros",
        ],
      },
      {
        title: "Sales & Marketing Automation",
        description:
          "Automação de prospecção, nutrição e conversão com personalização em escala usando IA generativa.",
        topics: [
          {
            title: "O que é Sales & Marketing Automation",
            content:
              "Sistema inteligente que combina dados, IA generativa e automação para personalizar e otimizar todo o funil de vendas e marketing. Vai além da automação básica, criando experiências únicas e relevantes para cada prospecto, baseadas em comportamento, contexto e dados firmográficos, resultando em maior engajamento e conversão.",
            subtopics: [
              {
                title: "Componentes principais",
                content:
                  "Enriquecimento de dados, segmentação inteligente, geração de conteúdo personalizado, orquestração multi-canal, scoring preditivo, e otimização contínua baseada em performance e feedback.",
              },
              {
                title: "Diferença da automação tradicional",
                content:
                  "Enquanto automações tradicionais usam templates e regras simples, a IA generativa cria conteúdo único e contextual, adaptando-se dinamicamente ao comportamento e necessidades de cada prospecto.",
              },
            ],
          },
          {
            title: "Casos de uso e aplicações práticas",
            content:
              "Aplicações específicas que geram valor imediato através da automação inteligente de processos de vendas e marketing.",
            subtopics: [
              {
                title: "Prospecção e enriquecimento",
                content:
                  "Identificação de leads qualificados, enriquecimento de dados firmográficos, descoberta de decisores, análise de fit de produto, e scoring de propensão de compra baseado em sinais comportamentais e dados externos.",
              },
              {
                title: "Nutrição e engajamento",
                content:
                  "Sequências de e-mail personalizadas, conteúdo adaptativo baseado em interações, recomendações de produtos/serviços, e jornadas de onboarding customizadas para diferentes perfis de cliente.",
              },
              {
                title: "Conversão e vendas",
                content:
                  "Geração de propostas personalizadas, criação de demos customizadas, assistentes de vendas com IA, e otimização de pricing baseada em segmentação e propensão.",
              },
              {
                title: "Retenção e expansão",
                content:
                  "Previsão de churn, identificação de oportunidades de upsell/cross-sell, campanhas de reativação, e personalização de experiências pós-venda.",
              },
            ],
          },
          {
            title: "Arquitetura técnica e funcionamento",
            content:
              "Sistema integrado que combina dados, IA e automação para criar experiências personalizadas em escala.",
            subtopics: [
              {
                title: "Pipeline de dados e enriquecimento",
                content:
                  "1) Coleta de dados (CRM, website, redes sociais, dados externos); 2) Enriquecimento com firmografia, comportamento e contexto; 3) Segmentação dinâmica baseada em múltiplos critérios; 4) Scoring preditivo com modelos de ML; 5) Atualização contínua de perfis.",
              },
              {
                title: "Geração de conteúdo com IA",
                content:
                  "LLMs para criação de e-mails, copies, propostas e conteúdo personalizado; templates dinâmicos com variáveis contextuais; validação de qualidade e compliance; A/B testing automático de variações.",
              },
              {
                title: "Orquestração multi-canal",
                content:
                  "Sincronização entre canais (e-mail, SMS, redes sociais, ads); timing inteligente baseado em comportamento; fallbacks e redundâncias; tracking unificado de engajamento e conversão.",
              },
            ],
          },
          {
            title: "Métricas e KPIs de sucesso",
            content:
              "Indicadores para medir o desempenho do sistema e seu impacto no funil de vendas e marketing.",
            subtopics: [
              {
                title: "Métricas de aquisição",
                content:
                  "Qualidade dos leads gerados, taxa de conversão por etapa do funil, CAC (Custo de Aquisição de Cliente), velocity do pipeline, e ROI por canal/campanha.",
              },
              {
                title: "Métricas de engajamento",
                content:
                  "Taxa de abertura e CTR de e-mails, tempo de resposta, engajamento com conteúdo, score de propensão, e qualidade das interações.",
              },
              {
                title: "Métricas de conversão e retenção",
                content:
                  "Taxa de conversão de leads em oportunidades, win rate, LTV (Lifetime Value), churn rate, e taxa de expansão (upsell/cross-sell).",
              },
            ],
          },
          {
            title: "Considerações críticas e compliance",
            content:
              "Aspectos essenciais para implementação ética, legal e eficaz de automações de vendas e marketing.",
            subtopics: [
              {
                title: "Compliance e regulamentações",
                content:
                  "LGPD/GDPR para dados pessoais, CAN-SPAM para e-mails, opt-in/opt-out, direito ao esquecimento, e conformidade com regulamentações específicas do setor.",
              },
              {
                title: "Qualidade e personalização",
                content:
                  "Evitar alucinações e claims não suportados, validação de dados antes do envio, deduplicação de leads, e monitoramento de qualidade do conteúdo gerado.",
              },
              {
                title: "Experiência do usuário",
                content:
                  "Frequência adequada de contato, relevância do conteúdo, facilidade de cancelamento, e respeito às preferências de comunicação do usuário.",
              },
            ],
          },
          {
            title: "Estratégia de implementação",
            content:
              "Abordagem incremental para maximizar ROI e minimizar riscos, começando com casos de uso de alto impacto.",
            subtopics: [
              {
                title: "Quick win inicial",
                content:
                  "Sequências outbound com e-mails 100% personalizados baseados em 3-5 sinais firmográficos e dor específica do setor, com segmentação simples e métricas básicas.",
                isPositive: true,
              },
              {
                title: "Expansão gradual",
                content:
                  "Adicione enriquecimento de dados, scoring preditivo, multi-canal, e otimização automática conforme valida os resultados e ganha confiança no sistema.",
              },
              {
                title: "Integração e automação avançada",
                content:
                  "Conecte com CRM, sistemas de marketing, e implemente workflows automatizados para lead nurturing, qualificação e conversão com mínima intervenção manual.",
              },
            ],
          },
        ],
        bullets: [
          "Personalização em escala com IA generativa",
          "Orquestração multi-canal inteligente",
          "Compliance e qualidade integrados",
          "ROI mensurável através de métricas de conversão",
          "Experiências únicas e relevantes para cada prospecto",
        ],
      },
      {
        title: "Customer Support & Operations",
        description:
          "Atendimento e backoffice com agentes, triagem e automações para melhorar experiência do cliente.",
        topics: [
          {
            title: "O que é Customer Support & Operations",
            content:
              "Sistema inteligente que combina IA generativa, RAG (Retrieval-Augmented Generation) e automação para transformar o atendimento ao cliente e operações de backoffice. Vai além de chatbots simples, criando assistentes que entendem contexto, resolvem problemas complexos e aprendem continuamente para melhorar a experiência do cliente e a eficiência operacional.",
            subtopics: [
              {
                title: "Componentes principais",
                content:
                  "Base de conhecimento inteligente, classificação automática de intenções, agentes assistivos para humanos, automação de workflows, e análise contínua de performance e satisfação.",
              },
              {
                title: "Diferença dos sistemas tradicionais",
                content:
                  "Enquanto sistemas tradicionais usam scripts fixos e regras simples, a IA generativa entende contexto, resolve problemas complexos e se adapta dinamicamente às necessidades específicas de cada cliente.",
              },
            ],
          },
          {
            title: "Casos de uso e aplicações práticas",
            content:
              "Aplicações específicas que melhoram significativamente a experiência do cliente e a eficiência operacional.",
            subtopics: [
              {
                title: "Atendimento ao cliente",
                content:
                  "Chatbots inteligentes com RAG para respostas precisas, agentes assistivos que sugerem soluções para atendentes humanos, triagem automática de tickets, e resolução de problemas simples sem intervenção humana.",
              },
              {
                title: "Operações de backoffice",
                content:
                  "Processamento automático de solicitações, automação de reembolsos e cancelamentos, validação de documentos, sumarização de tickets longos, e geração de relatórios personalizados.",
              },
              {
                title: "Gestão de conhecimento",
                content:
                  "Manutenção automática da base de conhecimento, identificação de gaps de informação, criação de FAQs dinâmicas, e treinamento contínuo de novos atendentes.",
              },
              {
                title: "Análise e insights",
                content:
                  "Detecção de tendências em tickets, análise de sentimento do cliente, identificação de problemas recorrentes, e recomendações para melhorias de produto/serviço.",
              },
            ],
          },
          {
            title: "Arquitetura técnica e funcionamento",
            content:
              "Sistema integrado que combina IA, conhecimento e automação para criar experiências de atendimento superiores.",
            subtopics: [
              {
                title: "Pipeline de processamento",
                content:
                  "1) Ingestão e estruturação da base de conhecimento; 2) Criação de embeddings e indexação vetorial; 3) Classificação de intenção e roteamento; 4) Geração de respostas com RAG; 5) Execução de ações via APIs/workflows; 6) Captura de feedback e aprendizado contínuo.",
              },
              {
                title: "Tecnologias e integrações",
                content:
                  "RAG com embeddings (OpenAI, Cohere), classificação com modelos de transformer, integração com CRMs e sistemas de tickets, APIs para ações automatizadas, e analytics em tempo real.",
              },
              {
                title: "Gestão de conhecimento",
                content:
                  "Versionamento de documentos, controle de qualidade de conteúdo, atualização automática baseada em feedback, e estruturação semântica para busca eficiente.",
              },
            ],
          },
          {
            title: "Métricas e KPIs de sucesso",
            content:
              "Indicadores para medir o impacto no atendimento ao cliente e na eficiência operacional.",
            subtopics: [
              {
                title: "Métricas de satisfação",
                content:
                  "CSAT (Customer Satisfaction Score), NPS (Net Promoter Score), FCR (First Contact Resolution), tempo de resolução, e taxa de escalação para atendentes humanos.",
              },
              {
                title: "Métricas de eficiência",
                content:
                  "AHT (Average Handling Time), taxa de autoatendimento, throughput de tickets, custo por contato, e redução de carga de trabalho manual.",
              },
              {
                title: "Métricas de qualidade",
                content:
                  "Precisão das respostas automáticas, taxa de resolução sem intervenção humana, qualidade das sugestões para atendentes, e redução de erros operacionais.",
              },
            ],
          },
          {
            title: "Considerações críticas e implementação",
            content:
              "Aspectos essenciais para implementação segura, escalável e que realmente melhora a experiência do cliente.",
            subtopics: [
              {
                title: "Escopo e limites",
                content:
                  "Definir claramente o que pode ser automatizado vs. o que requer intervenção humana, estabelecer fallbacks claros, e monitorar continuamente a qualidade das interações.",
              },
              {
                title: "Segurança e privacidade",
                content:
                  "Proteção de dados pessoais (LGPD/GDPR), criptografia de conversas, controle de acesso baseado em roles, e auditoria de todas as interações.",
              },
              {
                title: "Gestão de conhecimento",
                content:
                  "Controle de versões da base de conhecimento, validação de conteúdo antes da publicação, atualização contínua baseada em feedback, e treinamento de novos atendentes.",
              },
            ],
          },
          {
            title: "Estratégia de implementação",
            content:
              "Abordagem incremental para maximizar valor e minimizar riscos, começando com casos de uso de alto impacto.",
            subtopics: [
              {
                title: "Quick win inicial",
                content:
                  "Assistente interno para operadores com \"respostas sugeridas\" e links para documentação relevante; reduz AHT sem risco direto ao cliente e permite validação da qualidade.",
                isPositive: true,
              },
              {
                title: "Expansão gradual",
                content:
                  "Adicione automação de tickets simples, chatbots para perguntas frequentes, e processamento automático de solicitações conforme valida os resultados e ganha confiança.",
              },
              {
                title: "Integração e automação avançada",
                content:
                  "Conecte com sistemas existentes, implemente workflows automatizados para casos complexos, e adicione análise preditiva para antecipar problemas e melhorar proativamente a experiência.",
              },
            ],
          },
        ],
        bullets: [
          "RAG inteligente para base de conhecimento dinâmica",
          "Agent assist e automação de workflows",
          "Fallback humano claro e monitoramento contínuo",
          "Métricas de satisfação e eficiência integradas",
          "Experiência do cliente superior com custos reduzidos",
        ],
      },
      {
        title: "Data & Analytics Augmentation",
        description:
          "Aceleração de insights e análises com NL2SQL, storytelling e detecção de anomalias.",
        topics: [
          {
            title: "O que é",
            content:
              "Aceleração de insights e análises com NL2SQL, storytelling e anomalias.",
          },
          {
            title: "Casos de uso",
            content:
              "Pergunte-aos-dados, geração de queries, explicação de painéis, alertas inteligentes, previsão de demanda.",
          },
          {
            title: "Como funciona",
            content:
              "Catálogo + esquema → NL2SQL com validação → execução segura → resumo em linguagem natural → trilha de origem (proveniência).",
          },
          {
            title: "Métricas",
            content:
              "Taxa de sucesso de consultas, tempo-até-insight, adoção por time de negócio, precisão vs. analista.",
          },
          {
            title: "Cuidados",
            content:
              "Camadas semânticas bem definidas, políticas row-level, \"dry-run\" e aprovação antes de executar queries caras.",
          },
          {
            title: "Quick win",
            content:
              "NL2SQL somente-leitura sobre views curadas + geração de resumo executivo automático nos dashboards.",
            isPositive: true,
          },
        ],
        bullets: [
          "NL2SQL com validação",
          "Execução segura e aprovação",
          "Trilha de proveniência",
          "Adoção por usuários",
        ],
      },
      {
        title: "Web & Workflow Automation",
        description:
          "Orquestração de rotinas (RPA + agentes) entre sistemas e APIs para automatizar processos complexos.",
        topics: [
          {
            title: "O que é",
            content:
              "Orquestração de rotinas (RPA + agentes) entre sistemas e APIs.",
          },
          {
            title: "Casos de uso",
            content:
              "Extração de sites/portais, preenchimento de formulários, reconciliação entre ERPs/CRMs, triagem de e-mails, monitoramento de mudanças.",
          },
          {
            title: "Como funciona",
            content:
              "Detecta evento → agente interpreta contexto → chama APIs/robôs → validações → logs e retry/compensação.",
          },
          {
            title: "Métricas",
            content:
              "Throughput, % de sucesso sem intervenção, tempo por tarefa, taxa de exceções.",
          },
          {
            title: "Cuidados",
            content:
              "Fragilidade de seletores web, limites de API/TOS, idempotência e reprocessos, segurança de credenciais.",
          },
          {
            title: "Quick win",
            content:
              "Automação de \"swivel-chair\" (copiar/colar entre dois sistemas) com validações simples e relatórios de exceção.",
            isPositive: true,
          },
        ],
        bullets: [
          "RPA + agentes inteligentes",
          "Validações e compensação",
          "Idempotência e reprocessos",
          "Segurança de credenciais",
        ],
      },
      {
        title: "Programming & Developer Productivity",
        description:
          "Ferramentas para acelerar ciclo de desenvolvimento e reduzir defeitos com IA generativa.",
        topics: [
          {
            title: "O que é",
            content:
              "Ferramentas para acelerar ciclo de desenvolvimento e reduzir defeitos.",
          },
          {
            title: "Casos de uso",
            content:
              "Autocomplete/codex, geração de testes, refatoração, migração de frameworks, documentação e revisão de PRs.",
          },
          {
            title: "Como funciona",
            content:
              "Contexto do repo (AST, dependências) → LLM com políticas de segurança → sugestão explicada → checagens (lint, SAST, secrets) → CI/CD.",
          },
          {
            title: "Métricas",
            content:
              "Lead time de PR, cobertura de testes, defeitos em produção, MTTR.",
          },
          {
            title: "Cuidados",
            content:
              "Vazamento de IP/segredos, licenças, \"overreliance\"; sempre manter barreiras de revisão humana e scanning.",
          },
          {
            title: "Quick win",
            content:
              "Template de PR com checklist + bot que gera testes/sumários e aponta riscos antes do code review.",
            isPositive: true,
          },
        ],
        bullets: [
          "Contexto do repositório",
          "Políticas de segurança",
          "Checagens automáticas",
          "Revisão humana obrigatória",
        ],
      },
      {
        title: "Financial Services & Risk",
        description:
          "Modelos para crédito, fraude, AML/KYC e operações financeiras com IA generativa.",
        topics: [
          {
            title: "O que é",
            content:
              "Modelos para crédito, fraude, AML/KYC e operações financeiras.",
          },
          {
            title: "Casos de uso",
            content:
              "Score de crédito, detecção de fraude em tempo real, sanções/PEP, chargeback, priorização de cobrança.",
          },
          {
            title: "Como funciona",
            content:
              "Features transacionais + bureaus + grafos → modelos híbridos (ML clássico + LLM para explicações) → regras de negócio → monitoramento e drift.",
          },
          {
            title: "Métricas",
            content:
              "AUC/KS, precisão/recall por faixa, falsa-positividade, perdas (NPL), aprovação com risco controlado.",
          },
          {
            title: "Cuidados",
            content:
              "Explicabilidade, viés/discriminação, requisitos regulatórios, auditoria de modelos e rejeições adversas.",
          },
          {
            title: "Quick win",
            content:
              "Camada antifraude incremental (regras + modelo leve) antes do gateway de pagamento com feedback de chargebacks.",
            isPositive: true,
          },
        ],
        bullets: [
          "Modelos híbridos ML + LLM",
          "Explicabilidade e auditoria",
          "Compliance regulatório",
          "Monitoramento de drift",
        ],
      },
      {
        title: "Social & Brand Intelligence",
        description:
          "Monitoramento de marca, sentimento e temas em mídias sociais e notícias com IA generativa.",
        topics: [
          {
            title: "O que é",
            content:
              "Monitoramento de marca, sentimento e temas em mídias sociais e notícias.",
          },
          {
            title: "Casos de uso",
            content:
              "Análise de sentimento/motivos, detecção de crises, share of voice, mapeamento de influenciadores, benchmarking competitivo.",
          },
          {
            title: "Como funciona",
            content:
              "Coleta (APIs/crawlers) → deduplicação/limpeza → classificação de sentimento/emoções e tópicos → sumarização por persona/canal → alertas.",
          },
          {
            title: "Métricas",
            content:
              "Sentimento ponderado, variação diária/semana, share of voice, tempo até detecção, impacto por canal.",
          },
          {
            title: "Cuidados",
            content:
              "Amostragem enviesada, bots/spam, ironia/sarcasmo, compliance com termos de uso e privacidade.",
          },
          {
            title: "Quick win",
            content:
              "Painel de \"early-warning\" com alertas quando menções negativas sobem X% vs. base e resumo acionável para PR.",
            isPositive: true,
          },
        ],
        bullets: [
          "Coleta e limpeza de dados",
          "Classificação de sentimento",
          "Detecção de crises",
          "Alertas e sumarização",
        ],
             },
     ],
   },

   {
     id: "ferramentas",
     title: "Ferramentas de IA",
     description:
       "Explore as principais ferramentas e plataformas de IA generativa disponíveis no mercado e aprenda a escolher e usar as melhores para cada necessidade.",
     image: avancadoImg,
     imageAlt: "Ilustração de ferramentas e plataformas de IA",
     icon: "Wrench",
     slides: [
               {
          title: "Panorama das Ferramentas de IA",
          description:
            "Uma visão geral das principais categorias de ferramentas de IA generativa disponíveis no mercado, seus casos de uso ideais e como escolher a ferramenta certa para cada projeto.",
          image: import.meta.env.BASE_URL + "ai-leaders.png",
          imageAlt: "Gráfico Gartner - Generative AI Engineering Quadrant",
          imageCaption: "Fonte: Gartner — Generative AI Engineering (Dezembro 2024)",
          imageScale: 0.8,
          topics: [
           {
             title: "Por que conhecer as ferramentas",
             content:
               "Compreender o ecossistema de ferramentas de IA ajuda a tomar decisões informadas sobre qual tecnologia usar, otimizar custos e implementar soluções mais eficientes. Cada ferramenta tem suas forças e limitações específicas.",
           },
           {
             title: "Categorias principais",
             content:
               "As ferramentas se dividem em: modelos de linguagem (LLMs), geradores de imagem, assistentes de código, plataformas de automação, ferramentas de análise e plataformas de desenvolvimento. Cada categoria atende a necessidades específicas.",
           },
           {
             title: "Critérios de escolha",
             content:
               "Considere fatores como: custo por token/request, qualidade da saída, facilidade de integração, recursos de segurança, suporte e documentação, além da comunidade e ecossistema ao redor da ferramenta.",
           },
           {
             title: "Estratégia de adoção",
             content:
               "Comece com ferramentas gratuitas ou de baixo custo para experimentação, avalie resultados e gradualmente migre para soluções mais robustas conforme a necessidade e o orçamento permitirem.",
           },
         ],
         bullets: [
           "Conhecer ferramentas otimiza custos e eficiência",
           "Cada categoria atende necessidades específicas",
           "Avalie custo, qualidade e facilidade de uso",
           "Adoção gradual e baseada em resultados",
         ],
       },
       {
         title: "Modelos de Linguagem (LLMs)",
         description:
           "As principais plataformas de modelos de linguagem e como escolher entre elas para diferentes aplicações.",
         topics: [
                       {
              title: "OpenAI (GPT-5, GPT-4, GPT-3.5)",
              content:
                "Líder do mercado com GPT-5, oferecendo qualidade excepcional de texto, raciocínio e multimodalidade. Ideal para aplicações que demandam máxima precisão e criatividade. Custo: $0.005-0.015 por 1K tokens de entrada, $0.015-0.03 por saída.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Melhor qualidade geral, excelente raciocínio, contexto expandido (1M+ tokens), ferramentas robustas (function calling), multimodalidade avançada, API estável e bem documentada.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Custo mais alto, sem opção de self-hosted, dependência da OpenAI, possíveis restrições de conteúdo.",
                  isPositive: false,
                },
              ],
            },
           {
             title: "Anthropic (Claude)",
             content:
               "Claude 3.5 Sonnet oferece excelente qualidade com foco em segurança e alinhamento. Ideal para aplicações empresariais e que lidam com dados sensíveis. Custo similar ao GPT-4.",
             subtopics: [
               {
                 title: "Vantagens",
                 content:
                   "Excelente em análise de documentos, forte em segurança, boa performance em tarefas complexas, contexto de 200K tokens.",
                 isPositive: true,
               },
               {
                 title: "Limitações",
                 content:
                   "Menos ferramentas disponíveis, ecossistema menor, menos integrações prontas.",
                 isPositive: false,
               },
             ],
           },
           {
             title: "Google (Gemini)",
             content:
               "Gemini Pro oferece boa qualidade a custo competitivo. Integração nativa com ecossistema Google. Custo: $0.0005-0.0015 por 1K tokens.",
             subtopics: [
               {
                 title: "Vantagens",
                 content:
                   "Custo baixo, integração com Google Workspace, boa performance em tarefas gerais, contexto de 1M tokens.",
                 isPositive: true,
               },
               {
                 title: "Limitações",
                 content:
                   "Qualidade ligeiramente inferior ao GPT-4, menos ferramentas, documentação menos robusta.",
                 isPositive: false,
               },
             ],
           },
           {
             title: "Modelos Open Source",
             content:
               "Llama 3, Mistral, CodeLlama oferecem controle total e privacidade. Requerem infraestrutura própria. Custo: apenas infraestrutura.",
             subtopics: [
               {
                 title: "Vantagens",
                 content:
                   "Controle total, privacidade completa, sem custos de API, customização ilimitada.",
                 isPositive: true,
               },
               {
                 title: "Limitações",
                 content:
                   "Requer infraestrutura, menor qualidade geral, mais trabalho de manutenção, menos ferramentas.",
                 isPositive: false,
               },
             ],
           },
         ],
                   bullets: [
            "GPT-5: qualidade excepcional, multimodalidade avançada",
            "Claude: segurança e análise de documentos",
            "Gemini: custo baixo, integração Google",
            "Open source: controle total, mais trabalho",
          ],
       },
               {
          title: "Geradores de Imagem",
          description:
            "Ferramentas para criação e edição de imagens usando IA generativa, desde arte conceitual até imagens realistas.",
          topics: [
            {
              title: "Midjourney",
              content:
                "Plataforma líder em arte conceitual e criativa, conhecida por sua qualidade artística excepcional e estilo único. A interface funciona via Discord, facilitando colaboração e compartilhamento. Oferece controle avançado sobre estilo, composição e atmosfera através de prompts sofisticados. Custo: $10-30/mês dependendo do plano. Ideal para: design de produtos, marketing visual, conceitos de filmes/jogos, ilustrações artísticas e mood boards criativos.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Qualidade artística superior, comunidade ativa, controle fino de estilo, integração com Discord para colaboração, resultados consistentes em séries.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Interface via Discord (pode ser confusa), sem API pública, menos controle técnico, foco em arte conceitual (não fotorealismo).",
                  isPositive: false,
                },
              ],
            },
            {
              title: "DALL-E 3",
              content:
                "Modelo da OpenAI que se destaca pela precisão em seguir prompts textuais e gerar imagens que correspondem fielmente às descrições. Integrado ao ecossistema OpenAI, oferece APIs robustas para aplicações comerciais. Excelente para tarefas que exigem precisão e controle sobre o conteúdo gerado. Custo: $0.04-0.12 por imagem. Ideal para: aplicações comerciais, produtos, ilustrações técnicas, marketing que precisa de controle preciso sobre o resultado.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Precisão excepcional de prompt, integração com APIs OpenAI, qualidade consistente, bom para aplicações comerciais, suporte a múltiplos estilos.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Custo por imagem, dependência da OpenAI, menos flexibilidade artística que Midjourney, restrições de conteúdo.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Stable Diffusion",
              content:
                "Framework open source que oferece controle total sobre o processo de geração. Permite customização avançada de modelos, fine-tuning e integração em aplicações próprias. Requer conhecimento técnico para configuração e otimização. Custo: apenas infraestrutura (servidores, GPUs). Ideal para: pesquisa acadêmica, desenvolvimento de aplicações customizadas, empresas que precisam de controle total sobre dados e processos, prototipagem de novos modelos.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Controle total, privacidade completa, customização ilimitada, sem custos de API, pode rodar localmente, ideal para pesquisa.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Requer conhecimento técnico, infraestrutura própria, mais trabalho de configuração, qualidade pode variar dependendo do modelo usado.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Adobe Firefly",
              content:
                "Solução integrada ao Creative Suite da Adobe, focada em uso comercial seguro e responsável. Treinado com dados licenciados, oferece proteção legal para uso comercial. Integração nativa com Photoshop, Illustrator e outras ferramentas Adobe. Custo: incluído no Creative Cloud. Ideal para: designers profissionais, agências, empresas que precisam de segurança legal, workflows integrados com ferramentas Adobe.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Integração nativa com Creative Suite, uso comercial seguro, dados licenciados, workflow profissional, suporte Adobe.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Dependente do ecossistema Adobe, menos flexibilidade que soluções open source, custo do Creative Cloud.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Canva AI",
              content:
                "Ferramenta integrada ao Canva que democratiza a criação de imagens com IA. Interface intuitiva e amigável, ideal para usuários não técnicos. Foco em marketing, redes sociais e design básico. Custo: incluído no Canva Pro. Ideal para: pequenas empresas, profissionais de marketing, criadores de conteúdo, usuários que precisam de simplicidade e rapidez.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Interface muito fácil de usar, integração com Canva, ideal para marketing, sem conhecimento técnico necessário, templates prontos.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Menos controle avançado, dependente do Canva, qualidade pode ser inferior a ferramentas especializadas.",
                  isPositive: false,
                },
              ],
            },
          ],
          bullets: [
            "Midjourney: arte conceitual superior, comunidade ativa",
            "DALL-E: precisão de prompt, APIs robustas",
            "Stable Diffusion: controle total, open source",
            "Adobe Firefly: uso comercial seguro, integração nativa",
            "Canva AI: simplicidade, democratização do design",
          ],
        },
               {
          title: "Assistentes de Código",
          description:
            "Ferramentas que aceleram o desenvolvimento de software usando IA generativa para escrita, revisão e debugging de código.",
          topics: [
            {
              title: "GitHub Copilot",
              content:
                "Assistente de código líder do mercado, desenvolvido pela Microsoft em parceria com a OpenAI. Integrado nativamente ao Visual Studio Code, Visual Studio, Neovim e outros editores populares. Oferece sugestões de código em tempo real baseadas no contexto do arquivo atual, comentários e padrões do projeto. Custo: $10/mês para uso individual, $19/mês para uso empresarial. Baseado no modelo Codex (derivado do GPT).",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Integração nativa com VS Code, sugestões em tempo real, suporte a múltiplas linguagens, aprendizado do contexto do projeto, extensa documentação e comunidade ativa.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Custo mensal, dependência da Microsoft/OpenAI, pode gerar código com bugs, nem sempre segue as convenções específicas do projeto.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Cursor",
              content:
                "Editor de código moderno construído especificamente para desenvolvimento com IA. Inclui chat integrado com GPT-4, geração de código por comando de voz, refatoração inteligente e debugging assistido por IA. Interface limpa e intuitiva, similar ao VS Code. Custo: gratuito com limites de uso, planos pagos para uso intensivo. Ideal para desenvolvedores que querem uma experiência nativa de IA no desenvolvimento.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Chat integrado com GPT-4, interface moderna e intuitiva, geração de código por voz, refatoração inteligente, debugging assistido, gratuito para uso básico.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Ecossistema de extensões menor que VS Code, dependência da internet para funcionalidades de IA, ainda em desenvolvimento ativo.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Claude (Anthropic)",
              content:
                "Modelo de linguagem da Anthropic que se destaca na análise e explicação de código. Excelente para revisão de código, debugging, documentação e explicação de conceitos complexos. Pode analisar arquivos inteiros, identificar problemas de segurança, sugerir melhorias e explicar algoritmos em detalhes. Custo: por token usado. Ideal para tarefas de análise e compreensão de código existente.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Excelente em análise de código, explicações detalhadas, identificação de bugs e problemas de segurança, forte em documentação, contexto amplo para análise.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Não é um editor integrado, custo por token pode ser alto para uso intensivo, menos focado em geração de código novo.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "CodeWhisperer (AWS)",
              content:
                "Assistente de código da Amazon Web Services, focado em desenvolvimento seguro na nuvem AWS. Integrado ao AWS Cloud9, VS Code, IntelliJ e outros IDEs. Oferece sugestões específicas para AWS SDKs, APIs e serviços. Inclui verificações de segurança automáticas e conformidade com melhores práticas da AWS. Custo: incluído em planos AWS Developer Tools, gratuito para uso individual.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Integração nativa com serviços AWS, verificações de segurança automáticas, conhecimento específico de APIs AWS, gratuito para uso individual, conformidade com melhores práticas.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Foco limitado ao ecossistema AWS, menos flexível para desenvolvimento geral, dependência da infraestrutura AWS.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Tabnine",
              content:
                "Assistente de código que prioriza privacidade e controle total. Oferece modelos locais que rodam na infraestrutura da empresa, garantindo que nenhum código seja enviado para servidores externos. Suporta múltiplas linguagens e IDEs. Ideal para empresas com requisitos rigorosos de segurança e privacidade. Custo: $12/mês para uso individual, preços empresariais para modelos locais.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Privacidade total com modelos locais, controle completo sobre dados, adequado para empresas com requisitos de segurança rigorosos, suporte a múltiplas linguagens.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Requer infraestrutura própria para modelos locais, qualidade pode ser inferior a soluções baseadas em nuvem, mais complexo de configurar.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "JetBrains AI Assistant",
              content:
                "Assistente de IA integrado aos IDEs da JetBrains (IntelliJ IDEA, PyCharm, WebStorm, etc.). Oferece geração de código, explicações, refatoração e debugging dentro do ambiente familiar dos desenvolvedores. Aproveita o conhecimento profundo que os IDEs da JetBrains têm sobre as linguagens e frameworks. Custo: $10/mês adicional ao plano JetBrains existente.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Integração profunda com IDEs JetBrains, conhecimento específico de linguagens e frameworks, refatoração inteligente, debugging assistido, ambiente familiar para usuários JetBrains.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Limitado ao ecossistema JetBrains, custo adicional ao IDE, menos flexível que soluções independentes.",
                  isPositive: false,
                },
              ],
            },
          ],
          bullets: [
            "GitHub Copilot: líder do mercado, integração nativa com VS Code",
            "Cursor: editor moderno com chat GPT-4 integrado",
            "Claude: excelente para análise e explicação de código",
            "CodeWhisperer: foco em desenvolvimento AWS seguro",
            "Tabnine: privacidade total com modelos locais",
            "JetBrains AI: integração profunda com IDEs especializados",
          ],
        },
               {
          title: "Plataformas de Automação",
          description:
            "Ferramentas que permitem criar fluxos de trabalho automatizados usando IA generativa para conectar diferentes sistemas e serviços.",
          topics: [
            {
              title: "Zapier",
              content:
                "Plataforma líder de automação entre aplicações, conhecida por sua simplicidade e ampla integração. Oferece mais de 5.000 integrações com aplicações populares, incluindo funcionalidades de IA para processamento de texto, análise de dados e tomada de decisões. Interface drag-and-drop intuitiva, ideal para usuários não técnicos. Custo: $20-100/mês dependendo do volume de tarefas. Inclui recursos de IA como formatação inteligente de dados, classificação automática e geração de conteúdo.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Interface muito intuitiva, ampla integração (5.000+ apps), recursos de IA integrados, documentação excelente, comunidade ativa, suporte robusto.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Custo pode ser alto para uso intensivo, limitações de customização avançada, dependência da plataforma, menos flexibilidade para lógicas complexas.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Make (Integromat)",
              content:
                "Plataforma de automação visual avançada que oferece controle granular sobre workflows complexos. Interface visual com cenários que permitem criar lógicas condicionais sofisticadas, loops e manipulação de dados avançada. Inclui módulos de IA para processamento de linguagem natural, análise de sentimento e geração de conteúdo. Custo: $9-50/mês. Ideal para automações que requerem lógica complexa e transformação de dados.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Lógica visual avançada, controle granular, cenários complexos, módulos de IA, transformação de dados sofisticada, melhor custo-benefício que Zapier.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Curva de aprendizado mais íngreme, menos integrações que Zapier, interface pode ser complexa para iniciantes, documentação menos extensa.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "n8n",
              content:
                "Plataforma de automação open source que oferece controle total sobre workflows e dados. Pode ser self-hosted ou usado na nuvem. Interface visual poderosa com suporte a JavaScript customizado, permitindo automações altamente personalizadas. Inclui integrações com modelos de IA via APIs e suporte a RAG (Retrieval-Augmented Generation). Custo: apenas infraestrutura para self-hosted, planos cloud disponíveis. Ideal para empresas que precisam de controle total e customização avançada.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Controle total, open source, self-hosted, JavaScript customizado, integração com APIs de IA, sem custos de licença, máxima flexibilidade.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Requer conhecimento técnico, infraestrutura própria, menos integrações prontas, mais trabalho de configuração, comunidade menor.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Microsoft Power Automate",
              content:
                "Solução de automação integrada ao ecossistema Microsoft, parte do Microsoft 365. Oferece automações baseadas em IA para processamento de documentos, análise de dados e integração com serviços Microsoft. Inclui RPA (Robotic Process Automation) para automação de tarefas em desktop. Custo: incluído no Microsoft 365 Business, planos separados disponíveis. Ideal para empresas que já usam o ecossistema Microsoft e precisam de automações empresariais robustas.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Integração nativa com Microsoft 365, RPA incluído, recursos de IA empresariais, compliance e segurança Microsoft, suporte empresarial robusto.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Limitado ao ecossistema Microsoft, menos integrações com apps de terceiros, custo do Microsoft 365, dependência da infraestrutura Microsoft.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "IFTTT (If This Then That)",
              content:
                "Plataforma de automação focada em conectividade simples entre aplicações e dispositivos IoT. Interface baseada em applets (receitas) que conectam triggers e ações. Inclui funcionalidades de IA para processamento de dados e tomada de decisões simples. Custo: $5/mês para plano Pro. Ideal para automações pessoais, IoT e integrações simples entre aplicações populares.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Simplicidade extrema, foco em IoT, applets prontos, ideal para automações pessoais, interface mobile-friendly, comunidade ativa.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Funcionalidades limitadas para casos complexos, menos controle sobre lógica, dependência de applets existentes, menos recursos de IA.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Automate.io",
              content:
                "Plataforma de automação focada em marketing e vendas, com integrações específicas para CRMs, ferramentas de marketing e análise. Oferece recursos de IA para segmentação de leads, análise de comportamento e personalização de campanhas. Interface visual intuitiva com templates prontos para casos de uso comuns. Custo: $50-200/mês. Ideal para equipes de marketing e vendas que precisam automatizar processos de lead nurturing e análise de dados.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Foco em marketing/vendas, templates prontos, integrações específicas, recursos de IA para segmentação, suporte especializado.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Foco limitado a marketing/vendas, menos flexibilidade para outros casos de uso, custo mais alto, ecossistema menor.",
                  isPositive: false,
                },
              ],
            },
                         {
               title: "Pipedream",
               content:
                 "Plataforma de automação orientada a desenvolvedores, com suporte nativo a código customizado em Node.js, Python e Go. Oferece integração direta com APIs de IA e permite criar workflows altamente customizados. Interface híbrida que combina visual e código. Custo: gratuito para uso básico, planos pagos para uso avançado. Ideal para desenvolvedores que precisam de flexibilidade máxima e integração com ferramentas de IA customizadas.",
               subtopics: [
                 {
                   title: "Vantagens",
                   content:
                     "Orientado a desenvolvedores, código customizado, integração direta com APIs, gratuito para uso básico, máxima flexibilidade.",
                   isPositive: true,
                 },
                 {
                   title: "Limitações",
                   content:
                     "Requer conhecimento de programação, menos integrações visuais, comunidade menor, documentação técnica.",
                   isPositive: false,
                 },
               ],
             },
             {
               title: "Retool",
               content:
                 "Plataforma de desenvolvimento de aplicações internas que combina interface visual com código customizado. Permite criar dashboards, CRMs, painéis de administração e aplicações de negócio rapidamente. Inclui integrações com modelos de IA via APIs e suporte a JavaScript/TypeScript para lógica customizada. Custo: $10-50/mês por usuário. Ideal para equipes que precisam criar aplicações internas personalizadas com integração de IA.",
               subtopics: [
                 {
                   title: "Vantagens",
                   content:
                     "Desenvolvimento rápido de apps internos, interface visual + código, integração com APIs de IA, componentes reutilizáveis, deploy automático, controle de acesso granular.",
                   isPositive: true,
                 },
                 {
                   title: "Limitações",
                   content:
                     "Foco em aplicações internas (não automação), custo por usuário pode ser alto, dependência da plataforma, menos flexibilidade que desenvolvimento nativo.",
                   isPositive: false,
                 },
               ],
             },
          ],
                     bullets: [
             "Zapier: líder do mercado, interface intuitiva, 5.000+ integrações",
             "Make: lógica visual avançada, cenários complexos, melhor custo-benefício",
             "n8n: open source, controle total, JavaScript customizado",
             "Power Automate: ecossistema Microsoft, RPA incluído, compliance empresarial",
             "IFTTT: simplicidade extrema, foco em IoT e automações pessoais",
             "Automate.io: especializado em marketing/vendas, templates prontos",
             "Pipedream: orientado a desenvolvedores, código customizado, gratuito",
             "Retool: desenvolvimento rápido de apps internos, interface visual + código",
           ],
        },
               {
          title: "Ferramentas de Workflow de AI",
          description:
            "Plataformas para criar, orquestrar e gerenciar fluxos de trabalho complexos de IA generativa com interfaces visuais e componentes reutilizáveis.",
          topics: [
            {
              title: "Langflow",
              content:
                "Interface visual para criar workflows de IA usando componentes do LangChain. Permite conectar diferentes modelos, ferramentas e bases de dados através de uma interface drag-and-drop intuitiva. Custo: gratuito (open source). Ideal para: prototipagem rápida, experimentação com diferentes arquiteturas de IA, desenvolvimento de aplicações RAG e chatbots.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Interface visual intuitiva, integração nativa com LangChain, gratuito e open source, componentes reutilizáveis, prototipagem rápida, comunidade ativa.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Foco específico em LangChain, menos flexibilidade para workflows muito complexos, dependência do ecossistema LangChain.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "LangChain",
              content:
                "Framework para desenvolvimento de aplicações LLM com componentes modulares. Oferece abstrações para chains, agents, memory e tools. Custo: gratuito. Ideal para: desenvolvimento de aplicações LLM complexas, integração com múltiplas APIs.",
            },
            {
              title: "LlamaIndex",
              content:
                "Framework especializado em RAG (Retrieval-Augmented Generation) com foco em processamento de documentos e dados estruturados. Custo: gratuito. Ideal para: aplicações de busca e análise de documentos, chatbots com conhecimento específico.",
            },
            {
              title: "Flowise",
              content:
                "Plataforma visual para criar chatbots e aplicações de IA sem código. Interface drag-and-drop para conectar modelos, bases de dados e APIs. Custo: gratuito (self-hosted) ou planos cloud. Ideal para: criação rápida de chatbots, aplicações de IA para não desenvolvedores.",
            },
            {
              title: "Semantic Kernel",
              content:
                "Framework da Microsoft para integrar LLMs com aplicações existentes. Suporte nativo para C# e Python. Custo: gratuito. Ideal para: integração de IA em aplicações empresariais, desenvolvimento com ecossistema Microsoft.",
            },
            {
              title: "AutoGen",
              content:
                "Framework da Microsoft para criar aplicações multi-agente conversacionais. Permite definir agentes especializados que colaboram para resolver tarefas complexas. Custo: gratuito. Ideal para: sistemas multi-agente, automação de workflows complexos, simulações de conversação.",
            },
          ],
          bullets: [
            "Langflow: interface visual para LangChain, prototipagem rápida",
            "LangChain: framework modular para aplicações LLM",
            "LlamaIndex: especializado em RAG e processamento de documentos",
            "Flowise: criação visual de chatbots sem código",
            "Semantic Kernel: integração com ecossistema Microsoft",
            "AutoGen: sistemas multi-agente conversacionais",
          ],
        },
               {
          title: "Plataformas de Desenvolvimento",
          description:
            "Ambientes integrados para desenvolvimento, teste e deploy de aplicações de IA generativa, oferecendo infraestrutura, ferramentas e serviços especializados.",
          topics: [
            {
              title: "Hugging Face",
              content:
                "Plataforma líder para modelos de IA open source, oferecendo hub de modelos, datasets, espaços de demonstração e ferramentas de desenvolvimento. Inclui Transformers, Diffusers e Accelerate para treinamento e inferência. Custo: gratuito com limites, planos pagos para uso empresarial. Ideal para: experimentação, pesquisa, desenvolvimento de modelos customizados e deploy de aplicações.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Maior repositório de modelos open source, ferramentas especializadas (Transformers, Diffusers), espaços de demonstração, comunidade ativa, integração com frameworks populares, gratuito para uso básico.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Limitações de uso gratuito, latência em modelos grandes, menos recursos que plataformas empresariais, dependência da comunidade para suporte.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Replicate",
              content:
                "Plataforma especializada em deploy e execução de modelos de IA open source. Permite rodar modelos complexos via API sem configuração de infraestrutura. Suporte a modelos de imagem, texto, áudio e vídeo. Custo: por uso (pay-per-prediction). Ideal para: prototipagem rápida, aplicações que precisam de modelos específicos, startups e projetos que não querem gerenciar infraestrutura.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Deploy instantâneo de modelos, sem configuração de infraestrutura, pay-per-use, suporte a modelos complexos, APIs simples, integração fácil.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Custo pode ser alto para uso intensivo, menos controle sobre infraestrutura, dependência da plataforma, latência cold start.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Vercel AI SDK",
              content:
                "SDK especializado para desenvolvimento de aplicações web com IA no ecossistema Vercel. Oferece componentes React, hooks e utilitários para integração com LLMs, streaming de respostas e gerenciamento de estado. Integração nativa com Vercel Edge Functions e Serverless. Custo: incluído no Vercel. Ideal para: desenvolvedores web que querem adicionar IA a aplicações React/Next.js.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Integração nativa com Vercel, componentes React prontos, streaming de respostas, hooks especializados, deploy automático, gratuito para uso básico.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Limitado ao ecossistema Vercel, menos flexibilidade para outros frameworks, dependência da infraestrutura Vercel.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Google Colab",
              content:
                "Ambiente de notebooks Jupyter na nuvem com acesso gratuito a GPUs e TPUs. Integração nativa com Google Drive e serviços Google. Suporte a bibliotecas populares de ML/IA. Custo: gratuito com limites, planos Pro para recursos premium. Ideal para: experimentação, educação, prototipagem, colaboração em projetos de IA.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Acesso gratuito a GPUs/TPUs, integração com Google Drive, colaboração em tempo real, bibliotecas pré-instaladas, ideal para educação e experimentação.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Limitações de uso gratuito, sessões desconectam automaticamente, menos recursos que infraestrutura dedicada, dependência da internet.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Databricks",
              content:
                "Plataforma unificada de dados e IA para empresas, oferecendo notebooks colaborativos, MLflow para experimentação, e infraestrutura escalável. Suporte a múltiplas linguagens (Python, R, SQL, Scala). Custo: $0.40-0.55 por DBU. Ideal para: empresas que precisam de ML em escala, equipes de dados, projetos que requerem governança e colaboração.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Plataforma unificada de dados e ML, MLflow para experimentação, colaboração empresarial, governança robusta, escalabilidade, suporte empresarial.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Custo alto, complexidade para projetos simples, curva de aprendizado, dependência da plataforma.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "AWS SageMaker",
              content:
                "Serviço gerenciado da Amazon para desenvolvimento e deploy de modelos de ML. Oferece notebooks, experimentação, treinamento distribuído e endpoints para inferência. Integração nativa com ecossistema AWS. Custo: por uso (instâncias, armazenamento, transferência). Ideal para: empresas que já usam AWS, projetos que precisam de escalabilidade e integração com serviços AWS.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Integração nativa com AWS, escalabilidade automática, ferramentas de experimentação, endpoints gerenciados, suporte empresarial robusto.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Custo pode ser alto, dependência do ecossistema AWS, complexidade para iniciantes, vendor lock-in.",
                  isPositive: false,
                },
              ],
            },
            {
              title: "Azure Machine Learning",
              content:
                "Serviço de ML da Microsoft com notebooks, experimentação, AutoML e endpoints gerenciados. Integração com Azure DevOps e outros serviços Microsoft. Suporte a frameworks populares e modelos customizados. Custo: por uso (computação, armazenamento). Ideal para: empresas que usam ecossistema Microsoft, projetos que precisam de integração com Azure.",
              subtopics: [
                {
                  title: "Vantagens",
                  content:
                    "Integração com ecossistema Microsoft, AutoML, governança empresarial, suporte a múltiplos frameworks, endpoints gerenciados.",
                  isPositive: true,
                },
                {
                  title: "Limitações",
                  content:
                    "Dependência do ecossistema Azure, custo para uso intensivo, complexidade inicial, vendor lock-in.",
                  isPositive: false,
                },
              ],
            },
          ],
          bullets: [
            "Hugging Face: maior hub de modelos open source, ferramentas especializadas",
            "Replicate: deploy instantâneo, pay-per-use, sem configuração de infraestrutura",
            "Vercel AI SDK: componentes React prontos, integração nativa com Vercel",
            "Google Colab: acesso gratuito a GPUs/TPUs, ideal para experimentação",
            "Databricks: plataforma unificada para ML empresarial em escala",
            "AWS SageMaker: integração nativa com AWS, escalabilidade automática",
            "Azure ML: ecossistema Microsoft, AutoML, governança empresarial",
          ],
        },
               {
          title: "Como Escolher e Implementar",
          description:
            "Estratégias práticas e metodologias comprovadas para selecionar as ferramentas certas e implementá-las com sucesso em seus projetos, desde avaliação inicial até governança contínua.",
          topics: [
            {
              title: "Avaliação de necessidades e contexto",
              content:
                "Comece definindo claramente o problema a ser resolvido, público-alvo, requisitos de qualidade, orçamento e timeline. Considere também requisitos de compliance, segurança e integração com sistemas existentes. Avalie a maturidade da organização em relação à IA e a disponibilidade de recursos técnicos.",
              subtopics: [
                {
                  title: "Análise do problema",
                  content:
                    "Identifique o valor de negócio específico, métricas de sucesso, restrições técnicas e requisitos regulatórios. Documente casos de uso detalhados e cenários de falha.",
                  isPositive: true,
                },
                {
                  title: "Avaliação de maturidade",
                  content:
                    "Considere a experiência da equipe com IA, infraestrutura existente, processos de governança e cultura de inovação da organização.",
                  isPositive: true,
                },
              ],
            },
            {
              title: "Prova de conceito estruturada",
              content:
                "Desenvolva um processo sistemático para testar 2-3 ferramentas candidatas com casos de uso reais. Crie critérios de avaliação padronizados, cronogramas de teste e métricas de comparação. Documente resultados, feedback dos usuários e lições aprendidas para informar decisões futuras.",
              subtopics: [
                {
                  title: "Critérios de avaliação",
                  content:
                    "Qualidade da saída, facilidade de uso, custo por transação, tempo de implementação, suporte e documentação, integração com sistemas existentes, escalabilidade e segurança.",
                  isPositive: true,
                },
                {
                  title: "Metodologia de teste",
                  content:
                    "Teste com dados reais, cenários de uso típicos, carga esperada e casos extremos. Inclua feedback de usuários finais e stakeholders técnicos.",
                  isPositive: true,
                },
              ],
            },
            {
              title: "Implementação gradual e iterativa",
              content:
                "Adote uma abordagem incremental, começando com casos de uso simples e de alto valor. Monitore métricas de qualidade, custo, adoção e impacto no negócio. Use feedback contínuo para ajustar a estratégia e expandir gradualmente para casos mais complexos conforme ganha experiência e confiança.",
              subtopics: [
                {
                  title: "Fases de implementação",
                  content:
                    "Fase 1: Piloto com usuários internos; Fase 2: Expansão para casos de uso adicionais; Fase 3: Integração com sistemas de produção; Fase 4: Otimização e escala.",
                  isPositive: true,
                },
                {
                  title: "Métricas de sucesso",
                  content:
                    "Taxa de adoção, tempo de resolução, qualidade da saída, ROI, satisfação do usuário, redução de custos operacionais.",
                  isPositive: true,
                },
              ],
            },
            {
              title: "Governança e monitoramento contínuo",
              content:
                "Estabeleça políticas de uso, limites de custo, monitoramento de qualidade e procedimentos de revisão. Implemente controles de acesso, auditoria de uso e políticas de retenção de dados. Mantenha documentação atualizada, treine a equipe regularmente e revise políticas conforme a tecnologia evolui.",
              subtopics: [
                {
                  title: "Políticas essenciais",
                  content:
                    "Política de uso responsável, limites de custo por usuário/departamento, procedimentos de aprovação para novos casos de uso, políticas de segurança de dados e conformidade regulatória.",
                  isPositive: true,
                },
                {
                  title: "Monitoramento e alertas",
                  content:
                    "Dashboards de uso e custo, alertas para gastos excessivos, monitoramento de qualidade da saída, detecção de uso inadequado e relatórios de compliance.",
                  isPositive: true,
                },
              ],
            },
            {
              title: "Estratégia de adoção por categoria",
              content:
                "Desenvolva estratégias específicas para cada categoria de ferramenta, considerando suas características únicas, casos de uso ideais e requisitos de implementação.",
              subtopics: [
                {
                  title: "LLMs e assistentes",
                  content:
                    "Comece com ChatGPT/Gemini para tarefas gerais, avalie Claude para análise de documentos, considere modelos open source para casos com requisitos de privacidade específicos.",
                  isPositive: true,
                },
                {
                  title: "Desenvolvimento e produtividade",
                  content:
                    "GitHub Copilot para desenvolvimento geral, Cursor para projetos com foco em IA, CodeWhisperer para ecossistema AWS, Tabnine para requisitos de privacidade.",
                  isPositive: true,
                },
                {
                  title: "Automação e workflows",
                  content:
                    "Zapier para integrações simples, Make para lógicas complexas, n8n para controle total, Power Automate para ecossistema Microsoft.",
                  isPositive: true,
                },
                {
                  title: "Design e criatividade",
                  content:
                    "Canva AI para marketing básico, Midjourney para arte conceitual, DALL-E para precisão de prompt, Adobe Firefly para uso comercial seguro.",
                  isPositive: true,
                },
              ],
            },
            {
              title: "Quick wins por setor e função",
              content:
                "Identifique oportunidades de valor rápido baseadas no setor e função específica da organização, priorizando casos de uso com alto impacto e baixa complexidade.",
              subtopics: [
                {
                  title: "Marketing e vendas",
                  content:
                    "Geração de copy com ChatGPT/Gemini, personalização de e-mails com Zapier, criação de imagens com Canva AI, análise de sentimento com ferramentas de IA.",
                  isPositive: true,
                },
                {
                  title: "Desenvolvimento e TI",
                  content:
                    "GitHub Copilot para aceleração de código, Cursor para debugging, automação de testes com IA, documentação automática com LLMs.",
                  isPositive: true,
                },
                {
                  title: "Operações e atendimento",
                  content:
                    "Chatbots com RAG para FAQ, agent assist para operadores, sumarização de tickets, automação de workflows com n8n/Zapier.",
                  isPositive: true,
                },
                {
                  title: "Análise e relatórios",
                  content:
                    "NL2SQL para consultas em linguagem natural, geração de relatórios com LLMs, análise de dados com ferramentas de IA, dashboards inteligentes.",
                  isPositive: true,
                },
              ],
            },
            {
              title: "Gestão de riscos e compliance",
              content:
                "Identifique e mitigue riscos específicos de cada ferramenta, incluindo vazamento de dados, custos inesperados, dependência de fornecedores e questões de compliance regulatório.",
              subtopics: [
                {
                  title: "Riscos principais",
                  content:
                    "Vazamento de dados sensíveis, custos escalonados rapidamente, dependência de APIs externas, alucinações em LLMs, questões de licenciamento e propriedade intelectual.",
                  isPositive: false,
                },
                {
                  title: "Estratégias de mitigação",
                  content:
                    "Políticas de dados claras, limites de custo automáticos, redundância de fornecedores, validação de saídas críticas, revisão legal de contratos e termos de uso.",
                  isPositive: true,
                },
              ],
            },
            {
              title: "Roadmap de evolução",
              content:
                "Desenvolva um plano de evolução de 12-18 meses, considerando o desenvolvimento da tecnologia, mudanças nas necessidades do negócio e aprendizado contínuo da equipe.",
              subtopics: [
                {
                  title: "Curto prazo (0-6 meses)",
                  content:
                    "Implementação de quick wins, treinamento da equipe, estabelecimento de políticas básicas, monitoramento inicial de custos e qualidade.",
                  isPositive: true,
                },
                {
                  title: "Médio prazo (6-12 meses)",
                  content:
                    "Expansão para casos de uso mais complexos, integração com sistemas existentes, otimização de custos, desenvolvimento de competências internas.",
                  isPositive: true,
                },
                {
                  title: "Longo prazo (12+ meses)",
                  content:
                    "Arquitetura de IA madura, automação avançada, inovação contínua, liderança de mercado em uso responsável de IA.",
                  isPositive: true,
                },
              ],
            },
          ],
          bullets: [
            "Avalie necessidades, maturidade e contexto organizacional",
            "Teste sistematicamente com critérios padronizados",
            "Implemente incrementalmente com monitoramento contínuo",
            "Estabeleça governança robusta e políticas claras",
            "Desenvolva estratégias específicas por categoria",
            "Identifique quick wins por setor e função",
            "Mitigue riscos e garanta compliance",
            "Planeje evolução de longo prazo",
         ],
        },
     ],
   },
   {
     id: "rag",
     title: "RAG - Retrieval-Augmented Generation",
     description: "Aprenda a combinar recuperação de informações com IA generativa para criar sistemas de perguntas e respostas precisos e atualizados.",
     image: avancadoImg,
     imageAlt: "Ilustração conceitual de RAG - sistema conectando base de dados a IA generativa",
     icon: "Database",
     slides: [
       {
         title: "O que é RAG (Retrieval-Augmented Generation)",
         description: "Entenda como RAG combina recuperação de informações com geração de texto para criar respostas mais precisas e atualizadas.",
         topics: [
           {
             title: "Definição de RAG",
             content: "RAG (Retrieval-Augmented Generation) é uma arquitetura que combina sistemas de recuperação de informações com modelos de linguagem generativos. Em vez de confiar apenas no conhecimento pré-treinado do modelo, RAG primeiro busca informações relevantes em uma base de dados externa e depois usa essas informações como contexto para gerar respostas mais precisas e atualizadas.",
           },
           {
             title: "Por que RAG é necessário?",
             content: "LLMs têm limitações importantes: conhecimento limitado pela data de treino, tendência a 'alucinar' informações, e falta de acesso a dados específicos da empresa. RAG resolve esses problemas fornecendo informações factuais atualizadas como contexto para a geração.",
             subtopics: [
               {
                 title: "Limitações dos LLMs puros",
                 content: "Conhecimento desatualizado, alucinações, falta de dados específicos do domínio ou empresa.",
               },
               {
                 title: "Benefícios do RAG",
                 content: "Respostas baseadas em fontes confiáveis, informações sempre atualizadas, controle sobre o conhecimento utilizado.",
               },
             ],
           },
         ],
         bullets: [
           "RAG = Recuperação de informações + Geração de texto",
           "Resolve limitações de conhecimento dos LLMs",
           "Garante respostas baseadas em fontes confiáveis",
           "Permite atualização contínua do conhecimento",
         ],
       },
       {
         title: "Arquitetura e Componentes do RAG",
         description: "Conheça os componentes essenciais de um sistema RAG e como eles trabalham juntos.",
         topics: [
           {
             title: "Componentes principais",
             content: "Um sistema RAG típico possui três componentes principais: o indexador (processa e armazena documentos), o recuperador (busca informações relevantes) e o gerador (produz respostas usando o contexto recuperado).",
             subtopics: [
               {
                 title: "1. Indexador",
                 content: "Processa documentos, divide em chunks, gera embeddings e armazena em vector database. Responsável por preparar o conhecimento para busca semântica.",
               },
               {
                 title: "2. Recuperador",
                 content: "Recebe a pergunta do usuário, gera embedding da query, busca documentos similares no vector database e retorna os mais relevantes.",
               },
               {
                 title: "3. Gerador",
                 content: "LLM que recebe a pergunta original + contexto recuperado e gera uma resposta coerente e fundamentada nas informações fornecidas.",
               },
             ],
           },
           {
             title: "Fluxo de funcionamento",
             content: "1) Usuário faz pergunta → 2) Sistema busca documentos relevantes → 3) Contextualiza a pergunta com informações encontradas → 4) LLM gera resposta baseada no contexto → 5) Retorna resposta com fontes.",
           },
         ],
         bullets: [
           "Indexador: processa e armazena documentos como embeddings",
           "Recuperador: busca informações relevantes para a query",
           "Gerador: LLM que produz respostas contextualizadas",
           "Vector Database: armazena embeddings para busca semântica",
         ],
       },
       {
         title: "Embeddings e Vector Databases",
         description: "Fundamentos da busca semântica que torna o RAG possível.",
         topics: [
           {
             title: "O que são embeddings",
             content: "Embeddings são representações numéricas (vetores) de texto que capturam o significado semântico. Textos com significados similares têm embeddings próximos no espaço vetorial, permitindo busca por similaridade semântica em vez de apenas palavras-chave.",
           },
           {
             title: "Vector Databases",
             content: "Bancos de dados especializados em armazenar e buscar vetores de alta dimensionalidade. Permitem busca por similaridade eficiente usando algoritmos como HNSW, IVF ou LSH.",
             subtopics: [
               {
                 title: "Opções populares",
                 content: "Pinecone, Weaviate, Qdrant, Chroma, FAISS, Supabase Vector, Postgres com pgvector.",
               },
               {
                 title: "Métricas de similaridade",
                 content: "Cosine similarity, dot product, euclidean distance - cada uma adequada para diferentes tipos de embeddings.",
               },
             ],
           },
           {
             title: "Modelos de embedding",
             content: "Diferentes modelos para gerar embeddings: OpenAI text-embedding-ada-002, Sentence Transformers, modelos multilíngues como multilingual-e5. A escolha impacta qualidade e custo.",
           },
         ],
         bullets: [
           "Embeddings capturam significado semântico como vetores",
           "Vector databases permitem busca por similaridade eficiente",
           "Múltiplas opções de modelos e bancos vetoriais",
           "Escolha do modelo impacta qualidade e custo do sistema",
         ],
       },
       {
         title: "Estratégias de Chunking",
         description: "Como dividir documentos para otimizar recuperação e geração.",
         topics: [
           {
             title: "Por que fazer chunking",
             content: "Documentos longos não cabem no contexto dos LLMs e embeddings de textos muito longos perdem granularidade semântica. Chunking divide o conteúdo em pedaços menores e mais focados, melhorando a precisão da recuperação.",
           },
           {
             title: "Estratégias de divisão",
             content: "Diferentes abordagens para dividir texto, cada uma com vantagens específicas dependendo do tipo de conteúdo e caso de uso.",
             subtopics: [
               {
                 title: "Fixed size chunking",
                 content: "Divisão em tamanhos fixos (ex: 500 tokens). Simples mas pode quebrar contexto importante no meio de frases ou parágrafos.",
               },
               {
                 title: "Semantic chunking",
                 content: "Divisão baseada em significado semântico, preservando tópicos coesos. Mais complexo mas mantém melhor contexto.",
               },
               {
                 title: "Hierarchical chunking",
                 content: "Cria hierarquia de chunks (capítulo → seção → parágrafo) permitindo busca em diferentes níveis de granularidade.",
               },
               {
                 title: "Overlap chunking",  
                 content: "Chunks com sobreposição para evitar perda de contexto nas bordas. Aumenta redundância mas melhora recuperação.",
               },
             ],
           },
           {
             title: "Considerações práticas",
             content: "Tamanho ideal varia por uso (128-512 tokens típico), considere limite de contexto do LLM, teste diferentes estratégias com seus dados específicos e monitore qualidade da recuperação.",
           },
         ],
         bullets: [
           "Chunking melhora precisão da busca semântica",
           "Fixed size: simples, semantic: preserva contexto",
           "Overlap evita perda de informação nas bordas",
           "Tamanho ideal: 128-512 tokens na maioria dos casos",
         ],
       },
       {
         title: "Implementação Prática de RAG",
         description: "Passos práticos para implementar um sistema RAG funcional.",
         topics: [
           {
             title: "Stack tecnológico comum",
             content: "Ferramentas e bibliotecas populares para cada componente do sistema RAG.",
             subtopics: [
               {
                 title: "Frameworks",
                 content: "LangChain, LlamaIndex, Haystack - abstraem complexidade e fornecem componentes prontos.",
               },
               {
                 title: "Vector Stores",
                 content: "Pinecone (managed), Chroma (local), Supabase Vector, Weaviate (self-hosted ou cloud).",
               },
               {
                 title: "LLMs",
                 content: "OpenAI GPT-4, Anthropic Claude, modelos open source via Ollama ou HuggingFace.",
               },
               {
                 title: "Embeddings",
                 content: "OpenAI embeddings, Sentence Transformers, Cohere embeddings, modelos multilíngues.",
               },
             ],
           },
           {
             title: "Pipeline de desenvolvimento",
             content: "1) Coleta e preparação de dados → 2) Chunking e processamento → 3) Geração de embeddings → 4) Indexação no vector store → 5) Implementação da busca → 6) Integração com LLM → 7) Interface de usuário.",
           },
           {
             title: "Código exemplo básico",
             content: "Exemplo simplificado usando LangChain + OpenAI:",
             code: `from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter  
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import OpenAI
from langchain.chains import RetrievalQA

# 1. Carrega documentos
loader = TextLoader('docs.txt')
documents = loader.load()

# 2. Divide em chunks
text_splitter = CharacterTextSplitter(chunk_size=500)
texts = text_splitter.split_documents(documents)

# 3. Cria vector store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(texts, embeddings)

# 4. Cria chain RAG
llm = OpenAI(temperature=0)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever()
)

# 5. Faz pergunta
response = qa_chain.run("Qual é o resumo do documento?")`,
           },
         ],
         bullets: [
           "LangChain/LlamaIndex simplificam desenvolvimento",
           "Pipeline: dados → chunks → embeddings → índice → busca → geração",
           "Teste com dados pequenos antes de escalar",
           "Monitore qualidade das respostas continuamente",
         ],
       },
       {
         title: "Otimização e Avaliação",
         description: "Como melhorar performance e medir qualidade do sistema RAG.",
         topics: [
           {
             title: "Métricas de avaliação",
             content: "Diferentes aspectos para avaliar um sistema RAG efetivo.",
             subtopics: [
               {
                 title: "Qualidade da recuperação",
                 content: "Precision@K, Recall@K, MRR (Mean Reciprocal Rank) - medem se documentos relevantes estão sendo recuperados.",
               },
               {
                 title: "Qualidade da geração",
                 content: "BLEU, ROUGE, BERTScore para similaridade textual. Métricas humanas: relevância, factualidade, completude.",
               },
               {
                 title: "Métricas de negócio",
                 content: "Taxa de resolução de perguntas, satisfação do usuário, tempo de resposta, custo por query.",
               },
             ],
           },
           {
             title: "Técnicas de otimização",
             content: "Estratégias para melhorar performance do sistema RAG.",
             subtopics: [
               {
                 title: "Query expansion",
                 content: "Expandir pergunta com sinônimos ou termos relacionados para melhorar recuperação.",
               },
               {
                 title: "Re-ranking",
                 content: "Aplicar segundo modelo para reordenar resultados da busca inicial por relevância.",
               },
               {
                 title: "Hybrid search",
                 content: "Combinar busca semântica (vetores) com busca tradicional (BM25) para melhor cobertura.",
               },
               {
                 title: "Fine-tuning",
                 content: "Ajustar modelo de embedding ou LLM para domínio específico quando há dados suficientes.",
               },
             ],
           },
         ],
         bullets: [
           "Avalie recuperação (Precision/Recall) e geração (qualidade/factualidade)",
           "Query expansion e re-ranking melhoram recuperação",
           "Hybrid search combina semântica + palavra-chave",
           "Fine-tuning para domínios específicos quando viável",
         ],
        },
      ],
    },
    {
      id: "mcp",
      title: "MCP - Model Context Protocol",
      description: "Aprenda o protocolo padrão para conectar assistentes de IA com fontes de dados e ferramentas externas de forma segura e eficiente.",
      image: avancadoImg,
      imageAlt: "Ilustração conceitual do MCP conectando IA com múltiplas fontes de dados",
      icon: "Network",
      slides: [
        {
          title: "O que é o Model Context Protocol (MCP)",
          description: "Entenda o protocolo padrão da Anthropic para conectar assistentes de IA com diversas fontes de dados e ferramentas.",
          topics: [
            {
              title: "Definição do MCP",
              content: "O Model Context Protocol (MCP) é um protocolo aberto desenvolvido pela Anthropic que define uma interface padronizada para assistentes de IA se conectarem com fontes de dados externas, ferramentas e serviços. Permite que LLMs acessem informações em tempo real de forma segura e controlada.",
            },
            {
              title: "Problema que resolve",
              content: "Assistentes de IA tradicionalmente têm conhecimento limitado e desatualizado. MCP resolve isso permitindo acesso controlado a dados atuais: bancos de dados, APIs, sistemas de arquivos, ferramentas empresariais e mais.",
              subtopics: [
                {
                  title: "Limitações tradicionais",
                  content: "Conhecimento estático, dados desatualizados, incapacidade de acessar sistemas específicos da empresa.",
                },
                {
                  title: "Benefícios do MCP",
                  content: "Acesso a dados em tempo real, integração padronizada, controle de permissões, extensibilidade.",
                },
              ],
            },
            {
              title: "Arquitetura básica",
              content: "MCP define uma arquitetura cliente-servidor onde o assistente de IA (cliente) se conecta a servidores MCP que fornecem acesso a recursos específicos. O protocolo garante comunicação segura e padronizada.",
            },
          ],
          bullets: [
            "Protocolo aberto da Anthropic para conectar IA com dados externos",
            "Resolve limitações de conhecimento desatualizado dos LLMs",
            "Arquitetura cliente-servidor com interface padronizada",
            "Permite acesso controlado e em tempo real a diversos recursos",
          ],
        },
        {
          title: "Arquitetura e Componentes do MCP",
          description: "Conheça os componentes fundamentais do protocolo MCP e como eles interagem.",
          topics: [
            {
              title: "Componentes principais",
              content: "O MCP é composto por três elementos principais que trabalham juntos para fornecer acesso seguro e padronizado aos recursos.",
              subtopics: [
                {
                  title: "Cliente MCP",
                  content: "O assistente de IA (como Claude Desktop) que consome dados e ferramentas através do protocolo MCP.",
                },
                {
                  title: "Servidor MCP",
                  content: "Aplicação que expõe recursos específicos (dados, ferramentas, prompts) seguindo o protocolo MCP.",
                },
                {
                  title: "Protocolo de comunicação",
                  content: "Define como cliente e servidor trocam mensagens, autenticam e gerenciam sessões de forma segura.",
                },
              ],
            },
            {
              title: "Tipos de recursos",
              content: "O MCP permite acesso a três tipos principais de recursos, cada um com suas características específicas.",
              subtopics: [
                {
                  title: "Resources (Recursos)",
                  content: "Dados estruturados ou não estruturados: arquivos, dados de banco, conteúdo web, documentos.",
                },
                {
                  title: "Tools (Ferramentas)",
                  content: "Funcionalidades executáveis: APIs REST, comandos do sistema, operações de banco de dados.",
                },
                {
                  title: "Prompts",
                  content: "Templates de prompts reutilizáveis com variáveis, otimizados para tarefas específicas.",
                },
              ],
            },
          ],
          bullets: [
            "Cliente MCP: assistente de IA que consome recursos",
            "Servidor MCP: expõe dados, ferramentas e prompts",
            "Protocolo seguro define comunicação padronizada",
            "Três tipos: Resources, Tools e Prompts",
          ],
        },
        {
          title: "Servidores MCP Disponíveis",
          description: "Explore servidores MCP prontos para uso e suas funcionalidades.",
          topics: [
            {
              title: "Servidores oficiais",
              content: "A Anthropic e comunidade mantêm diversos servidores MCP para casos de uso comuns.",
              subtopics: [
                {
                  title: "Filesystem",
                  content: "Acesso controlado ao sistema de arquivos local para leitura e escrita de documentos.",
                },
                {
                  title: "Git",
                  content: "Integração com repositórios Git para leitura de código, histórico e operações básicas.",
                },
                {
                  title: "SQLite/PostgreSQL",
                  content: "Conexão com bancos de dados para queries e operações CRUD controladas.",
                },
                {
                  title: "Web search",
                  content: "Busca na web através de APIs como Brave Search ou Google Custom Search.",
                },
              ],
            },
            {
              title: "Servidores empresariais",
              content: "Integrações com ferramentas empresariais populares para acesso a dados corporativos.",
              subtopics: [
                {
                  title: "Google Workspace",
                  content: "Acesso a Gmail, Google Drive, Calendar e outras ferramentas do Google.",
                },
                {
                  title: "Slack",
                  content: "Leitura de mensagens, envio de notificações e integração com workspaces.",
                },
                {
                  title: "GitHub",
                  content: "Acesso a repositórios, issues, pull requests e operações de desenvolvimento.",
                },
                {
                  title: "Notion",
                  content: "Leitura e escrita em bases de conhecimento e documentação corporativa.",
                },
              ],
            },
          ],
          bullets: [
            "Servidores oficiais: filesystem, Git, bancos SQL, web search",
            "Integrações empresariais: Google Workspace, Slack, GitHub",
            "Cada servidor expõe recursos específicos de sua plataforma",
            "Instalação simples via package managers ou Docker",
          ],
        },
        {
          title: "Configuração e Uso Prático",
          description: "Como configurar e usar servidores MCP no Claude Desktop e outras aplicações.",
          topics: [
            {
              title: "Configuração no Claude Desktop",
              content: "O Claude Desktop suporta MCP nativamente através de arquivo de configuração JSON.",
              code: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"]
    },
    "git": {
      "command": "npx", 
      "args": ["@modelcontextprotocol/server-git", "--repository", "/path/to/repo"]
    },
    "postgres": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-postgres", "postgresql://user:pass@localhost/db"]
    }
  }
}`,
            },
            {
              title: "Fluxo de uso típico",
              content: "1) Instalar servidor MCP → 2) Configurar no claude_desktop_config.json → 3) Reiniciar Claude Desktop → 4) Servidor aparece disponível → 5) Fazer perguntas que requerem os dados/ferramentas.",
            },
            {
              title: "Boas práticas de segurança",
              content: "Configure permissões restritivas, use variáveis de ambiente para credentials, monitore logs de acesso e mantenha servidores atualizados.",
              subtopics: [
                {
                  title: "Controle de acesso",
                  content: "Limite diretórios/dados acessíveis, use read-only quando possível, configure timeouts.",
                },
                {
                  title: "Credentials",
                  content: "Nunca hardcode senhas, use variáveis de ambiente, rotacione chaves regularmente.",
                },
              ],
            },
          ],
          bullets: [
            "Configuração via claude_desktop_config.json",
            "Instalação simples de servidores via npm/Docker",
            "Permissões restritivas e variáveis de ambiente para segurança",
            "Monitore logs e mantenha servidores atualizados",
          ],
        },
        {
          title: "Casos de Uso Empresariais",
          description: "Aplicações práticas do MCP em cenários empresariais reais.",
          topics: [
            {
              title: "Assistente de desenvolvimento",
              content: "Conectar Claude com repositórios Git, bancos de dados de desenvolvimento e ferramentas DevOps para assistência em coding, debugging e documentação.",
              subtopics: [
                {
                  title: "Recursos integrados",
                  content: "Git para histórico de código, PostgreSQL para schemas, filesystem para logs e configurações.",
                },
                {
                  title: "Casos de uso",
                  content: "Review de código, debugging de queries SQL, análise de logs, geração de documentação técnica.",
                },
              ],
            },
            {
              title: "Suporte ao cliente",
              content: "Integrar com CRM, base de conhecimento e ferramentas de suporte para respostas mais precisas e contextualizadas.",
              subtopics: [
                {
                  title: "Integrações típicas",
                  content: "Notion/Confluence para KB, Slack para comunicação interna, bancos CRM para histórico do cliente.",
                },
                {
                  title: "Benefícios",
                  content: "Respostas baseadas em dados reais, histórico completo do cliente, procedimentos atualizados.",
                },
              ],
            },
            {
              title: "Análise de dados",
              content: "Conectar com data warehouses e ferramentas de BI para análises exploratórias e relatórios automáticos.",
              subtopics: [
                {
                  title: "Fontes de dados",
                  content: "PostgreSQL/MySQL para dados transacionais, APIs para dados em tempo real, arquivos CSV/JSON.",
                },
                {
                  title: "Casos práticos",
                  content: "Análise exploratória, geração de relatórios, identificação de anomalias, dashboards automáticos.",
                },
              ],
            },
          ],
          bullets: [
            "Desenvolvimento: Git + DB + filesystem para coding assistance",
            "Suporte: CRM + KB + Slack para atendimento contextualizado",
            "Análise: Data warehouses + APIs para insights automáticos",
            "Cada caso combina múltiplos servidores MCP especializados",
          ],
        },
        {
          title: "Desenvolvendo Servidores MCP Personalizados",
          description: "Como criar seus próprios servidores MCP para necessidades específicas.",
          topics: [
            {
              title: "SDK e ferramentas",
              content: "A Anthropic fornece SDKs em Python e TypeScript para facilitar o desenvolvimento de servidores MCP personalizados.",
              subtopics: [
                {
                  title: "Python SDK",
                  content: "mcp-python: biblioteca oficial com classes base e helpers para implementar servidores.",
                },
                {
                  title: "TypeScript SDK", 
                  content: "mcp-typescript: implementação completa com tipos seguros e documentação abrangente.",
                },
              ],
            },
            {
              title: "Estrutura básica de um servidor",
              content: "Um servidor MCP implementa handlers para recursos, ferramentas e prompts seguindo interfaces padronizadas.",
              code: `from mcp import Server, Resource, Tool
import asyncio

server = Server("my-custom-server")

@server.list_resources()
async def list_resources():
    return [
        Resource(
            uri="custom://data/users",
            name="User Database", 
            mimeType="application/json"
        )
    ]

@server.read_resource()
async def read_resource(uri: str):
    if uri == "custom://data/users":
        return {"users": ["alice", "bob"]}

@server.list_tools()
async def list_tools():
    return [
        Tool(
            name="send_email",
            description="Send email to user",
            inputSchema={
                "type": "object",
                "properties": {
                    "to": {"type": "string"},
                    "subject": {"type": "string"}
                }
            }
        )
    ]

if __name__ == "__main__":
    asyncio.run(server.run())`,
            },
            {
              title: "Deploy e distribuição",
              content: "Servidores MCP podem ser distribuídos como pacotes npm/pip, imagens Docker ou executáveis standalone para facilitar instalação pelos usuários.",
            },
          ],
          bullets: [
            "SDKs oficiais em Python e TypeScript",
            "Implemente handlers para resources, tools e prompts",
            "Estrutura padrão com decorators e interfaces tipadas",
            "Distribuição via npm/pip, Docker ou executáveis",
          ],
        },
      ],
    },
    {
      id: "lovable",
      title: "Boas Práticas do Lovable",
      description: "Domine o Lovable: desde prompts eficazes até integração com GitHub e desenvolvimento híbrido com outras ferramentas de IA.",
      image: avancadoImg,
      imageAlt: "Ilustração de fluxo de trabalho do Lovable com GitHub e ferramentas de desenvolvimento",
      icon: "Code2",
      slides: [
        {
          title: "Introdução ao Lovable e Boas Práticas",
          description: "Entenda o que é o Lovable e como usar suas funcionalidades de forma eficiente para desenvolvimento de aplicações web.",
          topics: [
            {
              title: "O que é o Lovable",
              content: "Lovable é uma plataforma de desenvolvimento assistido por IA que permite criar aplicações web React completas através de conversas em linguagem natural. Combina chat inteligente com preview em tempo real e capacidades de edição visual.",
            },
            {
              title: "Tecnologias suportadas",
              content: "Lovable utiliza uma stack moderna e padronizada: React + TypeScript + Vite + Tailwind CSS + shadcn/ui. Também oferece integração nativa com Supabase para backend e banco de dados.",
              subtopics: [
                {
                  title: "Frontend",
                  content: "React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui components, React Router",
                },
                {
                  title: "Backend opcional",
                  content: "Supabase (auth, database, storage, edge functions) integrado nativamente",
                },
                {
                  title: "Limitações",
                  content: "Não suporta: Angular, Vue, Svelte, Next.js, apps mobile nativas, backend próprio",
                },
              ],
            },
            {
              title: "Princípios de uso eficiente",
              content: "Para obter melhores resultados no Lovable, siga uma abordagem iterativa e específica nas suas solicitações.",
              subtopics: [
                {
                  title: "Seja específico",
                  content: "Descreva exatamente o que quer em vez de conceitos vagos. 'Adicione um botão azul que salva o formulário' > 'Melhore a UX'",
                },
                {
                  title: "Iteração incremental",
                  content: "Faça mudanças pequenas e frequentes em vez de grandes refatorações de uma vez",
                },
                {
                  title: "Use Visual Edits",
                  content: "Para mudanças simples (texto, cores, estilos), use Visual Edits em vez do chat - é gratuito e mais rápido",
                },
              ],
            },
          ],
          bullets: [
            "Lovable = React + TypeScript + Tailwind + shadcn/ui + IA conversacional",
            "Preview em tempo real + edição visual + chat inteligente",
            "Abordagem iterativa: seja específico e faça mudanças incrementais",
            "Use Visual Edits para mudanças simples de styling",
          ],
        },
        {
          title: "Prompts Eficazes no Lovable",
          description: "Técnicas para escrever prompts que geram os melhores resultados no Lovable.",
          topics: [
            {
              title: "Estrutura de um bom prompt",
              content: "Prompts eficazes no Lovable seguem uma estrutura clara: contexto, ação específica, critérios de sucesso e restrições quando necessário.",
              subtopics: [
                {
                  title: "1. Contexto",
                  content: "Explique o que existe atualmente e o que você quer modificar ou adicionar",
                },
                {
                  title: "2. Ação específica", 
                  content: "Use verbos de ação claros: 'Crie', 'Adicione', 'Modifique', 'Remova', 'Refatore'",
                },
                {
                  title: "3. Critérios",
                  content: "Especifique aparência, comportamento, responsividade, acessibilidade desejados",
                },
                {
                  title: "4. Restrições",
                  content: "Mencione o que NÃO deve ser alterado ou limitações importantes",
                },
              ],
            },
            {
              title: "Exemplos de prompts eficazes",
              content: "Compare prompts vagos com prompts específicos para entender a diferença de qualidade nos resultados.",
              code: `❌ VAGO: "Melhore a página"

✅ ESPECÍFICO: "Adicione uma seção hero com título 'Bem-vindos', subtítulo explicativo, botão CTA azul e imagem de fundo. Deve ser responsivo e usar as cores do tema."

❌ VAGO: "Arrume o formulário" 

✅ ESPECÍFICO: "No formulário de contato, adicione validação em tempo real, mensagens de erro em vermelho abaixo de cada campo, e desabilite o botão submit até todos os campos estarem válidos."`,
            },
            {
              title: "Dicas avançadas",
              content: "Técnicas para obter resultados ainda melhores do Lovable.",
              subtopics: [
                {
                  title: "Referências visuais",
                  content: "Mencione sites, apps ou padrões UI conhecidos como referência de design",
                },
                {
                  title: "Casos de uso",
                  content: "Explique como o usuário vai interagir com a funcionalidade que você está pedindo",
                },
                {
                  title: "Priorização",
                  content: "Quando pedir múltiplas coisas, numere por ordem de importância",
                },
              ],
            },
          ],
          bullets: [
            "Estrutura: Contexto + Ação específica + Critérios + Restrições",
            "Use verbos de ação claros e seja específico sobre o resultado desejado",
            "Inclua referências visuais e casos de uso quando relevante",
            "Prompts específicos > prompts vagos sempre",
          ],
        },
        {
          title: "Conectando Lovable ao GitHub",
          description: "Como integrar seu projeto Lovable com GitHub para versionamento e colaboração.",
          topics: [
            {
              title: "Por que integrar com GitHub",
              content: "A integração GitHub oferece versionamento profissional, backup automático, colaboração em equipe e a possibilidade de desenvolver localmente ou em outras ferramentas.",
              subtopics: [
                {
                  title: "Benefícios principais",
                  content: "Versionamento Git, backup seguro, colaboração, desenvolvimento híbrido, deploy independente",
                },
                {
                  title: "Sync bidirecional",
                  content: "Mudanças no Lovable → GitHub automaticamente. Mudanças no GitHub → Lovable automaticamente",
                },
              ],
            },
            {
              title: "Passo a passo da conexão",
              content: "Processo simples para conectar seu projeto Lovable ao GitHub.",
              subtopics: [
                {
                  title: "1. Conectar conta",
                  content: "No Lovable, clique GitHub → Connect to GitHub → Autorize o Lovable GitHub App",
                },
                {
                  title: "2. Selecionar organização",
                  content: "Escolha a conta/organização GitHub onde o repositório será criado",
                },
                {
                  title: "3. Criar repositório",
                  content: "Clique 'Create Repository' no Lovable para gerar um novo repo com seu código",
                },
                {
                  title: "Importante",
                  content: "Apenas uma conta GitHub por conta Lovable. Não é possível importar repos existentes diretamente",
                },
              ],
            },
            {
              title: "Gerenciamento de versões",
              content: "Como usar o sistema de versionamento híbrido Lovable + Git.",
              subtopics: [
                {
                  title: "Histórico Lovable",
                  content: "Similar ao Google Docs, permite restaurar estados anteriores sem conhecimento Git",
                },
                {
                  title: "Git tradicional",
                  content: "Use branches, pull requests e merges para colaboração profissional",
                },
                {
                  title: "Experimental",
                  content: "Suporte limitado a branches no Lovable (Account Settings > Labs > GitHub Branch Switching)",
                },
              ],
            },
          ],
          bullets: [
            "GitHub → Connect to GitHub → Autorizar → Create Repository",
            "Sync bidirecional automático entre Lovable e GitHub",
            "Versionamento híbrido: histórico Lovable + Git tradicional",
            "Uma conta GitHub por conta Lovable apenas",
          ],
        },
        {
          title: "Clonando e Desenvolvendo Localmente",
          description: "Como clonar seu projeto Lovable e continuar desenvolvimento local ou com outras ferramentas de IA.",
          topics: [
            {
              title: "Clonando o repositório",
              content: "Após conectar ao GitHub, você pode clonar e trabalhar localmente mantendo sincronização.",
              code: `# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto

# 2. Instale dependências  
npm install
# ou
bun install

# 3. Execute localmente
npm run dev
# ou  
bun dev

# 4. Acesse http://localhost:5173`,
            },
            {
              title: "Estrutura do projeto",
              content: "O código no GitHub é uma aplicação web padrão que roda em qualquer ambiente.",
              subtopics: [
                {
                  title: "Stack técnica",
                  content: "Vite + React + TypeScript + Tailwind CSS - stack moderna e padrão",
                },
                {
                  title: "Portabilidade",
                  content: "Código 100% portável, pode ser hospedado em qualquer serviço (Vercel, Netlify, etc)",
                },
                {
                  title: "Configuração",
                  content: "Variáveis de ambiente e configurações devem ser gerenciadas no ambiente de hosting",
                },
              ],
            },
            {
              title: "Workflow de desenvolvimento",
              content: "Estratégias para combinar desenvolvimento local com Lovable de forma eficiente.",
              subtopics: [
                {
                  title: "Desenvolvimento paralelo",
                  content: "Trabalhe localmente e no Lovable simultaneamente - mudanças sincronizam automaticamente",
                },
                {
                  title: "Branches para features",
                  content: "Crie branches localmente, desenvolva features, faça PR e merge para main",
                },
                {
                  title: "CI/CD com GitHub Actions",
                  content: "Configure pipelines enquanto continua usando Lovable para desenvolvimento",
                },
              ],
            },
          ],
          bullets: [
            "git clone → npm install → npm run dev para desenvolvimento local",
            "Código é aplicação web padrão, 100% portável",
            "Sync automático: local ↔ GitHub ↔ Lovable",
            "Use branches + PRs para features complexas",
          ],
        },
        {
          title: "Integração com Cursor e outras IAs",
          description: "Como usar Cursor, Copilot e outras ferramentas de IA junto com o Lovable para maximum produtividade.",
          topics: [
            {
              title: "Por que usar múltiplas IAs",
              content: "Cada ferramenta de IA tem seus pontos fortes. Combinar Lovable com outras ferramentas maximiza produtividade e qualidade do código.",
              subtopics: [
                {
                  title: "Pontos fortes do Lovable",
                  content: "Prototipagem rápida, UI/UX, integração Supabase, mudanças visuais, arquitetura inicial",
                },
                {
                  title: "Pontos fortes do Cursor",
                  content: "Refatoração complexa, debugging detalhado, lógica de negócio, testes, performance",
                },
                {
                  title: "Pontos fortes do Copilot",
                  content: "Autocompletar código, padrões comuns, documentação, pequenas funções utilitárias",
                },
              ],
            },
            {
              title: "Workflow híbrido recomendado",
              content: "Estratégia para usar cada ferramenta no momento certo do desenvolvimento.",
              subtopics: [
                {
                  title: "1. Prototipagem inicial (Lovable)",
                  content: "Crie a estrutura base, componentes UI, layout responsivo e integrações básicas",
                },
                {
                  title: "2. Lógica complexa (Cursor)",
                  content: "Implemente algoritmos, validações complexas, integração com APIs externas, testes",
                },
                {
                  title: "3. Refinamento (Lovable)",
                  content: "Ajustes visuais, animações, responsividade, acessibilidade",
                },
                {
                  title: "4. Otimização (Cursor)",
                  content: "Performance, SEO, error handling, logging, monitoramento",
                },
              ],
            },
            {
              title: "Configuração do Cursor",
              content: "Como configurar o Cursor para trabalhar eficientemente com projetos Lovable.",
              code: `// .cursorrules (na raiz do projeto)
// Configurações específicas para projetos Lovable

- Este é um projeto React + TypeScript + Tailwind + shadcn/ui
- Mantenha a estrutura de componentes existente
- Use apenas as cores/tokens definidos em index.css  
- Prefira shadcn/ui components sobre componentes customizados
- Mantenha responsividade mobile-first
- Use semantic HTML para acessibilidade
- Siga patterns estabelecidos no projeto

// Quando sugerir mudanças:
- Explique o impacto da mudança
- Considere compatibilidade com Lovable
- Prefira mudanças incrementais
- Documente breaking changes`,
            },
          ],
          bullets: [
            "Lovable: prototipagem e UI. Cursor: lógica e refatoração",
            "Workflow: Lovable → Cursor → Lovable → Cursor iterativamente",
            "Configure .cursorrules para manter padrões do projeto",
            "Sincronização automática mantém todas as ferramentas atualizadas",
          ],
        },
        {
          title: "Deploy e Hospedagem Independente",
          description: "Como hospedar sua aplicação Lovable em outras plataformas mantendo o desenvolvimento na plataforma.",
          topics: [
            {
              title: "Opções de hospedagem",
              content: "Sua aplicação Lovable pode ser hospedada em qualquer serviço de hosting moderno.",
              subtopics: [
                {
                  title: "Plataformas recomendadas",
                  content: "Vercel, Netlify, Railway, Render, DigitalOcean App Platform, AWS Amplify",
                },
                {
                  title: "Deploy automático",
                  content: "Configure CI/CD para deploy automático quando fazer push para main no GitHub",
                },
                {
                  title: "Variáveis de ambiente",
                  content: "Configure secrets e environment variables na plataforma de hosting",
                },
              ],
            },
            {
              title: "Configuração no Vercel",
              content: "Exemplo prático de deploy no Vercel com CI/CD automático.",
              code: `# 1. Conecte repositório GitHub ao Vercel
# 2. Configure build settings:
Build Command: npm run build
Output Directory: dist
Install Command: npm install

# 3. Configure environment variables no dashboard
# 4. Deploy automático a cada push para main

# vercel.json (opcional)
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}`,
            },
            {
              title: "Domínio customizado",
              content: "Como configurar seu próprio domínio para a aplicação.",
              subtopics: [
                {
                  title: "Lovable domains",
                  content: "yoursite.lovable.app → requires paid plan para domínio customizado",
                },
                {
                  title: "Hosting independente",
                  content: "Use qualquer domínio quando hospedar em Vercel/Netlify etc",
                },
                {
                  title: "DNS configuration",
                  content: "Configure CNAME ou A records para apontar para sua plataforma de hosting",
                },
              ],
            },
          ],
          bullets: [
            "Código Lovable funciona em qualquer plataforma de hosting moderna",
            "Configure CI/CD para deploy automático via GitHub",
            "Gerencie environment variables na plataforma de hosting",
            "Domínio customizado disponível em qualquer hosting independente",
          ],
        },
      ],
    },
  ];
