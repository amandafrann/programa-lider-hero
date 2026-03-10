import LessonLayout from "@/app/components/LessonLayout";

export default function FeedbackPage() {
  return (
    <LessonLayout title="Feedback">

      <p className="text-gray-600 mb-10">
        Feedback é uma das ferramentas mais importantes de liderança.
        Ele permite alinhar expectativas, corrigir desvios rapidamente
        e desenvolver pessoas continuamente dentro do time.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">⚡ Objetivo da etapa</h3>

        <p>
          Garantir que líderes saibam dar e receber feedbacks claros,
          construtivos e acionáveis para desenvolver pessoas e melhorar
          continuamente a performance do time.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">👤 Papel do líder</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>Observar comportamentos e resultados do time</li>
          <li>Dar feedbacks próximos ao momento em que ocorrem</li>
          <li>Criar ambiente seguro para conversas abertas</li>
          <li>Pedir feedback sobre sua própria atuação</li>
        </ul>
      </div>

    </LessonLayout>
  );
}