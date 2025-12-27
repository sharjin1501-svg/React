import { Chatmessage } from './Chatmessage'
import './chatmessages.css'

export function Chatmessages({messages}){
    return(
     <div className='message-container'>
       {messages.map((msg)=>{
         return(
            <Chatmessage
            message={msg.message} 
            sender={msg.sender} 
            key={msg.key}
            />
         );
       })}
      </div>
   );
}