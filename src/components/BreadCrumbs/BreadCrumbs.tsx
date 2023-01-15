import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { CustomContext } from '../../context/CustomContext'
import { CategoryTitle } from '../CategoryTitle/CategoryTitle'
import './BreadCrumbs.scss'

export const BreadCrumbs = () => {
  const { state } = useContext(CustomContext)
  const { t } = useTranslation()

  return (
    <ul className="breadCrumbs">
      <li className="breadCrumbs__item">{t('catalog.menu1')}</li>
      <li className="breadCrumbs__item">
        {state.catalog.gender === 'woman' && `${t('catalog.aside1')}`}
        {state.catalog.gender === 'men' && `${t('catalog.aside2')}`}
      </li>
      <li className="breadCrumbs__item">
        <CategoryTitle />
      </li>
    </ul>
  )
}
