import {configureStore} from '@reduxjs/toolkit'
import counterReduccer from './reducer'


const store  = configureStore({
    reducer : {
        counter : counterReduccer,
    }

})
export default store