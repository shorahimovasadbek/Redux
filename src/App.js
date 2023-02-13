import './App.css';
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [number, setNumber] = useState(0)

  const counter = useSelector(object_store => object_store)
  const dispatch = useDispatch()
  
  function Add(){
    dispatch({type: "add", payload:{ name: name, number: number }})
  }
  console.log(counter.card);

  return (
    <div className="App">
      <header className="App-header">

    <div>
    <div>
      <div className="row">
        <div className="col-4">
          {
            (counter.card.card.length > 0) && counter.card.card.map((item, index) => {
              return (
                <div key={index}>
                  <h1>{item.name}</h1>
                  <h1>{item.number}</h1>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

      <div className="row">
        <div className="col-4">
          <input type="number" onInput={(val) => setNumber(val.target.value)} className='form-control'  placeholder='Add tel number'/>
        </div>
        <div className="col-4">
          <input type="text" onInput={(val) => setName(val.target.value)} className='form-control'  placeholder='Add name'/>
        </div>
        <div className="col-4">
          <button onClick={Add} className='btn btn-primary'>Add user</button>
        </div>
      </div>
    </div>

        <button onClick={() => dispatch({type: "minus"})} className='btn btn-success fs-5 fw-bold'>Minus</button>
        <h1>
        {counter.counter.value}
        </h1>
        <button onClick={() => dispatch({type:'plus'})} className='btn btn-warning fs-5 fw-bold'>Plus</button>
      </header>
    </div>
  );
}

export default App;
