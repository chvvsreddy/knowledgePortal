import styled from "styled-components"

type props = {
    dark: boolean
}
// export const Container = styled.div<props>  `
//     display: flex;
//     flex-direction:column;
//     justify-content: center;
//     height:100vh;
//     width: 100vw;
//     background-color:${(props) => (props.dark ? "#889990" : "white")};
// `
// export const BreadCrumContainer = styled.div`
//     width:90vw;
// `

export const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh;
    width:100vw;
`
export const JobDetailsMainContiner = styled.div<props> `
    background-color:${(props) => props.dark? "#080808" : "#fcfcfc"};
    background-size:cover;
    min-height:80vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;

`
export const BreadCrumContainer = styled.div`
    width:90vw;

    @media (max-width:768px) {
        display:none;
    }

    

`
export const ChildUlContainer = styled.div`
    display: flex;
    align-items:center;
    width: 90vw;
    min-height: 80vh;
    justify-content:center;
  
    margin:0px;
    pading: 0px;

    @media (max-width: 820px) {
        flex-direction: column;
        min-height:100vh;
      }

`

export const ChildListContainer = styled.div<props>`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-color:${(props) => props.dark? "#5c6e70" : "white"};
    border: ${(props) => props.dark? "1px solid white" : "2px solid #707070"} ;
    border-radius:20px;
    
    padding:5px;
    height:400px;
    width:300px;
    margin-left:10px;
    margin-right:10px;

    @media (max-width: 820px) {
        margin-top:10px;
        margin-bottom:10px;
        min-height:450px;
        
      }
`

export const ContentContainer = styled.div`
    width:90%;
    display:flex;
    flex-direction:column;
    margin-top:10px;
`
export const CustomImgComponent = styled.img`
    height:20vh;
    
    border-top-left-radius:20px;
    border-top-right-radius:20px;

`

export const CustomChildHeadingEl = styled.h1<props>`
    font-family: sans-serif;
    font-size:20px;
    color:${(props) => props.dark ? "white":"#2123BC"};
    font-weight:bold;
` 

export const CustomChildParagrah = styled.p<props>`
font-family: sans-serif;
font-size:14px;
color:${(props) => props.dark ? "white":"#2123BC"};
font-weight:400;
`