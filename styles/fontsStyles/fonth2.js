import styled from 'styled-components';


const FontH2 = styled.h2`
    font-family: Grabenbach-medium,Helvetica,Arial;
    font-weight: 400;
    font-size: ${props => (props.size ? props.size : '10px')};
    letter-spacing: 2.5px;
    line-height: 1.35;
    color: ${props => (props.color ? props.color : '#0F1C51')};;
    text-align: ${props => (props.align ? props.align : 'left')};;
    margin: 0;

    @media only screen and (min-width:415px) and (max-width:768px){
    }

    @media only screen and (min-width:769px){
        font-size: ${props => (props.size ? props.size : '15px')};
    }



`;

export default FontH2;
