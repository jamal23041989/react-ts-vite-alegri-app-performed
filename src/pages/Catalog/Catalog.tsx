import { useContext, useEffect } from 'react'
import { BreadCrumbs, CatalogRow, CategoryTitle, Sidebar } from '../../components'
import { CustomContext } from '../../context/CustomContext'
import './Catalog.scss'

type Props = {}

export const Catalog = (props: Props) => {
  const { category, getProducts } = useContext(CustomContext)

  useEffect(() => {
    getProducts()
  }, [])

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
            <CatalogRow />
          </div>
        </div>
      </div>
    </section>
  )
}
