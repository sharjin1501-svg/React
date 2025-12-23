function App(){

 const [toggle,settoggle]=React.useState(false);

function toggler(){
    settoggle(!toggle)
}
 
    return(
        <>
         <p>Hello,Welcome to my website</p>
         <div>
         <input type="email" placeholder="Enter your email"
           className="inputtext" />
         </div>
         <div>
         <input  placeholder="password" 
            type={toggle ? "text" : "password"}
           className="password" />
           <button onClick={toggler}>show</button>
         </div>
           <button className="log-but">Login</button>
           <button className="sign-but">signup</button>
        </>
        
        

    );
}
const container=document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App/>);
