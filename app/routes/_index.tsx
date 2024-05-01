import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => [{ title: "Portfolio - Adrien Compare" }]

export default function Index() {

  return (
    <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center z-10">
      <div className="relative flex min-h-full justify-center gap-6">
          <h3>Salut</h3>
      </div>
    </main>
  )
}
