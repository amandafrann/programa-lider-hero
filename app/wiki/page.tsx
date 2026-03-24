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
        <Link href="/" className="text-gray-500 hover:text-black transition">
          ← Voltar ao início
        </Link>
        <div className="font-semibold">❓ Wiki Hero</div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* HERO */}
      <div className="text-center pt-16 pb-10 px-6">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs rounded-full 
        bg-gradient-to-r from-white to-gray-50 
        border border-gray-200 
        shadow-sm text-gray-600 mb-6">

          <span className="text-pink-400">✦</span>
          Base de conhecimento

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

        <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 flex items-center gap-4 
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        transition hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">

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
          <div className="absolute w-full bg-white border border-gray-100 mt-2 rounded-xl 
          shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-10">

            {sugestoes.map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm transition"
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
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden
            shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
          >

            {/* HEADER */}
            <div className="px-6 py-4 font-semibold flex items-center gap-3 
            border-b border-gray-100 bg-gray-50/70">
              ⚡ {categoria}
            </div>

            {/* PERGUNTAS */}
            {agrupado[categoria].map((item: any, index: number) => {
              const id = item.pergunta;
              const isOpen = aberto === id;

              return (
                <div key={index} className="border-t border-gray-100">

                  {/* PERGUNTA */}
                  <div
                    onClick={() =>
                      setAberto(isOpen ? null : id)
                    }
                    className={`flex justify-between items-center px-6 py-4 cursor-pointer 
                    transition-all duration-200 ease-out
                    active:scale-[0.99]
                    ${
                      isOpen
                        ? "text-pink-400 bg-pink-50/10"
                        : "text-gray-800 hover:bg-gray-50 hover:translate-x-[2px]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      💬
                      <span>{item.pergunta}</span>
                    </div>

                    <span
                      className={`text-gray-400 transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}`}
                    >
                      ⌄
                    </span>
                  </div>

                  {/* RESPOSTA */}
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <div className="px-6 pb-6 pl-10">

                        <div className="relative bg-gray-50 border border-gray-100 rounded-xl p-5
                        shadow-[0_6px_20px_rgba(0,0,0,0.03)]
                        transition hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]">

                          <div className="absolute -left-2 top-4 w-3 h-3 bg-gray-50 border-l border-b border-gray-100 rotate-45" />

                          <p className="text-gray-700">
                            {item.resposta}
                          </p>

                          <Link
                            href={item.link}
                            className="block mt-4 text-sm text-blue-600 hover:underline"
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