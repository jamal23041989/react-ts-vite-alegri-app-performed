import { About, Begin, Collection, Popular } from '../../components'
import './Home.scss'

export const Home = () => {
  return (
    <div>
      <Begin />
      <Collection />
      <Popular />
      <About />
    </div>
  )
}
