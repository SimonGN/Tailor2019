import styled from 'styled-components';


const PhotoTextStyle = styled.div`
    img{
        width:100%;
        object-fit:cover;
    }
    .text{
        display: flex;
        flex-direction: column;
    }
    .title{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .global{
        display:flex;
    }
    
    
    @media only screen and (min-width:415px) and (max-width:768px){
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){

        .colum1, .colum2{
            width:46%
        }
        img{
            height:90vh;
        }
        .title{
            width:8%;
            white-space: nowrap;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
        }
        .text{
            width: 80%;
            height: 90vh;

            justify-content: center;
        }

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){

    }
    @media only screen and (min-width:1441px){

    }

`;

export { PhotoTextStyle };
