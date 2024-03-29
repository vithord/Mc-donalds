import * as S from './styled'
import logo from '../assets/logo.png'
import app from '../assets/app.png'
import cellapp from "../assets/cellapp.png"

export default function Header() {
  return (
    <S.Header>

        <img src={logo} alt="" />

        <S.BtnApp>
          <S.App>
            <img src={app} alt="" />
            <p style={{fontWeight: '400'}}>Baixe nosso app</p>
          </S.App>
          <S.App color='#FFC72C'>
          <p>Peça seu Méqui</p>
            <img src={cellapp} alt="" />
            
          </S.App>
        </S.BtnApp>
      
    </S.Header>
  )
}
