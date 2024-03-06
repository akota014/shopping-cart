import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import {cartReducer, FilterReducer } from './Reducer';

 const Cart= createContext();
 faker.seed(1);

const Context = ({children}) => {

    const products = [...Array(20)].map(()=>({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        inStock: faker.helpers.arrayElement([0,3,4,8,10]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.number.int({max:5,min:1})

    }))

    const [state, dispatch] = useReducer(cartReducer,{
        product : products,
        cart:[]
    })

    const [stateFilter,dispatchFilter] = useReducer(FilterReducer,{
        byFastDelivery: false,
        byStock: false,
        byRating: 0,
        searchQuery: "",
    })

  return (
    <Cart.Provider value={{state,dispatch,stateFilter,dispatchFilter}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () =>{
    return useContext(Cart);
}