export type TSuccessResponse<T> = {
  data: T
  status: number
  message?: Record<string, string[] | string>
}

export type TFetchConfig = {
  url: string
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
}

export enum EMethodPath {
  CONST = '/const',
}
