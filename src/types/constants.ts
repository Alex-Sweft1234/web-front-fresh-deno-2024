export type TConstants = Readonly<{
  NOW: number
  DEBUG: boolean
  PROFILE: string
  PROJECT_DOMAIN: string
  PERSONA_STOP_PDN: number
  PROJECT_STOP_ORDER: number
  RECAPTCHA_SITE_KEY: string
  PROJECT_ACTION_NAME: string
  PROJECT_START_ORDER: number
  PROJECT_STOP_ACTION: number
  IS_PERSONA_STOP_PDN: boolean
  PROJECT_START_ACTION: number
  IS_PROJECT_STOP_ORDER: boolean
  IS_PROJECT_START_ORDER: boolean
  IS_PROJECT_STOP_ACTION: boolean
  IS_PROJECT_START_ACTION: boolean
  PROJECT_STOP_DOC_REGISTER: number
  PROJECT_STOP_CODE_REGISTER: number
  PROJECT_START_DOC_REGISTER: number
  PROJECT_START_CODE_REGISTER: number
  IS_PROJECT_STOP_DOC_REGISTER: boolean
  IS_PROJECT_STOP_CODE_REGISTER: boolean
  IS_PROJECT_START_DOC_REGISTER: boolean
  IS_PROJECT_START_CODE_REGISTER: boolean
}>

export type TContextConstants = {
  loading: boolean
  data: TConstants | null
  setData: (state?: TConstants) => void
}
