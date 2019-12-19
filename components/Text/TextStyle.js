import styled from 'styled-components';

const TextStyle = styled.section`
 width:100vw;
 a{
   text-decoration:none;
   color: black;
   cursor: pointer;
 }

h1, p{
  margin-bottom:5%;
}
h1::selection, a::selection, p::selection {
    color: #b5fcbe;
    background: black;
}

display:flex;
flex-direction: column;
nav{
  overflow-y:hidden;
  position:fixed;
  top:0 ;
  background-color:#b5fcbe;
  width:100vw;
  margin: 0 auto;
  height:100vh;
  display: ${props => props.view ? 'flex' : 'none'};
}
.mobile{
  width:83%;
  margin: 0 auto;
  margin-top:5%;
  margin-bottom: 5%;
  p{
    width: fit-content;
  }
}
.info{
  width:85vw;
  height: 82vh;

  padding-top: 5%;
  padding-left: 5%;
  padding-bottom:5%;
  display:flex;
  flex-flow:column;
  justify-content: space-between;
  
}
.close{
  width:9vw;
  padding-top: 2%;
  padding-left: 3%;
  width: fit-content;
}
.button{
  padding-top:5%;
  display: flex;
  justify-content:space-between;
  display:none;

}
.contact{
  width:100%;
}

.email, .phone, .social, .links {
  display:flex;
  justify-content:space-between;
  p{
    margin:0;
  }
}
.email, .phone{
  margin-bottom: 1%;
}
.links{
  width: 75%;
}



@media only screen and (min-width: 415px) and (max-width: 768px) {
  .info{
    width: 88vw;
    padding-top: 3%;
    padding-left: 3%;
    padding-bottom:3%;
  }
  .contact{
    width:60%;
  }
  .links{
    width: 65%;
  }

}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  h1, p{
  margin-bottom:2%;
}
  .mobile, .close{
    display:none;
  }
  nav{
    width:50%;
    display:block;
    position:fixed;
  }
  .info{
    width:95%;
    height: 97vh;
    padding-top: 3%;
    padding-left: 3%;
    padding-bottom:3%;
  }
  .social{
    width:40%;
    width: 100%;
  }
  .contact{
    width:80%;
  }
  .links{
    width: 65%;
  }
  .email, .phone{
    margin-bottom: 0.5%;
  }
  

}

@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  h1, p{
  margin-bottom:2%;
}
  .mobile, .close{
    display:none;
  }
  h1{
  margin-bottom:3%;
}
  nav{
    width:50%;
    display:block;
    position:fixed;
  }
  .info{
    width:95%;
    height: 97vh;
    padding-top: 2%;
    padding-left: 2%;
    padding-bottom:2%;
  }
  .contact{
    width:80%;
  }
  .social{
    width:40%;
    width: 100%;
  }
  .links{
    width:60%;
  }
  .email, .phone{
    margin-bottom: 0.5%;
  }
}

@media only screen and (min-width: 1441px) {
  h1, p{
  margin-bottom:2%;
}
  .mobile, .close{
    display:none;
  }
  h1{
  margin-bottom:3%;
}
  nav{
    width:50%;
    display:block;
    position:fixed;
  }
  .info{
    width:95%;
    height: 97vh;
    padding-top: 2%;
    padding-left: 2%;
    padding-bottom:2%;
  }
  .social{
    width:40%;
    width: 100%;
  }
  .contact{
    width:60%;
  }
  .links{
    width:60%;
  }
  .email, .phone{
    margin-bottom: 0.5%;
  }
}
`;

export { TextStyle };
