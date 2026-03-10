import Link from "next/link";

export default function FeedbackPage() {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}

      <div className="w-72 border-r bg-white p-6">

        <Link
          href="/desenvolvimento"
          className="text-sm text-gray-500 mb-6 block hover:underline"
        >
          ← Voltar para desenvolvimento
        </Link>

        <h2 className="font-semibold text-lg mb-6">
          Gestão de Performance
        </h2>

        <div className="space-y-3">

          <Link
            href="/desenvolvimento/performance/feedback"
            className="block bg-black text-white px-4 py-3 rounded-lg"
          >
            Feedback
          </Link>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Pulso
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Calibração
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            1:1
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Yellow Flag
          </div>

        </div>

      </div>


      {/* CONTEÚDO */}

      <div className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-4">
          Feedback
        </h1>

        <p className="text-gray-600 mb-10">
          Feedback é uma das ferramentas mais importantes de liderança.
          Ele permite alinhar expectativas, corrigir desvios rapidamente
          e desenvolver pessoas continuamente dentro do time.
        </p>


        {/* OBJETIVO */}

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            ⚡ Objetivo da etapa
          </h3>

          <p className="text-gray-700">
            Garantir que líderes saibam dar e receber feedbacks claros,
            construtivos e acionáveis para desenvolver pessoas e melhorar
            continuamente a performance do time.
          </p>

        </div>


        {/* PAPEL DO LÍDER */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            👤 Papel do líder
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>Observar comportamentos e resultados do time</li>
            <li>Dar feedbacks próximos ao momento em que ocorrem</li>
            <li>Criar um ambiente seguro para conversas abertas</li>
            <li>Pedir feedback sobre sua própria atuação</li>

          </ul>

        </div>


        {/* QUANDO DAR FEEDBACK */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            📍 Quando dar feedback
          </h3>

          <p className="text-gray-700 mb-4">
            Existem dois momentos principais para feedback:
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">

            <li>
              <strong>Feedback imediato:</strong> logo após um comportamento
              observado (ex: desalinhamento em reunião, colaboração positiva,
              problema de comunicação).
            </li>

            <li>
              <strong>Ciclos formais de performance:</strong> momentos
              estruturados ao longo do ano para consolidar avaliação
              de performance e evolução do colaborador.
            </li>

          </ul>

        </div>


        {/* COMO DAR FEEDBACK */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            📋 Como dar feedback
          </h3>

          <p className="text-gray-700 mb-4">
            Na Hero utilizamos a estrutura <strong>SBI + Action Point</strong>.
          </p>

          <ol className="list-decimal ml-6 text-gray-700 space-y-2">

            <li>
              <strong>Situação:</strong> explique quando e onde aconteceu.
            </li>

            <li>
              <strong>Comportamento:</strong> descreva o comportamento observado
              de forma objetiva.
            </li>

            <li>
              <strong>Impacto:</strong> explique qual foi o impacto do comportamento
              no time ou no resultado.
            </li>

            <li>
              <strong>Action Point:</strong> alinhe o que deve acontecer a partir
              de agora.
            </li>

          </ol>

        </div>


        {/* COMO PEDIR FEEDBACK */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            💬 Como pedir feedback ao time
          </h3>

          <p className="text-gray-700 mb-4">
            Líderes também devem pedir feedback regularmente para evoluir
            sua atuação.
          </p>

          <ol className="list-decimal ml-6 text-gray-700 space-y-2">

            <li>
              <strong>Peça explicitamente:</strong> pergunte como você poderia
              melhorar sua atuação como líder.
            </li>

            <li>
              <strong>Entenda:</strong> repita o que ouviu para garantir que
              compreendeu corretamente.
            </li>

            <li>
              <strong>Agradeça:</strong> reconhecer o feedback demonstra abertura
              e maturidade.
            </li>

            <li>
              <strong>Defina uma ação:</strong> caso concorde com o feedback,
              alinhe uma melhoria prática.
            </li>

          </ol>

        </div>


        {/* BOAS PRÁTICAS */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            🧠 Boas práticas
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>Seja específico e baseado em fatos</li>
            <li>Dê feedback próximo ao acontecimento</li>
            <li>Demonstre intenção de desenvolvimento</li>
            <li>Crie espaço para que o time também dê feedback</li>

          </ul>

        </div>


        {/* O QUE EVITAR */}

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-10">

          <h3 className="font-semibold mb-3">
            ⚠ O que evitar
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>Dar feedback crítico por Slack ou e-mail</li>
            <li>Julgar personalidade da pessoa</li>
            <li>Usar generalizações como “você sempre...”</li>
            <li>Guardar feedback por muito tempo</li>

          </ul>

        </div>


        {/* APÓS O FEEDBACK */}

        <div className="bg-gray-50 p-6 rounded-lg mb-10">

          <h3 className="font-semibold mb-3">
            🔁 Após o feedback
          </h3>

          <p className="text-gray-700">
            Sempre alinhe um action point claro e acompanhe o progresso
            em conversas futuras ou 1:1s. O follow-up demonstra que o
            feedback faz parte do desenvolvimento contínuo das pessoas.
          </p>

        </div>

      </div>

    </div>
  );
}