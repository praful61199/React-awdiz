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
import Dynamicstyling from './components/29-08-24/Dynamicstyling';
import Registervalidation from './components/31-0824/Registervalidation';
import Registervalidationuseeffect from './components/31-0824/Registervalidationuseeffect';
import Usereducer from './components/1-09/Usereducer';
import UseContext from './components/03-09/UseContext';
import { DarkModeContext } from './components/05-09/DarkModeContext';
import UseMemo from './components/05-09/UseMemo';
// import Cart from './components/cart';
import AnotherComponent from './components/10-09/AnotherComponent';
import Memo from './components/10-09/Memo';
import Prac from './components/Practice/Prac';
import Prac2 from './components/Practice/Prac2';
import Prac3 from './components/Practice/Prac3';
import PracticeTodo from './components/Practice/PracticeTodo';
import Reduxcounter from './components/19-09/Reduxcounter';
// import prac4 from './components/Practice/prac4';







function App() {

  return (
 <div className='App'>
 <Naavbar/>
 <Routes>
  <Route path ="/" element ={<Home/>}/>
  <Route path ="/Login" element ={<Login/>} />
  <Route path ="/Register" element={<Register/>}/>
  <Route path ="/Registervalidation" element={<Registervalidation/>}/>
  <Route path ="/Registervalidation-useeffect" element={<Registervalidationuseeffect/>}/>
  <Route path="/use-reducer" element={<Usereducer />} />
  <Route path="/use-context" element={<UseContext />} />
  <Route path="/darkmode" element={<DarkModeContext />} />
  <Route path="/usememo" element={<UseMemo/>} />
  <Route path="/practice" element={<Prac/>} />
  <Route path="/practice2" element={<Prac2/>} />
  <Route path="/practice3" element={<Prac3/>} />
  {/* <Route path="/practice4" element={<prac4/>} /> */}
  <Route path="/practice4" element={<PracticeTodo/>} />
  <Route path="/reduxcounter" element={<Reduxcounter/>} />
  
  




  <Route path ="*" element={<Notfound/>}/>
  <Route path="/counter" element={<Counter/>} />
  <Route path="/useeffect-1" element={<UseEffect1 />} />
  <Route path="/useeffect-2" element={<UseEffect2/>}/>
  <Route path="/useeffect-3" element={<UseEffect3/>} />
  <Route path="/useeffect-4" element={<UseEffect4/>} />
  <Route path="/todo" element={<Todo/>} />
  <Route path="/dynamic-styling" element={<Dynamicstyling/>}/>
  {/* <Route path="/cart" element={<Cart/>}/> */}
  <Route path="/anothercomponent" element={<AnotherComponent/>}/>
  <Route path="/memo" element={<Memo/>}/>
 
 

 </Routes>
 </div>

  );
}

export default App;
