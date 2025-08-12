import {configureStore} from '@reduxjs/toolkit';
import authreducer from './authFile'

const store = configureStore({
    reducer : {
        authreducer,
    }
})

export default store;