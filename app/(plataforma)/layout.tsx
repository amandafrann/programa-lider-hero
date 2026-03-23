import Header from "../components/Header"

export default function PlataformaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f6f7fb]">

      {/* HEADER GLOBAL */}
      <Header />

      {/* CONTEÚDO SEM SIDEBAR */}
      <main className="px-10 py-10">
        {children}
      </main>

    </div>
  )
}