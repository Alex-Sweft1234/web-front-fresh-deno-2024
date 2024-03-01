import { TFaq } from "../../layers/types/mod.ts"

interface IFaq {
  data: TFaq[]
}

export function Faq({ data = [] }: IFaq) {
  return (
    <div>
      {data.map((k: TFaq, _: number) => (
        <div key={`faq-item-${k.id}`} className="mb-4 text-secondary">
          <h2 className="text-xl font-semibold">{k.title}</h2>
          <p>{k.text}</p>
        </div>
      ))}
    </div>
  )
}
