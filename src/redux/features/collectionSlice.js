import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExists = state.items.find(
        item => item.id === action.payload.id
      )
      if (!alreadyExists) {
        state.items.push(action.payload)
        localStorage.setItem('collection', JSON.stringify(state.items))
      }
    },
    removeCollection:(state,action) => {
  state.items = state.items.filter(
    item => item.id !== action.payload
  )
  localStorage.setItem('collection', JSON.stringify(state.items))
},
clearCollection:  (state) => {
  state.items = []
  localStorage.removeItem('collection')
},
addedToToast:()=>{
   toast.success('Added To Collection!', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
})
},
removeToToast:()=>{
   toast.error('Remove To Collection!', {
  position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
})
}
  }
})

export const{
  addCollection,
  removeCollection,
  clearCollection,
  addedToToast,
  removeToToast

} = collectionSlice.actions;

export default collectionSlice.reducer;