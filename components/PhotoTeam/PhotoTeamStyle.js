import styled from 'styled-components';


const  PhotoTeamStyle= styled.div`
background-color:#DAE1FF;
    img{
        width:100%;
        object-fit:cover;
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
            height:auto;
        }
        .title{
            width:8%;
            white-space: nowrap;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            top: 0%;
            padding-top: 20%;
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
        .personTeam{
            & > a{
                margin-bottom:5%;
            }
            & > p{
                margin-bottom: 5%;
            }
            
        }
        .hiring{
            width:30%;
            margin-left:10%;
            margin-top:10%;
            padding-bottom:10%;
            & >p{
                margin-bottom:5%;
            }
        }
        .elementHiring{
            display:grid;
            grid-template-columns: repeat(3, 1fr);
            white-space: pre;

            div{
                width: 90%;

            }
        }
        
    }

`;

export { PhotoTeamStyle };
