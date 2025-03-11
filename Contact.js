import { useState } from "react"

function Contact(){
    const [email,setemail]=useState('');
   
        return(
        <>
            <div className="contact">
                <h2>Contact Us</h2>
                <p>If you have any quries,please fill out the form..</p>
            </div>
            
            <div className="contact-container">
            
               
                <input className="line-input" type="email" placeholder="Enter your email" value={email} 
                onChange={(e)=>{setemail(e.target.value)}} required/>
                
                
                <input  className="line-input" type="tel" placeholder="Enter mobile number" required/>

                
                <input className="line-input"  type="text" placeholder="Enter your query" required/>

                <button type="submit" className="btn">Submit</button>
            
            </div>
         </>             

                    
    )
}

export default Contact
