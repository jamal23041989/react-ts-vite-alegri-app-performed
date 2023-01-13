import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import './Layout.scss'

type Props = {}

export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
