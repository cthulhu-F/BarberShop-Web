// import react, {useState, useEffect, useMemo} from 'react';
// import { useAccordionButton } from 'react-bootstrap';
// import { shoppingInitialState, shoppingReducer } from "../../../../src/reducers/shoppingReducer";



// const CartContext = React.createContext();

// export function CartPorvider (props){
//     const [state, dispatch] =useReducer(shoppingReducer,shoppingInitialState);
//     const{products, cart} = state;


//     const addToCart = (id) =>{
//         dispatch({type:TYPES.ADD_TO_CART,payload:id});
  
//     };
  
//     const addOneToCart = (id) =>{
//       dispatch({type:TYPES.ADD_ONE_TO_CART,payload:id})
//       };
    
//     const deleteFromCart = (id, all=false) =>{
//         if(all){
//             dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id});
            
//         }else {
//           dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id});
//       }
//     }
  
//     const cleanCart = () =>{
//         dispatch({type:TYPES.CLEAN_CART})
//     }

//     const value = React.useMemo(()=>{
//         return ({cart});
//     }, {cart});

//     return <CartContext.Provider value={cart} {...cart}/>


// }

//     export function useCart(){
//         const context = react.useContext(CartContext);

//         if(!context){
//             throw new Error('usecart debe estar dentro del proveedor cartContext')
//         }

//         return context;
//     }
