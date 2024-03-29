import * as S from './styled'

export default function Card({image, text}){
  return (
    <S.Card>
        <img src={image} alt="" />
        <p>{text}</p>
        <button>Clique Aqui</button>
    </S.Card>
  )
}
