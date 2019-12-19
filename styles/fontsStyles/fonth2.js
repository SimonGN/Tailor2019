import styled from 'styled-components';


const FontH2 = styled.h2`
    font-family: "Arial";
    color: ${props => (props.color === 'white' ? 'white' : '#4A4A4A')};
    font-size: ${props => (props.size ? props.size : '32px')};
    letter-spacing: 0.08rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    cursor: pointer;
    text-decoration: none;

    &:visited {
        color: ${props => (props.color === 'white' ? 'white' : 'black')};
    }
    @media only screen and (min-width:415px) and (max-width:768px){
    }

    @media only screen and (min-width:769px) and (max-width:1024px){
    }

    @media only screen and (min-width:1025px) and (max-width:1440px){
    }

    @media only screen and (min-width:1025px) and (max-width:1440px){
    }

`;

export default FontH2;
