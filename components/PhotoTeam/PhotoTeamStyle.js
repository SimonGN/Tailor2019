import styled from 'styled-components';


const  PhotoTeamStyle= styled.div`
background-color:#DAE1FF;
    img{
        width:100%;
        object-fit:cover;
    }
    .colum1{
        position: relative;
        width:100%;
    }
    .text{
        display: flex;
        flex-direction: column;
    }
    .title{

        display:none;
    }
    .colum2{
        display:none;
    }
    .global{
        display:flex;
    }
    .mobile{
        position: absolute;
        width:100%;
        display: flex;
        margin-top:10%;
        margin-bottom:15%;
    }
    .mobileTitle{
        display:flex;
        white-space: nowrap;
        align-items: center;
        justify-content: center;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        width:13%;
    }
    .mobileColum2{
        width:90%;
    }
    .team-container{
        position: -webkit-sticky;
        position: sticky;
    }

    .personTeam{
            & > a{
                margin-bottom:5%;
            }
            & > p{
                margin-bottom: 5%;
            }
    }
    .hiring{
        margin: 0 auto;
        padding-bottom:15%;
        margin-top:10%;
        width:90%;
        
    }
    .elementHiring{
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            white-space: pre;
            div{
                width: 90%;
                margin-top:5%;
            }
        }

    
    
    @media only screen and (min-width:415px) and (max-width:768px){
        .mobileTitle{
            width:27%; 
        }
        .elementHiring{
            grid-template-columns: repeat(3, 1fr);
            }

    }
    @media only screen and (min-width:769px) {
        .mobile{
            display:none;
        }
        h1{
            margin-bottom:2.5%;
        }
        .colum1, .colum2{
            width:46%
        }
        img{
            height:auto;
        }
        .title{
            width:8%;
            display:flex;
            white-space: nowrap;
            align-items: center;
            justify-content: center;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            top: 0%;
            padding-top: 20%;
        }
        .colum2{
            display:block;
        }
        .team-container{
            width: 80%;
            height: auto;
            position: -webkit-sticky;
            position: sticky;
            top: 0%;
            padding-top: 33%;
            padding-bottom: 33%;

        }
        .hiring{
            width:50%;
            margin-left:10%;
            margin-top:10%;
            padding-bottom:10%;
            & >p{
                margin-bottom:1%;
            }
        }
        .elementHiring{
            grid-template-columns: repeat(3, 1fr);
            div{
                width: 90%;

            }
        }
        
    }

`;

export { PhotoTeamStyle };
