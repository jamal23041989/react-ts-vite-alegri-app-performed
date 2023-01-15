import { BasicSelect } from './BasicSelect'
import { SelectPrice } from './SelectPrice'
import { SelectSize } from './SelectSize'
import './CatalogFilter.scss'

type Props = {}

export const CatalogFilter = (props: Props) => {
  return (
    <div className="filter">
      <div className="filter__select">
        <SelectSize />
      </div>
      <div className="filter__select">
        <SelectPrice />
      </div>
      <div className="filter__select">
        <SelectSize />
      </div>
      <div className="filter__select">
        <BasicSelect />
      </div>
    </div>
  )
}
