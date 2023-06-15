import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getOutcomes as getOutcomes } from '../apis/api'
import { Outcome } from '../../models/models'

export const fetchOutcomes = createAsyncThunk(
  'outcomes/fetchOutcomes',
  async () => {
    return await getOutcomes()
  }
)

const slice = createSlice({
  name: 'outcomes',
  initialState: [] as Outcome[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOutcomes.fulfilled, (_, action) => {
      return action.payload
    })
  },
})

export default slice.reducer
