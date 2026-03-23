import LessonLayout from "@/app/components/LessonLayout";

export default function AlinhamentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LessonLayout
      title="Abertura e Alinhamento com People"
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
      {children}
    </LessonLayout>
  );
}