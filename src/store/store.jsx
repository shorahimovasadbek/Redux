import {configureStore} from '@reduxjs/toolkit'
import {stateReducer} from './reducer/Counter'

const store = configureStore({
  reducer: {
    counter: stateReducer
  }
})

// store.dispatch({type: "plus"})
// store.dispatch({type: "plus"})
// store.dispatch({type: "plus"})
// store.dispatch({type: "plus"})
// store.dispatch({type: "plus"})
// store.dispatch({type: "plus"})
// console.log(store.getState());

export {store}