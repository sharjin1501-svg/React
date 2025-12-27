import './chatmessage.css'
import userpic  from '../assets/user.png'
import botpic from '../assets/robot.png'

export function Chatmessage({message,sender,}){
    return(
        <div className={sender==='user' ? 'user-message' : 'bot-message'}>
            {sender==="bot" && ( <img className='botpic' src={botpic} width="30" />  )}
            <div className='message-text'>
            {message}
            </div>
            {sender==="user" && ( <img className='userpic' src={userpic} width="30" />  )  
            }
        
        </div> 
    )
}