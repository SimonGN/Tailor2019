import styled from 'styled-components';


const FooterStyle = styled.div`
background-color: #0F1C51;
padding-top:9%;
a{
    text-decoration:none;
}
.img, .contact, .direction, .cc{
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
}
.contact, .direction{
    margin-bottom:2%;
}
.img{
    width: 5%;
    
    img{
        width:100%;
    }
}
.contact{
    display:flex;
    flex-direction:column;
}
.img,.direction{
    margin-bottom:4%;
}
.cc{
    padding-bottom:1%;
}
`;

export { FooterStyle };
