import styled from 'styled-components';


const FontP = styled.p`
    font-family: Grabenbach-regular,Helvetica,Arial;
    font-weight: 400;
    font-size: ${props => (props.size ? props.size : '19px')};
    letter-spacing: 1px;
    line-height: 1.35;
    color: ${props => (props.color ? props.color : '#0F1C51')};;
    text-align: ${props => (props.align ? props.align : 'left')};;


    @media only screen and (min-width:769px){
        font-size: ${props => (props.size ? props.size : '25px')};
    }



`;

export default FontP;
