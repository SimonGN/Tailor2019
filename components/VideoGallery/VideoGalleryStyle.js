import styled from 'styled-components';


const VideoGalleryStyle = styled.div`
background-color: #0F1C51;
    img{
        width:100%;
        object-fit:cover;
        position:relative;
        opacity:100%;
        filter: blur(10px);
       
    }
    .play{ 
        width:50%;
        height:100%;
        position:absolute;
        z-index:1;
        display: flex;
        align-items: center;
        justify-content:center;
        cursor:pointer;
    }
    .text{
        display: flex;
        flex-direction: column;
        & > p{
            margin-bottom:5%;
        }
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
    .buttonDiv{
        display:flex;
        justify-content:center;
        margin-top:10%;
        div{
            width: 15px;
            height: 15px;
            -moz-border-radius: 50%;
            -webkit-border-radius: 50%;
            border-radius: 50%;
            background: transparent;
            border: 1px solid white;
            margin-left:2%;
            cursor:pointer;
        }
        div:first-child{
            margin-left:0;
        }
        div.active {
            background-color:white;
        }
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
        .photo{
            width:100%;

        }
        img{
            min-height:80vh;

        }
        .title{
            width:8%;
            white-space: nowrap;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
        }
        .text{
            width: 80%;
            min-height: 100%;
            justify-content: center;
        }

    }

`;

export { VideoGalleryStyle };
