import card1 from '../../assets/images/popular/popular1.png'
import { useTranslation } from 'react-i18next'
import './Popular.scss'

export const Popular = () => {
  const { t } = useTranslation()

  return (
    <section className="popular">
      <div className="popular__container">
        <h2 className="popular__title">{t('popular.title')}</h2>
        <div className="popular__row">
          <div className="popular__card">
            <img src={card1} alt="" className="popular__card-img" />
            <h3 className="popular__card-title">REPlay</h3>
            <p className="popular__card-desc"> Classic shoes</p>
            <p className="popular__card-price">
              <span className="popular__card-oldPrice">6100 UAH</span>
              3800 UAH
            </p>
          </div>
          <div className="popular__card">
            <img src={card1} alt="" className="popular__card-img" />
            <h3 className="popular__card-title">REPlay</h3>
            <p className="popular__card-desc"> Classic shoes</p>
            <p className="popular__card-price">
              <span className="popular__card-oldPrice">6100 UAH</span>
              3800 UAH
            </p>
          </div>
          <div className="popular__card">
            <img src={card1} alt="" className="popular__card-img" />
            <h3 className="popular__card-title">REPlay</h3>
            <p className="popular__card-desc"> Classic shoes</p>
            <p className="popular__card-price">
              <span className="popular__card-oldPrice">6100 UAH</span>
              3800 UAH
            </p>
          </div>
          <div className="popular__card">
            <img src={card1} alt="" className="popular__card-img" />
            <h3 className="popular__card-title">REPlay</h3>
            <p className="popular__card-desc"> Classic shoes</p>
            <p className="popular__card-price">
              <span className="popular__card-oldPrice">6100 UAH</span>
              3800 UAH
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
