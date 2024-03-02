import { apiFetch } from "./service.ts"
import { EMethodPath } from "./../../types/mod.ts"

export const getConstants = () =>
	apiFetch({
		url: EMethodPath.CONST,
		method: "GET",
	})

export const getFaq = () =>
	apiFetch({
		url: EMethodPath.FAQ,
		method: "GET",
	})
