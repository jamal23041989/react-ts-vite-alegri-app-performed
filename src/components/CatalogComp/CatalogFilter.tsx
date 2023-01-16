import { BasicSelect } from './BasicSelect'
import { SelectPrice } from './SelectPrice'
import { SelectSize } from './SelectSize'
import { SelectBrand } from './SelectBrand'
import './CatalogFilter.scss'

export const CatalogFilter = () => {
  return (
    <div className="filter">
      <div className="filter__select">
        <SelectSize />
      </div>
      <div className="filter__select">
        <SelectPrice />
      </div>
      <div className="filter__select">
        <BasicSelect />
      </div>
      <div className="filter__select">
        <SelectBrand />
      </div>
    </div>
  )
}
