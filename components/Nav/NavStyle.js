import styled from 'styled-components';


const NavStyle = styled.div`
    display:flex;
    justify-content: flex-end;
    padding-top:20px;
    padding-bottom:20px;
    margin-right:20px;  
    .nav{
        width:51.5%;
        display:flex;
        align-items:center;
        justify-content: space-between
    }
    .logo{
        width:20%;
        img{
            width:100%;
        }
    }
    @media only screen and (min-width:769px) {
        .logo{
            width:8%;
       
        }
    }

`;

export { NavStyle };
