// import { Counter } from "views/Counter";
// import { ProductList } from "views/product/ProductList";
// import { ProductAdd } from "views/product/ProductAdd";
import React from "react";
import {ThemeContext, themes} from './context/theme-context'
import ThemeTogglerButoon from "context/themed-button";
import ThemeTogglerButoonTwo from "context/themed-button-two";

class App extends React.Component{
  constructor(props){
    super(props);

    this.toggleTheme=()=>{
      this.setState(state => ({
        theme : 
          state.theme === themes.dark
            ? themes.light : themes.dark
      }))
    }

    this.state={
      theme : themes.light ,
      toggleTheme : this.toggleTheme
    }
  }

  render(){
    return(
      <ThemeContext.Provider value={this.state} >
         <ThemeTogglerButoon/>
         <ThemeTogglerButoonTwo/>
      </ThemeContext.Provider>
    )
  }
}

export default App;

// redux thuk management
// return (
//   <div>
//     <Counter />
//     <hr />
//     <ProductList />
//     <hr/>
//     <ProductAdd />
//   </div>
// ) 