/*Taaki hamri food list har jagah available ho */
import {createContext} from 'react';
import {food_list} from '../assets/assets.js';
import { useState } from 'react';
import { useEffect } from 'react';

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{

    const[cartItems,setCartItems]=useState({});
    const add_to_cart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}));// [itemId]:1 this means that cartItems[itemId] mai 1 hogya
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
            //OR
            //setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }
    const remove_from_cart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
    const contextValue={food_list,cartItems,setCartItems,add_to_cart,remove_from_cart};
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
        
    )
}
export default StoreContextProvider;