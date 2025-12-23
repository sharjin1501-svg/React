function App(){
   const [count,setCount]=React.useState(`clicked ${0} time`);  
   const [sname,setName]=React.useState(1);
      const refer=React.useRef()

   
   function click(){
    setName(sname+1);
    setCount(`clicked ${sname} times`);
   }
   function reset(){
   setName(1);
    setCount(`clicked ${0} time`);
    
   }

   function autoclick(){
 
    setInterval(()=>{
        const buttonelem=refer.current;
        if(buttonelem){
            buttonelem.click();
        }
    },1000)
      
   }
    return(
        <>
        <button onClick={click} ref={refer}> {count}</button>
    <button onClick={reset} >Reset</button>
        <button onClick={autoclick}>Auto click</button>
        </>
    );

  
}

const container=document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App/>);