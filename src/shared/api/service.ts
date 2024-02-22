import { TFetchConfig } from './../../types/mod.ts'

const apiFetchURL = 'https://dobrycola-promo.ru/backend'


const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Basic YWRtaW46YXRvbXNhcGkyOTMwMg==",
}

export const apiFetch = async ({ url, method }: TFetchConfig) => { 
  return await fetch(
    `${apiFetchURL.replace(/^\/+/, '')}${url}`, 
    { method, headers: { ...defaultHeaders } },
  )
    .then((response) => response.json())
    .then((res) => res)
    .catch((err) => {
      throw err.response
    })
}
  