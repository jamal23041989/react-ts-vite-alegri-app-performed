import { useContext } from 'react'
import { CustomContext } from '../../context/CustomContext'
import './SidebarItem.scss'

type SidebarItemProps = {
  text: string
  value: string
}

export const SidebarItem = ({ text, value }: SidebarItemProps) => {
  const { category, changeCategory } = useContext(CustomContext)

  return (
    <li className={`sidebar__menu-item ${category === value ? 'active' : ''}`} onClick={() => changeCategory(value)}>
      {text}
    </li>
  )
}
