import React, { useEffect, useState } from 'react'
import { useGetWheatherQuery } from '../../redux/services/wheatherApi'
import '../../styles/layouts/wheather.scss'
import sunny from '../../images/sun.png'
import storm from '../../images/storm.png'
import snowy from '../../images/snowy.png'
import cloudy from '../../images/cloudy.png'

export default function Wheather() {
  const [currentData, setCurrentData] = useState()
  const { data: wheathers, isError, isLoading } = useGetWheatherQuery()

  const IMAGES = {
    sloudy: cloudy,
    sainy: storm,
    sunny,
    snowy
  }

  useEffect(() => {
    setCurrentData(wheathers?.find(item => new Date().toLocaleDateString() === new Date(item?.date).toLocaleDateString()));
  }, [wheathers])

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
    <section className='wheather mb-4 mx-2 p-4'>
      <header className='d_flex ai_center jc_space-between wheather-header'>
        <h2>Bugün</h2>
        <p>{new Date().toLocaleDateString()}</p>
      </header>
      <div className='my-4 d_flex ai_center jc_space-between wheather-tempeture'>
        <div className="big">
          {currentData?.tempeture}
        </div>
        <figure>
          <img src={IMAGES[currentData?.type]} alt="wheather" />
        </figure>
      </div>
    </section>
  )
}
