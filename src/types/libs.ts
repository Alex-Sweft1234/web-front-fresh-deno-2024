export interface ILocaleStorage {
  get<T>(key: string): T | null
  set(key: string, value: any): void
  remove(key: string): void
}