// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import {ToastContainer,toast} from 'react-toastify';
// import axios from 'axios';


// export default function Register() {

//     const [values,setValues] = useState({
//         email:"",
//         password:""
//     });

// const handleSubmit = async (e) => {
//     e.preventDefault();
//    try{
//         const {data} = await axios.post("http://localhost:4000/api/login", {
//             ...values,

//         });
       
//    }catch(err){
//     console.log(err);
//    }
// };
//   return (
//     <div className='container'>
//         <h2>Register Account</h2>
//         <form onSubmit={(e) =>handleSubmit(e)}>
//             {/* <div>
//                 <label htmlFor="email">Email</label>
//                 <input type="email" id="email" placeholder='Email' />
//             </div> */}
//             <div>
//                 <label htmlFor="email">Email</label>
//                 <input type="email" id="email" placeholder='Email'
//                  onChange={(e) => setValues({...values,[e.target.name]:e.target.value})} />
//             </div>
//             <div>
//                 <label htmlFor="password">Password</label>
//                 <input type="password" id="password" placeholder='Password'
//                  onChange={(e) => setValues({...values,[e.target.name]:e.target.value})} />

//             </div>
//             <button type="submit">Submit</button>
//             <span>
//                 Already have an account? <Link to="/login">Login</Link>
//             </span>
//         </form>
//         <ToastContainer/>
//     </div>
//   )
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/login", {
        ...values,
      });

    //   toast.success("Login successful 🎉");
    //   console.log("Response:", data);
    } catch (err) {
    //   toast.error("Login failed ❌");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Register Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email" // ✅ fixed
            placeholder="Email"
            value={values.email}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password" // ✅ fixed
            placeholder="Password"
            value={values.password}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>

        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}
