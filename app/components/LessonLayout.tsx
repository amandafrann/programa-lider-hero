import Link from "next/link";

export default function LessonLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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

          <Link
            href="/desenvolvimento/performance/feedback"
            className="block px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            Feedback
          </Link>

          <Link
            href="/desenvolvimento/performance/pulso"
            className="block px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            Pulso
          </Link>

          <Link
            href="/desenvolvimento/performance/calibracao"
            className="block px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            Calibração
          </Link>

          <Link
            href="/desenvolvimento/performance/one-on-one"
            className="block px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            1:1
          </Link>

          <Link
            href="/desenvolvimento/performance/yellow-flag"
            className="block px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            Yellow Flag
          </Link>

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