import styled from 'styled-components';


const VideoGalleryStyle = styled.div`
    background-color: #0F1C51;
    width: 100%;
    max-height: 507px;
    .global{
        display:flex;
        flex-flow:column;
    }
    .colum1{
        position: relative;
    }
    .photo{
        width:100vw;
        min-height:600px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: ${props => (props.photo ? '' : '#0F1C51')};
        background-image: ${props => (props.photo ? `url(${props.photo})` : '')};
        position: relative;
        & > div{
            width: 100vw;
            min-height:600px;
            background-color: #0F1C5130;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            
        }
    }
    .mobile{
        display:flex;
        position: absolute;
        background-color: #0F1C51;
        padding-top:5%;
        padding-bottom:5%;
    }
    img{
        width:100%;
        object-fit:cover;
        position:relative;
        opacity:50%;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
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
        & > p{
            margin-bottom:5%;
        }
    }
    .play{ 
        top:10%;
        width:100%;
        height:80%;
        position:absolute;
        z-index:1;
        display: flex;
        align-items: center;
        justify-content:center;
        cursor:pointer;
        position: absolute;
    }
    .text{
        display: flex;
        flex-direction: column;
        display:none;
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
        display:none;
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
            margin-left:10px;
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
        .global{
            flex-flow:row;
            align-items:center;
        }
        .mobile{
            display:none;
        }
        .title, .text{
            display:block;
        }
        h1{
            margin-bottom:2.5%;
        }
        .colum1, .colum2{
            width:46%
        }
        .title{
            display:flex;
            align-items:center;
            width:8%;
            white-space: nowrap;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
        }
        .photo{
            width:46vw;
            & > div{
                width:46vw
            }
            
        }
        .text{
            width: 80%;
            min-height: 100%;
            justify-content: center;
        }
        .play{
            top:20%;
        }

    }

`;

export { VideoGalleryStyle };
