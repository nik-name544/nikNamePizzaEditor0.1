import React, { useState } from 'react'
import './App.css';
import PizzaEditor from './pizzaEditor/pizzaEditor'
import { inject, observer } from 'mobx-react';

function App() { 
  return (
    <>
      <PizzaEditor  />
    </>
  )
}

export default (observer(App));
