import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    price: {
        from: 1,
        to: 5000
    },
    age: {
        from:18,
        to:40
    },
    hair: '',
    eye: '',
    nationality:'',
    location:'',
    height:{
        from : 100,
        to:200
    },
    weight:{
        from : 40,
        to:80,
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPrice(state, { payload }) { state.price = payload },
        setAge(state, { payload }) {
            console.log(payload);
            if (Number(payload) === 1) { state.age = { from: 18, to: 25 } }
            else if (Number(payload) === 2) { state.age = { from: 25, to: 30 } }
            else if (Number(payload) === 3) { state.age = { from: 30, to: 35 } }
            else if (Number(payload) === 4) { state.age = { from: 35, to: 40 } }
            else state.age = payload
        },
        setHair(state, { payload }) { state.hair = payload },
        setEye(state, { payload }) { state.eye = payload },
        setNationality(state, { payload }) { state.nationality = payload },
        setLocation(state,{payload}){state.location = payload},
        setHeight(state,{payload}){state.height = payload},
        setWeight(state,{payload}){state.weight = payload}
    }
});

export const { setPrice, setAge, setHair, setEye ,setNationality,setLocation,setHeight,setWeight} = filterSlice.actions

export default filterSlice.reducer