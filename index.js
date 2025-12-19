function Chatinput({messages,setMessages}){
    return(
    messages.map((msg)=>{
        return(
            <Chatmessage
            message={msg.message} 
            sender={msg.sender} 
            key={msg.key}
            />
        )
    })
);


}

function Chatmessage({message,sender,id}){
    return(
        <div>{
            sender==="user" && ( <img src="ab.png" width="30" />  )
            }
            {message}
            {sender==="bot" && ( <img src="bo.png" width="30" />  )  
            }
        
        </div> 
    )
}

function App(){
    const [chatmessages,setchatmessages]=React.useState([
        {message:"hello",sender:"user",key:1},
        {message:"hi there!",sender:"bot",key:2},
        {message:"can you help me?",sender:"user",key:3},
        {message:"I can help you with that.",sender:"bot",key:4}
    ]);

    return(
        <div>
            <input placeholder="Type a message..." />
            <button>Send</button>
            <Chatinput messages={chatmessages} 
                setMessages={setchatmessages}/>
        </div>
    )
}


  const container = document.querySelector('.js-container');
      ReactDOM.createRoot(container).render(<App />);
