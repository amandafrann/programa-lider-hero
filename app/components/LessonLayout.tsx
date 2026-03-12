"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Lesson = {
  name: string;
  path: string;
};

export default function LessonLayout({
  title,
  children,
  lessons,
  backLink,
  sectionTitle,
}: {
  title: string;
  children: React.ReactNode;
  lessons: Lesson[];
  backLink: string;
  sectionTitle: string;
}) {

  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;

    return `
      block px-4 py-3 rounded-lg transition
      ${isActive
        ? "bg-gray-300 text-black font-medium"
        : "bg-gray-100 hover:bg-gray-200"
      }
    `;
  };

  return (
    <div className="flex min-h-screen bg-white">

      {/* SIDEBAR */}

      <aside className="w-72 border-r bg-white p-6">

        <Link
          href={backLink}
          className="text-sm text-gray-500 mb-8 block hover:underline"
        >
          ← Voltar
        </Link>

        <h2 className="font-semibold text-lg mb-6">
          {sectionTitle}
        </h2>

        <nav className="space-y-3">

          {lessons.map((lesson) => (
            <Link
              key={lesson.path}
              href={lesson.path}
              className={getLinkClass(lesson.path)}
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

        <div className="space-y-6">
          {children}
        </div>

      </main>

    </div>
  );
}