import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 px-8">

      <div className="max-w-6xl w-full border border-gray-200 rounded-3xl p-12 bg-white shadow-sm">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}

          <div>

            {/* TAG */}

            <span className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full mb-6">
              Academia de Liderança
            </span>


            {/* TÍTULO */}

            <h1 className="text-6xl font-bold leading-tight mb-6">

              <span className="block text-gray-900">
                Programa
              </span>

              <span className="block text-pink-500">
                Líder Hero
              </span>

            </h1>


            {/* DESCRIÇÃO */}

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              A plataforma oficial de desenvolvimento de liderança da Hero.
              Aprenda os processos da jornada do colaborador e execute
              cada etapa com excelência como líder.
            </p>


            {/* BOTÕES */}

            <div className="flex gap-4">

              <Link
                href="/jornada"
                className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Explorar Jornadas
              </Link>

              <Link
                href="/wiki"
                className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
              >
                Wiki Hero
              </Link>

            </div>

          </div>


          {/* CARD DIREITA */}

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">

            <h3 className="font-semibold text-lg mb-6">
              Como funciona a plataforma
            </h3>

            <div className="space-y-4 text-gray-700">

              <div className="flex items-center gap-3">
                <span className="text-xl">🧭</span>
                <p>Jornada do Colaborador</p>
              </div>

              <div className="flex items-center gap-3 ml-6">
                <span className="text-lg">↓</span>
                <p>Etapas da jornada</p>
              </div>

              <div className="flex items-center gap-3 ml-10">
                <span className="text-lg">↓</span>
                <p>Módulos de aprendizagem</p>
              </div>

              <div className="flex items-center gap-3 ml-14">
                <span className="text-lg">↓</span>
                <p>Aulas práticas para líderes</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}