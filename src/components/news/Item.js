import React from 'react'
import { BlueButton } from '../Button'
import useActions from '../../hooks/useActions'
import { setNewsFeatureByName } from '../../redux/features/newsSlice'

export default function Item({ title, date, source, img_url, description }) {
  const setFeature = useActions(setNewsFeatureByName)

  const openDetail = () => {
    setFeature({ name: "showModal", value: true })
    setFeature({ name: "currentItem", value: arguments[0] })
  }

  return (
    <article className='news-list-item d_flex dir_column jc_space-between gr-6-10-sm gr-12-10 p-2'>
      <figure className='news-list-item-image hover'>
        <img src={img_url} alt={title} />
        <figcaption className='absolute py-1 px-3'>
          {source}
        </figcaption>
      </figure>

      <header className='mt-3'>
        <h4>{title}</h4>
      </header>

      <div className="d_flex ai_center jc_space-between mt-4">
        <BlueButton text="Detay Gör" onClick={openDetail} />
        <p className="small">{new Date(date).toLocaleDateString()}</p>
      </div>
    </article>
  )
}
