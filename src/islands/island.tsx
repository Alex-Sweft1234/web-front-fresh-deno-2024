import moment from "moment"
import { useEffect } from "preact/hooks"
import { useAction, useSelector } from "./store.provider.tsx"
import { Button, NavLink } from "../layers/shared/ui/mod.ts"

export default function Island({ path = '' }) {
  const { constants: { data, loading: isLoadConstants } } = useSelector()
  const { constants: { setData: uploadConstants }, modals: { setAlert } } = useAction()

  const { NOW = 0 } = data || {}

  const onCurrentDate = () => {
    uploadConstants()
  }

  useEffect(() => {
    setAlert({ message: { alert: ['message'] }})
  }, [])

  return (
    <div>
      <div>path page: <strong>{path}</strong></div>
      <div>date now: <strong>{moment(NOW).format('DD MMMM YYYY HH:mm:SS')}</strong></div>
      <div className="mt-2 max-w-[300px]">
        <Button onClick={onCurrentDate} disabled={isLoadConstants}>Обновить дату</Button>
        <NavLink href="/profile">приветствие</NavLink>
      </div>
    </div>
  )
}
