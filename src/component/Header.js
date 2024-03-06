import React from 'react'
import { Container, FormControl, Navbar, Nav,Dropdown, Badge, Button } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';
function Header() {

    const {
        state: {cart}, dispatch, dispatchFilter
    }=CartState()
  return (
    <Navbar bg="dark" variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width: 500}}
                placeholder='Search a product' 
                className='m-auto'
                onChange={(e)=>{
                    dispatchFilter({type:"FILTER_BY_SEARCH",payload:e.target.value})
                }} />
            </Navbar.Text>
            <Nav variant="pills">
            <Dropdown align="end">
            <Dropdown.Toggle  >
                <FaShoppingCart />
                <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            
            <Dropdown.Menu style={{minWidth: 370}}>
                {cart.length > 0 ? 
                (
                    <>
                        {cart.map(prod => (
                        <span className='caritem' key={prod.id}>
                            <img
                                src={prod.image}
                                className='cartItemImg'
                                alt={prod.name} />
                            <div className='cartItemDetail'>
                                <span>{prod.name}</span>
                                <span>₹{prod.price.split('.')[0]}</span>
                            </div>  
                            <AiFillDelete onClick={() => dispatch({type:'REMOVE_FROM_CART',payload:prod})} />  
                        </span>
                        ))}
                        <Link to='/cart'>
                            <Button style={{width:'95%',margin:'0 10px'}}>Go to Cart</Button>
                        </Link>
                    </>
                ): 
                (<Dropdown.Item>Cart is Empty!!!</Dropdown.Item>)
                }
                
            </Dropdown.Menu>
            </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header