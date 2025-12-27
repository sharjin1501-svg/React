import { useState } from 'react'
import { Chatmessages } from './Components/Chatmessages';
import { Chatinput } from './Components/Chatinput';
import './App.css'






function App(){
    const [chatmessages,setchatmessages]=useState([
        {message:"hello",sender:"user",key:1},
        {message:"hi there!",sender:"bot",key:2},
        {message:"can you help me?",sender:"user",key:3},
        {message:"I can help you with that.",sender:"bot",key:4}
    ]);

    return(
        <div className="app-container">
            <Chatmessages messages={chatmessages}/>
            <Chatinput messages={chatmessages} 
                setMessages={setchatmessages}/>
        </div>
    );
}





export default App
