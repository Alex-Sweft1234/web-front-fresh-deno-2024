import { Head } from "$fresh/runtime.ts"
import { Container } from "../layers/shared/ui/mod.ts"

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <Container className="h-[calc(100vh-310px)]">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-center text-4xl font-bold">Страница не найдена</h1>
          <div className="flex justify-center mt-10">
            <a href="/" className="underline text-lg">На главную</a>
          </div>
        </div>
      </Container>
    </>
  )
}
