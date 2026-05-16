import { createSlice } from "@reduxjs/toolkit";
import { resume } from "react-dom/server";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: '',
    activeTab: 'photos',
    results: [],
    loading: false,
    error: null
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload
    },
    setResults(state, action) {
      state.results = action.payload
      state.loading = false
    },
    setLoading(state, action) {
      //state.loading = action.payload
      state.loading =true
      state.error = null
    },
    setError(state, action) {
      state.error = action.payload
      state.loading = false
    },
    clearResult(state){
      state.results = []
    }
  }
})

export const {setQuery,setActiveTab,setResults,setLoading,setError,clearResult} = searchSlice.actions
export default searchSlice.reducer