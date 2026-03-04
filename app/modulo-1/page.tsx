import Link from "next/link";

export default function Modulo1() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center py-20">
      <div className="max-w-3xl space-y-10">

        <Link href="/" className="text-gray-400 hover:text-white">
          ← Voltar para trilha
        </Link>

        <h1 className="text-4xl font-bold">
          Módulo 1 — Definir a vaga
        </h1>

        <div className="space-y-4">

          <Link
            href="/modulo-1/aula-1"
            className="block bg-white text-black px-6 py-4 rounded-lg"
          >
            Aula 1 — Acionar Agente Estratégico (Slack)
          </Link>

          <Link
            href="/modulo-1/aula-2"
            className="block bg-white text-black px-6 py-4 rounded-lg"
          >
            Aula 2 — Alinhamento da vaga com People
          </Link>

        </div>

      </div>
    </main>
  );
}