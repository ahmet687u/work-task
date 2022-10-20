import { useMemo } from "react"
import { useSelector } from "react-redux"

export default function useFilterTodo(value) {
  const { data } = useSelector(state => state.todos)

  return useMemo(() => data?.filter(item => {
    switch (value) {
      case 'Tümü':
        return item

      case 'Tamamlananlar':
        return item.isCompleted

      case 'Tamamlanmayanlar':
        return !item.isCompleted

      default:
        return item
    }
  }), [value, data])
}