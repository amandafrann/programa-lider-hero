import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">

      <div className="max-w-6xl grid grid-cols-2 gap-12 items-center px-8">

        {/* Texto esquerda */}

        <div>
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Programa
            <span className="text-pink-500"> Líder Hero</span>
          </h1>

          <p className="mt-6 text-lg text-gray-500">
            A plataforma oficial de desenvolvimento de liderança da Company Hero.
            Aprenda os processos da jornada do colaborador e execute como um líder de alta performance.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              href="/jornada"
              className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
            >
              Explorar Jornadas
            </Link>

            <button className="border px-6 py-3 rounded-xl">
              Wiki Hero
            </button>

          </div>
        </div>

        {/* Card lado direito */}

        <div className="bg-white shadow-xl rounded-2xl p-8">

          <h3 className="text-lg font-semibold text-gray-800">
            Resultados Hero
          </h3>

          <div className="mt-6 space-y-5">

            <div>
              <p className="text-sm text-gray-500">Performance</p>

              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                <div className="bg-pink-500 h-2 w-1/4 rounded-full"></div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Soft Skills</p>

              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                <div className="bg-purple-500 h-2 w-1/5 rounded-full"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}