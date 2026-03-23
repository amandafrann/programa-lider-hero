import Link from "next/link";

export default function AlinhamentoPage() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="space-y-4">
        <span className="text-xs text-gray-500 tracking-wide">
          R&S • MÓDULO 2
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Alinhamento
        </h1>

        <div className="flex items-center gap-3 text-sm">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            ⏱ 5 min
          </span>

          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
            Em andamento
          </span>
        </div>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
        Após a aprovação da vaga, iniciamos o alinhamento com o time de R&S para garantir clareza total sobre o perfil, estratégia e expectativas da contratação.
      </p>

      {/* O QUE ACONTECE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          📌 O que acontece nesta etapa
        </h3>

        <div className="space-y-6 text-gray-700">

          <div>
            <p className="font-medium mb-2">Durante o alinhamento:</p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Consolidamos o entendimento da vaga entre liderança e People</li>
              <li>Definimos a persona ideal</li>
              <li>Estruturamos a estratégia de busca no mercado</li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-2">Também alinhamos:</p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Etapas do processo seletivo</li>
              <li>Critérios de avaliação</li>
              <li>Expectativas de prazo</li>
            </ul>
          </div>

        </div>

      </div>

      {/* O QUE TRAZER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        <h3 className="font-semibold text-gray-900 mb-4">
          👤 O que você precisa trazer
        </h3>

        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li>Exemplos de perfis que fazem sentido para o cargo</li>
          <li>Clareza sobre a expectativa de entrega da nova posição</li>
          <li>Definição do perfil desejado (soft e hard skills)</li>
        </ul>

      </div>

      {/* RESULTADO */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">

        <h3 className="font-semibold text-gray-900 mb-4">
          ✅ Resultado esperado
        </h3>

        <ul className="list-disc ml-6 space-y-3 text-gray-800">
          <li>Persona da vaga definida</li>
          <li>Estratégia estruturada</li>
          <li>Processo alinhado com People</li>
          <li>Execução pronta para iniciar</li>
        </ul>

      </div>

      {/* CTA FINAL */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-center justify-between">

        <div>
          <p className="font-semibold text-gray-900">
            Módulo finalizado!
          </p>
          <p className="text-sm text-gray-600">
            Você concluiu Abertura & Alinhamento.
          </p>
        </div>

        <Link
          href="/rs"
          className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
        >
          Voltar para R&S →
        </Link>

      </div>

    </div>
  );
}