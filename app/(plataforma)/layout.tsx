import Link from "next/link";

export default function RSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* HEADER GLOBAL */}
      <div className="flex items-center justify-between px-10 py-6 bg-white">

        <Link
          href="/"
          className="text-gray-500 hover:text-black transition text-sm"
        >
          ← Voltar ao início
        </Link>

        <div className="font-semibold tracking-tight">
          Lider Hero
        </div>

      </div>

      {/* LINHA SUAVE (IDENTIDADE VISUAL) */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* CONTEÚDO */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {children}
      </div>

    </div>
  );
}