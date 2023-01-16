import { Link } from 'react-router-dom'
import './NotFound.scss'

export const NotFound = () => {
  return (
    <div className="not-found__container">
      <h1 className="not-found-title">Страницы не существует</h1>
      <Link to="/" className="not-found-link">
        На главную
      </Link>
    </div>
  )
}
