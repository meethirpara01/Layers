import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import mobileReducer from './Reducers/MobileSkinProductSlice';
import leptopReducer from './Reducers/LeptopSkinProductSlice';
import watchReducer from './Reducers/WatchProductSlice';
import cartReducer from './Reducers/CartSlice';

// ✅ persist configs
const mobilePersistConfig = { key: 'mobile', storage };
const leptopPersistConfig = { key: 'leptop', storage };
const watchPersistConfig = { key: 'watch', storage };
const cartPersistConfig = { key: 'cart', storage };

// ✅ wrap reducers
const mobilePersistedReducer = persistReducer(mobilePersistConfig, mobileReducer);
const leptopPersistedReducer = persistReducer(leptopPersistConfig, leptopReducer);
const watchPersistedReducer = persistReducer(watchPersistConfig, watchReducer);
const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    MobileSkinProduct: mobilePersistedReducer,
    LeptopSkinProduct: leptopPersistedReducer,
    WatchProduct: watchPersistedReducer,
    Cart: cartPersistedReducer, // ✅ lowercase to keep naming consistent
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
