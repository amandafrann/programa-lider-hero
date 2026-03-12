import LessonLayout from "@/app/components/LessonLayout";

export default function AberturaPage() {
  return (
    <LessonLayout
      title="Abrir vaga na Gupy"
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

      {/* SEU CONTEÚDO */}

    </LessonLayout>
  );
}