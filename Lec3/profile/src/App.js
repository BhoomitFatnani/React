
import './App.css';
import SGT from "./SGT.png";
function App() {
  return (
    <div className='container'>
      <div className='card'>
      <Avatar />
      <Introduction />
      <SkillList />
    </div>
    </div>
    // read by bable and transpiled into js in background
  );
}
// every component function must return JSX (single element only)

function Avatar(){
  return(
    <img src={SGT} alt='not found'></img>
  );
}
function Introduction(){
  return(
    <div>
      <h2>SGT</h2>
      <p>lorem10</p>
    </div>
  );
}
function SkillList(){
  let skills=["Javascript","Typescript","HTML/CSS","Test"];
return(
  <ul>
    {/* <Skill skill="Javascript" level="Beginner" />
    <Skill skill="HTML"  level="Intermediate"/>
    <Skill skill="CSS" level="Advanced" /> */}
  {
    skills.map((elem)=><Skill skill={elem} key={elem}/>)// key must be provided for react to uniquely identify
  }
  </ul>
);
}

function Skill(props){
  console.log(props)
  return(
    <li>
      {props.skill} 
      </li>
  );
}
export default App;
