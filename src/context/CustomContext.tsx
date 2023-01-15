import axios from 'axios'
import { createContext, ReactNode, useState } from 'react'

type ContextProps = { children?: ReactNode }
interface MyContextValueType {
  gender: string
  category: string
  changeGender: any
  changeCategory: any
  products: any
  getProducts: any
  price: any
  setPrice: any
  size: any
  setSize: any
}

export const CustomContext = createContext<MyContextValueType>({
  gender: '',
  category: '',
  changeGender: '',
  changeCategory: '',
  products: [],
  getProducts: '',
  price: '',
  setPrice: '',
  size: '',
  setSize: '',
})

const Context = ({ children }: ContextProps) => {
  const [gender, setGender] = useState('woman')
  const [category, setCategory] = useState('t-short')
  const [products, setProducts] = useState({ data: [], error: false })
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')

  const changeGender = (value: string) => {
    setGender(value)
  }

  const changeCategory = (value: string) => {
    setCategory(value)
    setSize('')
  }

  const getProducts = () => {
    axios
      .get(
        `http://localhost:4444/catalog?gender=${gender}&category=${category}${
          price !== '' ? '&_sort=price&_order=' + price : ''
        }`
      )
      .then(({ data }) => setProducts({ ...products, data: data }))
      .catch(error => setProducts({ ...products, error: error }))
  }

  const value = { gender, category, changeGender, changeCategory, products, getProducts, price, setPrice, size, setSize }
  return <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
}

export default Context
