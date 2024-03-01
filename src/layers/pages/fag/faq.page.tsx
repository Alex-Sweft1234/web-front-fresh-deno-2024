import { Container } from "../../shared/ui/mod.ts"
import { TFaq } from "../../types/mod.ts"

interface IFaqPage {
  data?: TFaq[]
}

export function FaqPage({ data }: IFaqPage) {
  return <Container maxWidth={1000}>{JSON.stringify(data)}</Container>
}