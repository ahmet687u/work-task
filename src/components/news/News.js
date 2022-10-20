import React, { useState } from 'react'
import { useGetNewsQuery } from '../../redux/services/newsApi'
import Item from './Item'
import Modal from '../Modal'
import '../../styles/layouts/news.scss'

export default function News() {
  const [show, setShow] = useState(false)
  const { data: news, isError, isLoading } = useGetNewsQuery()

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
    <section className='news gr_box'>
      <header className='my-4 px-2 pt-4'>
        <h1>Haberler</h1>
      </header>

      {/* News list component */}
      <div className="news-list gr_row">
        {news?.map(item => <Item key={item?.title} {...item} />)}
      </div>

      <Modal show={show}>
        kasj
      </Modal>
    </section>
  )
}
