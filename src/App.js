import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const nayoks = ["Anwar", "Jafar Iqbal", "Hero Alam", "Salman sha"];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.56" },
    { name: "pdf Reader", price: "$50.23" },
  ];
  const friendList = [
    { name: "Fahima", age: "22" },
    { name: "hasina", age: "21" },
    { name: "Sifat", age: "23" },
  ];
  const nayokName = nayoks.map((nayok) => nayok);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person.</p>
        <Counter></Counter>
        <ul>
          <Users></Users>
        </ul>

        <ul>
          <h5>Nayok er List</h5>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
        </ul>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        <h3>Friend Lists</h3>
        {friendList.map((data) => (
          <Friend fnf={data}></Friend>
        ))}
        <Posts></Posts>
      </header>
    </div>
  );
}
function Friend(props) {
  const stylebff = {
    color: "white",
    backgroundColor: "salmon",
    margin: "20px",
    border: "2px solid ",
    padding: "20px",
    borderRadius: "5px",
    width: "200px",
  };
  const { name, age } = props.fnf;

  return (
    <div style={stylebff}>
      <h3>{name}</h3>
      <h4>{age}</h4>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    margin: "20px",
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    padding: "20px",
    height: "200px",
    width: "200px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0); //*declare State
  //const handleIncrease = ;
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
function Users() {
  const [users, setUser] = useState([]); //?empty
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h3>Dynamic User :{users.length}</h3>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </div>
  );
}
function Person(props) {
  return (
    <div
      style={{
        border: "5px solid gold",
        margin: "10px",
        padding: "20px",
        borderRadius: "20px",
        width: "400px",
      }}
    >
      <h1>Name: {props.name}</h1>
      <h3> Hero of the year</h3>
    </div>
  );
}
function Posts() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      {post.map((ps) => (
        <p>{ps.body}</p>
      ))}
    </div>
  );
}
export default App;
