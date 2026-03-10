import Link from "next/link";

export default function LessonLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Feedback
          </Link>

          <Link
            href="/desenvolvimento/performance/pulso"
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Pulso
          </Link>

          <Link
            href="/desenvolvimento/performance/calibracao"
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Calibração
          </Link>

          <Link
            href="/desenvolvimento/performance/one-on-one"
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            1:1
          </Link>

          <Link
            href="/desenvolvimento/performance/yellow-flag"
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Yellow Flag
          </Link>

        </div>

      </div>

      {/* CONTEÚDO */}

      <div className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-4">
          {title}
        </h1>

        {children}

      </div>

    </div>
  );
}