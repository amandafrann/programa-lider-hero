import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="max-w-3xl text-center space-y-8">

        <h1 className="text-5xl font-bold">
          Programa Líder Hero
        </h1>

        <p className="text-gray-400 text-lg">
          Uma trilha estratégica para desenvolver líderes que constroem cultura,
          performance e geram resultado.
        </p>

        <Link
          href="/jornada"
          className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium hover:opacity-90"
        >
          Iniciar Jornada
        </Link>

      </div>
    </main>
  );
}