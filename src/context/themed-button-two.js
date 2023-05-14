import React from 'react'
import { ThemeContext, themes } from './theme-context';

function ThemeTogglerButoonTwo() {
  return (
    <ThemeContext.Consumer>
        {
            ({theme , toggleTheme})=>(
                <button className='btn p-3' onClick={toggleTheme} >من رنگ کناریمو عوض میکنم</button>
            )
        }
    </ThemeContext.Consumer>
  )
}
export default ThemeTogglerButoonTwo;