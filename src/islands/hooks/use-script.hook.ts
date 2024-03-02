import { useEffect, useState } from "preact/hooks"

export function useScript(scriptToAppend: string) {
	const [appendScriptStatus, setAppendScriptStatus] = useState<boolean>(false)

	useEffect(() => {
		const script = document.createElement("script")

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
