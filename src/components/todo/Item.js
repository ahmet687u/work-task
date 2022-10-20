import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { OrangeButton, RedButton } from '../Button'

export default function Item({ subject, isCompleted, endDate }) {
  const dateComparison = date => new Date() > new Date(date)

  return (
    <div className={`todos-list-item d_flex ai_center jc_space-between p-4 mb-4 ${isCompleted && "completed"}`}>
      <div className="todos-list-item-left">
        <div className={`end-date mb-4 ${dateComparison(endDate) ? "txt-error" : "txt-success"}`}>{new Date(endDate).toLocaleDateString()}</div>
        <label className='d_flex ai_center todos-list-item-label' htmlFor={`check-todo-${subject}`}>
          <input
            type="checkbox"
            name={`check-todo-${subject}`}
            id={`check-todo-${subject}`}
            className="d_none"
          />
          <div className="todos-list-item-label-check mr-4 flex_center" id='check'>
            <AiOutlineCheck />
          </div>
          <p>{subject}</p>
        </label>
      </div>

      <div className='d_flex'>
        <RedButton text="Sil" className="mr-4" />
        <OrangeButton text="Düzenle" />
      </div>
    </div>
  );
}
