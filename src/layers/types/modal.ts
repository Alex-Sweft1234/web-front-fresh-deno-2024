export type TAlert = {
  title?: string
  actionText?: string
  closeButton?: boolean
  message: Record<string, string[] | string>
}

export type TModal = {
  message: any
}

export type TModals = {
  modal: TModal | null
  alert: TAlert | null
}

export type TContextModals = {
  data: TModals
  setAlert: (state?: TAlert) => void
}
