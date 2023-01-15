import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
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
  const { dispatch, state } = useContext(CustomContext)
  const { i18n } = useTranslation()

  if (state.catalog.products.error.length) {
    return <h2>{state.catalog.products.error.message}</h2>
  }

  return (
    <>
      <div className="catalog__row">
        {state.catalog.products.data
          .filter((item: { sizes: [{ size: string; inStock: string }] }) =>
            state.catalog.size ? item?.sizes.find(el => el?.size == state.catalog.size)?.inStock : item
          )
          .filter((item: { sizes: [{ size: string; inStock: string }] }, idx: number) => {
            return state.catalog.page === 1 ? idx < 6 : idx < state.catalog.page * 6 && idx > state.catalog.page * 6 - 7
          })
          .map((item: ProductsProps) => (
            <div key={item.id} className="catalog__card">
              <Link to={`/product/${item.id}`}>
                <img src={item.img[0]} alt={item.title} className="catalog__card-img" />
              </Link>
              <h3 className="catalog__card-title">{item.title}</h3>
              <p className="catalog__card-category">{item.category}</p>
              <p className="catalog__card-brand">{item.brand}</p>
              <p className="catalog__card-price">
                {i18n.language === 'en' ? item.price : Number(item.price) * 83}
                <span>{i18n.language === 'ru' ? ' руб.' : ' $'}</span>
              </p>
            </div>
          ))}
      </div>

      <ul className="catalog__pagination">
        {new Array(Math.ceil(state.catalog.products.dataLength / 6)).fill(null).map((item, idx) => (
          <li
            key={idx}
            className={`catalog__page ${state.catalog.page === idx + 1 ? 'active' : ''}`}
            onClick={() => dispatch({ type: 'change_page', payload: idx + 1 })}
          >
            {idx + 1}
          </li>
        ))}
      </ul>
    </>
  )
}
