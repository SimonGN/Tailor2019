import styled from 'styled-components';


const FontH1 = styled.h1`
    font-family: "Arial";
    color: ${props => (props.color === 'white' ? 'white' : '#4A4A4A')};
    font-size: 1rem;
    letter-spacing: 0.08rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    cursor: pointer;
    text-decoration: none;

    &:visited {
        color: ${props => (props.color === 'white' ? 'white' : '#4A4A4A')};
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        font-size: 1.3rem;
   }

    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: 1.3rem;
    }

    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 1.3rem;
    }

    @media only screen and (min-width:1441px) {
        font-size: 1.3rem;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 1.3rem;
    }
    @media only screen and (min-width:1441px) {
        font-size: 1.3rem;
    }
`;

export default FontH1;
