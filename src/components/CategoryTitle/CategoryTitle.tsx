import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../context/CustomContext'

import './CategoryTitle.scss'

export const CategoryTitle = () => {
  const { state } = useContext(CustomContext)
  const { t } = useTranslation()
  return (
    <span>
      {state.catalog.category === 't-short' && `${t('catalog.aside3')}`}
      {state.catalog.category === 'sweatshirts' && `${t('catalog.aside4')}`}
      {state.catalog.category === 'pants' && `${t('catalog.aside5')}`}
      {state.catalog.category === 'shoes' && `${t('catalog.aside6')}`}
    </span>
  )
}
