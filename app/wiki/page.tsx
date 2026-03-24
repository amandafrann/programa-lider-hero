"use client";

import { useState } from "react";
import Link from "next/link";
import { courseData } from "@/lib/courseData";

// 🔥 TRANSFORMA BASE EM FAQ
const gerarFAQ = () => {
  const resultado: any[] = [];

  courseData.forEach((jornada) => {
    jornada.modulos.forEach((modulo) => {
      modulo.aulas.forEach((aula) => {
        resultado.push({
          categoria: jornada.jornada,
          pergunta: aula.titulo,
          resposta: aula.resumo || aula.conteudo,
          link: aula.link,
          tags: aula.tags || [],
        });
      });
    });
  });

  return resultado;
};

export default function WikiPage() {
  const [busca, setBusca] = useState("");
  const [aberto, setAberto] = useState<number | null>(0);

  const faq = gerarFAQ();

  const filtrar = (item: any) => {
    const buscaLower = busca.toLowerCase();

    return (
      item.pergunta.toLowerCase().includes(buscaLower) ||
      item.resposta.toLowerCase().includes(buscaLower) ||
      item.tags.some((tag: string) =>
        tag.toLowerCase().includes(buscaLower)
      )
    );
  };

  const resultados = busca
    ? faq.filter((item) => filtrar(item))
    : faq;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">

      {/* HEADER */}
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
      <div className="text-center pt-20 pb-12 px-6">

        <div className="inline-flex items-center gap-2 px-4 py-1 text-xs rounded-full bg-white shadow-sm border mb-6">
          ✨ BASE DE CONHECIMENTO
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
          Como podemos{" "}
          <span className="text-pink-500">ajudar hoje?</span>
        </h1>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Encontre processos, regras e respostas rápidas sobre People
          em poucos segundos.
        </p>

      </div>

      {/* BUSCA PREMIUM */}
      <div className="max-w-3xl mx-auto px-6 mb-12">

        <div className="bg-white/80 backdrop-blur border border-gray-200 shadow-xl rounded-2xl px-5 py-4 flex items-center gap-4 focus-within:ring-2 focus-within:ring-pink-400 transition">

          <span className="text-gray-400 text-xl">🔍</span>

          <input
            className="w-full outline-none text-gray-800 placeholder-gray-400 bg-transparent"
            placeholder="Pesquise: vaga, feedback, entrevista..."
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

      {/* RESULTADOS */}
      <div className="max-w-3xl mx-auto px-6 space-y-4">

        {resultados.map((item, index) => {
          const id = index;
          const isOpen = aberto === id;

          return (
            <div
              key={id}
              className={`border rounded-2xl overflow-hidden transition-all duration-200
              ${
                isOpen
                  ? "bg-red-50 border-red-200 shadow-md"
                  : "bg-white border-gray-200 hover:shadow-sm"
              }`}
            >

              {/* PERGUNTA */}
              <div
                className="cursor-pointer px-6 py-4 flex justify-between items-center"
                onClick={() =>
                  setAberto(isOpen ? null : id)
                }
              >
                <div>

                  <p className={`font-medium text-lg
                    ${isOpen ? "text-red-600" : "text-gray-900"}
                  `}>
                    {item.pergunta}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {item.categoria}
                  </p>

                </div>

                <span className="text-gray-400 text-lg">
                  {isOpen ? "⌃" : "⌄"}
                </span>
              </div>

              {/* RESPOSTA */}
              {isOpen && (
                <div className="px-6 pb-6">

                  <div className="bg-white border border-gray-200 rounded-xl p-5 text-gray-700 shadow-sm">

                    <p className="leading-relaxed">
                      {item.resposta}
                    </p>

                    <Link
                      href={item.link}
                      className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
                    >
                      Ver aula completa →
                    </Link>

                  </div>

                </div>
              )}

            </div>
          );
        })}

        {resultados.length === 0 && (
          <div className="text-center text-gray-400 mt-10">
            Nenhum resultado encontrado 😕
          </div>
        )}

      </div>

      <div className="h-24"></div>
    </div>
  );
}