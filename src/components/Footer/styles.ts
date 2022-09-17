import styled from 'styled-components'

type props = {
    dark: boolean
}

export const FooterContainer = styled.div <props>`
    display: flex;
    align-items: center;
    justify-content:center;
    color:${(props) => props.dark ? "white" : "blue"};
    background-color:${(props) => props.dark? "#7a7e82" : "#99bbde"};
    height:50px;
    width:100vw;
    

`

export const AdjustmentContainer = styled.div`
    display:flex;
    width:90vw;
    align-items: center;
    justify-content:space-between;
`

export const Box1 = styled.div`
    display:flex;
    align-items: center; 
`

export const CustomPara = styled.p < props>`
    font-family: "sans-serif";
    font-size: 12px;
    font-weight:400;
    margin-right:10px;
`

export const ArrowCircle = styled.div`
    height:35px;
    width:35px;
    border-radius:50%;
    border:1px solid white;
    display:flex;
    align-items: center;
    justify-content: center;
`