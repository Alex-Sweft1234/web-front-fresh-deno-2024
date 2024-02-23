import { Modal } from "../shared/ui/mod.ts"

export function Alert() {
  return(
    <Modal isOpen onClose={()  => {}}>
      <div>Текст</div>
    </Modal>
  )
}