
import { useState } from 'react';
import './App.css';

function App() {
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Invest your new income 2 🤑",
  "Invest your new income 3 🤑",
  "Invest your new income 4 🤑"
];
const n = messages.length;

let [step,setStep]=useState(1);
let [flag,setFlag]=useState(false);
function handleClick(){
  setFlag((value)=>!value)
}

function handleNext(){
  if(step<n)
setStep(()=>step+1)
}
function handlePrevious(){
  if(step>1)
setStep(()=>step-1)
}

  return (
    
    <>
    <button className='close' onClick={handleClick}>{flag ? <span>&times;</span> :"Click for more...."}</button>
    {
      flag &&(
    <div className="steps">
      <div>

      </div>
      <div className="numbers">
        {/* <div className={`step-1 ${step>=1 ? "active" : "''"}`}>1</div>
        <div className={`step-2 ${step>=2 ? "active" : "''"}`}>2</div>
        <div className={`step-3 ${step>=3 ? "active" : "''"}`}>3</div> */}
        {
          messages.map((elem,ind)=>(
            <div className={`step-${ind+1} ${step>=ind+1 ? "active" : "''"}`}>
              {ind+1}
            </div>
          ))
          // map mei index bhi pass hota hai elem ke saath saath isiliye direct ind idr pass kiya hai
        }
      </div>

      <p className="message">{messages[step - 1]}</p>

      <div className="buttons">
        <button className={`previous ${step>1 ? "active-btn" : "''"}`} onClick={handlePrevious}>Previous</button>
        <button className={`next ${step<n ? "active-btn" : "''"}`} onClick={handleNext}>Next</button>
      </div>
      
      
    </div>)}

    </>
  );
}



export default App;
