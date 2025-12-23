export function Chatmessage({message,sender,}){
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