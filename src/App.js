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
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <>
                <p>
                    Authentic Italian cuisine. 6 creative dishes to choose from.
                    All from our stone oven, all organic, all delicious.
                </p>

                <ul className="pizzas">
                    {numPizzas > 0 ? (
                        pizzas.map((pizza) => (
                            <Pizza
                                key={pizza.name}
                                // name={pizza.name}
                                // image={pizza.photoName}
                                // price={pizza.price}
                                // ingredients={pizza.ingredients}
                                pizzaObj={pizza}
                            />
                        ))
                    ) : (
                        <p>We're still working in the menu</p>
                    )}
                </ul>
            </>
        </main>
    );
}
function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut) return null;
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt="spinaci pizza" />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "Sold Out " : pizzaObj.price}</span>
            </div>
        </li>
    );
}
function Footer() {
    const hour = new Date().getHours();
    const openingHour = 12;
    const closingHour = 22;
    const isOpen = hour >= openingHour && hour <= closingHour;
    console.log(isOpen);
    return (
        <footer className="footer">
            {isOpen ? (
                <Order closingHour={closingHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openingHour}:00 to{" "}
                    {closingHour}:00{" "}
                </p>
            )}
        </footer>
    );
}
function Order(props) {
    return (
        <div className="order">
            <p>
                {" "}
                We're currently until {props.closingHour}:00 come visit us or
                order online{" "}
            </p>
            <button className="btn">Order</button>
        </div>
    );
}
export default App;
