import { useContext } from 'react'
import { CustomContext } from '../../context/CustomContext'
import { SidebarItem } from './SidebarItem'

import './Sidebar.scss'

type Props = {}

export const Sidebar = (props: Props) => {
  const { gender, changeGender } = useContext(CustomContext)

  return (
    <aside className="sidebar">
      <div className="sidebar__lang">
        <p className={`sidebar__lang-item ${gender === 'woman' ? 'active' : ''}`} onClick={() => changeGender('woman')}>
          Женщины
        </p>
        <p className={`sidebar__lang-item ${gender === 'men' ? 'active' : ''}`} onClick={() => changeGender('men')}>
          Мужчины
        </p>
      </div>
      <ul className="sidebar__menu">
        <SidebarItem value={'t-short'} text="Футболки" />
        <SidebarItem value={'sweatshirts'} text="Кофты" />
        <SidebarItem value={'pants'} text="Штаны" />
        <SidebarItem value={'shoes'} text="Обувь" />
      </ul>
    </aside>
  )
}
