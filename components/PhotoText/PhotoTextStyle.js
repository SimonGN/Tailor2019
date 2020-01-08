import styled from 'styled-components';


const PhotoTextStyle = styled.div`
    width: 96%;
    margin: 0 auto;
    /* .cicle{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: #0F1C51;
    } */
    h2{
        font-size:68px;
        line-height: 1;
    }
    .claim{
        margin-top:30%;
    }
    .text{
        margin-top:20%;
        margin-bottom:20%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .claim{
            width:90%;
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .text{
            width:50%;
            margin-left: 40%;
            margin-top: 10%;
        }
    }
    @media only screen and (min-width:769px) {
        h2{
            font-size:150px;
            line-height: 0.95;
        }
        .claim{
            margin-top:8%;
            width:77%;
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .text{
            width:50%;
            margin-left: 40%;
            margin-top: 8%;
            margin-bottom:10%;
        }
    }

`;

export { PhotoTextStyle };
