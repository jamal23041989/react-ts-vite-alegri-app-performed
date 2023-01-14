import { useContext } from 'react'
import { CustomContext } from '../../context/CustomContext'
import './BreadCrumbs.scss'

type Props = {}

export const BreadCrumbs = (props: Props) => {
  const { gender, category } = useContext(CustomContext)

  return (
    <ul className="breadCrumbs">
      <li className="breadCrumbs__item">Главная</li>
      <li className="breadCrumbs__item">
        {gender === 'women' && 'Женщины'}
        {gender === 'men' && 'Мужчины'}
      </li>
      <li className="breadCrumbs__item">
        {category === 't-shorts' && 'Футболки'}
        {category === 'sweatshirts' && 'Кофты'}
        {category === 'pants' && 'Штаны'}
        {category === 'shoes' && 'Обувь'}
      </li>
    </ul>
  )
}
