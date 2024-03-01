import { Head } from "$fresh/runtime.ts"
import { Container } from "../layers/shared/ui/mod.ts"

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Страница не найдена</title>
      </Head>
      <Container className="h-[calc(100vh-310px)]">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-center text-6xl font-bold">404</h1>
          <h3 className="text-center text-2xl font-bold mt-5">Страница не найдена</h3>
          <div className="flex justify-center mt-10">
            <a href="/" className="underline text-lg font-bold">На главную</a>
          </div>
        </div>
      </Container>
    </>
  )
}
