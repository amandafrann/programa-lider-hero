export const courseData = [
  {
    jornada: "Recrutamento e Seleção",
    modulos: [
      {
        titulo: "Planejamento",
        aulas: [
          {
            id: "rs-planejamento",
            titulo: "Planejamento da vaga",
            resumo:
              "Use a IA de People para estruturar o contexto da vaga antes da abertura e garantir alinhamento com o time.",
            conteudo: `
Planejamento da vaga utilizando IA de People.
Inclui definição de contexto, objetivo da contratação, impacto, perfil desejado e métricas de sucesso.
            `,
            tags: [
              "planejamento",
              "vaga",
              "contratação",
              "ia",
              "chatbot",
              "gupy",
              "recrutamento",
              "pré-abertura"
            ],
            link: "/rs/planejamento"
          }
        ]
      },

      {
        titulo: "Abertura",
        aulas: [
          {
            id: "rs-abertura",
            titulo: "Abertura de vaga na Gupy",
            resumo:
              "Aprenda como abrir uma vaga na Gupy de forma estruturada, utilizando template padrão e fluxo de aprovação.",
            conteudo: `
Processo completo de abertura de vaga:
- Acesso à Gupy
- Seleção de template
- Edição da descrição
- Definição de modelo de trabalho
- Dados internos
- Aprovação da vaga
            `,
            tags: [
              "abertura",
              "vaga",
              "gupy",
              "recrutamento",
              "contratação",
              "template",
              "aprovação",
              "descrição de vaga",
              "dados internos"
            ],
            link: "/rs/abertura"
          }
        ]
      },

      {
        titulo: "Alinhamento",
        aulas: [
          {
            id: "rs-alinhamento",
            titulo: "Alinhamento com People",
            resumo:
              "Garanta alinhamento com o time de People sobre perfil, estratégia e expectativas antes de iniciar o recrutamento.",
            conteudo: `
Etapa de alinhamento após aprovação da vaga.
Inclui definição de persona, estratégia de busca, critérios de avaliação e etapas do processo seletivo.
            `,
            tags: [
              "alinhamento",
              "people",
              "perfil",
              "vaga",
              "recrutamento",
              "contratação",
              "persona",
              "processo seletivo",
              "estratégia",
              "avaliação"
            ],
            link: "/rs/abertura/alinhamento"
          }
        ]
      }
    ]
  },

  {
    jornada: "Desenvolvimento",
    modulos: [
      {
        titulo: "Feedback",
        aulas: [
          {
            id: "dev-feedback",
            titulo: "Como dar feedback",
            resumo:
              "Aprenda a estruturar feedbacks claros, objetivos e construtivos para o desenvolvimento do time.",
            conteudo: "",
            tags: [
              "feedback",
              "desenvolvimento",
              "liderança",
              "1:1",
              "avaliação",
              "performance"
            ],
            link: "/desenvolvimento/feedback"
          }
        ]
      },

      {
        titulo: "1:1",
        aulas: [
          {
            id: "dev-1-1",
            titulo: "Como fazer 1:1",
            resumo:
              "Estruture conversas individuais consistentes para acompanhar performance e desenvolvimento do time.",
            conteudo: "",
            tags: [
              "1:1",
              "one on one",
              "liderança",
              "desenvolvimento",
              "conversa",
              "gestão"
            ],
            link: "/desenvolvimento/1-1"
          }
        ]
      }
    ]
  }
];