"use client"

import { useState } from "react"
import Link from "next/link"

const faq = [
  {
    categoria: "Recrutamento e Seleção",
    perguntas: [
      {
        pergunta: "Como abrir uma vaga na Gupy?",
        resposta:
          "Utilize o Agente Estratégico de R&S no Slack para gerar o resumo da vaga e insira as informações estruturadas nos Dados Internos da Gupy."
      },
      {
        pergunta: "Quando devo envolver o time de People?",
        resposta:
          "Sempre antes de abrir uma vaga para alinhar perfil, prioridade da contratação e estratégia de recrutamento."
      },
      {
        pergunta: "O que é o agente estratégico de R&S?",
        resposta:
          "É um chatbot no Slack que ajuda líderes a estruturar a necessidade da contratação antes da abertura da vaga."
      }
    ]
  },
  {
    categoria: "Processos internos",
    perguntas: [
      {
        pergunta: "Como registrar feedback de entrevista?",
        resposta:
          "Registre o feedback diretamente na Gupy logo após a entrevista, no campo específico de avaliação."
      },
      {
        pergunta: "Qual o SLA do processo seletivo?",
        resposta:
          "O prazo médio entre abertura da vaga e envio da proposta é de aproximadamente 20 dias."
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
    <div className="min-h-screen bg-gray-50">

      {/* HEADER SUPERIOR */}
      <div className="flex items-center justify-between px-10 py-6 border-b bg-white">

        <Link
          href="/"
          className="text-gray-500 hover:text-black flex items-center gap-2"
        >
          ← Voltar ao início
        </Link>

        <div className="flex items-center gap-2 font-semibold">
          ❓ Wiki Hero
        </div>

      </div>


      {/* HERO */}
      <div className="text-center py-16 px-6">

        <div className="inline-block px-4 py-1 text-xs rounded-full bg-white shadow mb-6">
          ✨ BASE DE CONHECIMENTO
        </div>

        <h1 className="text-5xl font-bold mb-4">
          Como podemos <span className="text-pink-500">ajudar hoje?</span>
        </h1>

        <p className="text-gray-500 max-w-xl mx-auto">
          Encontre processos, regras e respostas rápidas sobre People
          em poucos segundos.
        </p>

      </div>


      {/* BUSCA */}
      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">

          <span className="text-gray-400 text-xl">
            🔍
          </span>

          <input
            className="w-full outline-none text-gray-700"
            placeholder="Pesquise: vaga, entrevista, Gupy..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          {busca && (
            <button
              onClick={() => setBusca("")}
              className="text-sm text-gray-400 hover:text-black"
            >
              Limpar
            </button>
          )}

        </div>

      </div>


      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 mt-12 space-y-8">

        {faq.map((categoria, i) => {

          const perguntasFiltradas = categoria.perguntas.filter(
            (p) => filtrar(p.pergunta) || filtrar(p.resposta)
          )

          if (busca && perguntasFiltradas.length === 0) return null

          return (
            <div key={i} className="bg-white rounded-xl shadow-sm border">

              <div className="px-6 py-4 border-b font-semibold flex items-center gap-2">
                ⚡ {categoria.categoria}
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

                    <div className="flex justify-between px-6 py-4 hover:bg-gray-50">

                      <p className="text-gray-800">
                        {item.pergunta}
                      </p>

                      <span className="text-gray-400">
                        {aberto === id ? "−" : "+"}
                      </span>

                    </div>

                    {aberto === id && (
                      <div className="px-6 pb-5 text-gray-600">
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


      {/* ESPAÇO FINAL */}
      <div className="h-24"></div>

    </div>
  )
}