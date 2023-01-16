import { useContext, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'

import { CustomContext } from '../../context/CustomContext'
import cartImg from '../../assets/images/cart/cart.png'
import './Cart.scss'

interface CartProps {
  brand: string
  category: string
  count: number
  gender: string
  id: number
  img: string[]
  price: number
  review: []
  size: string
  sizes: [{ id: number; size: string; inStock: number }]
  title: string
}

export const Cart = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' })

  const [address, setAddress] = useState(false)
  const { state, deleteProductForCarts, plusProductForCarts, minusProductForCarts, dispatch } = useContext(CustomContext)
  const { t, i18n } = useTranslation()
  const [changeAddress, setChangeAddress] = useState('')

  const onSubmit = (data: any) => {
    axios
      .post('http://localhost:4444/orders', {
        ...data,
        data: state.carts.data,
        allPrice: state.carts.data.reduce((acc: number, rec: CartProps) => acc + rec.price * rec.count, 0),
      })
      .then(({ data }) => {
        alert('Данные отправлены')
        reset()
        dispatch({ type: 'reset_carts' })
      })
      .catch(err => alert('Данные не отправлены'))
  }

  return (
    <section className="cart">
      <div className="cart__container">
        <h2 className="cart__title">Корзина</h2>
        <div className="cart__block">
          <div className="cart__left">
            <form noValidate className="cart__form" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register('name', {
                  required: { message: 'Имя обязательно к заполнению', value: true },
                  minLength: { message: 'Минимум 2 символа', value: 2 },
                })}
                className="cart__form-input"
                type="text"
                placeholder="Катерина"
              />
              <span>{errors.name && <>{errors.name?.message}</>} </span>

              <input
                {...register('surname', {
                  required: { message: 'Имя обязательно к заполнению', value: true },
                  minLength: { message: 'Минимум 2 символа', value: 2 },
                })}
                className="cart__form-input"
                type="text"
                placeholder="Марюха"
              />
              <span>{errors.surname && <span>Имя обязательно к заполнению</span>}</span>

              <input
                {...register('email', {
                  required: { message: 'Имя обязательно к заполнению', value: true },
                  minLength: { message: 'Минимум 10 символа', value: 10 },
                  pattern: { message: 'Напишите правильно свой email', value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/ },
                })}
                className="cart__form-input"
                type="email"
                placeholder="katyamaryukha1998@gmail.com"
              />
              <span>{errors.email && <>{errors.email?.message}</>}</span>

              <input
                {...register('phone', { required: true })}
                className="cart__form-input"
                type="tel"
                placeholder="0 99 790 6151"
              />
              <span>{errors.phone && <span>Имя обязательно к заполнению</span>}</span>

              <div className="cart__deli">
                <h3 className="cart__deli-title">Доставка</h3>
                {address ? (
                  <p>{changeAddress}</p>
                ) : (
                  <textarea
                    {...register('address', { required: true })}
                    value={changeAddress}
                    onChange={e => setChangeAddress(e.target.value)}
                    placeholder="Адрес"
                    className="cart__deli-area"
                  />
                )}

                <p
                  className="cart__deli-red "
                  onClick={() => {
                    if (!changeAddress.length && !address) {
                      setAddress(false)
                    } else {
                      setAddress(!address)
                    }
                  }}
                >
                  {address ? 'Редактировать' : 'Сохранить'}
                </p>
                <p className="cart__deli-red">Получить скидку</p>
              </div>
              <div className="cart__pay">
                <h3 className="cart__deli-title">Способ оплаты</h3>
                <label className="cart__pay-label">
                  <input {...register('pay', { required: true })} value="card" type="radio" name="pay" />
                  Карточкой на сайте
                </label>
                <label className="cart__pay-label">
                  <input {...register('pay', { required: true })} value="cash" type="radio" name="pay" />
                  При получении заказа
                </label>
                <span>{errors.pay && <span>Имя обязательно к заполнению</span>}</span>
              </div>
              <button className="cart__form-btn" type="submit">
                Заказать
              </button>
            </form>
          </div>

          <div className="favorites__row cart__right">
            {state.carts.dataLength ? (
              state.carts.data.map((item: CartProps) => (
                <div className="favorites__card">
                  <img src={item.img[0]} alt="" className="favorites__img" />
                  <div className="favorites__card-info">
                    <h3 className="catalog__card-title">{item.title}</h3>
                    <p className="catalog__card-category">{item.category}</p>
                    <p className="catalog__card-brand">{item.brand}</p>
                    <p className="catalog__card-price">
                      {i18n.language === 'en' ? item.price : item.price * 83}
                      {i18n.language === 'ru' ? ' руб.' : ' $'}
                    </p>
                    <p className="favorites__card-count">
                      <span
                        onClick={() => {
                          if (item.count > 1) {
                            minusProductForCarts(item.id, item.size)
                          } else {
                            deleteProductForCarts(item.id, item.size, item.count)
                          }
                        }}
                      >
                        -
                      </span>
                      {item.count}
                      <span onClick={() => plusProductForCarts(item.id, item.size)}>+</span>
                    </p>
                  </div>
                  <span
                    className="favorites__card-remove"
                    onClick={() => deleteProductForCarts(item.id, item.size, item.count)}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L21 21" stroke="#0F303F" />
                      <path d="M21 1L0.999999 21" stroke="#0F303F" />
                    </svg>
                  </span>
                </div>
              ))
            ) : (
              <>
                <div className="cart__content">
                  <h2 className="cart__title">{t('cart.title')}</h2>
                  <img src={cartImg} alt="" className="cart__img" />
                  <p className="cart__text" dangerouslySetInnerHTML={{ __html: t('cart.text') }} />
                  <Link to={'/catalog'}>
                    <button className="cart__btn" type={'button'}>
                      {t('cart.btn')}
                    </button>
                  </Link>
                </div>
              </>
            )}

            <span>
              Общая цена :
              {i18n.language === 'ru'
                ? state.carts.data.reduce((acc: number, rec: CartProps) => acc + rec.price * rec.count, 0) * 83
                : state.carts.data.reduce((acc: number, rec: CartProps) => acc + rec.price * rec.count, 0)}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
