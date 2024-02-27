import { ComponentChildren } from "preact"

type TContainer = {
  px?: number
  maxWidth?: number
  children: ComponentChildren;
}

export function Container({ children, maxWidth = 1300, px = 15 }: TContainer) {
  return (
    <div className={`max-w-[${maxWidth}px] mx-auto px-[${px}px]`}>{children}</div>
  )
}
