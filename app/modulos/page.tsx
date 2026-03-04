"use client";

import { useState } from "react";
import Link from "next/link";

export default function Modulos() {

  const [moduloAtual, setModuloAtual] = useState(1);

  const modulos = [
    {
      id: 1,
      titulo: "Módulo 1 — Definir a vaga",
      conteudo: (
        <>
          <h2 className="text-3xl font-bold mb-4">Definir a vaga</h2>

          <p className="text-gray-600 mb-6">
            O primeiro passo de qualquer contratação é garantir clareza sobre
            a vaga que está sendo aberta. Contratações ruins geralmente começam
            com vagas mal definidas.
          </p>

          <p className="text-gray-600 mb-6">
            Antes de iniciar o recrutamento, alinhe expectativas com People e
            entenda claramente qual problema essa contratação precisa resolver.
          </p>
        </>
      ),
    },
    {
      id: 2,
      titulo: "Módulo 2 — Abrir a vaga",
      conteudo: (
        <>
          <h2 className="text-3xl font-bold mb-4">Abrir a vaga</h2>

          <p className="text-gray-600 mb-6">
            Após definir corretamente a vaga, o próximo passo é abrir a posição
            no sistema interno e iniciar o processo de recrutamento.
          </p>

          <p className="text-gray-600 mb-6">
            Isso garante visibilidade da vaga e alinhamento entre liderança
            e People sobre o perfil buscado.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}

      <aside className="w-80 bg-white border-r min-h-screen p-6">

        <Link
          href="/jornada"
          className="text-gray-500 hover:text-gray-800 text-sm"
        >
          ← Voltar para jornada
        </Link>

        <h2 className="text-xl font-bold mt-8 mb-6">
          R&S para Líderes
        </h2>

        <div className="space-y-3">

          {modulos.map((modulo) => (

            <button
              key={modulo.id}
              onClick={() => setModuloAtual(modulo.id)}
              className={`w-full text-left p-4 rounded-lg ${
                moduloAtual === modulo.id
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {modulo.titulo}
            </button>

          ))}

          <div className="bg-gray-100 p-4 rounded-lg opacity-60">
            Módulo 3 — Conduzir entrevistas 🔒
          </div>

          <div className="bg-gray-100 p-4 rounded-lg opacity-60">
            Módulo 4 — Tomada de decisão 🔒
          </div>

        </div>

      </aside>

      {/* CONTEÚDO */}

      <section className="flex-1 p-16">

        {modulos
          .filter((m) => m.id === moduloAtual)
          .map((m) => (
            <div key={m.id} className="max-w-3xl">

              {m.conteudo}

              <button
                className="mt-10 bg-black text-white px-6 py-3 rounded-lg"
                onClick={() => setModuloAtual(m.id + 1)}
              >
                Concluir módulo
              </button>

            </div>
          ))}

      </section>

    </main>
  );
}