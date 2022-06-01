import Section from "../layouts/Section";
import Navbar from "../layouts/Navbar";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledSection = styled(Section)`
    display: flex;
    gap: 1rem;
`

const Title = styled.h1`
    color: ${props => props.theme.colors.gray};
    text-align:center;
`

const Column = styled.div`
    flex : 1;
    width: ${props => props.width ? props.width : 'auto'};
    color: ${props => props.theme.colors.gray}
`

const ProductsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`

const Image = styled.img`
    width: 5rem;
    height: 5rem;
`


const ShoppingHome = () => {
    const [productsList, setProductsList] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
   
    function fetchData(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProductsList(json));
    }
   
    useEffect( ()=>{
        fetchData();
        setTimeout(()=>{
            setIsFetched(true);
        },500)
    },[isFetched]);

  return (
    <>
    <Navbar />
    <Title>PRODUCTS LIST</Title>
    <StyledSection>
        <Column width="25%"> CATEGORIES: </Column>
        <Column width="50%">
            <ProductsListWrapper>
                {productsList &&
                    productsList.map((product,id) => {
                        return (
                        <div key={id}>
                            <Image src={product.image} alt={product.title}/>
                            <br/>
                            {product.title}
                            <br/>
                            {product.rating.rate}, {product.rating.count}
                            <br/>
                            {product.description}
                          
                        </div>
                        )
                    })
                 
                }
            </ProductsListWrapper>
        </Column>
        <Column width="25%"> CART:  </Column>
    </StyledSection>
    </>
  )
}

export default ShoppingHome