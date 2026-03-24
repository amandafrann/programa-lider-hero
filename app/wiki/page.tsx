"use client";

import { useState } from "react";
import Link from "next/link";
import { courseData } from "@/lib/courseData";

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
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="flex items-center justify-between px-10 py-6 bg-white">
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

      {/* LINHA SUAVE */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* HERO */}
      <div className="text-center pt-16 pb-10 px-6">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1 text-xs rounded-full border border-gray-300 bg-white mb-6">
          ✨ BASE DE CONHECIMENTO
        </div>

        {/* TÍTULO AJUSTADO */}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
          Como podemos{" "}
          <span className="text-pink-500">ajudar hoje?</span>
        </h1>

        <p className="text-gray-500 max-w-xl mx-auto">
          Encontre processos, regras e respostas rápidas sobre People
          em poucos segundos.
        </p>

      </div>

      {/* BUSCA */}
      <div className="max-w-3xl mx-auto px-6 mb-10">

        <div className="bg-white border border-gray-200 shadow-md rounded-xl px-5 py-4 flex items-center gap-4">

          <span className="text-gray-400 text-lg">🔍</span>

          <input
            className="w-full outline-none text-gray-800 placeholder-gray-400"
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
      <div className="max-w-3xl mx-auto px-6 space-y-2">

        {resultados.map((item, index) => {
          const id = index;
          const isOpen = aberto === id;

          return (
            <div key={id} className="border-b">

              {/* PERGUNTA */}
              <div
                onClick={() =>
                  setAberto(isOpen ? null : id)
                }
                className={`flex items-center justify-between py-4 cursor-pointer transition
                ${isOpen ? "text-red-600" : "text-gray-800 hover:text-black"}
                `}
              >

                <div className="flex items-center gap-3">

                  <span className={`text-lg ${
                    isOpen ? "text-red-500" : "text-gray-300"
                  }`}>
                    💬
                  </span>

                  <div>
                    <p className="font-medium">
                      {item.pergunta}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.categoria}
                    </p>
                  </div>

                </div>

                <span className="text-gray-400">
                  {isOpen ? "⌃" : "⌄"}
                </span>

              </div>

              {/* RESPOSTA */}
              {isOpen && (
                <div className="pb-6 pl-8">

                  <div className="relative bg-gray-100 border border-gray-200 rounded-xl p-5 text-gray-700">

                    {/* SETINHA */}
                    <div className="absolute -left-2 top-4 w-3 h-3 bg-gray-100 border-l border-b border-gray-200 rotate-45" />

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