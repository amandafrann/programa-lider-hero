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
  const [aberto, setAberto] = useState<string | null>(null);

  const faq = gerarFAQ();

  const filtrar = (item: any) => {
    const b = busca.toLowerCase();

    return (
      item.pergunta.toLowerCase().includes(b) ||
      item.resposta.toLowerCase().includes(b) ||
      item.tags.some((tag: string) =>
        tag.toLowerCase().includes(b)
      )
    );
  };

  const resultados = busca ? faq.filter(filtrar) : faq;

  const agrupado = resultados.reduce((acc: any, item: any) => {
    if (!acc[item.categoria]) acc[item.categoria] = [];
    acc[item.categoria].push(item);
    return acc;
  }, {});

  const sugestoes = busca
    ? faq
        .filter((item) =>
          item.pergunta.toLowerCase().includes(busca.toLowerCase())
        )
        .slice(0, 5)
    : [];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="flex items-center justify-between px-10 py-6 bg-white">
        <Link href="/" className="text-gray-500 hover:text-black">
          ← Voltar ao início
        </Link>
        <div className="font-semibold">❓ Wiki Hero</div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* HERO */}
      <div className="text-center pt-16 pb-10 px-6">

        <div className="inline-flex items-center gap-2 px-4 py-1 text-xs rounded-full border border-gray-300 bg-white mb-6">
          ✨ BASE DE CONHECIMENTO
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Como podemos <span className="text-pink-500">ajudar hoje?</span>
        </h1>

        <p className="text-gray-500 max-w-xl mx-auto">
          Encontre processos e respostas rápidas sobre People.
        </p>

      </div>

      {/* BUSCA */}
      <div className="max-w-3xl mx-auto px-6 mb-6 relative">

        <div className="bg-white border border-gray-200/70 rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm">
          🔍
          <input
            className="w-full outline-none"
            placeholder="Pesquise: vaga, feedback..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* SUGESTÕES */}
        {busca && sugestoes.length > 0 && (
          <div className="absolute w-full bg-white border border-gray-200/70 mt-2 rounded-xl shadow-lg z-10">
            {sugestoes.map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm"
                onClick={() => setBusca(item.pergunta)}
              >
                {item.pergunta}
              </div>
            ))}
          </div>
        )}

      </div>

      {/* RESULTADOS */}
      <div className="max-w-4xl mx-auto px-6 space-y-8">

        {Object.keys(agrupado).map((categoria) => (
          <div
            key={categoria}
            className="bg-white border border-gray-200/70 rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >

            {/* HEADER CATEGORIA */}
            <div className="px-6 py-4 font-semibold flex items-center gap-3 border-b border-gray-200/60 bg-gray-50">
              ⚡ {categoria}
            </div>

            {/* PERGUNTAS */}
            {agrupado[categoria].map((item: any, index: number) => {
              const id = item.pergunta;
              const isOpen = aberto === id;

              return (
                <div key={index} className="border-t border-gray-200/60">

                  {/* PERGUNTA */}
                  <div
                    onClick={() =>
                      setAberto(isOpen ? null : id)
                    }
                    className={`flex justify-between items-center px-6 py-4 cursor-pointer transition
                    ${
                      isOpen
                        ? "text-pink-500 bg-pink-50/30"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      💬
                      <span>{item.pergunta}</span>
                    </div>

                    <span className="text-gray-400">
                      {isOpen ? "⌃" : "⌄"}
                    </span>
                  </div>

                  {/* RESPOSTA COM ANIMAÇÃO */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <div className="px-6 pb-6 pl-10">

                        <div className="relative bg-gray-100 border border-gray-200/70 rounded-xl p-5">

                          {/* SETA */}
                          <div className="absolute -left-2 top-4 w-3 h-3 bg-gray-100 border-l border-b border-gray-200/70 rotate-45" />

                          <p className="text-gray-700">
                            {item.resposta}
                          </p>

                          <Link
                            href={item.link}
                            className="block mt-4 text-sm text-blue-600"
                          >
                            Ver aula completa →
                          </Link>

                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        ))}

      </div>

      <div className="h-24"></div>

    </div>
  );
}