// import react from 'react'
// import ReactDOM from 'react-dom'; 

const Message = (props) => {
  return <p>{props.text}</p>
}

const Head = <h1>Golova ili shapka</h1>

const flag = false

const items = [
  { id: 0, text: "some text" },
  { id: 1, text: "some text1" },
  { id: 2, text: "some text2" },
]

function App() {
  return (
    <div style={{fontSize: 25, padding: 100}}>
      <div>{flag ? Head : <p>flag rovno !true</p>}</div>
      <Message text="darova" />
      <ul>
        {
          items.map(i => (
            <li key={i.id}>{i.text}</li>
          ))
        }
      </ul>
      <a href="https://codesandbox.io/s/flamboyant-mcclintock-88owr?file=/src/App.js">дз с блока "Пишем лейаут на `JSX`" </a>
      <hr/>
      <button onClick={()=> alert("privet/darova")}>@</button>
    </div>
  )
}

export default App;
