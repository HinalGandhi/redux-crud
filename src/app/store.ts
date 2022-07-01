import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {userRecordsApi} from "./services/GetUserRecords"

export const store = configureStore({
  reducer: {
    [userRecordsApi.reducerPath]: userRecordsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userRecordsApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
