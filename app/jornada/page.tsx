import Link from "next/link";

export default function Jornada() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center py-20">
      <div className="max-w-3xl w-full space-y-12">

        <Link href="/" className="text-gray-400 hover:text-white">
          ← Voltar
        </Link>

        <h1 className="text-4xl font-bold">
          Jornada do Colaborador
        </h1>

        <p className="text-gray-400 text-lg">
          Explore as etapas da jornada de experiência do colaborador na Hero.
        </p>

        {/* Lista da jornada */}
        <div className="flex flex-col gap-4">

          <div className="bg-pink-500 p-6 rounded-lg font-medium">
            1. Atração / EB
          </div>

          <Link
            href="/modulos"
            className="bg-pink-500 p-6 rounded-lg font-medium"
          >
            2. R&S
          </Link>

          <div className="bg-pink-500 p-6 rounded-lg font-medium">
            3. Admissão
          </div>

          <div className="bg-pink-500 p-6 rounded-lg font-medium">
            4. Onboarding Institucional
          </div>

          <div className="bg-pink-500 p-6 rounded-lg font-medium">
            5. Onboarding da Área
          </div>

          <div className="bg-pink-500 p-6 rounded-lg font-medium">
            6. Desenvolvimento
          </div>

          <div className="bg-pink-500 p-6 rounded-lg font-medium">
            7. Engajamento
          </div>

          <div className="bg-pink-500 p-6 rounded-lg font-medium">
            8. Retenção
          </div>

          <div className="bg-pink-500 p-6 rounded-lg font-medium">
            9. Offboarding
          </div>

        </div>

      </div>
    </main>
  );
}