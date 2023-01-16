import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BreadCrumbs, ProductSlide } from '../../components'
import { ProductInfo } from '../../components/'
import { ProductProps } from '../../types'
import './Product.scss'

export const Product = () => {
  const [product, setProduct] = useState<ProductProps>({
    id: '',
    title: '',
    price: 0,
    category: '',
    img: [],
    sizes: [],
    review: [],
    brand: '',
    gender: '',
  })

  const params = useParams()

  useEffect(() => {
    axios(`http://localhost:4444/catalog/${params.id}`).then(({ data }) => setProduct(data))
  }, [])

  if (JSON.stringify(product) === '{}') {
    return <Link to="/product" />
  }

  return (
    <section className="product">
      <div className="container">
        <BreadCrumbs />
      </div>
      <div className="product__container">
        <div className="product__row">
          <ProductInfo product={product} />
          <ProductSlide product={product} />
        </div>
      </div>
    </section>
  )
}
