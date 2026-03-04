export default function ModulosPage() {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <div className="w-72 border-r bg-white p-6">

        <a className="text-sm text-gray-500 mb-6 block">
          ← Voltar para jornada
        </a>

        <h2 className="font-semibold text-lg mb-6">
          R&S para Líderes
        </h2>

        <div className="space-y-3">

          <div className="bg-black text-white px-4 py-3 rounded-lg">
            Módulo 1 — Definir a vaga
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg">
            Módulo 2 — Abrir a vaga
          </div>

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
          Definir a vaga
        </h1>

        <p className="text-gray-600 mb-10">
          O primeiro passo de qualquer contratação é garantir clareza sobre a vaga que está sendo aberta.
          Contratações ruins geralmente começam com vagas mal definidas.
        </p>



        {/* OBJETIVO */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3 flex items-center gap-2">
            ⚡ Objetivo da etapa
          </h3>

          <p className="text-gray-700">
            Antes de abrir uma vaga, utilize o <strong>Agente Estratégico de R&S no Slack</strong>
            para estruturar a necessidade da contratação.
          </p>

          <p className="text-gray-700 mt-2">
            O agente organiza as principais informações da vaga e gera um
            <strong> resumo estruturado</strong> que pode ser utilizado na abertura da vaga na Gupy.
          </p>

        </div>



        {/* PAPEL DO LIDER */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            👤 Papel do líder
          </h3>

          <p className="font-medium mb-2">Processo</p>

          <ol className="list-decimal ml-6 text-gray-700 mb-4 space-y-1">
            <li>Acesse o <strong>Chatbot de People no Slack (Apps)</strong></li>
            <li>Inicie a conversa digitando <strong>“Olá”</strong></li>
            <li>Clique em <strong>Abertura de vaga</strong> ou digite <strong>2</strong></li>
            <li>Responda às perguntas do agente</li>
          </ol>

          <p className="text-gray-700 mb-6">
            Ao final da conversa você receberá um <strong>resumo estruturado da vaga</strong>.
          </p>


          <p className="font-medium mb-2">
            Reflexão antes de contratar
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Qual problema essa contratação resolve</li>
            <li>Qual impacto a vaga terá no time</li>
            <li>Se existem alternativas à contratação (realocação, automação ou priorização)</li>
          </ul>

        </div>



        {/* PAPEL DO RH */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            🤝 Papel do RH
          </h3>

          <p className="text-gray-700 mb-2">
            People disponibiliza o <strong>Agente Estratégico de R&S</strong> para apoiar líderes
            na estruturação da vaga antes da abertura.
          </p>

          <p className="text-gray-700">
            Espera-se que a liderança utilize o agente <strong>antes de iniciar o processo de abertura da vaga</strong>.
          </p>

        </div>



        {/* OBSERVAÇÕES */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            📝 Observações
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>O agente não substitui o alinhamento de vaga com R&S</li>
            <li>O resumo gerado deve ser inserido na seção <strong>Dados Internos da Gupy</strong></li>
          </ul>

        </div>



        {/* FAQ */}
        <div className="bg-gray-50 p-6 rounded-lg mb-10">

          <h3 className="font-semibold mb-4">
            ❓ FAQ
          </h3>

          <p className="font-medium">
            Onde encontro o agente?
          </p>

          <p className="text-gray-700 mb-4">
            Slack → Apps → Chatbot de People.
          </p>


          <p className="font-medium">
            O que recebo ao final da conversa?
          </p>

          <p className="text-gray-700">
            Um resumo estruturado da vaga para apoiar a abertura na Gupy.
          </p>

        </div>



        {/* BOTÃO */}
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80">
          Concluir módulo
        </button>

      </div>
    </div>
  )
}