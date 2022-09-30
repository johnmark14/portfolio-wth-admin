const { configureStore } = require("@reduxjs/toolkit");
const { combineReducers } = require("redux");
const { default: rootSlice } = require("./rootSlice");

const reducers = combineReducers({
    root: rootSlice
})

const store = configureStore({
    reducer: reducers,
})

export default store