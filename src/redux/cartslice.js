import { createSlice } from "@reduxjs/toolkit";

const storedItems=localStorage.getItem('cartItems')

const initialState={
    cartitems:storedItems?JSON.parse(storedItems):[],
}


const CartSlice=createSlice(
    {
        name:'cart',
        initialState,
        reducers:{

            addTocart:(state,action)=>{
                const newItem=action.payload
                //   console.log(newItem,"from redux add")

                const  existitem=state.cartitems.find(item=>item.id===newItem.id)
                
                if(existitem){
                    existitem.quantity += newItem.quantity
                }else{
                    state.cartitems.push(
                        newItem
                        // {
                        //     id:newItem.id,
                        //     name:newItem.name,
                        //     img:newItem.img,
                        //     des:newItem.des,
                        //     price:newItem.price,
                        //     foodtype:newItem.foodtype,
                        //     quantity:newItem.quantity
                        // }
                    )
                }

                localStorage.setItem('cartItems',JSON.stringify(state.cartitems))
                // console.log(state.cartitems,"datas")
            },

            deleteFromCart:(state,action) =>{
                state.cartitems=state.cartitems.filter(Items=>Items.id !== action.payload.id);
                localStorage.setItem("cartItems",JSON.stringify(state.cartitems));
            },

            updateQuantity:(state,action)=>{

                const{id,quantity}=action.payload;
                const itemToUpdate=state.cartitems.find(Item=>Item.id===id);

                if(itemToUpdate)
                {
                    itemToUpdate.quantity=quantity;
                    localStorage.setItem("cartItems",JSON.stringify(state.cartitems));
                }
            }
            

        }
        // reducers: {
        //     addTocart: (state, action) => {
        //     const newItem = action.payload;
        //     const existitem = state.cartitems.find(item => item.id === newItem.id);

        //     if (existitem) {
        //         existitem.quantity += newItem.quantity;
        //     } else {
        //         state.cartitems.push(newItem);
        //     }

        //     localStorage.setItem('cartItems', JSON.stringify(state.cartitems));
        //     },

        //     deleteFromCart: (state, action) => {
        //     const index = state.cartitems.findIndex(item => item.id === action.payload.id);
        //     if (index !== -1) {
        //         state.cartitems.splice(index, 1);
        //         localStorage.setItem("cartItems", JSON.stringify(state.cartitems));
        //     }
        //     },

        //     updateQuantity: (state, action) => {
        //     const { id, quantity } = action.payload;
        //     const itemToUpdate = state.cartitems.find(item => item.id === id);

        //     if (itemToUpdate) {
        //         itemToUpdate.quantity = quantity;
        //         localStorage.setItem("cartItems", JSON.stringify(state.cartitems));
        //     }}
        // }

    }
)

export default CartSlice.reducer;
export const {addTocart,deleteFromCart,updateQuantity}=CartSlice.actions;