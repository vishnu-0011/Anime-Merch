import React from 'react'
import './Cart.css'
import { useSelector,useDispatch } from 'react-redux';
import { deleteFromCart,updateQuantity } from '../redux/cartslice';

const Cart = () => {

    const cartitems=useSelector((state)=>state.cart.cartitems);
    const dispatch=useDispatch();
    const deleteCart=(item)=>{
          dispatch(deleteFromCart(item))
      }
const incrementCart=(id,quantity)=>{
         dispatch(updateQuantity({id,  quantity : quantity+1}))
      }
const decrementCart=(id,quantity)=>{
    if(quantity>1){
      dispatch(updateQuantity(
        {id, quantity : quantity-1}
      )
      )
    }
  }
const getTotalPrice = () => {
  return cartitems.reduce((acc, item) => {
    const price = Number(item.price);
    return acc + (price * item.quantity);
  }, 0);
};
  return (
    <div>
       <section class="py-5 flex-grow-1">
        <div class="container">
            <h3 class="mb-4">Shopping Cart</h3>
            <div className="scrolling-wrapper d-flex flex-nowrap overflow-auto py-3">
  {
    cartitems.map((a1) => (
      <div key={a1.id} className="me-3" style={{ minWidth: '250px' }}>
        <div className="card h-100 shadow">
          <img src={a1.img} className="card-img-top" alt={a1.title} />
          <div className="card-body bg-dark text-white d-flex flex-column justify-content-between align-items-center">
            <h5 className="card-title">{a1.title}</h5>
            <p className="card-text">{a1.subtitle}</p>
            <p>${a1.price}</p>
            <div className="mb-2" style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={() => decrementCart(a1.id, a1.quantity)}>-</button>
              <span className="mx-2">{a1.quantity}</span>
              <button onClick={() => incrementCart(a1.id, a1.quantity)}>+</button>
            </div>
            <button className="btn btn-danger cartbutton" onClick={() => deleteCart(a1)}>Delete</button>
          </div>
        </div>
      </div>
    ))
  }
  
            </div>
            
            <div className="text-end mb-4">
              <h5>Total: <span className="text-success">${getTotalPrice().toFixed(2)}</span></h5>
            </div>

        </div>
    </section>

    </div>
  )
}

export default Cart
