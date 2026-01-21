import React,{useState} from "react";
import FruitList from "./components/fruitlist";
import Author from "./components/Author";
import Counter from "./components/Counter";
export default function App() {
  let arr = ["Grapes","Apple", "Mango", "Oranges", "PineApple", "Watermelon"];
  // lifting up state 
  let [clicked, setClicked]= useState(0);
  return (
    <div>
      <fruitlist list={arr} clk={clicked}/>
      <Author clk={clicked}/>
      <Counter setClk={setClicked} clk={clicked}/>
    </div>
  );
}
// npm run dev (to run the project)