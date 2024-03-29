import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import * as S from './components/styled.jsx'

export default function App() {
  return (
    <>
      <S.GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}
