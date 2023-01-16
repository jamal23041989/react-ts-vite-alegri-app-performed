import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { ProductInfoProps } from '../../types'
import './ProductSlide.scss'

export const ProductSlide = ({ product }: ProductInfoProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>()

  return (
    <div className="product__slide">
      <Swiper spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Thumbs]} className="mySwiper2">
        <SwiperSlide>
          <img src={`.${product.img[0]}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`.${product.img[1]}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`.${product.img[2]}`} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`.${product.img[0]}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`.${product.img[1]}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`.${product.img[2]}`} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
