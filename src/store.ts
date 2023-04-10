import { createSlice,configureStore } from "@reduxjs/toolkit";

const enuriIdx = createSlice({
  name: 'enuriIdx',
  initialState:{
    categoryIdx: 0,
    menusIdx:0,
    menuIdx:0,
    subMenuIdx:0,
    imgIdx:0,
    wholeMode:false
  },
  reducers: {
    updateIdx(state,action) {
      state = {...state, ...action.payload}
      return state
    },
    updateMode(state,action){
      state.wholeMode = action.payload
    }
  },
})

export const store = configureStore({
  reducer : enuriIdx.reducer
})

export const { updateIdx, updateMode} = enuriIdx.actions
export type RootState = ReturnType<typeof store.getState>
export default store

