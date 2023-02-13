const initiliseState = {
  value: localStorage.getItem("count") || 0
}

function stateReducer(state = initiliseState, action) {
  if (action.type == 'plus') {
    localStorage.setItem("count", state.value + 1)
    return {
      ...state,
      value: state.value + 1
    }
  }

  if (action.type == 'minus') {
    localStorage.setItem("count", state.value - 1)
    return {
      ...state,
      value: state.value - 1
    }
  }

  return state
}

export {stateReducer}