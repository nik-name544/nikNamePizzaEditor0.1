import react from 'react'
import FilterableProductTable from './components/FilterableProductTable'
import Counter from './counter/counter'
import CounterFunc from './counter/counterFunc'
import NewItemBtn from './newItemBtn/newItemBtn'
// import NewItemBtn from './newItemBtn/newItemBtnCopy'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    minWidth: 700,
    margin: '0 auto',
    textAlign: 'center'
  },
  productTable: {
    marginBottom: 50
  },
  counter: {
    marginBottom: 50,
    display: "flex",
    flexDirection: "column"
  },
  lincs:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 50
  }
});


function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>
        FilterableProductTable
        </h1>
      <FilterableProductTable className={classes.productTable} />
      <h2>
        Counter
        </h2>
      <Counter className={classes.counter} />
      <h2>
        CounterFunc
        </h2>
      <CounterFunc className={classes.productTable} />
      <h3>
        NewItemBtn
        </h3>
      <NewItemBtn />
      <h3>
        place for homework
        </h3>
      <div className={classes.lincs}>
        <strong >
          <a
            href="https://codesandbox.io/s/flamboyant-mcclintock-88owr?file=/src/App.js"
            className={classes.productTable}
          >
            дз с блока "Пишем лейаут на `JSX`"
          </a>
        </strong>
        <strong >
          <a
            href="https://codesandbox.io/s/lucid-fog-b0gtu?file=/src/App.js"
            className={classes.productTable}
          >
            дз с блока "Что такое компоненты в React`"
           </a>
        </strong>

      </div>
    </div>
  )
}

export default App;
