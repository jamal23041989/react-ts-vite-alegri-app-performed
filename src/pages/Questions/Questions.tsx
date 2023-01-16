import { QuestionsItem } from '../../components/'
import { questionsData } from '../../assets/data/questionData.js'
import { QuestionProps } from '../../types'
import './Question.scss'

export const Questions = () => {
  return (
    <section className="questions">
      <div className="container">
        <ul className="breadCrumbs">
          <li className="breadCrumbs__item">Главная</li>
          <li className="breadCrumbs__item">Популярные вопросы</li>
        </ul>
      </div>
      <div className="container-small">
        <h2 className="questions__title">Популярные вопросы</h2>
        <div className="questions__row">
          <ul className="questions__list">
            <li className="questions__list-title">ПОКУПКИ</li>
            {questionsData.map((item: QuestionProps) => (
              <QuestionsItem item={item} />
            ))}
          </ul>
          <form className="questions__form">
            <h2 className="questions__form-title">
              Есть вопросы или предложения? <br />
              НАПИШИТЕ НАМ
            </h2>
            <div className="questions__form-block">
              <input type="text" className="questions__form-input" placeholder="Имя" />
              <input type="email" className="questions__form-input" placeholder="E-mail" />
              <p className="questions__form-ques">Что Вас интересует:</p>
              <textarea className="questions__form-area" placeholder="Текс сообщения"></textarea>
              <button className="questions__form-btn">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
