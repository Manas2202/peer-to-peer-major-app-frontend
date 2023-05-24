import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Cookies from 'js-cookie';

import axios from 'axios';
function Register() {
  const [fname,setfName] = useState("");
  const [lname,setlName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [pan,setPan] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    const newData = {
      firstname: fname,
      lastname: lname,
      email,
      password,
      phone,
      address,
      pan,
      city,
      state
    };
    console.log("newData",newData);
    const response = await axios.post("http://localhost:8080/user/register",newData);
    // store user response data in cookie
    Cookies.set('userData', JSON.stringify(response.data));
    if(response.status === 201){
      window.location.href="/"
    }
  };

  useEffect(() => {
    setfName("");
    setlName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    setPan("");
    setCity("");
    setState("");
  }, []);

  return (
    <>
      <Navbar />
      <div className="register_formParentContainer">
        <div className="login_container">
          <div className="login_title">Enter Details To Register</div>
          <form className="login_addItemForm" onSubmit={handleSubmit}>
            <div className="login_user__details">
              <div className="login_input__box">
                <span className="login_details">First Name:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  placeholder="Enter First Name Here"
                  onChange={(e) => setfName(e.target.value)}
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Last Name:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  placeholder="Enter Last Name Here"
                  onChange={(e) => setlName(e.target.value)}
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Password:</span>
                <input
                  className="login_addItemFormInput"
                  type="password"
                  placeholder="Enter Password Here"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Phone:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Email:</span>
                <input
                  className="login_addItemFormInput"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Address:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">City:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter City Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">State:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter State Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">PAN No:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setPan(e.target.value)}
                  placeholder="Enter PAN number Here"
                  required
                />
              </div>
            </div>
            <div className="form_switch_container">
              Already Have an Account?&nbsp; <a href="/login">Sign In</a>
            </div>
            <div className="login_formbutton">
              <input
                className="login_addItemFormInput"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
