import styled from "styled-components";
import Container from "../layouts/Container";
import Navbar from "../layouts/Navbar";
import { useState } from "react";

const MatrixGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
`

const GridItem = styled.div`
    display: flex;
    align-items:center;
    padding: 2rem;
    border: 2px solid white;
    background: ${props => props.isActive ? 'darkred' : 'darkblue'};
    justify-content: center;
`

const StyledContainer = styled(Container)`
    margin-top: 8em;
`

const Matrix = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleIsActiveHandler = (id) => {
        
        setActiveId(id);
        // setActiveIds((prevState) => ({
        //     ...prevState,
        //     [id]: true
        //   }))
    }

    // const getActiveId = (id) => {
    //     Object.keys(activeIds).forEach((itemId, i) => {
           
    //         if( parseInt(itemId) === id){
    //             console.log("found",id)
    //             return true
    //         }
    //         else{
    //             console.log("not found",id)
    //             return false;
    //         }
    //       });
    // }
    
  return (
    <>
        <Navbar />
        <StyledContainer>
            <MatrixGrid>
                {[...Array(16)].map((x, i) =>
                    <GridItem key={i} isActive={(activeId === i ? true : false)} onClick={() => {toggleIsActiveHandler(i)}}> </GridItem>
                )}
            </MatrixGrid>
        </StyledContainer>
    </>
  )
}

export default Matrix