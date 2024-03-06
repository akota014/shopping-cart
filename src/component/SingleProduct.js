import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../Context/Context'

const SingleProduct = ({prod}) => {

    const {state:{cart}, dispatch}=CartState()

  return (
    <div className='products'>
       <Card>
            <Card.Img variant='top' src={prod.image} alt={prod.name} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>
                    <span>₹ {prod.price.split(".")[0]}</span>
                    {prod.fastDelivery ? (
                        <div>Fast delivery</div>
                    ):(
                        <div>4 Days delivery</div>
                    )}
                    <Rating rating={prod.ratings} />
                </Card.Subtitle>
                {
                    cart.some(p=>p.id===prod.id)?
                    (<Button variant='danger'onClick={(p)=>{dispatch({type:'REMOVE_FROM_CART',payload:prod})}}>Remove from Cart</Button>):
                    (<Button disabled={!prod.inStock} onClick={(p)=>{dispatch({type:'ADD_TO_CART',payload:prod})}}>{!prod.inStock ? 'Out of Stock' :'Add to Cart'}</Button>)
                }
               
                
            </Card.Body>
       </Card>
    </div>
  )
}

export default SingleProduct