import { createContext, ReactNode, useState } from 'react'

type ContextProps = { children?: ReactNode }
interface MyContextValueType {
  gender: string
  category: string
  changeGender: any
  changeCategory: any
}

export const CustomContext = createContext<MyContextValueType>({
  gender: '',
  category: '',
  changeGender: '',
  changeCategory: '',
})

const Context = ({ children }: ContextProps) => {
  const [gender, setGender] = useState('women')
  const [category, setCategory] = useState('t-short')

  const changeGender = (value: string) => {
    setGender(value)
  }

  const changeCategory = (value: string) => {
    setCategory(value)
  }

  const value = { gender, category, changeGender, changeCategory }
  return <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
}

export default Context
