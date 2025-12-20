function App(){
   const [count,setCount]=React.useState(`clicked ${0} time`);  
   const [sname,setName]=React.useState(1);
   
   function click(){
    setName(sname+1);
    setCount(`clicked ${sname} times`);
   }
   function reset(){
   setName(1);
    setCount(`clicked ${0} time`);
    
   }
    return(
        <>
        <button onClick={click}> {count}</button>
        <button onClick={reset}>Reset</button>
        </>
    );

  
}

const container=document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App/>);