import react from 'react'
import FilterableProductTable from './components/FilterableProductTable'
import Counter from './counter/counter'
import CounterFunc from './counter/counterFunc'
import NewItemBtn from './newItemBtn/newItemBtnCopy'

function App() {
  return (
    <div style={{ padding: 50, textAlign: 'center' }}>
      <h1>
        FilterableProductTable
    </h1>
      <FilterableProductTable />
      <hr />
      <h2>
        Counter
      </h2>
      <Counter />
      <hr />
      <h2>
        CounterFunc
      </h2>
      <CounterFunc />
      <hr />
      <h3>
        place for homework
      </h3>
      <strong>
        <a href="https://codesandbox.io/s/flamboyant-mcclintock-88owr?file=/src/App.js">дз с блока "Пишем лейаут на `JSX`"</a>
      </strong>
      <hr /> 
      <strong>
        <a href="https://codesandbox.io/s/cool-jennings-pklsg?file=/src/ParentComponent.js">дз с блока "Что такое компоненты в React`"</a>
      </strong>
      <hr /> 
    </div>
  )
}

export default App;
