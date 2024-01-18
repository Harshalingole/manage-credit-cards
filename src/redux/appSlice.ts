import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  cardNum: number,
}

const initialState: CounterState = {
  cardNum: 0
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCarNum: (state,action: PayloadAction<{value: number}>) => {
      state.cardNum = action.payload.value
    },

  
  },
})

// Action creators are generated for each case reducer function
export const { setCarNum } = appSlice.actions

export default appSlice.reducer