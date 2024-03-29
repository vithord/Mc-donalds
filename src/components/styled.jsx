import styled, { createGlobalStyle, css } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    font-family: 'Inter', sans-serif;
}
`

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    width: 100%;
    height: 13vh;
    ${Center}
    justify-content: space-between;
    flex-direction: row;
    padding-left: 60px;
`

export const BtnApp = styled.div`
    width: 35vw;
    margin-right: 2vw;
    ${Center}
    justify-content: space-evenly;
`
export const App = styled.div`
    border: solid 2px #FFC72C;
    width: 13vw; 
    height: 45px;
    border-radius: 8px;
    ${Center}
    justify-content: space-evenly;
    background-color: ${props => props.color};
    p{
        font-size: 0.9rem;
        font-weight: 600;
    }
`




export const Main = styled.main`
    height: 100%;
    width: 100%;
    background-color: #FFC72C;
`

export const Produto = styled.section`
    height: 60vh;
    img{
        height: 40vh;
    }
    h1{
        color: white;
        width: 44.5vw;
        font-size: 3.3rem;
    }
    span{
        color: red;
    }
    ${Center}
    justify-content: space-between;
`

export const Item = styled.div`
    width: 26vw;
    height: 45vh;
    padding: 20px;
    ${Center}
`

export const Items = styled.figure`
    height: 30vh;
    img{
        height: 20vh;
    }
    ${Center}
`

export const Promotion = styled.section`
    background-color: #FEB706;
    height: 80vh;
    ${Center}
    flex-direction: column;
    justify-content: space-around;
    h2{
        font-size: 2.5rem;
        color: white;
    }
`

export const Content = styled.div`
    width: 80vw;
    ${Center}
    justify-content: space-around;
`

export const Card = styled.div`
    height: 315px;
    width: 20.5vw;
    border-radius: 11px;
    background-color: white;
    text-align: center;
    p{
        font-weight: 700;
        height: 7vh;
    }
    button{
        width: 10vw;
        margin-top: 35px;
        font-weight: 700;
        background-color: #FFBC0D;
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
    }
`



export const Footer = styled.footer`
    height: 13vh;
    background-color: white;
    ${Center}
    justify-content: space-between;
`

export const Externals = styled.div`
    padding: 10px;
    gap: 10px;
    display: flex;
    align-items: center;
`