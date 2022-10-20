import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

export default function SelectBox({ data, onUpdate, emptyText, defaultValue }) {
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(defaultValue)

  const change = item => {
    onUpdate(item)
    setSelected(item)
    setShow(false)
  }

  return (
    <div className="dropdown">
      <div
        className="dropdown-button d_flex ai_center jc_space-between py-4 px-3"
        onClick={() => setShow(!show)}
      >
        {selected || emptyText}
        <RiArrowDownSLine />
      </div>
      <div className={`dropdown-list ${show && "active"}`}>
        {data?.map((option, idx) => (
          <div
            key={idx}
            className="dropdown-list-item d_flex ai_center px-2"
            onClick={() => change(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
