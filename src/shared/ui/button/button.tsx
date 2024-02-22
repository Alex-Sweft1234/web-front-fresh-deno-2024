import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/runtime.ts"

export function Button({ disabled, ...props }: JSX.HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} disabled={!IS_BROWSER || disabled} />
}
