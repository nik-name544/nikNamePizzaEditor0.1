import react from 'react'
import FilterableProductTable from './components/FilterableProductTable'
import Counter from './counter/counter'
import CounterFunc from './counter/counterFunc'
import NewItemBtn from './newItemBtn/newItemBtn' 
import { makeStyles } from '@material-ui/core/styles';
import MainComponent from './class/class'
import ErrorBoundary from './class/ErrorBoundary'
import AutoFocusInput from './class/AutoFocusInput'
import ScreenSizeDisplay from './screenSize/ScreenSizeDisplay' 
import Timer from './function/Timer'
import AlertInput from './function/alertInput'
import FormExample from './events/FormExample'
import FirstLastName from './events/FirstLastName'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'; 


const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 700,
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '1230px',
    width: 875,
    padding: ' 0 15px',
    marginTop:100
  },

  productTable: {
    marginBottom: 50
  },

  counter: {
    marginBottom: 50,
    display: "flex",
    flexDirection: "column"
  },

  links: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  link: {

  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>FilterableProductTable</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FilterableProductTable className={classes.productTable} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Counter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Counter className={classes.counter} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>CounterFunc</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CounterFunc className={classes.productTable} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>NewItemBtn</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NewItemBtn />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>ErrorBoundary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ErrorBoundary>
            <MainComponent name="Maksim" email="maksim@ivanov.com" />
            <AutoFocusInput />
          </ErrorBoundary>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>ScreenSize</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ScreenSizeDisplay />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Timer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Timer />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>AlertInput</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AlertInput />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>FormExample</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormExample />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>FirstLastName</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FirstLastName />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>place for homework</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.links}>
            <Link
              href="https://codesandbox.io/s/flamboyant-mcclintock-88owr?file=/src/App.js"
              variant="body2"
              style={{marginBottom: 10}}
            >
              дз с блока "Пишем лейаут на `JSX`"
            </Link>
            <Link
              href="https://codesandbox.io/s/lucid-fog-b0gtu?file=/src/App.js"
              variant="body2"
              style={{marginBottom: 10}}
            >
              дз с блока "Что такое компоненты в React"
           </Link>
            <Link
              href="https://codesandbox.io/s/frosty-firefly-w3qsh?file=/src/App.js"
              variant="body2"
              style={{marginBottom: 10}}
            >
              дз с блока "Создаём компоненты Классы"
           </Link>
            <Link
              href="https://codesandbox.io/s/amazing-sinoussi-qxl4b?file=/src/App.js"
              variant="body2"
              style={{marginBottom: 10}}
            >
              дз с блока "Создаём компоненты функции"
           </Link>
            <Link
              href="https://codesandbox.io/s/serene-bartik-9xdkt?file=/src/App.js"
              variant="body2"
              style={{marginBottom: 10}}
            >
              дз с блока "Ивенты и простые формы"
           </Link>

          </div>
        </AccordionDetails>
      </Accordion>
    </div >
  )
}

export default App;
