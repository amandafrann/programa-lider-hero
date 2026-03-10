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
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200"
          >
            Feedback
          </Link>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Pulso
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Calibração
          </div>

          <Link
            href="/desenvolvimento/performance/one-on-one"
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200"
          >
            1:1
          </Link>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Yellow Flag
          </div>

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