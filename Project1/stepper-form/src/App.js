
import { useState } from 'react';
import './App.css';

function App() {
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
let [step,setStep]=useState(1);
function handleNext(){
  if(step<3)
setStep(()=>step+1)
}
function handlePrevious(){
  if(step>1)
setStep(()=>step-1)
}
  return (
    <div class="steps">
      <div class="numbers">
        <div class="step-1">1</div>
        <div class="step-2">2</div>
        <div class="step-3">3</div>
      </div>

      <p class="message">{messages[step - 1]}</p>

      <div class="buttons">
        <button class="previous" onClick={handlePrevious}>Previous</button>
        <button class="next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}



export default App;
