import { notFound } from "next/navigation";

type Params = {
  params: {
    etapa: string;
    modulo: string;
    aula: string;
  };
};

export default function AulaPage({ params }: Params) {
  const { etapa, modulo, aula } = params;

  if (!etapa || !modulo || !aula) {
    return notFound();
  }

  return (
    <main className="min-h-screen flex justify-center py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">

      <div className="max-w-4xl w-full px-8">

        <h1 className="text-4xl font-bold mb-6">
          Aula dinâmica
        </h1>

        <div className="bg-white p-8 rounded-xl border shadow-sm">

          <p className="mb-4 text-gray-600">
            Esta página é gerada dinamicamente pela estrutura da plataforma.
          </p>

          <ul className="space-y-2 text-gray-700">

            <li>
              <strong>Etapa:</strong> {etapa}
            </li>

            <li>
              <strong>Módulo:</strong> {modulo}
            </li>

            <li>
              <strong>Aula:</strong> {aula}
            </li>

          </ul>

        </div>

      </div>

    </main>
  );
}