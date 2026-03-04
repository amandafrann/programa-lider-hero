import Link from "next/link";

export default function Modulo2() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center py-20">
      <div className="max-w-3xl space-y-10">

        <Link href="/modulos" className="text-gray-400 hover:text-white">
          ← Voltar para trilha
        </Link>

        <h1 className="text-4xl font-bold">
          Módulo 2 — Abrir a vaga
        </h1>

        <div className="space-y-4">

          <Link
            href="/modulo-2/aula-1"
            className="block bg-white text-black px-6 py-4 rounded-lg"
          >
            Aula 3 — Descrição da vaga
          </Link>

          <Link
            href="/modulo-2/aula-2"
            className="block bg-white text-black px-6 py-4 rounded-lg"
          >
            Aula 4 — Abertura da vaga na Gupy
          </Link>

        </div>

      </div>
    </main>
  );
}