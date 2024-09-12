import React, { useState } from 'react'
import toast from 'react-hot-toast';

function Login() {
    const[userdata,setuserdata] = useState({
        name :"",
        email : "",

    });
    console.log(userdata , "userdata") ;


    function handlechange(event){
        setuserdata({...userdata,[event.target.name]: event.target.value});

    }


    async function submitting (event){
        event.preventDefault();
    

            try{
                const response = {
                    data : {success :true , message : "login succesful"}
                };

                if(response.data.success){
                    toast.success(response.data.message)
                }

            }catch(error){
                console.log(error)
                toast.error(error)

            } 
       
    }

  return (
    <div>
      <h1> Login page</h1>
      <form onsubmit ={submitting}>
        <label>Name</label><br/>
        <input onChange={handlechange} type ="text" placeholder='type name..' name = "name"></input><br/>
        <label> Email</label><br/>
        <input onchange={handlechange} type="email" placeholder='type  email' name ="email"></input><br/>
        <input type ="submit" value = "please login"></input>
        
        {/* <button> Login</button> */}
      </form>
    </div>
  )
}
export default Login
