import React from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'

export default function List() {
  const { searchData, filteredTodo } = useSelector(state => state.todos)

  if (searchData === "Not Found") {
    return (
      <div className='flex_center my-4 py-4 txt-error'>
        <h2>Aranan eleman bulunamadı</h2>
      </div>
    )
  }

  return (
    <div className='todos-list my-4'>
      {Boolean(searchData?.length)
        ? searchData?.map(item => <Item key={item.subject} {...item} />)
        : filteredTodo?.map(item => <Item key={item.subject} {...item} />)}
    </div>
  )
}
