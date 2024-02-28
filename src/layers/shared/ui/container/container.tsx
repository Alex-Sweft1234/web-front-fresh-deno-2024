import { ComponentChildren } from "preact"

type TContainer = {
  children: ComponentChildren;
}

export function Container({ children }: TContainer) {
  return (
    <div className={`max-w-[1300px] mx-auto px-[15px] md:px-[20px]`}>{children}</div>
  )
}
