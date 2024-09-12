import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Registervalidation() {
    const router = useNavigate()

    const[formerror,setformerror] = useState({});


    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log(userData, "userData");
      function handleChange(event) {
        // console.log(event.target.value, event.target.name, "check");
        setUserData({ ...userData, [event.target.name]: event.target.value });
      }
    
    
      async function handlSubmit(event) {
        event.preventDefault();

        const errors = validateErrors();
        console.log(errors, "check");

        if (Object.keys(errors).length == 0) {



        if (
          userData.name &&
          userData.email &&
          userData.password &&
          userData.confirmPassword
        ) {
          if (userData.password !== userData.confirmPassword) {
            return toast.error("Passqword and confirm password not macthed.");
          }
          try {
            // const response = await axios.post(
            //   "http://localhost:8000/api/v1/auth/register",
            //   { userData }
            // );
            const response = {
              data: { success: true, message: "Register succesfulyy comp;leted." },
            };
            if (response.data.success) {
              // console.log(response);
              // alert(response.data.message);
              toast.success(response.data.message);
              router("/login");
            }
          } catch (error) {
            console.log(error);
            toast.error(error);
          }
        } else {
          toast.error("All fields are required.");
        }
      }else{
        setformerror(errors);
      }
    }


    
  const validateErrors = () => {
    const errors = {};
    if (!userData.name) {
      errors.name = "Name is required.";
    }
    if (!userData.email) {
      errors.email = "Email is required.";
    }
    if (!userData.password) {
      errors.password = "Password is required.";
    }
    if (!userData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    }
    return errors;
};
    
      // var myobject = {};
      // myobject.hi = "hii";
      // myobject[event.target.name] = event.target.value
      // {[event.target.name] : event.target.value}
    
      return (
        <div >
          <h1>Register validation</h1>
          <form  onSubmit={handlSubmit}>
            <label>Name</label>
            <br />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Type your name.."
              name="name"
            //   required
            />
             {formerror?.name && <p>{formerror?.name}</p>}
            <br />
            <label>Email</label>
            <br />
            <input
              onChange={handleChange}
              type="email"
              placeholder="Type your email.."
              name="email"
            //   required
            />
            {formerror?.email && <p>{formerror?.name}</p>}
            <br />
            <label>Password </label>
            <br />
            <input
              onChange={handleChange}
              type="password"
              placeholder="Type your password.."
              name="password"
            //   required
            />
            <br />
            {formerror?.password && <p>{formerror?.name}</p>}
            
            <label>Confirm Password </label>
            <br />
            <input
              onChange={handleChange}
              type="password"
              placeholder="Confirm your password.."
              name="confirmPassword"
            //   required
            />
            {formerror?.confirmPassword && <p>{formerror?.name}</p>}
            <br />
            <input type="submit" value="Register" />
          </form>
        </div>
      );
}

export default Registervalidation;
