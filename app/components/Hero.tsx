export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">

      {/* TÍTULO */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Programa Líder Hero
        </h1>

        <p className="text-gray-600 max-w-2xl">
          Playbook prático para líderes executarem a jornada do colaborador com clareza, consistência e impacto.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex gap-4 items-start">
          <div className="text-2xl">🎯</div>

          <div>
            <h3 className="font-semibold mb-1">
              Processos claros
            </h3>

            <p className="text-gray-600 text-sm">
              Aprenda cada etapa da jornada do colaborador.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex gap-4 items-start">
          <div className="text-2xl">🧭</div>

          <div>
            <h3 className="font-semibold mb-1">
              Liderança prática
            </h3>

            <p className="text-gray-600 text-sm">
              Execute processos reais de gestão de pessoas.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex gap-4 items-start">
          <div className="text-2xl">📈</div>

          <div>
            <h3 className="font-semibold mb-1">
              Desenvolva pessoas
            </h3>

            <p className="text-gray-600 text-sm">
              Evolua talentos e fortaleça sua liderança.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}