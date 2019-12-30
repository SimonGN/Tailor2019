import styled from 'styled-components';


const FooterStyle = styled.div`
background-color: #0F1C51;
padding-top:85%;
a{
    text-decoration:none;
}
.img, .contact, .direction, .cc{
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
}

.img{
    width: 15%;
    img{
        width:100%;
    }
} 
.img,.direction,.contact{
        margin-bottom:10%;
    } 
.contact{
    display:flex;
    flex-direction:column; 
}
.cc{
    padding-bottom:5%;
    width: 95%;
    margin: 0 auto;
}

@media only screen and (min-width:769px) {
    padding-top:35%;
    .contact, .direction{
        margin-bottom:2%;
    }
    .img{
        width: 5%;
    }   
    .img,.direction{
        margin-bottom:4%;
    }
    .cc{
        padding-bottom:1%;
    }
}
`;

export { FooterStyle };
