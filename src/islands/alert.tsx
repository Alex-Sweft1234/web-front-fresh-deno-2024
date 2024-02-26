import { useEffect, useState } from "preact/hooks"
import { Button, Modal } from "../layers/shared/ui/mod.ts"
import { useAction, useSelector } from "./store.provider.tsx"
import { str } from "../layers/shared/lib/mod.ts"

export function Alert() {
  const { modals: { data: { alert } } } = useSelector()

  const { modals: { setAlert } } = useAction()

  const { title = "Информация", message } = alert || {}

  const [messageData, setMessageData] = useState<Record<string, string[] | string> | undefined>(undefined)

  const onClose = () => {
    setAlert()
  }

  useEffect(() => {
    if (!messageData) setMessageData(message)
    else setTimeout(() => setMessageData(message), 250)
  }, [message])
  
  return(
    <Modal title={title} isOpen={!!message} onClose={onClose}>
      <div>
        {messageData && (
          typeof messageData === 'object' ? (
            Object.entries(messageData).map(([_, val], idx) => (
              <div key={`snackbar-message-${idx}`}>
                {Array.isArray(val) && val.map((v, i) => <div key={i}>{str.normalize(v, true)}</div>)}
              </div>
            ))
          ) : typeof messageData === 'string' ? (
            <div key="snackbar-message">{str.normalize(messageData as string, true)}</div>
          ) : (
            message
          )
        )}
      </div>
      <div>
        <Button></Button>
      </div>
    </Modal>
  )
}