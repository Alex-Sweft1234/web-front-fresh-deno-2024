import { ComponentChildren } from "preact"

interface IModal {
  isOpen: boolean
  onClose: () => void
  children: ComponentChildren
}

export function Modal({ children, isOpen = false, onClose = () => {} }: IModal) {
  const onOpen = () => {}
  
  return (
    <div data-dialog-backdrop="dialog" data-dialog-backdrop-close="false" className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
      <div data-dialog="dialog" className="relative m-4 w-1/3 min-w-[33.333333%] max-w-[33.333333%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
        {children}
      </div>
    </div>
  )
}