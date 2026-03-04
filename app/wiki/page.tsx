"use client"

import { useState } from "react"

const faq = [
  {
    categoria: "Recrutamento e Seleção",
    perguntas: [
      {
        pergunta: "Como abrir uma vaga na Gupy?",
        resposta:
          "Utilize o agente estratégico no Slack para gerar o resumo da vaga e insira nas informações internas da Gupy."
      },
      {
        pergunta: "Quando devo envolver o time de People?",
        resposta:
          "Sempre antes da abertura da vaga para alinhamento de perfil e estratégia de contratação."
      },
      {
        pergunta: "O que é o agente estratégico de R&S?",
        resposta:
          "Um chatbot no Slack que ajuda líderes a estruturar a necessidade de contratação."
      }
    ]
  },
  {
    categoria: "Processos internos",
    perguntas: [
      {
        pergunta: "Como registrar feedback de entrevista?",
        resposta:
          "Utilize o campo de feedback na Gupy logo após a entrevista."
      },
      {
        pergunta: "Qual o SLA do processo seletivo?",
        resposta:
          "O prazo médio é de 20 dias entre abertura da vaga e proposta."
      }
    ]
  }
]

export default function WikiPage() {
  const [busca, setBusca] = useState("")
  const [aberto, setAberto] = useState<number | null>(null)

  const filtrar = (texto: string) =>
    texto.toLowerCase().includes(busca.toLowerCase())

  return (
    <div className="min-h-screen p-16">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Wiki People
        </h1>

        {/* BUSCA */}
        <div className="bg-gray-100 p-4 rounded-xl mb-10 flex">

          <input
            className="w-full bg-transparent outline-none"
            placeholder="Pesquise: vaga, entrevista, Gupy..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          {busca && (
            <button
              onClick={() => setBusca("")}
              className="text-gray-400 text-sm"
            >
              Limpar
            </button>
          )}

        </div>

        {/* FAQ */}
        <div className="space-y-6">

          {faq.map((categoria, i) => {
            const perguntasFiltradas = categoria.perguntas.filter(
              (p) => filtrar(p.pergunta) || filtrar(p.resposta)
            )

            if (busca && perguntasFiltradas.length === 0) return null

            return (
              <div key={i} className="border rounded-xl">

                <div className="p-5 font-semibold bg-gray-50">
                  {categoria.categoria}
                </div>

                {perguntasFiltradas.map((item, index) => {
                  const id = i * 10 + index

                  return (
                    <div
                      key={id}
                      className="border-t cursor-pointer"
                      onClick={() =>
                        setAberto(aberto === id ? null : id)
                      }
                    >
                      <div className="p-5 flex justify-between">

                        <p>{item.pergunta}</p>

                        <span>
                          {aberto === id ? "−" : "+"}
                        </span>

                      </div>

                      {aberto === id && (
                        <div className="px-5 pb-5 text-gray-600">
                          {item.resposta}
                        </div>
                      )}

                    </div>
                  )
                })}
              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}