import { useState } from 'react';
import './App.css';

function App() {
  return (
  <div className='app'>
 
    <Logo/>
    <Form/>
    <PackingList/>
    <Footer/>
  </div>
  );
}
function Logo(){
  return(
    <h1> 🏖️ Far away</h1>
  );
}
function Form(){
  let [description,setDescription]= useState('test');
  let[quantity,setQuantity]=useState();
function handleSubmit(e){
  e.preventDefault();
  //prevent its default behaviour i.e reloading
  console.log(description,quantity)
}
 return(
  // onSubmit event is on form __ onclick is on button
// we are using onsubmit because we also want to submit the form when we press enter. 
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for the trip?</h3>
      <select value={quantity} onChange={(e)=> setQuantity(e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      {/* contract or binnding of value with onchange in controlled elements */}
      {/* controlled element - value chaange and value display control is taken up by react by the concept of states in form elements */}
      <input
       type='text'
        value={description}
        // onchange- {setDescription} -- if you pass function directly,it will take event ka object and setDescription as event ka object
         onChange={(e)=>setDescription(e.target.value)}
        //  in this case you add one more darwaza i.e callback, it still brings event ka object to this darwaza and then inside we filter out only value from the event
         ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList(){
  const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
 return(
    <div className='list'>
      <ul >
      {
        initialItems.map((elem)=>(<Item item={elem} key={elem.id}/>))
      }
    </ul>
    </div>
  );
}
function Item({item}){
 return(
  
    <li >
      <input type='checkbox'></input>
      <span className={`${item.packed ? "completed" : "''"}`}>{item.quantity} - {item.description}</span>
      <button className='button'>❌</button>
      </li>
  );
}
function Footer(){
 return(
    <footer className='stats'>You have x items packed, you are y% ready</footer>
  );
}
export default App;
