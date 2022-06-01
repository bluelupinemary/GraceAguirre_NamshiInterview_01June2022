import styled from "styled-components";
import Section from "../layouts/Section";
import Container from "../layouts/Container";
import { Link } from "react-router-dom";

const OptionBox = styled(Link)`
    background: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};
    flex: 1;
    text-align:center;
    font-size: 3em; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    height: 10rem;
    max-width: 10em;
    text-decoration: none;
    transition: all ease-in-out 0.2s;

    &:hover{
        background: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.orange};
        border: 2px solid ${props => props.theme.colors.orange};
        transform: scale(0.95);
    }
`

const StyledContainer = styled(Container)`
    display: flex;
    gap: 5rem;
    height: 80vh;
    justify-content: space-around;
    align-items:center;
`




const Home = () => {
  return (
    <Section>
       <StyledContainer>
            <OptionBox to="/matrix"> Matrix </OptionBox>
            <OptionBox to="/shopping"> Shopping Cart </OptionBox>
       </StyledContainer>
    </Section>
  )
}

export default Home;