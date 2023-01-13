import './Header.scss'

import LogoIcon from '../../../assets/images/logo.svg'
import UserIcon from '../../../assets/images/header-user.svg'
import LikeIcon from '../../../assets/images/header-like.svg'
import CartIcon from '../../../assets/images/header-cart.svg'

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a className="header__title" href="">
            <img src={LogoIcon} alt="logo" />
          </a>
          <div className="header__menu">
            <a className="header__menu-link" href="">
              Женщины
            </a>
            <a className="header__menu-link" href="">
              Мужчины
            </a>
            <label className="header__search" htmlFor="">
              <span className="header__search-text">поиск</span>
              <input className="header__search-field" type="text" />
            </label>
          </div>
          <div className="header__right">
            <div className="header__lang">
              <a className="header__lang-link" href="">
                RU
              </a>
              <a className="header__lang-link" href="">
                UA
              </a>
              <a className="header__lang-link" href="">
                EN
              </a>
            </div>
            <div className="header__icons">
              <a className="header__icons-link" href="">
                <img src={UserIcon} alt="user-icon" />
              </a>
              <a className="header__icons-link" href="">
                <img src={LikeIcon} alt="like-icon" />
              </a>
              <a className="header__icons-link" href="">
                <img src={CartIcon} alt="cart-icon" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
