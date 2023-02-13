import './App.css';
// import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'

function App() {
  // const [count, setCount] = useState(0)
  const {counter} = useSelector(object_store=> object_store)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch({type: "minus"})} className='btn btn-success fs-5 fw-bold'>Minus</button>
        <h1>
        {counter.value}
        </h1>
        <button onClick={() => dispatch({type:'plus'})} className='btn btn-warning fs-5 fw-bold'>Plus</button>
      </header>
    </div>
  );
}

export default App;
