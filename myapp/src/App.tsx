import React from 'react';
import { Item } from './features/counter/Items/Item';
import { sData } from "./features/counter/Items/Insert";
import './App.css';

function App() {
  return (

    <div className="App">
      <div className="side-nav">
        <a href="index.html"> All</a>
        <a href="index.html?filter=phone"> Phone</a>
        <a href="index.html?filter=laptop"> Laptop</a>
      </div>
      <Item {...sData} />
    </div>
  );
}

export default App;
