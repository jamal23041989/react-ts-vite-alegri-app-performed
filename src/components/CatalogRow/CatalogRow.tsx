import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../context/CustomContext'
import './CatalogRow.scss'

interface ProductsProps {
  id: string | number
  img: string
  title: string
  category: string
  brand: string
  price: string | number
}

export const CatalogRow = () => {
  const { products } = useContext(CustomContext)
  const { i18n } = useTranslation()

  return (
    <div className="catalog__row">
      {products.data.map((item: ProductsProps) => (
        <div key={item.id} className="catalog__card">
          <img src={item.img[0]} alt={item.title} className="catalog__card-img" />
          <h3 className="catalog__card-title">{item.title}</h3>
          <p className="catalog__card-category">{item.category}</p>
          <p className="catalog__card-brand">{item.brand}</p>
          <p className="catalog__card-price">
            {item.price}
            <span>{i18n.language === 'ru' ? ' руб.' : ' $'}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
