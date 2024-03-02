import { TConstants, TContextConstants } from "./constants.ts"
import { TContextModals } from "./modal.ts"
import { TFaq } from "./faq.ts"
import { TFeedbackTheme } from "./feedback.ts"

export interface IGlobalContext {
	constants: TContextConstants
	modals: TContextModals
}

export interface TGlobalState {
	constants: TConstants
	faq?: TFaq[]
	feedbackTheme?: TFeedbackTheme[]
}

export type TPalette = {
	primary: "primary"
	secondary: "secondary"
	tertiary: "tertiary"
}

export type TColors = "primary" | "secondary" | "tertiary"
