export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LADO ESQUERDO */}
        <div>

          <span className="inline-block text-xs font-medium bg-pink-50 text-pink-600 px-3 py-1 rounded-full mb-6">
            Programa Líder Hero
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Plataforma de
            <span className="text-pink-600"> liderança prática</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Execute processos de gestão com clareza, consistência e impacto real.
            Um playbook completo para líderes.
          </p>

          <div className="flex gap-4">

            <a
              href="/jornada"
              className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
            >
              Explorar jornadas →
            </a>

            <a
              href="/wiki"
              className="border border-gray-300 px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition"
            >
              Acessar Wiki
            </a>

          </div>

        </div>

        {/* LADO DIREITO */}
        <div className="hidden md:block">

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-gray-200 rounded-3xl p-8">

            <div className="space-y-6">

              <div>
                <p className="text-sm text-gray-500 mb-2">
                  O que você vai encontrar
                </p>

                <h3 className="font-semibold text-lg text-gray-900">
                  Jornada completa do líder
                </h3>
              </div>

              <div className="space-y-4">

                <div className="flex items-start gap-3">
                  <span>🎯</span>
                  <p className="text-sm text-gray-600">
                    Playbooks operacionais práticos
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span>⚙️</span>
                  <p className="text-sm text-gray-600">
                    Execução passo a passo
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span>📈</span>
                  <p className="text-sm text-gray-600">
                    Desenvolvimento contínuo de liderança
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}