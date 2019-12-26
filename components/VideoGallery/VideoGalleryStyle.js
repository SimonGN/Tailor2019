import styled from 'styled-components';


const VideoGalleryStyle = styled.div`
background-color: #0F1C51
    img{
        width:100%;
        object-fit:cover;
        position:relative;
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
            min-height: 90vh;
            justify-content: center;
        }

    }

`;

export { VideoGalleryStyle };
