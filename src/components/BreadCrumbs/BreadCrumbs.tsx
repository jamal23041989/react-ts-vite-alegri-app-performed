import { useContext } from 'react'
import { CustomContext } from '../../context/CustomContext'
import { CategoryTitle } from '../'
import './BreadCrumbs.scss'

export const BreadCrumbs = () => {
  const { state } = useContext(CustomContext)

  return (
    <ul className="breadCrumbs">
      <li className="breadCrumbs__item">Главная</li>
      <li className="breadCrumbs__item">
        {state.catalog.gender === 'woman' && 'Женщины'}
        {state.catalog.gender === 'men' && 'Мужчины'}
      </li>
      <li className="breadCrumbs__item">
        <CategoryTitle />
      </li>
    </ul>
  )
}
