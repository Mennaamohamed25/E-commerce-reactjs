import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./reducer";

import storeProduct from "../../src/data/storeProduct.json";
// Create the Context Hook:=
export let ShoppingCart = createContext();
// Define the initialValue of the state:=
const initialState = {
    cartItems: [],
   products :storeProduct,
  
  };

// Start the function:=
export default function ShoppingCartProvider(props) {
  //Using the Reducer Hook:=
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // AddToCart Function:=
  // const addToCart = (payload) => {
  //   dispatch({
  //     type: types.addToCart,
  //     payload ,
  //   });
    
  // };
  // const removeFromCart = (payload) => {
  //   dispatch({
  //     type: types.removeFromCart,
  //     payload ,
  //   });
    
  // };


  return (
    <ShoppingCart.Provider value={{state,dispatch}}>
      {props.children}
    </ShoppingCart.Provider>
  );
}
export const CartState = () => {
  return useContext(ShoppingCart);
};