import { useState, useEffect } from "preact/hooks"

export const useScript = (scriptToAppend: string): { appendScriptStatus: boolean } => {
  const [appendScriptStatus, setAppendScriptStatus] = useState<boolean>(false)

  useEffect(() => {
    const script = document.createElement('script')

    script.src = scriptToAppend
    script.async = true
    script.onload = () => setAppendScriptStatus(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [scriptToAppend])

  return { appendScriptStatus }
}
