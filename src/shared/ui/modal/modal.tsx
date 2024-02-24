import { ComponentChildren } from "preact"
import { useEffect } from "preact/hooks"
import { IconButton } from "../icon_button/mod.ts"
import {CloseIcon} from "../../../assets/svg/icons/close.icon.tsx";

interface IModal {
  title?: string
  isOpen: boolean
  onClose: () => void
  closeButton?: boolean
  children: ComponentChildren
}

export function Modal({
  children,
  isOpen = false,
  closeButton = true,
  title = "Информация",
  onClose = () => {}
}: IModal) {
  const backdrop = window.document?.getElementById("backdrop")
  const dialog = window.document?.getElementById("dialog")
  
  const onOpenModal = () => {
    backdrop?.classList.remove("opacity-0", "pointer-events-none")
    dialog?.classList.add("opacity-1", "translate-y-0")
  }
  
  const onCloseModal = () => {
    dialog?.classList.remove("translate-y-0")
    dialog?.classList.add("opacity-0")
    setTimeout(() => backdrop?.classList.add("opacity-0", "pointer-events-none"), 300)
  }
  
  const onOpen = () => {
    setTimeout(() =>{
      if (isOpen) onOpenModal()
      else onCloseModal()
    }, 200)
  }
  
  useEffect(() => onOpen(), [isOpen])
  
  return (
    <div
      id="backdrop"
      data-dialog-backdrop="dialog"
      data-dialog-backdrop-close="false"
      className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        id="dialog"
        data-dialog="dialog"
        className="relative p-6 m-4 w-full min-w-[320px] max-w-[600px] rounded-lg bg-white leading-relaxed antialiased shadow-2xl transition-all duration-300 -translate-y-14"
      >
        {closeButton && (
          <div className="absolute top-3 right-3">
            <IconButton onClick={onClose}>
              <CloseIcon width={30} height={30}/>
            </IconButton>
          </div>
        )}

        <div className="text-center p-4 text-blue text-3xl font-bold">{title}</div>
        <div className="text-center py-4 text-blue text-xl font-regular">{children}</div>
      </div>
    </div>
  )
}