import { Head } from "$fresh/runtime.ts"

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div>
        <h1 className="text-4xl font-bold">404 - Page not found</h1>
        <a href="/" className="underline">Go back home</a>
      </div>
    </>
  )
}
