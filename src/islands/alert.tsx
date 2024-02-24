import { useState } from "preact/hooks"
import { Modal } from "../layers/shared/ui/mod.ts"

export function Alert() {
  const [alert, setAlert] = useState<boolean>(true)
  
  return(
    <Modal isOpen={alert} onClose={()  => setAlert(false)}>
      <div>Текст</div>
    </Modal>
  )
}