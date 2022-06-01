import { createContext,useState } from "react";

const CartContext = createContext({
    cartItems: [],
    totalCartItems: 0,
    addCartItem: (item) => {},
    removeFavorite: (itemId) => {},
    itemIsFavorite: (itemId) => {}
});

export function CartContextProvider(props){
    const [userCartItems, setUserCartItems] = useState([]);

    function addCartItemHandler(item){
        setUserCartItems(
            (prevUserCartItems) => {
                return prevUserCartItems.concat(item);
            });
    }

    function removeCardItemHandler(cartItemId){
        setUserCartItems(prevUserCartItems => {
            return prevUserCartItems.filter(item => item.id !== cartItemId)
        });
    }

    function itemIsFavoriteHandler(cartItemId){
        return userCartItems.some(item => item.id === cartItemId)
    }

    const context = {
        cartItems: userCartItems, 
        totalCartItems: userCartItems.length,
        addCartItem: addCartItemHandler,
        removeFavorite: removeCardItemHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    
    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}


export default CartContext;