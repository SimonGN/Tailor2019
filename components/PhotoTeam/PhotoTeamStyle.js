import styled from 'styled-components';


const  PhotoTeamStyle= styled.div`
background-color:#DAE1FF;
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
        white-space: nowrap;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }
    .global{
        display:flex;
    }

    
    
    @media only screen and (min-width:415px) and (max-width:768px){
        
    }
    @media only screen and (min-width:769px) {
        h1{
            margin-bottom:2.5%;
        }
        .colum1, .colum2{
            width:46%
        }
        img{
            height:auto;
        }
        .title{
            width:8%;
            white-space: nowrap;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
        }
        .text{
            width: 80%;
            height: auto;
            position: -webkit-sticky;
        }
        .sticky{
            top:15%;
            bottom: 0%;
            position: -webkit-sticky;
            position:sticky;
        }

    }

`;

export { PhotoTeamStyle };
