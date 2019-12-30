import styled from 'styled-components';


const PhotoTextStyle = styled.div`
    .global{
        display:flex;
        flex-flow:column;
    }
    img{
        width:100%;
        object-fit:cover;
    }
    .text, .title{
        display: flex;
        flex-direction: column;
        display:none;
    }
    .mobile{
        display:flex;
        margin-top:10%;
        margin-bottom:15%;
    }
    .mobileTitle{
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        width:30%;
    }
    .mobileText{
        width:95%;
    }

    .global{
        display:flex;
    }

    
    @media only screen and (min-width:769px) {
        .global{
            flex-flow:row;
        }
        h1{
            margin-bottom:2.5%;
        }
        .colum1, .colum2{
            width:46%
        }
        img{
            height:90vh;
        }
        .text, .title{
            display:block;
            display:flex;
            flex-flow:column;
        }
        .mobile{
            display:none;
        }
        .title{
            width:8%;
            white-space: nowrap;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .text{
            width: 80%;
            min-height: 90vh;
            justify-content: center;
        }

    }

`;

export { PhotoTextStyle };
