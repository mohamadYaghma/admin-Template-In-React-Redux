import React from 'react'
import { ThemeContext } from './theme-context'

function ThemeTogglerButoon() {
  return (
    <ThemeContext.Consumer>
      {
        ({theme , toggleTheme})=>(
            <button onClick={toggleTheme} className='btn p-3' style={{backgroundColor: theme.background , color: theme.foreground} }>بزنی رنگم عوض میشه</button>
        )
      }  
    </ThemeContext.Consumer>
  )
}

export default ThemeTogglerButoon;