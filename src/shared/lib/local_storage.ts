import { ILocaleStorage } from "./../../types/mod.ts"

export const ls: ILocaleStorage = {
  get: (key) => {
    const value = localStorage.getItem(key)

    return value ? JSON.parse(value || '') : null
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove: (key) => {
    localStorage.removeItem(key)
  },
}
