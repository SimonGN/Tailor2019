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
    @media only screen and (min-width:769px){
        .scroll1, .scroll2, .scroll3.scroll3, .scroll4{
            width: 92%;
            margin-bottom: 0.05%;
        }
        
    } 

    
`;

export { ServicesStyle };
