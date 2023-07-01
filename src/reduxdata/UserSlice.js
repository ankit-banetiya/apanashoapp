import { createSlice } from "@reduxjs/toolkit"

 const userSlice = createSlice({
        name :"user",
        initialState : {
            value : {
                token : undefined,
                username : undefined,
                loginStatus : false
            },
        },
        reducers : {
            loginUser : function(state,action)
            {
                state.value = action.payload
            }
        }
})

export const {loginUser} = userSlice.actions
export default userSlice.reducer;