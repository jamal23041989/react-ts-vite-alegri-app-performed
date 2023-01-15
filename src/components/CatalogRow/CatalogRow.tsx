import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { CustomContext } from '../../context/CustomContext'

import './CatalogRow.scss'

export const CatalogRow = () => {
  const { dispatch, state, setProductForFavorites, deleteProductForFavorites } = useContext(CustomContext)
  const { i18n } = useTranslation()

  if (state.catalog.products.error.length) {
    return <h2>{state.catalog.products.error.message}</h2>
  }

  return (
    <>
      <div className="catalog__row">
        {state.catalog.products.data &&
          state.catalog.products.data
            .filter((item: any) =>
              state.catalog.size ? item.sizes.find((el: any) => el.size == state.catalog.size).inStock : item
            )
            .filter((item: any, idx: any) =>
              state.catalog.page === 1 ? idx < 6 : idx < state.catalog.page * 6 && idx > state.catalog.page * 6 - 7
            )
            .map((item: any) => (
              <div key={item.id} className="catalog__card">
                <div className="catalog__card-block">
                  <Link to={`/product/${item.id}`}>
                    <img className="catalog__card-img" src={`../${item.img[0]}`} alt={item.title} />
                  </Link>
                  <p
                    className="catalog__card-like"
                    onClick={() => {
                      if (state.favorites.data.filter((el: any) => el.id == item.id).length) {
                        deleteProductForFavorites(item.id)
                      } else {
                        setProductForFavorites(item.id)
                      }
                    }}
                  >
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill={`${state.favorites.data.filter((el: any) => el.id == item.id).length ? '#ff0000' : 'none'}`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.31802 2.31802C4.07538 0.56066 6.92462 0.56066 8.68198 2.31802L10.5 4.13604L12.318 2.31802C14.0754 0.56066 16.9246 0.56066 18.682 2.31802C20.4393 4.07538 20.4393 6.92462 18.682 8.68198L10.5 16.864L2.31802 8.68198C0.56066 6.92462 0.56066 4.07538 2.31802 2.31802Z"
                        stroke="#0F303F"
                        strokeLinecap="round"
                      />
                    </svg>
                  </p>
                </div>

                <h3 className="catalog__card-title">{item.title}</h3>
                <p className="catalog__card-category">{item.category}</p>
                <p className="catalog__card-brand">{item.brand}</p>
                <p className="catalog__card-price">
                  {i18n.language === 'en' ? item.price : item.price * 83}
                  {i18n.language === 'ru' ? ' руб.' : ' $'}
                </p>
              </div>
            ))}
      </div>
      <ul className="catalog__pagination">
        {Math.ceil(state.catalog.products.dataLength / 6) > 1 &&
          new Array(Math.ceil(state.catalog.products.dataLength / 6)).fill(null).map((item, idx) => (
            <li
              onClick={() => dispatch({ type: 'change_page', payload: idx + 1 })}
              key={idx}
              className={`catalog__page ${state.catalog.page === idx + 1 ? 'active' : ''}`}
            >
              {idx + 1}
            </li>
          ))}
      </ul>
    </>
  )
}
