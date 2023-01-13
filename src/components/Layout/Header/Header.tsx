import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './Header.scss'

import LogoIcon from '../../../assets/images/logo.svg'
import UserIcon from '../../../assets/images/header-user.svg'
import LikeIcon from '../../../assets/images/header-like.svg'
import CartIcon from '../../../assets/images/header-cart.svg'

type Props = {}

export const Header = (props: Props) => {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__title">
            <Link to="/">
              <img src={LogoIcon} alt="logo" />
            </Link>
          </div>
          <div className="header__menu">
            <Link className="header__menu-link" to="/catalog">
              {t('header.link1')}
            </Link>
            <Link className="header__menu-link" to="/catalog">
              {t('header.link2')}
            </Link>
            <Link className="header__menu-link" to="/about">
              {t('header.link3')}
            </Link>
            <label className="header__search" htmlFor="">
              <span className="header__search-text">{t('header.link4')}</span>
              <input className="header__search-field" type="text" />
            </label>
          </div>
          <div className="header__right">
            <div className="header__lang">
              <a className="header__lang-link" href="">
                RU
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
