import styled from "styled-components";
import { Link } from "react-router-dom";


const Nav = styled.nav`
    max-height: 5rem;
    box-shadow: 0 1px 5px #00000020;
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1em 3em;
`

const BackButton = styled(Link)`
    max-width:5rem;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.orange};
    border: 1px solid ${props => props.theme.colors.orange};
    padding: 1em;
    border-radius: 1em;
    text-decoration: none;
    
    &:hover{
        background: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.orange};
        border: 2px solid ${props => props.theme.colors.orange};
        transform: scale(0.95);
    }

`

const Navbar = () => {
  return (
    <Nav>
            <BackButton to="/">Home</BackButton>
    </Nav>
  )
}

export default Navbar