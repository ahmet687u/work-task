import React from 'react'
import { useGetTodosQuery } from '../../redux/services/todoApi'
import Form from './Form';
import List from './List';
import '../../styles/layouts/todos.scss'

export default function Todo() {
  const { isError, isLoading } = useGetTodosQuery()

  if (isError) {
    return (
      <p>Veriler getirilirken bir hata oluştu</p>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

  return (
    <section className='todos'>
      <header className='mb-4'>
        <h1>TO-DO LIST</h1>
      </header>

      <Form />
      <List />
    </section>
  )
}
