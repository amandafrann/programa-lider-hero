export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

      {/* LADO ESQUERDO */}
      <div>

        {/* TAG */}
        <span className="inline-block text-xs font-medium bg-pink-50 text-pink-600 px-3 py-1 rounded-full mb-4">
          Acesse
        </span>

        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Programa{" "}
          <span className="text-pink-600">Líder Hero</span>
        </h1>

        {/* DESCRIÇÃO */}
        <p className="text-gray-600 mb-6 max-w-lg">
          A plataforma prática para líderes executarem processos com clareza, consistência e impacto real em negócios e cultura.
        </p>

        {/* BOTÕES */}
        <div className="flex gap-3">

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

      {/* LADO DIREITO (CARD VISUAL) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-1">
            Jornada do Líder
          </h3>
          <p className="text-sm text-gray-500">
            Execução prática dos principais processos
          </p>
        </div>

        <div className="space-y-4">

          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>R&S</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full">
              <div className="bg-pink-500 h-2 rounded-full w-[60%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Desenvolvimento</span>
              <span>40%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full">
              <div className="bg-purple-500 h-2 rounded-full w-[40%]" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}