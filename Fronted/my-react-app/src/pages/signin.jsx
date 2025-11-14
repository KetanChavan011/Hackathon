import React, { useState } from "react";

function Signin(){
    
  const[Email, setEmail] = useState('');
  const[Password, setPassword] = useState(''); 
    
  return(

     <div className="container">
                  
         <h1 className="page-header">Sign in</h1>
                    
        <div className="login-conatainer">
                
        <div class="mb-3">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
     
      
        <div class="mb-3">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
   

     
        <div class="mb-3">
          <button type="submit" className="btn btn-success">Sign in</button>
        </div>
    

     
        <div class="mb-3">
          Don't have an account? <a href="">Sign up</a>
        </div>
        </div>
     
     </div>
  )
}

export default Signin;