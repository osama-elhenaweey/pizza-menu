import "./App.css";
// import "./index.css";
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

function App() {
    console.log(pizzaData);
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}
function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {/*
                  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  }
                */}
            <ul>
                {pizzaData.map((pizza) => (
                    <Pizza
                        key={pizza.name}
                        name={pizza.name}
                        image={pizza.photoName}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                    />
                ))}
            </ul>
        </main>
    );
}
function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.image} alt="spinaci pizza" />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price}</span>
            </div>
        </li>
    );
}
function Footer() {
    const hour = new Date().getHours();
    const openningHour = 12;
    const closingHour = 22;
    const isOpen = hour >= openningHour && hour <= closingHour;
    console.log(isOpen);
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()} We're currently open
        </footer>
    );
}
export default App;
