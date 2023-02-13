
const initiliseState = {
  card : JSON.parse(localStorage.getItem("card")) || []
}


function stateStateCard(state = initiliseState, action){
  console.log(action.payload);
  console.log(action.type);
  if(action.type == "add"){
    state.card.push(action.payload)
    localStorage.setItem("card", JSON.stringify(state.card))
    return {
      ...state,
      card: state.card
    }
  }
  return state
}

export {stateStateCard}