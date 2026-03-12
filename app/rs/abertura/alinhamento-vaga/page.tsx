import LessonLayout from "@/app/components/LessonLayout";

export default function AlinhamentoPage() {
  return (
    <LessonLayout
      title="Alinhamento com R&S"
      backLink="/rs"
      sectionTitle="R&S"
      lessons={[
        {
          name: "Abrir vaga na Gupy",
          path: "/rs/abertura",
        },
        {
          name: "Alinhamento com R&S",
          path: "/rs/abertura/alinhamento",
        },
      ]}
    >

      {/* CONTEÚDO DO ALINHAMENTO */}

    </LessonLayout>
  );
}