export const createArray = (length: number, value?: number | string) => {
  return Array(length).fill(value || 0)
}
