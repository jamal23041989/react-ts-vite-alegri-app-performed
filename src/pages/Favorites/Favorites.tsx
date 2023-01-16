import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../context/CustomContext'
import './Favorites.scss'

interface FavoritesProps {
  brand: string
  category: string
  gender: string
  id: number | string
  img: string[]
  price: number
  review: []
  sizes: [{ id: number | string; inStock: number | string; size: string }]
  title: string
}

export const Favorites = () => {
  const { state, deleteProductForFavorites } = useContext(CustomContext)
  const { i18n } = useTranslation()

  return (
    <section className="favorites">
      <div className="favorites__container">
        <div className="favorites__row">
          {state.favorites.data.map((item: FavoritesProps) => (
            <div className="favorites__card">
              <img src={item.img[0]} alt="" className="favorites__img" />
              <div className="favorites__card-info">
                <h3 className="catalog__card-title">{item.title}</h3>
                <p className="catalog__card-category">{item.category}</p>
                <p className="catalog__card-brand">{item.brand}</p>
                <p className="catalog__card-price">
                  {i18n.language === 'en' ? item.price : item.price * 83}
                  {i18n.language === 'ru' ? ' руб.' : ' $'}
                </p>
              </div>
              <span className="favorites__card-remove" onClick={() => deleteProductForFavorites(item.id)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L21 21" stroke="#0F303F" />
                  <path d="M21 1L0.999999 21" stroke="#0F303F" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
