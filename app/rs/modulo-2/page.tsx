import Link from "next/link";

export default function Modulo2Page() {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <div className="w-72 border-r bg-white p-6">

        <Link
          href="/jornada"
          className="text-sm text-gray-500 mb-6 block hover:underline"
        >
          ← Voltar para jornada
        </Link>

        <h2 className="font-semibold text-lg mb-6">
          R&S para Líderes
        </h2>

        <div className="space-y-3">

          <Link
            href="/modulos"
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200"
          >
            Módulo 1 — Definir a vaga
          </Link>

          <Link
            href="/modulo-2"
            className="block bg-black text-white px-4 py-3 rounded-lg"
          >
            Módulo 2 — Abrir a vaga
          </Link>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Módulo 3 — Conduzir entrevistas 🔒
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Módulo 4 — Tomada de decisão 🔒
          </div>

        </div>
      </div>



      {/* CONTEÚDO */}
      <div className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-4">
          Abrir a vaga
        </h1>

        <p className="text-gray-600 mb-10">
          Após estruturar a necessidade da contratação com o Agente Estratégico,
          o próximo passo é realizar a abertura da vaga na Gupy.
        </p>



        {/* PROCESSO */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3 flex items-center gap-2">
            📋 Processo
          </h3>

          <ol className="list-decimal ml-6 text-gray-700 space-y-1">

            <li>Acesse <strong>Gestão de vagas</strong></li>

            <li>Clique em <strong>Criar nova vaga</strong></li>

            <li>
              Selecione o <strong>template correspondente</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>modelo de contratação (CLT ou PJ)</li>
                <li>senioridade da posição</li>
              </ul>
            </li>

            <li>Os demais campos serão preenchidos automaticamente</li>

          </ol>

          <p className="mt-4 text-gray-700">
            Depois disso, anexe o <strong>relatório gerado pelo agente</strong>
            na justificativa da vaga na Gupy.
          </p>

        </div>



        {/* COMPORTAMENTAL */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            🧠 Reflexão estratégica
          </h3>

          <p className="mb-4 text-gray-700">
            Antes de abrir uma vaga, reflita sobre alguns pontos importantes:
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>Qual problema essa contratação resolve?</li>

            <li>Qual será o impacto da vaga no time?</li>

            <li>
              Existe alguma alternativa antes de contratar?
              <ul className="list-disc ml-6 mt-1">
                <li>realocação</li>
                <li>automação</li>
                <li>priorização</li>
              </ul>
            </li>

          </ul>

        </div>



        {/* PAPEL DO RH */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            🤝 Papel do RH
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>Disponibilizar o Agente Estratégico de R&S</li>

            <li>Manter templates de vaga na Gupy</li>

            <li>Revisar e aprovar requisições de vaga</li>

          </ul>

        </div>



        {/* APROVAÇÃO */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            ✔ Aprovação da vaga
          </h3>

          <ol className="list-decimal ml-6 text-gray-700 space-y-2">

            <li>
              <strong>Business Partner</strong>
              <p className="text-sm text-gray-500">
                Avalia necessidade considerando cenário da área e negócio.
              </p>
            </li>

            <li>
              <strong>Supervisão de R&S</strong>
              <p className="text-sm text-gray-500">
                Aprovação final considerando headcount e orçamento.
              </p>
            </li>

          </ol>

        </div>



        {/* OBSERVAÇÕES */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            📝 Observações
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>O uso do Agente Estratégico é obrigatório</li>

            <li>O relatório deve ser anexado na justificativa da vaga</li>

            <li>R&S tem até 2 dias úteis para iniciar divulgação</li>

          </ul>

        </div>



        {/* FAQ */}
        <div className="bg-gray-50 p-6 rounded-lg mb-10">

          <h3 className="font-semibold mb-4">
            ❓ FAQ
          </h3>

          <p className="font-medium">
            Onde encontro o Agente Estratégico?
          </p>

          <p className="text-gray-700 mb-4">
            Slack → Apps → Chatbot de People.
          </p>

          <p className="font-medium">
            O agente substitui o alinhamento com R&S?
          </p>

          <p className="text-gray-700">
            Não. Ele apenas estrutura a necessidade da vaga.
          </p>

        </div>



        {/* BOTÃO */}
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80">
          Concluir módulo
        </button>

      </div>
    </div>
  );
}