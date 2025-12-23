import { useState } from "react";import { Chatbot } from 'supersimpledev';


export function Chatinput({messages,setMessages}){
    const[inputvalue,setInputvalue]=useState("");

function setinput(event){
    setInputvalue(event.target.value);

}
  
function setchatmessages(){
    
    const newMessages=[...messages,
        {message:inputvalue,sender:"user",key:crypto.randomUUID()}
    ];

    setMessages(newMessages);
    const response = Chatbot.getResponse(inputvalue); 
     setMessages([...newMessages,
        {message:response,sender:"bot",key:crypto.randomUUID()}
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