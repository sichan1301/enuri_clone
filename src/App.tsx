import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import { Category } from './data/data';

function App() {

  
  // const handleMouseEnter = () => {
  //   setDisplayMenu(true)
  // }

  // const handleMouseLeave = () => {
  //   setDisplayMenu(false)
  // }

  const handleClick = () => {

  }

  return (
    <>
      {Category.map(category => (<><h1>{category.title}</h1>
        {
          <ul>
            {category.menus.map( menu => (<>
              <h2>{menu.title}</h2>
              {menu.menu.map(menu => <li>{menu.title}</li>
              )}

            </>))}
          </ul>
        }
      
      </>))}
    </>
  );
}

export default App;
