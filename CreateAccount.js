import { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";
function CreateAccount(){
    const navigate=useNavigate();
    const [formData,setData]=useState({
        name:"",
        email:"",
        password:"",
    });

    const [errors,seterrors]=useState({});

    const handleChanges=(e)=>{setData((prevData)=>({ ...prevData,[e.target.name]:e.target.value}))};

    const validateForm=()=>{
        let newErrors={};
        
        if(!formData.name.trim()){
           newErrors.name="Full name is required.";
        }

        if(!formData.email.trim()){
            newErrors.email="Email is required.";
        }
        else if(!/^\S+@\S+\.\S+$/.test(formData.email)){
            newErrors.email="Email is not valid.";
        }
        
        if(!formData.password.trim()){
            newErrors.password="Password is required.";
        }
        else if(formData.password.length<8){
           newErrors.password="Password must be atleast 8 characters.";
        }
        
        seterrors(newErrors);
        return Object.keys(newErrors).length===0;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(validateForm()){
            navigate("/courses");
        }
    }

    return(
        <div className="account-container">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                       
                        <input type="text" name="name" placeholder="Enter your full name"  value={formData.name} 
                        onChange={handleChanges} className="line-input"/>
                        {errors.name&&<p className="error">{errors.name}</p>}
    
                        <input type="text" name="email" placeholder="Enter your email" value={formData.email}
                        onChange={handleChanges} className="line-input"/>
                        {errors.email&&<p className="error">{errors.email}</p>} 

                       
                        <input type="password" name="password" placeholder="Enter your password" value={formData.password} 
                        onChange={handleChanges} className="line-input"/>
                        {errors.password&&<p className="error">{errors.password}</p>}
                    </div>    
                    
                    <button type="submit" className="btn">Create Account</button>
            </form>
        </div> 
    )        
}
export default CreateAccount
