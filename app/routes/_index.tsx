import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => [{ title: "Portfolio - Adrien Compare" }]

export default function Index() {

  return (
    <>
      <h1>Salut</h1>
    </>
  )
}
