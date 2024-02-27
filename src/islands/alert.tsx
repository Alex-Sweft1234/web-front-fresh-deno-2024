import { useEffect, useState } from "preact/hooks"
import { Button, Modal } from "../layers/shared/ui/mod.ts"
import { useAction, useSelector } from "./store.provider.tsx"
import { str } from "../layers/shared/lib/mod.ts"

export function Alert() {
  const { modals: { setAlert } } = useAction()
  const { modals: { data: { alert } } } = useSelector()

  const {
    message,
    onCancel,
    onConfirm,
    confirmText = "Да",
    title = "Информация",
    actionText = "Хорошо",
    cancelText = "Отмена",
    closeButton = false,
    emptyMessage = false,
  } = alert || {}

  const [content, setContent] = useState<Record<string, string[] | string> | string | undefined>(undefined)

  const onClose = () => {
    setAlert()
  }

  useEffect(() => {
    if (!content) setContent(message)
    else setTimeout(() => setContent(message), 280)
  }, [message])
  
  return(
    <Modal title={title} isOpen={!!message} closeButton={closeButton} onClose={onClose}>
      {!emptyMessage && (
        <div className="pt-2 pb-10">
          {content && (
            typeof content === 'object' ? (
              Object.entries(content).map(([_, val], idx) => (
                <div key={`alert-message-${idx}`}>
                  {Array.isArray(val) && val.map((v, i) => <div key={i}>{str.normalize(v, true)}</div>)}
                </div>
              ))
            ) : typeof content === 'string' ? (
              <div key="alert-message">{str.normalize(content as string, true)}</div>
            ) : (
              content
            )
          )}
        </div>
      )}

      {onConfirm ? (
        <div className="w-80 mx-auto">
          <div>
            <Button onClick={onCancel}>{cancelText}</Button>
          </div>
          <div>
            <Button onClick={onConfirm}>{confirmText}</Button>
          </div>
        </div>
      ) : (
        <div className="w-80 mx-auto">
          <Button onClick={onClose}>{actionText}</Button>
        </div>
      )}
    </Modal>
  )
}