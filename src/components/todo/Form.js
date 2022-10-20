import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { setFeatureByName } from '../../redux/features/todoSlice'
import useSearchTodo from '../../hooks/useSearchTodo'
import useActions from '../../hooks/useActions'
import SelectBox from '../SelectBox'
import useFilterTodo from '../../hooks/useFilterTodo'

export default function Form() {
  const [search, setSearch] = useState("")
  const [filterValue, setFilterValue] = useState("Tümü")
  const searchData = useSearchTodo(search)
  const filterData = useFilterTodo(filterValue)
  const setFeature = useActions(setFeatureByName)

  useEffect(() => {
    setFeature({ name: "filteredTodo", value: filterData });
  }, [filterData, setFeature])

  useEffect(() => {
    if (!searchData) return

    setFeature({ name: "searchData", value: searchData });
  }, [searchData, setFeature])

  return (
    <div className="d_flex ai_center todos-form">
      <div className="d_flex ai_center inputbox mr-4 f1 pl-3">
        <AiOutlineSearch />
        <input
          type="text"
          className="f1 py-4 px-2"
          placeholder="Todo Ara..."
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </div>
      <SelectBox
        emptyText="Filtrele"
        defaultValue={filterValue}
        data={["Tümü", "Tamamlananlar", "Tamamlanmayanlar"]}
        onUpdate={(value) => setFilterValue(value)}
      />
    </div>
  );
}
