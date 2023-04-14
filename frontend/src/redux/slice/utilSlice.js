
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    region:'Dubai',
    newAds: {
        qno: 1,
        error:"",
        disableNext:true
    },
    filter:{
        showFilter:false
    },
    dashboard:{
        id:''
    },
    isDarkMode : false
}

const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        next(state, { payload }) { state.newAds.qno !== 10 && ++state.newAds.qno ; state.newAds.disableNext = true },
        back(state, { payload }) { state.newAds.qno !== 1 && --state.newAds.qno },
        setQno(state, { payload }) { state.newAds.qno = payload },
        setError(state,{payload}){state.newAds.error = payload},
        setDisableNext(state,{payload}){state.newAds.disableNext=false},
        setShowFilter(state,{payload}){state.filter.showFilter = !state.filter.showFilter},
        setId({dashboard},{payload}){dashboard.id = payload},
        setIsDarkMode(state,{payload}){state.isDarkMode = payload},
        setRegion(state,{payload}){state.region=payload},
    }
});

export const { next, back, setQno,setError,setDisableNext,setShowFilter,setId,setIsDarkMode,setRegion } = utilSlice.actions

export default utilSlice.reducer