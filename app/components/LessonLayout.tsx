import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LessonLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const lessons = [
    {
      name: "Feedback",
      path: "/desenvolvimento/performance/feedback",
    },
    {
      name: "Pulso",
      path: "/desenvolvimento/performance/pulso",
    },
    {
      name: "Calibração",
      path: "/desenvolvimento/performance/calibracao",
    },
    {
      name: "1:1",
      path: "/desenvolvimento/performance/one-on-one",
    },
    {
      name: "Yellow Flag",
      path: "/desenvolvimento/performance/yellow-flag",
    },
  ];

  const currentIndex = lessons.findIndex(
    (lesson) => lesson.path === pathname
  );

  const previousLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  const linkClass = (path: string) =>
    `block px-4 py-3 rounded-lg transition ${
      pathname === path
        ? "bg-black text-white"
        : "bg-gray-100 hover:bg-gray-200"
    }`;

  return (
    <div className="flex min-h-screen bg-white">

      {/* SIDEBAR */}

      <aside className="w-72 border-r bg-white p-6">

        <Link
          href="/desenvolvimento"
          className="text-sm text-gray-500 mb-8 block hover:underline"
        >
          ← Voltar para desenvolvimento
        </Link>

        <h2 className="font-semibold text-lg mb-6">
          Gestão de Performance
        </h2>

        <nav className="space-y-3">

          {lessons.map((lesson) => (
            <Link
              key={lesson.path}
              href={lesson.path}
              className={linkClass(lesson.path)}
            >
              {lesson.name}
            </Link>
          ))}

        </nav>

      </aside>


      {/* CONTEÚDO */}

      <main className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-6">
          {title}
        </h1>

        <div className="space-y-6 mb-16">
          {children}
        </div>


        {/* NAVEGAÇÃO ENTRE AULAS */}

        <div className="flex justify-between border-t pt-6">

          {previousLesson ? (
            <Link
              href={previousLesson.path}
              className="text-gray-600 hover:text-black"
            >
              ← {previousLesson.name}
            </Link>
          ) : (
            <div />
          )}

          {nextLesson && (
            <Link
              href={nextLesson.path}
              className="text-gray-600 hover:text-black"
            >
              {nextLesson.name} →
            </Link>
          )}

        </div>

      </main>

    </div>
  );
}