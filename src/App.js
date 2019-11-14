import React from 'react'
import './App.css'
import Component from './components/Component'
import List from './components/List'


const App = () => {

  const names = ['Lars', 'Bettina', 'Per']

  const a = 4
  const b = 5

  return (
    <div className="App" >
      <h1 > Min første react app </h1>
      <p>{a} + {b} = {a + b}</p>
      <Component />
      {
        names.map(name => <List name={name} />)
      }
    </div>
  )
}

export default App;