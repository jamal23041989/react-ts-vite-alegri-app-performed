import axios from 'axios'
import { createContext, ReactNode, useState } from 'react'

type ContextProps = { children?: ReactNode }
interface MyContextValueType {
  gender: string
  category: string
  changeGender: any
  changeCategory: any
  products: any
  setProducts: any
  getProducts: any
  price: any
  setPrice: any
  size: any
  setSize: any
  page: number
  setPage: any
  brand: any
  setBrand: any
  brands: any
  setBrands: any
}

export const CustomContext = createContext<MyContextValueType>({
  gender: '',
  category: '',
  changeGender: '',
  changeCategory: '',
  products: [],
  setProducts: '',
  getProducts: '',
  price: '',
  setPrice: '',
  size: '',
  setSize: '',
  page: 1,
  setPage: '',
  brand: '',
  setBrand: '',
  brands: '',
  setBrands: '',
})

const Context = ({ children }: ContextProps) => {
  const [gender, setGender] = useState('woman')
  const [category, setCategory] = useState('t-short')
  const [products, setProducts] = useState({ data: [], dataLength: 0, error: false })
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [page, setPage] = useState(1)
  const [brand, setBrand] = useState('')
  const [brands, setBrands] = useState([])

  const changeGender = (value: string) => {
    setGender(value)
    setPage(1)
  }

  const changeCategory = (value: string) => {
    setCategory(value)
    setSize('')
    setPage(1)
  }

  const getProducts = () => {
    axios
      .get(
        `http://localhost:4444/catalog?gender=${gender}&category=${category}${
          price !== '' ? '&_sort=price&_order=' + price : ''
        }`
      )
      .then(({ data }) => {
        setProducts({ data: data, dataLength: data.length, error: false })

        axios(`http://localhost:4444/brands?catalog=${category}&gender=${gender}`)
          .then(({ data }) => setBrands(data[0].brand))
          .catch(err => console.log('Бренд не найден', err))
      })
      .catch(error => setProducts({ data: [], dataLength: 0, error: error }))
  }

  const value = {
    gender,
    category,
    changeGender,
    changeCategory,
    products,
    setProducts,
    getProducts,
    price,
    setPrice,
    size,
    setSize,
    page,
    setPage,
    brand,
    setBrand,
    brands,
    setBrands,
  }
  return <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
}

export default Context
