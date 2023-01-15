import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components'
import { About, Catalog, Home, NotFound, Product } from './pages'
import './utils/i18n'

const App = () => {
  return (
    <Suspense fallback={'...loading'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
