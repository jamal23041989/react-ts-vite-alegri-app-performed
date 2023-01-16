import { useState } from 'react'
import './QuestionsItem.scss'

export const QuestionsItem = ({ item }: any) => {
  const [accordion, setAccordion] = useState(false)

  return (
    <li className="questions__item" key={item.id}>
      <div className="questions__item-top">
        <h3 className="questions__item-title">{item.question}</h3>
        <span className={`${accordion ? 'close' : 'open'}`} onClick={() => setAccordion(!accordion)}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0V10" stroke="#0F303F" />
            <path d="M0 5L10 5" stroke="#0F303F" />
          </svg>
        </span>
      </div>
      <div style={{ display: accordion ? 'block' : 'none' }} className="questions__item-bottom">
        {item.answer}
      </div>
    </li>
  )
}
