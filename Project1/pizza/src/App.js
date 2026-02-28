
import './App.css';

function Header(){
  return(
    <header className='header'><h1>-FAST REACT PIZZA CO.-</h1></header>
  );
}
function Footer(){
  let openHour= 12;
  let closeHour= 22;
  let currentHour=new Date().getHours();
  let isOpen = currentHour > openHour && currentHour < closeHour;
    // 1st way of conditional rendering
    // isOpen && (<footer className='footer'>
    //   We are happy to serve you.
    //   <div className='order'>
    //     <button className='btn'>Order</button>
    //   </div>
    // </footer>)
    return(
      // 2nd Method of conditional rendering
    <footer>
      {isOpen ? (
        <div className='order'>
          <p>We are open now</p>
          <button className='btn'>Order</button>
        </div>
      ) :(
        <p>We are happy to welcome you from 12.00 to 22.00</p>
      )

      }
    </footer>

  );
}
function Menu(){
  const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
  return(
    pizzaData.length > 0 ? (
    <main className='menu'>
      <h2>OUR MENU</h2>
    <p>Authentic Italian cuisine . 6 creative dishes to choose from.All from our stone oven,all organic ,all delicious</p>
    
    <ul className='pizzas'>
      {pizzaData.map((elem)=>(
        <Pizza pizzas={elem}/>
      ))}
    </ul>

    </main>) :(
      <p>we are working on menu</p>
    )
);
}



function App() {
  console.log("HII")
  return (
    <div className='container'>
      <Header/>
      <Menu/>
   <Footer/>
    </div>
  );
}

function Pizza({pizzas}){
  // Method 3 of conditional rendering - immediate return based on condition
  // if(pizzas.soldOut) return null;
  return(
    <li className={`pizza ${pizzas.soldOut ? "sold-out" : " "}`}>
       <img src={pizzas.photoName} alt='text'></img>
      <div>
      <h3>{pizzas.name}</h3>
      <p>{pizzas.ingredients}</p>
      <span>{pizzas.price}</span>
    </div>
    </li>
  )
}

export default App;
