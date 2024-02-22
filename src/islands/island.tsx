import moment from "moment"
import { useStore } from "./store.provider.tsx"
import { Button, NavLink } from "../shared/ui/mod.ts"

export default function Island({ path = '' }) {
  const { constants: { data, loading: isLoadConstants, setData: uploadConstants } } = useStore()

  const { NOW = 0 } = data || {}

  const onCurrentDate = () => {
    uploadConstants()
  }

  return (
    <div>
      <div>path page: <strong>{path}</strong></div>
      <div>date now: <strong>{moment(NOW).format('DD MMMM YYYY HH:mm:SS')}</strong></div>
      <div className="mt-2">
        <Button onClick={onCurrentDate} disabled={isLoadConstants}>Обновить дату</Button>
        <NavLink href="/profile">приветствие</NavLink>
      </div>
    </div>
  )
}
