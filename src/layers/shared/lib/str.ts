import { DOMParser } from "html-parser"

export const str = {
  normalize: (s: string, withBr = false): any => {
    if (typeof s === 'undefined' || s.length < 2) return s

    const pre: string[] = [
      'к',
      'в',
      'и',
      'с',
      'на',
      'за',
      'а',
      'по',
      'или',
      'из',
      'без',
      'между',
      'под',
      'вокруг',
      'о',
      'про',
      'не',
    ]

    const res = s
      .replace(
        /([a-zA-ZА-Я0-9а-я]+?)( )/g,
        (_: string, p2: string) => p2 + (pre.includes(p2.toLowerCase()) ? '&nbsp;' : ' '),
      )
      .replace(/([0-9]+?)( )/g, (_: string, p2: string) => `${p2}&nbsp;`)
      .replace(/[-‑‑]/g, '&#8209;')
      .replace(/\n/g, withBr ? '<br/>' : '')

    // return new DOMParser().parseFromString(res, "text/html")
    return res
  },

  format: {
    firstToUpper: (s: string): string => s.charAt(0).toUpperCase() + s.slice(1),

    phone: (p: string): string =>
      p !== null && p && p.length > 9
        ? `+7 (${p.substring(0, 3)}) ${p.substring(3, 6)} ${p.substring(6, 8)} ${p.substring(8)}`
        : p,
    phoneParse: (phone: string): string =>
      `${phone.substring(4, 7)}${phone.substring(9, 12)}${phone.substring(13, 15)}${phone.substring(16, 18)}`,
    phoneCrypt: (p: string): string =>
      p !== null && p && p.length > 9 ? `+7 (***) *** ${p.substring(6, 8)} ${p.substring(8)}` : p,
  },

  /**
   * @param {titles} titles [1-день, 3-дня, 5-дней]
   */
  declOfNum: (num: number, titles: string[]): string => {
    return titles[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]]
  },
}
