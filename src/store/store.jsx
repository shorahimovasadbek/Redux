import {configureStore} from '@reduxjs/toolkit'
import {stateReducer} from './reducer/Counter'
import {stateStateCard} from './reducer/Card'

const store = configureStore({
  reducer: {
    counter: stateReducer,
    card: stateStateCard
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