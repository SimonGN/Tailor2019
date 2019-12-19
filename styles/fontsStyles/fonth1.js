import styled from 'styled-components';


const FontH1 = styled.h1`
    font-family: Graphik,Helvetica,Arial;
    font-weight: 400;
    font-size: ${props => (props.size ? props.size : '19px')};
    letter-spacing: 0.03rem;
    line-height: 1.35;
    color: ${props => props.backgroundColor ? props.backgroundColor : "black"};
    text-align: ${props => props.align ? props.align : "left"};



    @media only screen and (min-width:415px) and (max-width:768px){
    }

    @media only screen and (min-width:769px) and (max-width:1024px){
    }

    @media only screen and (min-width:1025px) and (max-width:1440px){
    }

    @media only screen and (min-width:1025px) and (max-width:1440px){
    }

`;

export default FontH1;
