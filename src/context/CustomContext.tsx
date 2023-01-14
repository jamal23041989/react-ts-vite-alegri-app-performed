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
}

export const CustomContext = createContext<MyContextValueType>({
  gender: '',
  category: '',
  changeGender: '',
  changeCategory: '',
  products: [],
  getProducts: '',
})

const Context = ({ children }: ContextProps) => {
  const [gender, setGender] = useState('women')
  const [category, setCategory] = useState('t-short')
  const [products, setProducts] = useState({ data: [], error: false })

  const changeGender = (value: string) => {
    setGender(value)
  }

  const changeCategory = (value: string) => {
    setCategory(value)
  }

  const getProducts = () => {
    axios
      .get('http://localhost:4444/catalog')
      .then(({ data }) => setProducts({ ...products, data: data }))
      .catch(error => setProducts({ ...products, error: error }))
  }

  const value = { gender, category, changeGender, changeCategory, products, getProducts }
  return <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
}

export default Context
