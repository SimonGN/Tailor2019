import styled from 'styled-components';


const ButtonStyle = styled.div`
    padding:5px 15px;
    display: inline-block;    
    background-color: white;
    border-radius: 25px;
    border: 1px solid black;
    cursor:pointer;
    background-color: black;
    
    @media only screen and (min-width:415px) and (max-width:768px){
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
    display:inline-block;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        display:inline-block;
    }
    @media only screen and (min-width:1441px){
        display:inline-block;
    }

`;

export { ButtonStyle };
