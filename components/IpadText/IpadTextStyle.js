import styled from 'styled-components';


const IpadTextStyle = styled.div`
    .global{
        display:flex;
        flex-flow:column;
    }
    .colum1{
        margin: 0 auto;
        width: 100%;
    }
    img{
        width: 100%;
        object-fit: cover;
        margin-left: -7%;
        margin-top: 15%;
    }
    .text{
        display: flex;
        flex-direction: column;
        display:none;
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

    .mobile{
        display:flex;
        margin-top: -10%;
    }
    .mobileTitle{
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        writing-mode: vertical-lr;
        transform: rotate(180deg); 
        width:15%;
    }
    .mobileText{
        width:90%;
    }
    .mobileButton{
        width: 50%;
        margin-top: 10%;
    }

    
    @media only screen and (min-width:769px) {
        .global{
            flex-flow:row;
        }
        .mobile{
            display:none;
        }
        h1{
            margin-bottom:2.5%;
        }
        .colum1, .colum2{
            width:46%
        }
        .colum1{
            position:relative;
        }
        img{
            position:absolute;
            height: 90vh;
            width: auto;
            top: 9%;
            right: -6%;
        }
        .title, .text{
            display:block;
        }
        .button{
            width:50%;
        }
        .title{
            width:8%;
            display:flex;
            white-space: nowrap;
            align-items:center;
        }
        .text{
            flex-flow: row;
            width: 80%;
            min-height: 100vh;
            display: flex;
            flex-flow: column;
            justify-content:center;
        }
        .paragraph{
            margin-bottom:5%;
        }

    }

`;

export { IpadTextStyle };
