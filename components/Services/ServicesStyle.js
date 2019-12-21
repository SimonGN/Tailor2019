import styled from 'styled-components';

const ServicesStyle = styled.div`
    display: flex;
    align-items: center;
    overflow-x: hidden;

    /* width:100vw; */
    height: 100vh;
    @-webkit-keyframes drift{
    0% {
        -webkit-transform:translateX(0);
        transform:translateX(0);
    }
    to{
        -webkit-transform:translateX(-100%);
        transform:translateX(-100%);
    }
    }
    @keyframes drift{
    0%
    {
        -webkit-transform:translateX(0);
        transform:translateX(0);
    }
    to{
        -webkit-transform:translateX(-100%);
        transform:translateX(-100%);
    }
    }
    .svg {
        width:1800vw;
        -webkit-animation:drift 200s linear infinite alternate;
        animation:drift 200s linear infinite alternate;
    }
    h2{
        width: 100vw;
        display: flex;
        align-items: center;
    }

    .global{
        /* width: 100vw; */
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        z-index: 1;
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        /* display: flex;
        align-items: center;
        .title{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            position:absolute;
        }
        .svg {
            width:3000vw;
        } */
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        /* display: flex;
        align-items: center;
        padding:0;
        .global{
            padding-bottom:130px;
        }
        .title{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom:8%;
            position:absolute;
            left: 4.5%;
            top: 15%;
            z-index: 1;
        }
        .svg {
            width:1000vw;
            img{
                width:200%; 
            }
        } */
    }
    @media only screen and (max-height: 768px) and (max-width: 1024px) and (orientation:landscape){
        /* padding:0;
        .global{
            padding-bottom:130px;
        }
        .title{
            left: 4.5%;
            top: 15%;
        }
        .svg {
            width:1000vw;
            img{
                width:200%; 
            }
        } */
    }

    @media only screen and (min-width:1025px) and (max-width:1440px){      
        /* display: flex;
        align-items: center;
        padding-top:18%;
        padding:0;
        .global{
            padding-bottom:130px;
        }
        .title{
            left: 4.5%;
            top: 19%;
        }
        .svg {
            width:1000vw;
            img{
                width:155%; 
            }
        }
        .scroll1,.scroll3,.scroll2, .scroll4{
            display:block;
            margin-bottom: 0.1%;
        } */
    }
    @media only screen and (min-width:1441px){
        /* display: flex;
        align-items: center;
        padding:0;
        .global{
            padding-bottom:130px;
        }
        .title{
            left: 6.1%;
            top: 20%;
        }
        .svg {
            width:750vw;
            img{
                width:200%; 
            }
        }
        .scroll1,.scroll3,.scroll2, .scroll4{
            display:block;
            margin-bottom: 0.1%;
        } */

    }
`;

export { ServicesStyle };
