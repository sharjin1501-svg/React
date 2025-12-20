function Inputvalue({ value }) {
  return(
    <p>{'hello ' + value} </p>
  )
}


function App() {
  const [value, setValue] = React.useState('');
  function inputtext(event){
    setValue(event.target.value);
  }

  function reseter(){
  setValue('');
  
}

function eg(){
  setValue('John Doe');
}
  
  return (
    <>
    <div>
      <input onChange={inputtext} placeholder="Enter your name" 
      value={value}
     />
    </div>
    <Inputvalue value={value} />
    <button onClick={reseter} >reset</button>
    <button onClick={eg}>example</button>
    </>
  );
}

const container =document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);