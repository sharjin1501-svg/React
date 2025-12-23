import { Chatmessage } from './Chatmessage'

export function Chatmessages({messages}){
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