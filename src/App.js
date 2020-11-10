import React from 'react'
import './App.css';
import PizzaEditor from './pizzaEditor/pizzaEditor'
import { observer } from 'mobx-react';

function App() { 
  return (
    <>
      <PizzaEditor  />
    </>
  )
}

export default (observer(App));
