export const validJsonToString = (str: string): boolean => {
	try {
		JSON.parse(str)
	} catch (_) {
		return false
	}
	return true
}
