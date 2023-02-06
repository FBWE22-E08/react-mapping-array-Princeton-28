import "./App.css";

function App() {
  const products = [
    { name: "xbox", price: "400€", image: "https://picsum.photos/300/200" },
    {
      name: "PlayStation",
      price: "550€",
      image: "https://picsum.photos/300/200",
    },
    { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
  ];

  return (
    <div className="App">
      {products.map((el, i) => (
        <ul key={i}>
          <li>
            <img src={el.image} alt="logo"></img>
          </li>
          <li>{el.name}</li>
          <li>{el.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
