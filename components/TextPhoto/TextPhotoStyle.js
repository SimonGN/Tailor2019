import styled from 'styled-components';


const TextPhotoStyle = styled.div`
    background-color:#DAE1FF;
    .global{
        display:flex;
        flex-flow:column;
    }
    .mobile{
        margin-top:10%;
        margin-bottom:15%;
        display:flex;
    }
    img{
        width:100%;
        object-fit:cover;
    }
    .text{
        display: flex;
        flex-direction: column;
        display:none;
    }
    .title{
        display:none;
    }
    .mobileTitle{
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        width:13%;
    }
    .mobileText{
        width:80%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .mobileTitle{
            width:22%;
        }
        .mobileText{
            width:65%;
        }
    }
    @media only screen and (min-width:769px) {
        .mobile{
            display:none;
        }
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
            height:100vh;
        }
        .title{
            width:8%;
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
        }
        .text{
            float: right;
            width: 80%;
            height: 95vh;
            justify-content: center;
            display:flex;
        }

    }

`;

export { TextPhotoStyle };
