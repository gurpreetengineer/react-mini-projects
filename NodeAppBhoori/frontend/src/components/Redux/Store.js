import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './AuthSlice';

const Store = configureStore({ reducer: rootReducer });

export default Store;