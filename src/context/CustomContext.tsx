import { createContext, ReactNode } from 'react'

export const CustomContext = createContext({})

type ContextProps = { children?: ReactNode }

const Context = ({ children }: ContextProps) => {
  return <CustomContext.Provider value={1}>{children}</CustomContext.Provider>
}

export default Context
