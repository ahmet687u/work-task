import React from 'react'

export default function Item({ title, date, source, img_url, description }) {
  return (
    <article className='news-list-item d_flex dir_column jc_space-between gr-6-10-md p-2'>
      <figure className='news-list-item-image'>
        <img src={img_url} alt={title} />
        <figcaption className='absolute py-1 px-3'>
          {source}
        </figcaption>
      </figure>

      <header className='mt-3'>
        <h4>{title}</h4>
      </header>

      <p className="d_flex jc_flex-end small mt-4">{new Date(date).toLocaleDateString()}</p>
    </article>
  )
}
