import { createSlice } from "@reduxjs/toolkit"

const initialState={
    alert:undefined,
    users:[{
        email:"anujs099@gmail.com",
        password:"anuj"
    }],
    loggedin:false,
}

export const uiSlice=createSlice({
    name:'uiSlice',
    initialState,
    reducers:{
        setAlertState:(state,{payload})=>{
            state.alert=payload
        },
        setUsers:(state,{payload})=>{
            state.users=[...state.users,payload]
        },
        setAuth:(state,{payload})=>{
            state.loggedin=payload
        }
    }
})

export const {setAlertState,setUsers,setAuth} = uiSlice.actions
export default uiSlice.reducer