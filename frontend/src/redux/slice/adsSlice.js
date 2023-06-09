import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adsTitle: "",
    phone: {
        code: '',
        number: ''
    },
    intro: '',
    location: '',
    nationality: '',
    language: [],
    eye: '',
    hair: '',
    bust: '',
    orientation:'',
    socialMedia: {
        video: '',
        whatsapp:'',
        website: '',
        onlyFans: '',
        instagram: '',
        twitter: '',
        telegram: '',
        facebook: '',
        
    },
    height: '',
    weight: '',
    age: '',
    currencyType: '',
    outCall: {
        oneHourOut: '',
        twoHourOut: '',
        nightOut: ''
    },
    inCall: {
        oneHourIn: '',
        twoHourIn: '',
        nightIn: ''
    },
    service: [],
    profilePhoto: '',
    gallery: []
}

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        setAdsTitle(state, { payload }) { 
            state.adsTitle = payload
            state.adsTitle = state.adsTitle.charAt(0).toUpperCase() + state.adsTitle.slice(1) 
        },
        setInto(state, { payload }) { state.intro = payload },
        setPhone(state, { payload }) { state.phone[payload.type] = payload.value },

        setLocation(state, { payload }) { state.location = payload },
        setNationality(state, { payload }) { state.nationality = payload },
        setLanguage(state, { payload }) { state.language = payload },

        setEye(state, { payload }) { state.eye = payload },
        setHair(state, { payload }) { state.hair = payload },

        // setMesurement(state, { payload }) { state.measurement[payload.type] = payload.value },
        setBust (state,{payload}){state.bust = payload},
        SetOrientation(state,{payload}){state.orientation = payload},

        setSocialMedia(state, { payload }) { state.socialMedia[payload.type] = payload.value },

        setHeight(state, { payload }) { state.height = payload },
        setWeight(state, { payload }) { state.weight = payload },
        setAge(state, { payload }) { state.age = payload },

        setCurrencyType(state, { payload }) { state.currencyType = payload },

        setOutCall(state, { payload }) { state.outCall[payload.type] = payload.value },
        setInCall(state, { payload }) { state.inCall[payload.type] = payload.value },
        addService(state, { payload }) { state.service.push({ name: payload, charge: '' }) },
        removeService(state, { payload }) { state.service = state.service.filter(e => e.name !== payload) },

        setServiceCharge(state, { payload }) {
            const { name, charge } = payload
            console.log(name, charge)
            const index = state.service.findIndex(e => e.name === name)
            state.service[index].charge = charge
        },
        setProfilePhoto(state, { payload }) { state.profilePhoto = payload },
        setGallery(state, { payload }) { state.gallery.push(payload) },
        clearGallery(state, { payload }) { state.gallery = [] }
    }
});

export const {
    setAdsTitle, setInto, setPhone, setLocation, setNationality, setLanguage,
    setEye, setHair, setBust,SetOrientation, setSocialMedia, setHeight, setWeight, setAge,
    setCurrencyType, setOutCall, setInCall, addService, removeService, setServiceCharge,
    setProfilePhoto, setGallery, clearGallery
} = adsSlice.actions

export default adsSlice.reducer