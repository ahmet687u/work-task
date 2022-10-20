import { useMemo } from "react"
import { useSelector } from "react-redux"

export default function useSearchTodo(value) {
  const { filteredTodo } = useSelector(state => state.todos)
  const searchData = useMemo(() => filteredTodo?.filter(item => item?.subject?.toLowerCase()?.includes(value.toLowerCase())), [value, filteredTodo])

  return searchData?.length ? searchData : 'Not Found'
}