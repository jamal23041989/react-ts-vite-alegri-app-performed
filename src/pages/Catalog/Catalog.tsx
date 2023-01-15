import { useContext, useEffect } from 'react'
import { BreadCrumbs, CatalogFilter, CatalogRow, CategoryTitle, Sidebar } from '../../components'
import { CustomContext } from '../../context/CustomContext'
import './Catalog.scss'

export const Catalog = () => {
  const { category, getProducts, gender, price } = useContext(CustomContext)

  useEffect(() => {
    getProducts()
  }, [gender, category, price])

  return (
    <section className="catalog">
      <div className="container">
        <BreadCrumbs />
        <div className="catalog__content">
          <Sidebar />
          <div className="catalog__right">
            <h2 className="catalog__content-title">
              <CategoryTitle />
            </h2>
            <CatalogFilter />
            <CatalogRow />
          </div>
        </div>
      </div>
    </section>
  )
}
