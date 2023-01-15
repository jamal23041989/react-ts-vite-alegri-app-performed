import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BreadCrumbs, ProductSlide } from '../../components'
import { ProductInfo } from '../../components/'
import './Product.scss'

type SizesProps = {
  id?: number | string
  size?: number | string
  inStock?: number | string
}

interface ProductProps {
  id?: number
  title?: string
  price?: number | string
  category?: string
  img?: string[]
  sizes?: SizesProps[]
  review?: any[]
  brand?: string
  gender?: string
}

export const Product = () => {
  const [product, setProduct] = useState<ProductProps>({})
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
      <div className="container-small">
        <div className="product__row">
          <ProductInfo product={product} />
          <ProductSlide product={product} />
        </div>
      </div>
    </section>
  )
}
