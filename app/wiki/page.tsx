"use client";

import { useState } from "react";
import Link from "next/link";
import { courseData } from "@/lib/courseData"; // VERIFICAR AQUI

// 🔥 TRANSFORMA SUA BASE EM FAQ DINÂMICO
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
  const [aberto, setAberto] = useState<number | null>(null);

  const faq = gerarFAQ(); // VERIFICAR AQUI

  // 🔥 BUSCA INTELIGENTE
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
          <span className="text-gray-400 text-xl">🔍</span>

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

      {/* RESULTADOS */}
      <div className="max-w-3xl mx-auto px-6 mt-12 space-y-4">
        {resultados.map((item, index) => {
          const id = index;

          return (
            <div
              key={id}
              className="bg-white rounded-xl shadow-sm border"
            >
              <div
                className="cursor-pointer"
                onClick={() =>
                  setAberto(aberto === id ? null : id)
                }
              >
                <div className="flex justify-between px-6 py-4 hover:bg-gray-50">
                  <div>
                    <p className="text-gray-800 font-medium">
                      {item.pergunta}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {item.categoria}
                    </p>
                  </div>

                  <span className="text-gray-400">
                    {aberto === id ? "−" : "+"}
                  </span>
                </div>
              </div>

              {aberto === id && (
                <div className="px-6 pb-5 text-gray-600 space-y-3">
                  <p>{item.resposta}</p>

                  <Link
                    href={item.link}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Ver aula completa →
                  </Link>
                </div>
              )}
            </div>
          );
        })}

        {resultados.length === 0 && (
          <div className="text-center text-gray-400">
            Nenhum resultado encontrado 😕
          </div>
        )}
      </div>

      <div className="h-24"></div>
    </div>
  );
}