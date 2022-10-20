import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

export default function List() {
  const { data, searchData } = useSelector(state => state.todos)

  if (searchData === "Not Found") {
    return (
      <div className='flex_center my-4 py-4 txt-error'>
        <h2>Aranan eleman bulunamadı</h2>
      </div>
    )
  }

  return (
    <div className='todos-list my-4'>
      {searchData?.length
        ? searchData?.map(item => <Item key={item.subject} {...item} />)
        : data?.map(item => <Item key={item.subject} {...item} />)}
    </div>
  )
}
