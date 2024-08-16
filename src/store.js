import { configureStore } from '@redux/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
  },
});