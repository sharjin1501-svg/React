function App(){
    return(
        <>
         <p>Hello,Welcome to my website</p>
         <div>
         <input type="email" placeholder="Enter your email" />
         </div>
         <div>
         <input type="text" placeholder="password" />
         </div>
           <button>Login</button>
           <button>signup</button>
        </>
        
        

    );
}
const container=document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App/>);
