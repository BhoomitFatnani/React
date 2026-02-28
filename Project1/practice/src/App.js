
import './App.css';

function App() {
  return (
   <div>
   
    <Main/>
   </div>
  );
}
function Main(){
  const data = //Write a react program to display todos. Display title for each todo, if completed give color as green and style as strikethrough, else give color as red.

[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }]

  return(
    <div>
      <ul>
        {
          data.map((elem)=>(
            <Item datas={elem} key={elem.id}/>
          ))
        }
      </ul>
    </div>
  );
}
function Item({datas}){
  return<div>
    {/* <p>{datas.id}</p> */}
    <li className={`${datas.completed ? "complete" :"incomplete"}`}>{datas.title}</li>
    {/* <p>{datas.completed}</p> */}
  </div>
}
export default App;
