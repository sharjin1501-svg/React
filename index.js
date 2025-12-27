function Chatinput({messages,setMessages}){
    const[inputvalue,setInputvalue]=React.useState("");

function setinput(event){
    setInputvalue(event.target.value);

}
  
function setchatmessages(){
    
    const newMessages=[...messages,
        {message:inputvalue,sender:"user",key:5}
    ];

    setMessages(newMessages);
    const response = Chatbot.getResponse(inputvalue); 
     setMessages([...newMessages,
        {message:response,sender:"bot",key:6}
    ]);
    setInputvalue("");  


};

return(
        <div>
            <input placeholder="Type a message..." 
            onChange={setinput} value={inputvalue}/>
            <button onClick={setchatmessages}>Send</button>
           
        </div>
);

};
function Chatmessages({messages}){
    return(
    messages.map((msg)=>{
        return(
            <Chatmessage
            message={msg.message} 
            sender={msg.sender} 
            key={msg.key}
            />
        );
    })
);

}
function Chatmessage({message,sender,id}){
    return(
        <div>{
            sender==="bot" && ( <img src="ab.png" width="30" />  )
            }
            {message}
            {sender==="user" && ( <img src="bo.png" width="30" />  )  
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
           
            <Chatinput messages={chatmessages} 
                setMessages={setchatmessages}/>
            <Chatmessages messages={chatmessages}/>
        </div>
    );
}


  const container = document.querySelector('.js-container');
      ReactDOM.createRoot(container).render(<App />);
