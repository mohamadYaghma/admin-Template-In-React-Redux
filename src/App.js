import React from "react";
import { Counter } from "./views/Counter";
import { ProductList } from "./views/product/ProductList";
import { ProductAdd } from "./views/product/ProductAdd";



function App() {
  return (
    <div>
      <Counter />
      <hr />
      <ProductList />
      <hr/>
      <ProductAdd />
    </div>
  ) 
}

export default App;
