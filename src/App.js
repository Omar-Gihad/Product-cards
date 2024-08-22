import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div className="App">
      {data.map((element) => {
        return <Card product={element} key={element.id} />;
      })}
    </div>
  );
}

export default App;

function Card({ product }) {
  console.log(product);
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div className="card-price">${product.price.toFixed(2)}</div>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
}
