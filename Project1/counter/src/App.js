
import './App.css';
import { useState } from 'react';

function App() {
  return (
  //  <Counter/>
  <Color/>
  );
}

function Counter(){
  function HandleClick(){
setCount((count)=>count+1);
setCount((count)=>count+1);
setCount((count)=>count+1);
// forever from now ,you have to pass callback if you are using existing state value to derive next state value
// setCount(count+1)
// setCount(count+1)
// setCount(count+1)
// this will schedule updates and it will forewver take 5 and return 6
// whn passed with callbacks, react ensures to pass latest value of state to the callback function
}
  let [count,setCount]=useState(5);
  return(
    <>
    {/* <button onClick={()=> setCount(count+1)}>Click</button> */}
    <button onClick={HandleClick}>Click</button>
  {/* You dont call a function directly HandleCLick(),
  you either handover a function - HandleClick or
  you handover a callback()=>HandleClick() that calls the function */}
    <p>Counter :{count}</p>
    </>
  );
}
// state is a memory of your component, if a value is going to be changed in future, use state otherwise dont.
// in react, you dont call function directly in your event listeners, you give a callback i.e. reference of a function
// onClick={alert("hello")} // this will call function onreload, will not wait for click to happen

function Color(){
  let [selectedColor,setSelectedColor]= useState("");
  function handleClick(e){
     //  e is an object that has all the details of the event - e.target means jispe event occur hua, in our case it is button
    console.log(e.target.innerText);

    setSelectedColor(e.target.innerText)
    // if dependent on previous value, use callback else directly assign it
  }

  return(
    <>
      <button onClick={handleClick}>Red</button>
      <button onClick={handleClick}>Blue</button>
      <button onClick={handleClick}>Yellow</button>
      <hr />
      {
         selectedColor === ""? (
          <span>No color is selected</span>
         ) :(
           <p>
        {/* in style you put 2 curly braces, one is for javascript mode,second is for javascript object i.e key value */}
         You Selected <span style={{color : selectedColor}}>{selectedColor}</span>
         </p>
      
         )
      }
      {/* if no color is choosen, display "No color is selected yet" */}
     
    </>
  );
}
export default App;
