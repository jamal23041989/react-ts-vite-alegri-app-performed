import { useContext } from 'react'
import { CustomContext } from '../../context/CustomContext'
import './CategoryTitle.scss'

export const CategoryTitle = () => {
  const { category } = useContext(CustomContext)

  return (
    <span>
      {category === 't-short' && 'Футболки'}
      {category === 'sweatshirts' && 'Кофты'}
      {category === 'pants' && 'Штаны'}
      {category === 'shoes' && 'Обувь'}
    </span>
  )
}
