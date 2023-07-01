import { createSlice } from "@reduxjs/toolkit"

 const cartSlice = createSlice({
        name :"cart",
        initialState :{
            value : [],
            
            
            },
        reducers : {
            addCart : function(state,action)
            {
                state.value=[...state.value,action.payload]
            },
           
            removeCart : function(state,action)
            {
                
                state.value=state.value.filter((ob) => ob.id !== action.payload)
            },

            
    }
 })
export const {addCart,removeCart} =  cartSlice.actions
export default cartSlice.reducer;


// state.filter(({ id }) => id !== action.payload);