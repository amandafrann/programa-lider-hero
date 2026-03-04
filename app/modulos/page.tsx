import Link from "next/link";

export default function Modulos() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center py-20">
      <div className="max-w-3xl space-y-10">

        <Link
          href="/jornada"
          className="text-gray-400 hover:text-white"
        >
          ← Voltar para jornada
        </Link>

        <div className="space-y-4">

          <h1 className="text-4xl font-bold">
            R&S para Líderes na Hero
          </h1>

          <p className="text-gray-400 text-lg">
            O que você, como liderança, precisa fazer em cada etapa do R&S na Hero.
          </p>

        </div>

        <div className="space-y-4">

          <Link
            href="/modulo-1"
            className="block bg-white text-black px-6 py-4 rounded-lg"
          >
            Módulo 1 — Definir a vaga
          </Link>

          <Link
            href="/modulo-2"
            className="block bg-white text-black px-6 py-4 rounded-lg"
          >
            Módulo 2 — Abrir a vaga
          </Link>

          <div className="block bg-gray-800 text-gray-400 px-6 py-4 rounded-lg">
            Módulo 3 — Conduzir entrevistas 🔒
          </div>

          <div className="block bg-gray-800 text-gray-400 px-6 py-4 rounded-lg">
            Módulo 4 — Tomada de decisão 🔒
          </div>

        </div>

      </div>
    </main>
  );
}