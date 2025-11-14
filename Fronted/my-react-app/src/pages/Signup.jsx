import React, { useState } from "react";
import './Signup.css';

function Signup() {


  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [Email, setEmail] = useState('');
  const [mobile, setMobile] = useState(0);
  const [DOB, setDOB] = useState(null);
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (

    <div >
      <div className="row">
        <div className="col">
          <label htmlFor="">First Name</label>
          <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="col">
          <label htmlFor="">Last Name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </div>


      <div className="row">

        <div class="col">
          <label for="MOb" class="form-label">Mobile No.</label>
          <input type="tel" class="form-control" id="MOb" aria-describedby="" />

        </div>



        <div class="col-6">
          <label for="Dateofbirth" class="form-label">Date of Birth</label>
          <input type="date" class="form-control" id="Dateofbirth" aria-describedby="" />


        </div>
      </div>

      <div class="col-14">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

      </div>

      <div className="row">

        <div class="col-6">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" required />

        </div>

        <div class="col-6">
        <label for="confirm-password" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" id="confirm-password" name="confirm-password"
          required onkeyup="checkPasswordMatch()" />


      </div>

      </div>


      <div class="row g-3 my-2 justify-content-center">
        <div class="col-6">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </div>

      <div class="row g-3 mb-2 justify-content-center">
        <div class="col-8">
          Don't have an account? <a href="">Sign in</a>
        </div>
      </div>



    </div>
  )
}

export default Signup;

