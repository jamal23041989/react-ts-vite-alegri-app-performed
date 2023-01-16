import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { useTranslation } from 'react-i18next'
import begin1 from '../../assets/images/begin/beginImg1.png'
import begin2 from '../../assets/images/begin/beginImg.png'
import 'swiper/css'

export const BeginSlide = () => {
  const { t } = useTranslation()

  return (
    <Swiper
      loop={true}
      speed={3000}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
      className="slideBegin"
    >
      <SwiperSlide>
        <div className="begin__content">
          <h2 className="begin__title">
            <span className="begin__title-small">{t('begin.title')}</span>
            <br />
            american vintage
          </h2>
          <a href="#" className="begin__link">
            {t('begin.subtitle')}
          </a>
          <img src={begin1} alt="" className="begin__img" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="begin__content">
          <div className="begin__contentSecond">
            <h2 className="begin__title">
              <span className="begin__title-small">{t('begin.title')}</span>
              <br />
              george gina lucy
            </h2>
            <a href="#" className="begin__link">
              {t('begin.subtitle')}
            </a>
          </div>
          <img src={begin2} alt="" className="begin__imgSecond" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
