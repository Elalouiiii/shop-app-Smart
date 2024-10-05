import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {  Button, ButtonGroup, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/features/shopsSlice';
import { addProduct } from  '../Redux/features/shopsSlice';
import { decrement } from  '../Redux/features/shopsSlice';

export default function Cart({item}) {
  const dispatch=useDispatch()

  return (
    <>

      <Stack sx={{marginRight:"2%",
         marginLeft:"2%"
      }} 
      borderBottom={'3px solid #645555'} className='canvas' pt={'5%'} direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
        <div>
          <img src={`${import.meta.env.VITE_BASE_URL}${item.productImg[0].url}`} alt='image'></img>
        </div>
        <div>
          <h4 style={{fontWeight:'bold'}}> {item.productTitle} </h4>
        </div>
        <div className='fils'>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button onClick={()=>dispatch(decrement(item))}>-</Button>
            <Button>{item.quantity}</Button>
            <Button onClick={()=>dispatch(addProduct(item))}>+</Button>
          </ButtonGroup>
        </div>

        <span>{item.quantity * item.productPrice} DT</span>
        <div className='pere'>
          <DeleteIcon style={{ fontSize: '30px', cursor: 'pointer',marginRight:'33%' }} onClick={()=>dispatch(removeFromCart(item))} />
        </div>
      </Stack>
    </>

  )
} 
