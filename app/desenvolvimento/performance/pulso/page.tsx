import LessonLayout from "@/app/components/LessonLayout";

export default function PulsoPage() {
  return (
    <LessonLayout title="Pulso">

      <p className="text-gray-600 mb-10">
        O Pulso é um mecanismo de acompanhamento rápido da saúde do time.
        Ele permite identificar sinais de desalinhamento, desmotivação ou
        dificuldades antes que se tornem problemas maiores.
      </p>

      {/* OBJETIVO */}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">⚡ Objetivo da etapa</h3>

        <p>
          Monitorar regularmente a experiência e o engajamento do time
          para identificar desafios precocemente e agir de forma preventiva.
        </p>
      </div>

      {/* PAPEL DO LÍDER */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">👤 Papel do líder</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>Observar sinais de desmotivação ou sobrecarga</li>
          <li>Escutar ativamente o time</li>
          <li>Investigar mudanças de comportamento</li>
          <li>Agir rapidamente quando identificar problemas</li>
        </ul>
      </div>

      {/* COMO APLICAR */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">📋 Como aplicar</h3>

        <ol className="list-decimal ml-6 space-y-2">

          <li>Observe mudanças de comportamento no time</li>

          <li>Use reuniões e 1:1 para entender percepções do colaborador</li>

          <li>Investigue rapidamente sinais de desalinhamento</li>

          <li>Defina ações para corrigir o problema identificado</li>

        </ol>
      </div>

      {/* BOAS PRÁTICAS */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">🧠 Boas práticas</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>Não ignore sinais de mudança no comportamento</li>
          <li>Converse rapidamente com o colaborador</li>
          <li>Busque entender o contexto antes de agir</li>
          <li>Atue de forma preventiva</li>
        </ul>
      </div>

      {/* ALERTA */}

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-10">
        <h3 className="font-semibold mb-3">⚠ Sinais de alerta</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>Queda repentina de engajamento</li>
          <li>Mudança brusca de comportamento</li>
          <li>Isolamento do time</li>
          <li>Queda de performance sem explicação clara</li>
        </ul>
      </div>

    </LessonLayout>
  );
}