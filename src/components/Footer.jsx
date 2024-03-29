import logo from '../assets/logo.png'
import gplay from '../assets/gplay.png'
import applestore from '../assets/applestore.png'
import * as S from './styled'

export default function Footer() {
  return (
    <S.Footer>
        <S.Externals>
            <img src={logo} height='35px'/>
            <p>© McDonald’s 2024</p>
        </S.Externals>
        <S.Externals>
            <img src={gplay} alt="Google Play" />
            <img src={applestore} alt="App Store" />
        </S.Externals>
    </S.Footer>
  )
}
