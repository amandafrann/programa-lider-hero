import LessonLayout from "@/app/components/LessonLayout";

export default function OneOnOnePage() {
  return (
    <LessonLayout title="1:1">

      <p className="text-gray-600 mb-10">
        A reunião 1:1 é um dos rituais mais importantes para o desenvolvimento
        de pessoas. É um momento dedicado ao colaborador para discutir desafios,
        carreira e evolução profissional.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">⚡ Objetivo da etapa</h3>

        <p>
          Criar um espaço estruturado de conversa entre líder e colaborador
          focado em desenvolvimento, alinhamento de expectativas e conexão.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">👤 Papel do líder</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>Criar ambiente seguro de conversa</li>
          <li>Ouvir mais do que falar</li>
          <li>Apoiar o desenvolvimento do colaborador</li>
          <li>Definir próximos passos claros</li>
        </ul>
      </div>

    </LessonLayout>
  );
}