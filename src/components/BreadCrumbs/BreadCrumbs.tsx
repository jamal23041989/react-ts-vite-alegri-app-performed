import { useContext } from 'react'
import { CustomContext } from '../../context/CustomContext'
import { CategoryTitle } from '../'
import './BreadCrumbs.scss'

export const BreadCrumbs = () => {
  const { gender } = useContext(CustomContext)

  return (
    <ul className="breadCrumbs">
      <li className="breadCrumbs__item">Главная</li>
      <li className="breadCrumbs__item">
        {gender === 'women' && 'Женщины'}
        {gender === 'men' && 'Мужчины'}
      </li>
      <li className="breadCrumbs__item">
        <CategoryTitle />
      </li>
    </ul>
  )
}
