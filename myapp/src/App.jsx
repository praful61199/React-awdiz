import logo from './logo.svg';
import './App.css';

import{Route,Routes} from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Notfound from './components/Notfound';
import Naavbar from './components/21-08-24/Naavbar';
import Counter from './components/21-08-24/Counter';
import UseEffect1 from './components/23-08-24/Useeffect1';
import UseEffect2 from './components/23-08-24/UseEffect2';
import UseEffect3 from './components/23-08-24/UseEffect3';
import UseEffect4 from './components/23-08-24/UseEffect4';
import Todo from './components/24-08-24/Todo';






function App() {

  return (
 <>
 <Naavbar/>
 <Routes>
  <Route path ="/" element ={<Home/>}/>
  <Route path ="/Login" element ={<Login/>} />
  <Route path ="/Register" element={<Register/>}/>
  <Route path ="*" element={<Notfound/>}/>
  <Route path="/counter" element={<Counter/>} />
  <Route path="/useeffect-1" element={<UseEffect1 />} />
  <Route path="/useeffect-2" element={<UseEffect2/>}/>
  <Route path="/useeffect-3" element={<UseEffect3/>} />
  <Route path="/useeffect-4" element={<UseEffect4/>} />
  <Route path="/todo" element={<Todo/>} />
 

 </Routes>
 </>

  );
}

export default App;
