import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'
import UseEffect1 from '../23-08-24/Useeffect1';




function Naavbar(){

    const router = useNavigate();

    function Redirect(){
        // alert("hey")
        router("/");
    }
    function redirectlogin(){
        router("/Login");
    }
    function redirectregister(){
        router("/Register");
    }
    function redirectcounter(){
        router("/counter")

    }
    function Effect1(){
        router("/useeffect-1")
    }
    function RedirectTodo(){
        router("/todo")
    }


    return <div className="parentdiv">
        <h1 onClick={Redirect}>Home</h1>
        <h1 onClick={redirectlogin}>Login</h1>
        {/* <h1 onClick={redirectregister}>Register</h1> */}
        <h1 onClick={redirectcounter}>Counter</h1>
        <h1 onclick={Effect1}>UseEffect1</h1>
        <h1 onclick={UseEffect1}>UseEffect2</h1>
        <h1 onclick={UseEffect1}>UseEffect3</h1>
        <h1 onclick={UseEffect1}>UseEffect4</h1>
        <h1 onclick={RedirectTodo}>Todo</h1>
    
    
        
        
    </div>


}
export default Naavbar;