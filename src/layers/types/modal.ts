export type TAlert = Partial<{
	title: string
	actionText: string
	cancelText: string
	confirmText: string
	onClose: () => void
	closeButton: boolean
	onAction: () => void
	onCancel: () => void
	onConfirm: () => void
	emptyMessage: boolean
	message: Record<string, string[] | string> | string
}>

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
