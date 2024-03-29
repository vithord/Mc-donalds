import * as S from './styled'
import Card from './Card'
import sofa from '../assets/sofa.png'
import restaurante from '../assets/restaurante.png'
import banner_ad from '../assets/banner_ad.png'
import { useState } from 'react'
import bigmac from '../assets/bigmac.png'
import batata from '../assets/batata.png'
import sorvete from '../assets/sorvete.png'

export default function Main() {

  const [item, setItem] = useState(bigmac, batata, sorvete)


  return (
    <>
      <S.Main>
        <S.Produto>
          <S.Item>
            <img src={item} alt="" />

          </S.Item>
          <h1>BATEU AQUELA <span>#FOME</span> DE <span>#MÉQUI</span>?</h1>
        </S.Produto>
        <S.Items>
          <img onClick={() => {setItem(bigmac)}} src={bigmac} />
          <img onClick={() => {setItem(batata)}} src={batata} />
          <img onClick={() => {setItem(sorvete)}} src={sorvete} />
        </S.Items>
        <S.Promotion>
          <h2>Promoção</h2>
          <S.Content>
            <Card image={sofa} text={'Que tal um #Méquisofa?'}/>
            <Card image={restaurante} text={'Venha conhecer a nossa loja!'}/>
            <Card image={banner_ad} text={'Confira as medidas que o Méqui adotou!!'}/>
          </S.Content>
        </S.Promotion>
      </S.Main>
    </>
  )
}
