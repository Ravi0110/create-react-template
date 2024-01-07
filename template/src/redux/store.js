import { configureStore,combineReducers } from '@reduxjs/toolkit';

import CARTREDUCER from './cart/cartslice';

const reducer = combineReducers({
    cartData: CARTREDUCER,
})

const store = configureStore({
    reducer,
});

export default store;