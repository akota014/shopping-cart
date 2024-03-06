import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../Context/Context'

const Filters = () => {

    

    const {stateFilter:{byFastDelivery,byStock,byRating,sort}, dispatchFilter} = CartState();
    // console.log(byFastDelivery,byStock,byRating,sort,searchQuery)

  return (
    <div className='Filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check
                inline
                label='Ascending'
                name='group1'
                type='radio'
                id={'inline-1'}
                onChange={()=>{
                    dispatchFilter({
                        type:"SORT_BY_PRICE",
                        payload: 'lowtohigh',
                    })
                }}
                checked={sort === 'lowtohigh' ? true: false}
            />    
        </span>
        <span>
            <Form.Check
                inline
                label='Descending'
                name='group1'
                type='radio'
                id={'inline-2'}
                onChange={()=>{
                    dispatchFilter({
                        type:"SORT_BY_PRICE",
                        payload: 'hightolow',
                    })
                }}
                checked={sort === 'hightolow' ? true: false}
            />    
        </span> 
        <span>
            <Form.Check
                inline
                label='Fast Delivery'
                name='group1'
                type='checkbox'
                id={'inline-3'}
                onChange={()=>{
                    dispatchFilter({
                        type:"FILTER_BY_DELIVERY",
                    })
                }}
                checked={byFastDelivery}
            />    
        </span> 
        <span>
            <Form.Check
                inline
                label='include Out of Stock'
                name='group1'
                type='checkbox'
                id={'inline-4'}
                onChange={()=>{
                    dispatchFilter({
                        type:"FILTER_BY_STOCK",
                    })
                }}
                checked={byStock}
            />    
        </span> 
        <span>
            <label style={{paddingRight: 10}}>Rating: </label>
                <Rating rating={byRating} onClick={(i)=> dispatchFilter({type:"FILTER_BY_RATING", payload: i+1})} style={{cursor:'pointer'}} />
        </span>    
        <Button variant='light' onClick={()=>{dispatchFilter({type:"CLEAR_FILTER"})}}>Clear Filters</Button>    
    </div>
  )
}

export default Filters