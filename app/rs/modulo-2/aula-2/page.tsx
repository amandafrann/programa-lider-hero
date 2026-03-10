import Link from "next/link";

export default function Aula2() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center py-20">
      <div className="max-w-3xl space-y-10">

        <Link href="/modulo-2" className="text-gray-400 hover:text-white">
          ← Voltar para Módulo 2
        </Link>

        <h1 className="text-4xl font-bold">
          Aula 4 — Abrir vaga na Gupy
        </h1>

        <p className="text-gray-400">
          ⏱ Tempo estimado: 3 minutos
        </p>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Responsabilidade do líder
          </h2>
          <p>
            Garantir que a vaga seja aberta corretamente na Gupy após o
            alinhamento com People.
          </p>
        </div>

      </div>
    </main>
  );
}