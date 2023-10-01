import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//enum banaya h
export const STATUSES=Object.freeze({
    //make it read only
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
});

//const initialState=[];
const productSlice=createSlice({

    name:'cart',
    //a object initia;l state
    initialState:{
data:[],
status:STATUSES.IDLE,
    },
    reducers:{
        setProducts(state,action){

            //donot make asyn call from reducers
//as they are called synchonlly
            state.data=action.payload;
          },
          setStatus(state,action){
            state.status=action.payload;
          }
        
     },

// //      extraReducers: (builder)=>{
//         builder
//         .addCase(fetchProduct.pending, (state,action)=>{
//             state.status=STATUSES.LOADING;
//         })
//         .addCase(fetchProduct.fulfilled,(state,action)=>{
// state.data=action.payload;
// state.status=STATUSES.IDLE;
//         })
//         .addCase(fetchProduct.rejected,(state,action)=>{
//             state.status=STATUSES.ERROR;
//         });
     //}
});
export const {setProducts,setStatus}=productSlice.actions;
export default productSlice.reducer;


//thunks middleware:USED when the call in asynchronous
//this middleware basically lies between where we dispatch and reducer


export function fetchProduct(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING));
try{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch(setProducts(data));
    dispatch(setStatus(STATUSES.IDLE));
}catch(err){
    console.log(err);
dispatch(setStatus(STATUSES.ERROR));
}
    }
}

//REDUCER MAI BHI CHANGE KARNA


//ANOTHER METHOD OF USING THUNK
// export const fetchProduct=createAsyncThunk('products/fetch',async()=>{
//     const response = await fetch('https://fakestoreapi.com/products');
// //     const data = await response.json();
// })
