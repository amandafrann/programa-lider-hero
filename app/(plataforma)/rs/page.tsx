<div className="grid md:grid-cols-2 gap-8">

  {/* PLANEJAMENTO */}
  <Link
    href="/rs/planejamento"
    className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
  >
    <div className="text-3xl mb-4">🧠</div>

    <h3 className="text-xl font-semibold mb-2">
      1. Planejamento da vaga
    </h3>

    <p className="text-gray-600 text-sm mb-6">
      Definir necessidade, escopo da vaga e alinhamento com People.
    </p>

    <span className="text-sm font-medium text-pink-500 group-hover:translate-x-1 transition">
      Explorar →
    </span>
  </Link>


  {/* ABERTURA */}
  <Link
    href="/rs/abertura"
    className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
  >
    <div className="text-3xl mb-4">🚀</div>

    <h3 className="text-xl font-semibold mb-2">
      2. Abertura e alinhamento
    </h3>

    <p className="text-gray-600 text-sm mb-6">
      Como abrir uma vaga e iniciar o processo seletivo.
    </p>

    <span className="text-sm font-medium text-pink-500 group-hover:translate-x-1 transition">
      Explorar →
    </span>
  </Link>


  {/* PROCESSO (BLOQUEADO) */}
  <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 opacity-60 cursor-not-allowed">

    {/* BADGE */}
    <span className="absolute top-4 left-4 text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
      EM BREVE
    </span>

    <div className="text-3xl mb-4">🎯</div>

    <h3 className="text-xl font-semibold mb-2">
      3. Condução do processo
    </h3>

    <p className="text-gray-600 text-sm mb-6">
      Como conduzir entrevistas e avaliar candidatos.
    </p>

    <span className="text-sm text-gray-400">
      Indisponível
    </span>

  </div>


  {/* DECISÃO (BLOQUEADO) */}
  <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 opacity-60 cursor-not-allowed">

    {/* BADGE */}
    <span className="absolute top-4 left-4 text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
      EM BREVE
    </span>

    <div className="text-3xl mb-4">✅</div>

    <h3 className="text-xl font-semibold mb-2">
      4. Decisão e fechamento
    </h3>

    <p className="text-gray-600 text-sm mb-6">
      Tomada de decisão, proposta e fechamento da vaga.
    </p>

    <span className="text-sm text-gray-400">
      Indisponível
    </span>

  </div>

</div>