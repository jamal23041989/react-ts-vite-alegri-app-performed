import { BreadCrumbs, Sidebar } from '../../components'
import './Catalog.scss'

type Props = {}

export const Catalog = (props: Props) => {
  return (
    <section className="catalog">
      <div className="container">
        <BreadCrumbs />
        <div className="catalog__content">
          <Sidebar />
          <div className="catalog__right"></div>
        </div>
      </div>
    </section>
  )
}
