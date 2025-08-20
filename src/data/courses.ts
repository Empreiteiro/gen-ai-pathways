import avancadoImg from "@/assets/course-avancado.jpg";
import introImg from "@/assets/course-intro.jpg";

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
};

export type Course = {
  id: "introducao" | "avancado";
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
        title: "Aplicações em Negócios e Produtividade",
        description:
          "Como empresas estão usando IA generativa para aumentar eficiência, reduzir custos e melhorar a experiência do cliente.",
        topics: [
          {
            title: "Assistentes Internos",
            content:
              "Copilotos corporativos que ajudam funcionários a redigir e-mails, criar relatórios, analisar dados e preparar apresentações. Exemplos: Microsoft Copilot, Google Workspace AI, Notion AI.",
          },
          {
            title: "Atendimento ao Cliente",
            content:
              "Chatbots inteligentes que resolvem consultas comuns, escalam casos complexos e fornecem suporte 24/7. Integração com CRMs para personalização e histórico completo.",
          },
          {
            title: "Análise de Documentos",
            content:
              "Extração automática de informações de contratos, relatórios e formulários. Sumarização de documentos longos e identificação de insights relevantes.",
          },
          {
            title: "Automação de Processos",
            content:
              "Automação de tarefas repetitivas como preenchimento de formulários, classificação de documentos e geração de relatórios padronizados.",
          },
        ],
        bullets: [
          "Copilotos corporativos para produtividade",
          "Chatbots inteligentes para atendimento",
          "Análise e extração de documentos",
          "Automação de processos repetitivos",
        ],
      },
      {
        title: "Aplicações em Marketing e Conteúdo",
        description:
          "Como a IA generativa está revolucionando a criação de conteúdo, marketing digital e comunicação.",
        topics: [
          {
            title: "Geração de Conteúdo",
            content:
              "Criação de posts para redes sociais, artigos de blog, newsletters e materiais promocionais. Personalização de conteúdo baseada no público-alvo e contexto.",
          },
          {
            title: "Design e Criativos",
            content:
              "Geração de imagens para campanhas publicitárias, mockups de produtos e materiais visuais. Ferramentas: Midjourney, DALL-E, Canva AI.",
          },
          {
            title: "Copywriting e SEO",
            content:
              "Otimização de textos para mecanismos de busca, criação de meta-descrições e títulos atrativos. Geração de variações de copy para testes A/B.",
          },
          {
            title: "Vídeo e Áudio",
            content:
              "Criação de vídeos promocionais, podcasts e conteúdo audiovisual. Dublagem e tradução automática de conteúdo.",
          },
        ],
        bullets: [
          "Geração automática de conteúdo",
          "Design e criativos com IA",
          "Copywriting otimizado para SEO",
          "Produção de vídeo e áudio",
        ],
      },
      {
        title: "Aplicações em Educação e Treinamento",
        description:
          "Como a IA generativa está transformando a educação, criando experiências de aprendizado personalizadas e interativas.",
        topics: [
          {
            title: "Tutoria Personalizada",
            content:
              "Assistentes de IA que adaptam o conteúdo ao nível do aluno, explicam conceitos de diferentes formas e fornecem feedback personalizado.",
          },
          {
            title: "Geração de Conteúdo Educacional",
            content:
              "Criação de exercícios, quizzes, estudos de caso e materiais didáticos. Adaptação de conteúdo para diferentes estilos de aprendizado.",
          },
          {
            title: "Simulações e Ambientes Virtuais",
            content:
              "Criação de cenários de treinamento realistas para medicina, aviação, engenharia e outras áreas que requerem prática segura.",
          },
          {
            title: "Avaliação e Feedback",
            content:
              "Análise automática de redações, códigos e projetos. Fornecimento de feedback construtivo e sugestões de melhoria.",
          },
        ],
        bullets: [
          "Tutoria adaptativa personalizada",
          "Conteúdo educacional gerado por IA",
          "Simulações e ambientes virtuais",
          "Avaliação automática e feedback",
        ],
      },
      {
        title: "Aplicações em Saúde e Medicina",
        description:
          "Como a IA generativa está sendo aplicada na área da saúde para diagnóstico, pesquisa e atendimento ao paciente.",
        topics: [
          {
            title: "Diagnóstico por Imagem",
            content:
              "Análise de radiografias, ressonâncias e tomografias para detectar anomalias e auxiliar no diagnóstico médico.",
          },
          {
            title: "Descoberta de Medicamentos",
            content:
              "Geração de moléculas candidatas para novos medicamentos, otimização de compostos existentes e predição de propriedades farmacológicas.",
          },
          {
            title: "Documentação Médica",
            content:
              "Geração automática de prontuários, relatórios de exames e documentação clínica a partir de consultas e procedimentos.",
          },
          {
            title: "Educação Médica",
            content:
              "Criação de casos clínicos para treinamento, simulações de procedimentos e materiais educacionais para profissionais da saúde.",
          },
        ],
        bullets: [
          "Diagnóstico assistido por IA",
          "Descoberta e otimização de medicamentos",
          "Documentação médica automatizada",
          "Educação e treinamento médico",
        ],
      },
      {
        title: "Aplicações em Desenvolvimento de Software",
        description:
          "Como desenvolvedores estão usando IA generativa para acelerar o desenvolvimento, melhorar a qualidade do código e automatizar tarefas.",
        topics: [
          {
            title: "Copilotos de Código",
            content:
              "Assistentes que sugerem código, completam funções e ajudam na depuração. Exemplos: GitHub Copilot, Cursor, Amazon CodeWhisperer.",
          },
          {
            title: "Geração de Testes",
            content:
              "Criação automática de testes unitários, de integração e end-to-end. Geração de dados de teste e cenários de teste.",
          },
          {
            title: "Documentação e Comentários",
            content:
              "Geração automática de documentação técnica, comentários no código e READMEs baseados no código fonte.",
          },
          {
            title: "Refatoração e Otimização",
            content:
              "Sugestões de melhorias no código, identificação de problemas de performance e refatoração automática.",
          },
        ],
        bullets: [
          "Copilotos para desenvolvimento",
          "Geração automática de testes",
          "Documentação técnica automatizada",
          "Refatoração e otimização de código",
        ],
      },
      {
        title: "Aplicações em Pesquisa e Ciência",
        description:
          "Como pesquisadores estão usando IA generativa para acelerar descobertas científicas e análise de dados.",
        topics: [
          {
            title: "Análise de Dados Científicos",
            content:
              "Processamento e análise de grandes volumes de dados experimentais, identificação de padrões e geração de hipóteses.",
          },
          {
            title: "Simulações e Modelagem",
            content:
              "Criação de modelos computacionais complexos, simulações de fenômenos físicos e predições baseadas em dados históricos.",
          },
          {
            title: "Revisão de Literatura",
            content:
              "Análise automática de artigos científicos, sumarização de pesquisas e identificação de lacunas no conhecimento.",
          },
          {
            title: "Colaboração Científica",
            content:
              "Ferramentas que facilitam a colaboração entre pesquisadores, compartilhamento de dados e comunicação científica.",
          },
        ],
        bullets: [
          "Análise de dados científicos",
          "Simulações e modelagem computacional",
          "Revisão automática de literatura",
          "Colaboração e comunicação científica",
        ],
      },
      {
        title: "Implementação e Governança",
        description:
          "Considerações práticas para implementar IA generativa em organizações, incluindo governança, ética e ROI.",
        topics: [
          {
            title: "Estratégia de Implementação",
            content:
              "Identificação de casos de uso prioritários, definição de métricas de sucesso e criação de roadmap de implementação.",
          },
          {
            title: "Governança e Ética",
            content:
              "Políticas de uso responsável, comitês de ética, auditoria de modelos e conformidade regulatória (LGPD, GDPR).",
          },
          {
            title: "ROI e Métricas",
            content:
              "Medição de retorno sobre investimento, métricas de produtividade, satisfação do usuário e impacto nos negócios.",
          },
          {
            title: "Capacitação e Mudança Cultural",
            content:
              "Treinamento de equipes, gestão da mudança e criação de cultura de inovação responsável com IA.",
          },
        ],
        bullets: [
          "Estratégia e roadmap de implementação",
          "Governança ética e conformidade",
          "Medição de ROI e impacto",
          "Capacitação e mudança cultural",
        ],
      },
    ],
  },
];
