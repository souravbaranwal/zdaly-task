import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  timers: {},
};

const stations = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    setTimerAction: (state, {payload}) => {
      const {id, startedAt, isActive} = payload;
      state.timers[id] = {startedAt, isActive};
    },
  },
});

export const {
  actions: {setTimerAction},
  reducer: stationsReducer,
} = stations;
