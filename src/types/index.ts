export type SizesProps = {
  id: number | string
  size: string
  inStock: number
}

export interface ProductProps {
  id: number | string
  title: string
  price: number
  category: string
  img: string[]
  sizes: SizesProps[]
  review: []
  brand: string
  gender: string
}

export interface ProductInfoProps {
  product: ProductProps
}

export interface QuestionProps {
  id: number
  question: string
  answer: string
}

export interface QuestionsItemProps {
  item: QuestionProps
}
