import Link from "next/link";

export default function OneOnOnePage() {
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
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200"
          >
            Feedback
          </Link>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Pulso
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Calibração
          </div>

          <Link
            href="/desenvolvimento/performance/one-on-one"
            className="block bg-black text-white px-4 py-3 rounded-lg"
          >
            1:1
          </Link>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Yellow Flag
          </div>

        </div>

      </div>


      {/* CONTEÚDO */}

      <div className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-4">
          1:1
        </h1>

        <p className="text-gray-600 mb-10">
          A reunião 1:1 é um dos rituais mais importantes para o desenvolvimento
          de pessoas. É um momento dedicado exclusivamente ao colaborador para
          discutir desafios, carreira, evolução profissional e fortalecer a
          relação com a liderança.
        </p>


        {/* OBJETIVO */}

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            ⚡ Objetivo da etapa
          </h3>

          <p className="text-gray-700">
            Garantir um espaço estruturado de conversa entre líder e colaborador
            focado no desenvolvimento profissional, alinhamento de expectativas
            e fortalecimento da relação de confiança.
          </p>

        </div>


        {/* PAPEL DO LÍDER */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            👤 Papel do líder
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>Criar um ambiente seguro para conversa aberta</li>

            <li>Ouvir mais do que falar</li>

            <li>Apoiar o desenvolvimento do colaborador</li>

            <li>Trazer orientações e feedbacks construtivos</li>

            <li>Definir próximos passos claros</li>

          </ul>

        </div>


        {/* O QUE É 1:1 */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            📍 O que é uma 1:1
          </h3>

          <p className="text-gray-700 mb-4">
            A 1:1 é uma conversa estruturada entre líder e colaborador focada no
            desenvolvimento da pessoa.
          </p>

          <p className="text-gray-700">
            Uma boa 1:1 aborda temas como evolução profissional, desafios atuais,
            aspirações de carreira, feedbacks e percepções sobre o trabalho.
          </p>

        </div>


        {/* DIFERENÇA FUP */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            ⚠ Diferença entre Follow-up e 1:1
          </h3>

          <p className="text-gray-700 mb-3">
            Esses dois rituais têm objetivos diferentes.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">

            <li>
              <strong>Follow-up:</strong> focado em entregas, metas e execução do trabalho.
            </li>

            <li>
              <strong>1:1:</strong> focada no desenvolvimento do colaborador,
              carreira e evolução profissional.
            </li>

          </ul>

        </div>


        {/* RECORRÊNCIA */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            📅 Recorrência
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">

            <li>Recomendado: 1 vez por mês</li>

            <li>Duração média: 45 minutos</li>

            <li>Agende de forma recorrente no calendário</li>

          </ul>

        </div>


        {/* COMO CONDUZIR */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            📋 Como conduzir uma 1:1
          </h3>

          <ol className="list-decimal ml-6 text-gray-700 space-y-2">

            <li>Prepare a pauta da conversa com antecedência</li>

            <li>Permita que o colaborador fale a maior parte do tempo</li>

            <li>Explore desafios, evolução e aspirações de carreira</li>

            <li>Dê feedbacks construtivos</li>

            <li>Defina próximos passos claros ao final da conversa</li>

          </ol>

        </div>


        {/* BOAS PRÁTICAS */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            🧠 Boas práticas
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>Escute com curiosidade genuína</li>

            <li>Faça perguntas abertas</li>

            <li>Ajude o colaborador a refletir sobre sua carreira</li>

            <li>Construa planos de desenvolvimento claros</li>

          </ul>

        </div>


        {/* SINAIS DE ALERTA */}

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-10">

          <h3 className="font-semibold mb-3">
            ⚠ Sinais de uma 1:1 improdutiva
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>O líder fala mais que o colaborador</li>

            <li>Não há feedbacks claros</li>

            <li>Não surgem temas relevantes</li>

            <li>Não são definidos próximos passos</li>

          </ul>

        </div>

      </div>

    </div>
  );
}