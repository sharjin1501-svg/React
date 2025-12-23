function App(){
    const [value, setValue] = React.useState("On")

  function butclick(){
    
    if(value === "On"){
        setValue("Off")
    }else{
        setValue("On")
    }
  }

    return (
        <>
            <button onClick={butclick} 
            className={value === "On" ? "on-button" : "off-button"}>
                {value}</button>
        </>
    )
}

const container = document.querySelector('.js-container')
ReactDOM.createRoot(container).render(<App />)