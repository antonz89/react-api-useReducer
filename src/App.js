import './App.css';
import { useReducer, useState } from 'react';
import reducer from './reducer';

function App() {
  // const [gate, setGate]=useState(false)
  const [state, dispatch]=useReducer(reducer, [])
  // console.log(state)

  const [dropDown1, setDropDown1] = useState(String)

  const [dropDown2, setDropDown2] = useState("1");

  const[url, setUrl] = useState("https://jsonplaceholder.typicode.com/users/1")
  // console.log(url)

 

  const handleChange = (event) => {
    setDropDown1(event.target.value)
    setUrl(`https://jsonplaceholder.typicode.com/${dropDown1}`)
    // console.log(url)
    console.log(dropDown1)
  }
  const handleChange2 = (event) => {
    setDropDown2(event.target.value)
  }

  // setUrl(`https://jsonplaceholder.typicode.com/${dropDown1}/${dropDown2}`)
  // console.log(url)

  const getAPIdata = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    dispatch({
      type: '1',
      payload: data // what you sending to reducer
    })
  }

  const getAPIdata1 = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/5')
    const data = await response.json()

    dispatch({
      type: '2',
      payload: data // what you sending to reducer
    })
  }
  
  const getAPIdata2 =()=>{
    
    // const response = await fetch(url)
    // const data = await response.json()
    


    // dispatch({
    //   type: '2',
    //   payload: data // what you sending to reducer
    // })
  }


  return (

    <div className="App App-header">

      <span>Will display 100 mesages:</span>

      <button onClick={getAPIdata
      }>Example 1</button>

      <br />


      <span>Will display 1 mesage:</span>

      <button onClick={getAPIdata1
      }>Example 2</button>

      <h3>https://jsonplaceholder.typicode.com/{

        <select value={dropDown1} onChange={handleChange}>
          <option value="users">users</option>
          <option value="posts">posts</option>
        </select>

        }/{
          dropDown1==="users"?
            <select value={dropDown2} onChange={handleChange2}>
              <option value="1">1</option>
              <option value="2">2</option>
            </select> : <select value={dropDown2} onChange={handleChange2}>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
        }</h3>
        
        {/* <button onClick={getAPIdata2
        }>three</button> */}

      
      {
        state.map((element)=>{
          return (
            <div className='post'>
              <h3>{element.title}</h3>
              <p>{element.body}</p>
            </div>
            
          )
        })
      }

     </div>
  );
}

export default App;
