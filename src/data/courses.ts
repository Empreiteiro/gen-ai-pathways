import avancadoImg from "@/assets/course-avancado.jpg";
import fundamentosImg from "@/assets/course-fundamentos.jpg";
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
          },
          {
            title: "Imagens",
            content:
              "Sistemas de geração e edição guiados por texto que agilizam marketing e design. Úteis para criar variações de criativos, mockups e thumbnails, além de edições como remoção/adição de elementos e ajuste de estilo mantendo composição. Observe políticas de licença e evite uso indevido de marcas ou rostos sem autorização.",
          },
          {
            title: "Produtividade",
            content:
              "Automação de etapas repetitivas e padronização de entregas. Exemplos: sumarização de documentos longos, extração estruturada de campos, geração de relatórios e apoio a código (boilerplate, testes e pequenas refatorações). Mesmo com alto ganho de velocidade, mantenha validação por linters, testes e revisão humana.",
          },
          {
            title: "Educação e criatividade",
            content:
              "Aprendizagem personalizada e aceleração de ideação. A ferramenta pode explicar conceitos no seu nível, propor exercícios progressivos, sugerir roteiros e storyboards e apoiar protótipos rápidos. Preserve autoria e ética acadêmica: cite fontes, declare uso de IA quando necessário e evite submissões não originais.",
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
      {
        title: "Considerações éticas e impacto",
        description:
          "Uso responsável de IA requer atenção a viés, privacidade, segurança, transparência e impacto no trabalho/sociedade, com governança contínua e prestação de contas.",
        topics: [
          {
            title: "Viés e transparência",
            content:
              "Meça desempenho por grupos (equidade), mitigue vieses em dados/prompts, e publique documentação (‘model cards’, ‘data sheets’) com escopo, limites e riscos conhecidos. Explique critérios quando decisões afetam pessoas.",
          },
          {
            title: "Privacidade e segurança",
            content:
              "Aplique minimização/coleta adequada, anonimização/pseudonimização, criptografia e controles de acesso. Conduza DPIA/relatórios de impacto quando necessário e defina políticas de retenção. Evite inserção de dados sensíveis em prompts.",
          },
          {
            title: "Impacto socioeconômico",
            content:
              "Promova requalificação e desenho de funções ‘copilotadas’. Avalie efeitos distributivos (quem ganha/perde) e adote métricas de produtividade/qualidade com salvaguardas trabalhistas.",
          },
          {
            title: "Governança",
            content:
              "Estabeleça políticas de uso, revisão de prompts/dados, auditoria e trilhas de decisão. Faça red‑teaming, avaliação de segurança e planos de resposta a incidentes. Nomeie responsáveis e mantenha supervisão multissetorial.",
          },
          {
            title: "Checklist",
            content:
              "Itens essenciais de conformidade e responsabilidade para adoção de IA.",
            subtopics: [
              {
                title: "Faça",
                content:
                  "Avalie viés/equidade por grupo; publique model cards/data sheets; realize DPIA/relatórios de impacto; aplique minimização e políticas de retenção; mantenha trilhas de auditoria; ofereça recurso humano e programas de requalificação; pratique red‑teaming e tenha plano de incidentes.",
                isPositive: true,
              },
              {
                title: "Não faça",
                content:
                  "Treinar/usar dados sem base legal; coletar além do necessário; decisões automatizadas sem explicação ou direito de revisão; implantar sem monitoramento; ocultar limitações e riscos conhecidos.",
                isPositive: false,
              },
            ],
          },
        ],
        bullets: [
          "Viés e transparência: monitore datasets, métricas de equidade e documente limitações.",
          "Privacidade e segurança: anonimização, controles de acesso e conformidade regulatória.",
          "Impacto socioeconômico: requalificação, aumento de produtividade e novos modelos de trabalho.",
          "Governança: políticas de uso responsável, auditoria e monitoramento contínuo.",
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
        description:
          "Os três paradigmas principais e quando usar cada um: aprender com rótulos, descobrir padrões ocultos e otimizar decisões por interação.",
        topics: [
          {
            title: "Supervisionado",
            content:
              "Modelo aprende a mapear entradas para saídas a partir de exemplos rotulados. Usado em classificação e regressão.",
          },
          {
            title: "Não supervisionado",
            content:
              "Descobre estrutura nos dados sem rótulos, como agrupamentos e reduções de dimensionalidade.",
          },
          {
            title: "Reforço",
            content:
              "Agente aprende por tentativa e erro, maximizando recompensa ao interagir com um ambiente.",
          },
        ],
        bullets: [
          "Supervisionado, não supervisionado e por reforço",
          "Tarefas: classificação, regressão, clustering, controle",
          "Métricas de avaliação e overfitting",
        ],
      },
      {
        title: "Redes neurais artificiais",
        description:
          "A estrutura básica que sustenta o deep learning: camadas, ativações e como o erro se propaga para ajustar os pesos.",
        topics: [
          {
            title: "Perceptrons e camadas",
            content:
              "Unidades lineares empilhadas formam redes profundas capazes de aprender representações complexas.",
          },
          {
            title: "Funções de ativação",
            content:
              "Não linearidades como ReLU, GELU e sigmoid permitem capturar relações não lineares.",
          },
          {
            title: "Backpropagation e otimização",
            content:
              "O gradiente do erro é propagado para atualizar pesos com otimizadores como SGD, Adam e suas variantes.",
          },
          {
            title: "Regularização",
            content:
              "Técnicas como dropout, weight decay e early stopping evitam overfitting e melhoram generalização.",
          },
        ],
        bullets: [
          "Perceptrons, camadas e funções de ativação",
          "Backpropagation e otimização",
          "Regularização e generalização",
        ],
      },
      {
        title: "Técnicas em IA generativa",
        description:
          "Os blocos modernos para gerar conteúdo de alta qualidade, com controle e condicionamento.",
        topics: [
          {
            title: "Transformers e atenção",
            content:
              "Mecanismo de atenção capta relações de longo alcance, base de LLMs e difusão guiada por texto.",
          },
          {
            title: "Modelos de difusão",
            content:
              "Processo de denoising progressivo que reconstrói dados de ruído, possibilitando geração de imagens e áudio.",
          },
          {
            title: "Fine-tuning e instrução",
            content:
              "Ajuste do modelo para domínios específicos e alinhamento a instruções, melhorando utilidade prática.",
          },
        ],
        bullets: [
          "Transformers e atenção",
          "Modelos de difusão",
          "Fine-tuning e instrução",
        ],
      },
      {
        title: "Dados para modelos generativos",
        description:
          "Qualidade dos dados é central: estratégias para curar, balancear e avaliar riscos de viés.",
        topics: [
          {
            title: "Coleta e limpeza",
            content:
              "Remoção de ruído, duplicatas e dados tóxicos; curadoria garante consistência e representatividade.",
          },
          {
            title: "Tokenização e normalização",
            content:
              "Conversão de texto/imagem em unidades apropriadas (tokens) e padronização de formatos para treino estável.",
          },
          {
            title: "Mitigação de viés",
            content:
              "Medições de equidade, reamostragem e filtros para reduzir vieses e impactos indesejados.",
          },
        ],
        bullets: [
          "Coleta, limpeza e balanceamento",
          "Tokenização e normalização",
          "Avaliação e mitigação de viés",
        ],
      },
      {
        title: "Ferramentas populares",
        description:
          "Principais frameworks e serviços do ecossistema para treinar, servir e integrar modelos.",
        topics: [
          {
            title: "Frameworks",
            content:
              "TensorFlow e PyTorch para modelagem/treino; ecossistemas maduros e ampla comunidade.",
          },
          {
            title: "Plataformas de modelos",
            content:
              "Hugging Face para repositórios, hubs e pipelines; acesso a modelos open-source e datasets.",
          },
          {
            title: "APIs e serviços",
            content:
              "OpenAI, Stability AI e outros provedores para inferência gerenciada, escalável e com SLAs.",
          },
        ],
        bullets: [
          "TensorFlow e PyTorch",
          "Hugging Face, OpenAI API",
          "Stability AI e ecossistema open-source",
        ],
      },
      {
        title: "Modelos generativos",
        description:
          "Como modelos aprendem distribuições de dados para criar amostras novas e úteis para diversas tarefas.",
        topics: [
          {
            title: "Objetivo",
            content:
              "Aproximar a distribuição dos dados de treino e amostrar novas instâncias coerentes com ela.",
          },
          {
            title: "Condicionamento",
            content:
              "Guiar a geração com rótulos, texto ou imagens de referência para controlar conteúdo e estilo.",
          },
          {
            title: "Avaliação",
            content:
              "Métricas quantitativas (p.ex., perplexidade, FID) e avaliação humana para qualidade e segurança.",
          },
        ],
        bullets: [
          "Aprendem a gerar dados similares ao treinamento",
          "Geram texto, imagens, áudio e vídeo",
          "Aplicações em criatividade, síntese e simulação",
        ],
      },
      {
        title: "Transformers (detalhes)",
        description:
          "Arquitetura baseada em atenção que permite paralelismo e captura de dependências de longo alcance.",
        topics: [
          {
            title: "Atenção",
            content:
              "Mecanismo que pondera partes relevantes da entrada; multi-head attention captura relações diversas.",
          },
          {
            title: "Positional encoding",
            content:
              "Codifica ordem/sequência para compensar a ausência de recorrência, essencial em texto e séries.",
          },
          {
            title: "Arquiteturas",
            content:
              "Encoder, decoder e encoder-decoder; variações como LLaMA, T5 e arquiteturas eficientes.",
          },
          {
            title: "Escalabilidade",
            content:
              "Leis de escala orientam ganhos com mais dados, parâmetros e compute, até limites práticos.",
          },
        ],
        bullets: [
          "Atenção permite modelar contexto em paralelo",
          "Base de LLMs modernos (GPT, LLaMA, etc.)",
          "Escalam bem em dados e parâmetros",
        ],
      },
      {
        title: "Large Language Models (LLMs)",
        description:
          "Modelos de linguagem de grande escala capazes de seguir instruções, raciocinar e escrever código, com limitações conhecidas.",
        topics: [
          {
            title: "Pré-treinamento",
            content:
              "Treino auto-supervisionado em corpora massivos para prever o próximo token e aprender conhecimento geral.",
          },
          {
            title: "Alinhamento por instrução",
            content:
              "Técnicas como SFT e RLHF afinam o comportamento para seguir instruções humanas com segurança.",
          },
          {
            title: "Limitações",
            content:
              "Alucinação, contexto finito, sensibilidade a prompts e custos computacionais são desafios atuais.",
          },
        ],
        bullets: [
          "Treinados em grandes corpora de texto",
          "Tarefas: QA, resumo, geração, código",
          "Limitações: alucinação, contexto finito, custo",
        ],
      },
      {
        title: "Prompt engineering",
        description:
          "Estratégias para obter saídas confiáveis: estrutura de instruções, exemplos e restrições para guiar o modelo.",
        topics: [
          {
            title: "Estrutura do prompt",
            content:
              "Defina papel, tarefa, contexto e formato de saída. Seja específico sobre restrições e critérios.",
          },
          {
            title: "Exemplos (few-shot)",
            content:
              "Inclua demonstrações curtas e de alta qualidade para guiar o estilo e a forma da resposta.",
          },
          {
            title: "Verificações",
            content:
              "Peça checagens internas, fontes, planos de ação e passos para aumentar confiabilidade.",
          },
        ],
        bullets: [
          "Especificar instruções, contexto e formato de saída",
          "Padrões: papel/tarefa/contexto/exemplos",
          "Use restrições, verificações e auto-reflexão",
        ],
      },
      {
        title: "Zero-shot e few-shot",
        description:
          "Capacidades emergentes de generalização: como exemplos de qualidade no prompt melhoram resultados.",
        topics: [
          {
            title: "Zero-shot",
            content:
              "Resolver tarefas sem exemplos explícitos, contando com o conhecimento internalizado no pré-treinamento.",
          },
          {
            title: "Few-shot",
            content:
              "Fornecer poucos exemplos guia o modelo sobre o formato e os padrões esperados, elevando a precisão.",
          },
          {
            title: "Avaliação",
            content:
              "Compare resultados com e sem exemplos; use conjuntos de teste representativos e métricas claras.",
          },
        ],
        bullets: [
          "Resolver tarefas sem (ou com poucos) exemplos",
          "Melhora com exemplos de qualidade no prompt",
          "Avaliar generalização e confiabilidade",
        ],
      },
      {
        title: "Embeddings",
        description:
          "Representações numéricas que capturam significado e permitem medir similaridade semântica.",
        topics: [
          {
            title: "Definição",
            content:
              "Vetores densos que mapeiam itens semanticamente similares próximos no espaço vetorial.",
          },
          {
            title: "Similaridade",
            content:
              "Cálculos de distância/cosseno permitem buscar itens relacionados e agrupar por temas.",
          },
          {
            title: "Aplicações",
            content:
              "Busca semântica, deduplicação, recomendação, clusterização e base para RAG.",
          },
        ],
        bullets: [
          "Representações vetoriais para medir similaridade",
          "Texto, imagens ou áudio no mesmo espaço",
          "Base para busca semântica e clustering",
        ],
      },
      {
        title: "Vector stores / vector databases",
        description:
          "Bancos otimizados para indexar e recuperar embeddings com eficiência e filtros.",
        topics: [
          {
            title: "Indexação",
            content:
              "Estruturas como HNSW e IVF garantem busca aproximada rápida em grandes coleções.",
          },
          {
            title: "Filtros e metadata",
            content:
              "Aplique filtros por atributos, controle versões e enriqueça documentos com metadados.",
          },
          {
            title: "Integração",
            content:
              "Conecte ao pipeline de RAG e sistemas transacionais para respostas atualizadas e auditáveis.",
          },
        ],
        bullets: [
          "Armazenam embeddings e suportam busca por similaridade",
          "Exemplos: Pinecone, FAISS, Astra DB",
          "Integração com pipelines de IA generativa",
        ],
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description:
          "Combina busca em conhecimento atualizado com geração, reduzindo alucinações e melhorando precisão.",
        topics: [
          {
            title: "Pipeline",
            content:
              "Consulta recupera contextos relevantes por embeddings/keywords; o modelo gera respostas com base nesses trechos.",
          },
          {
            title: "Benefícios",
            content:
              "Atualização fácil do conhecimento, maior precisão factual e rastreabilidade por citações.",
          },
          {
            title: "Armadilhas",
            content:
              "Contextos irrelevantes, janelas curtas e chunking ruim prejudicam a qualidade; avalie e ajuste.",
          },
        ],
        bullets: [
          "Combina busca (retrieval) com geração",
          "Respostas mais precisas e atualizadas",
          "Requer embeddings e base vetorial",
        ],
      },
      {
        title: "Prompt chaining",
        description:
          "Encadeamento de prompts para decompor problemas complexos em etapas verificáveis.",
        topics: [
          {
            title: "Decomposição",
            content:
              "Dividir tarefas em subproblemas facilita controle, verificação e paralelização de partes.",
          },
          {
            title: "Agentes e ferramentas",
            content:
              "Cada etapa pode consultar APIs, bases e validadores, com transições condicionais por regras.",
          },
          {
            title: "Observabilidade",
            content:
              "Registre prompts, contextos e saídas para auditoria, debugging e melhoria contínua.",
          },
        ],
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
        description:
          "Comparação prática entre GANs, VAEs, Transformers e técnicas de eficiência/controle em geração.",
        topics: [
          {
            title: "GANs",
            content:
              "Gerador e discriminador em competição produzem amostras realistas; sensíveis a instabilidade de treino.",
          },
          {
            title: "VAEs",
            content:
              "Modelos probabilísticos que aprendem espaços latentes contínuos, úteis para interpolação e edição.",
          },
          {
            title: "Transformers",
            content:
              "Sequenciais baseados em atenção, versáteis em texto e multimodalidade; padrão dominante atual.",
          },
          {
            title: "Eficiência e controle",
            content:
              "Técnicas como quantização, LoRA e guidance ajustam custo e aderência ao prompt/condições.",
          },
        ],
        bullets: [
          "GANs, VAEs e Transformers",
          "Escalonamento de modelos e eficiência",
          "Técnicas de controle e condicionamento",
        ],
      },
      {
        title: "Modelos de texto",
        description:
          "Panorama de LLMs, suas capacidades, limitações e integrações com ferramentas de busca (RAG).",
        topics: [
          {
            title: "Capacidades",
            content:
              "Resumo, QA, extração, geração criativa e código. Integrações com ferramentas ampliam o alcance.",
          },
          {
            title: "Limitações",
            content:
              "Alucinações, vieses, custos e latência; mitigação por RAG, verificação e engenharia de prompts.",
          },
          {
            title: "RAG",
            content:
              "Combinação de recuperação e geração para respostas atuais e citáveis, reduzindo erros factuais.",
          },
        ],
        bullets: [
          "LLMs como GPT, Claude, LLaMA",
          "Capacidades e limitações",
          "RAG (busca + geração)",
        ],
      },
      {
        title: "Imagem, áudio e vídeo",
        description:
          "Como funcionam pipelines de geração e edição multimídia e como avaliar a qualidade das saídas.",
        topics: [
          {
            title: "Imagem",
            content:
              "Difusão guiada por texto e controlnets permitem controle de composição, estilo e consistência.",
          },
          {
            title: "Áudio",
            content:
              "Modelos TTS e música geram fala e trilhas com timbre e prosódia controlados por prompt.",
          },
          {
            title: "Vídeo",
            content:
              "Geração e edição temporal coerente ainda são desafiadoras, mas evoluem rapidamente (ex.: Sora).",
          },
          {
            title: "Avaliação",
            content:
              "Combine métricas (FID, MOS) e revisão humana para assegurar fidelidade e segurança de conteúdo.",
          },
        ],
        bullets: [
          "Stable Diffusion, MidJourney, Sora",
          "Synthesis e edição generativa",
          "Avaliação de qualidade",
        ],
      },
      {
        title: "Aplicações práticas",
        description:
          "Casos reais em diferentes setores, com foco em ROI, riscos e desenho de produto/fluxos.",
        topics: [
          {
            title: "Negócios",
            content:
              "Assistentes internos, análise de documentos, automação de processos e suporte com redução de custos.",
          },
          {
            title: "Conteúdo",
            content:
              "Geração de texto e mídia para marketing, educação, jogos e entretenimento com personalização.",
          },
          {
            title: "Automação",
            content:
              "Orquestração de tarefas complexas com agentes, integrando sistemas legados e APIs modernas.",
          },
          {
            title: "Governança",
            content:
              "Políticas de uso, auditoria de prompts e controles de segurança para adoção corporativa.",
          },
        ],
        bullets: [
          "Negócios, arte e jogos",
          "Geração de conteúdo e produtividade",
          "Automação e prototipagem",
        ],
      },
      {
        title: "Tendências e AGI",
        description:
          "O que vem a seguir: modelos multimodais, alinhamento, segurança e especulações sobre AGI.",
        topics: [
          {
            title: "Multimodalidade",
            content:
              "Modelos que entendem e geram múltiplas modalidades (texto, imagem, áudio, vídeo) de forma integrada.",
          },
          {
            title: "Segurança e alinhamento",
            content:
              "Técnicas para reduzir abuso, vieses e comportamentos indesejados mantendo utilidade e liberdade criativa.",
          },
          {
            title: "Rumo à AGI",
            content:
              "Pesquisa em capacidades gerais, raciocínio, memória de longo prazo e auto-melhoria com segurança.",
          },
        ],
        bullets: [
          "Modelos multimodais",
          "Segurança e alinhamento",
          "Caminhos para AGI",
        ],
      },
      {
        title: "Fine-tuning (em profundidade)",
        description:
          "Estratégias de adaptação de modelos: dados do domínio, instruções, riscos e governança.",
        topics: [
          {
            title: "Abordagens",
            content:
              "Fine-tuning completo vs. adaptadores (LoRA/QLoRA) equilibram custo, desempenho e requisitos de hardware.",
          },
          {
            title: "Dados",
            content:
              "Conjuntos curados com instruções do domínio e exemplos edge-case; atenção a licenças e privacidade.",
          },
          {
            title: "Avaliação e riscos",
            content:
              "Métricas de tarefa, red-teaming e testes de segurança; mitigue overfitting e vazamento de dados.",
          },
        ],
        bullets: [
          "Ajuste fino de modelos pré-treinados",
          "Dados específicos do domínio e instruções",
          "Cuidados: overfitting, segurança, licenças",
        ],
      },
      {
        title: "MCP / A2A",
        description:
          "Padrões para conectar agentes a ferramentas e a outros agentes com interoperabilidade e controle.",
        topics: [
          {
            title: "MCP (Model Context Protocol)",
            content:
              "Define como agentes descobrem e consomem ferramentas com contratos claros e segurança no contexto.",
          },
          {
            title: "A2A (Agent-to-Agent)",
            content:
              "Permite colaboração/orquestração entre agentes especializados, cada um com competências e SLAs.",
          },
          {
            title: "Segurança",
            content:
              "Autorização granular, isolamento de capacidades e auditoria para rastrear ações executadas.",
          },
        ],
        bullets: [
          "Padrões para conectar agentes e ferramentas (Model Context Protocol)",
          "Agent-to-Agent: colaboração/orquestração entre agentes",
          "Foco em interoperabilidade e segurança",
        ],
      },
      {
        title: "APA",
        description:
          "Automação de processos impulsionada por agentes, com guardrails, auditoria e integração corporativa.",
        topics: [
          {
            title: "Modelagem de processos",
            content:
              "Defina etapas, regras de transição e pontos de verificação; trate exceções e reprocessamentos.",
          },
          {
            title: "Guardrails e auditoria",
            content:
              "Limites de ação, revisão humana obrigatória e trilhas de auditoria para rastrear decisões.",
          },
          {
            title: "Integração",
            content:
              "Conecte sistemas ERP/CRM, bases e APIs; monitore métricas de desempenho e custo (ROI).",
          },
        ],
        bullets: [
          "Automação de processos orientada a agentes",
          "Definição de fluxos, guardrails e auditoria",
          "Integração com sistemas corporativos",
        ],
      },
    ],
  },
];
