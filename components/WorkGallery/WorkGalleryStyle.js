import styled from 'styled-components';


const WorkGalleryStyle = styled.div`
    width:100%;
    min-height:700px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${props => (props.img ? '' : '#0F1C51')};
    background-image: ${props => (props.img ? `url(${props.img})` : '')};
    display: flex;
    align-items: flex-end;
    .background{
      width:100%;
      min-height:250px;
      background-color:#0F1C5150;
      -webkit-backdrop-filter: blur(50px);
      backdrop-filter: blur(100px);
      position: relative;
      display:flex;
      align-items: center;
    }
    .mobile{
      display:flex;
      align-items: center;
      margin-bottom:5%;
    }
    .mobileTitle{
            width:13%;
            white-space: nowrap;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
    }
    .mobileText{
      width:80%;
    }
    .text, .title{
      display:none;
    }
    .info{
      position: absolute;
    }
    .infoText{
      filter: blur(0px);
    }
    .buttons{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      white-space: pre;
      a{
        width:90%;
        margin:0 auto;
      }
    }
    .buttonDiv{
        display:flex;
        justify-content:center;
        margin-top:5%;
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


    
    
    @media only screen and (min-width:415px){
  
      .mobile{
        display:none;
      }
        min-height:800px;
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
        .background{
          min-height:250px;
        }
        .infoText{
          width:80%;
          margin:0 auto;
          display:flex;
        }
        .title, .text{
          display:block;
        }
        .title{
            width:20%;
            white-space: nowrap;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
        .text, .buttons{
            width: 40%;
        }
        .buttons, .text{
          display:flex;
          align-items: center;
        }

    }

`;

export { WorkGalleryStyle };
