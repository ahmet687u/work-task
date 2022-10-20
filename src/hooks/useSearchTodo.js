import { useMemo } from "react"
import { useSelector } from "react-redux"

export default function useSearchTodo(value) {
  const { data } = useSelector(state => state.todos)

  const searchData = useMemo(() => data?.filter(item => item?.subject?.toLowerCase()?.includes(value.toLowerCase())), [value, data])

  return searchData?.length ? searchData : 'Not Found'
}