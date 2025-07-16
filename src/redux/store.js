
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './cartslice.js'

// import productSlice from "./ProductSlice.js";

export const store=configureStore(
    {
        reducer:{
            cart:CartSlice,
            // product: productSlice,

        }
    }
)









{// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from './todoslice';


// const store = configureStore({
//   reducer: {
//     todos: todoReducer
//   }
// });

// export default store;
}





