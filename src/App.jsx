import Child from "./Components/Child";
import Child1 from "./Components/Child1";
import States from "./Components/States";
import ArrayStates from "./Components/ArrayStates";
import Object from "./Components/ObjectStates";
import ArrObj from "./Components/ArrObj";
import Fetchdata from "./Components/Fetchdata";
import "./global.css"
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";
import Uncontrolled from "./Components/Uncontrolled";
import Calculator from "./Components/Calculator";
import Controlled from "./Components/Controlled";
import Form from "./Components/Form";
import Calci from "./Components/Calci";
import A from "./Components/A";
import { createContext, useContext } from "react";
import Catlog from "./Components/Catlog";
import SideEffects from "./Components/SideEffects";
import Fetchdata3 from "./Components/Fetchdata3";
import Fetchdata2 from "./Components/Fectchdata2";
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Landingpage from "./Components/Landingpage";


export let userData= createContext()
const App = () => {

  let obj ={name:"Ajay",id:78};
  
  let obj1 =[{name:"SUks",id:434},
              {name:"EEE",id:78}]
  return ( 
<div>
  <Nav/>
  <Child data ={obj}/><b/>

  <Child1 data={obj1}/>
  <States/>
  <ArrayStates/>
<Object/>  
<ArrObj/>
<Fetchdata/>
<Profile/>
<Uncontrolled/>
<br/><br/><br/><br/><br/>
<Calculator/>

{/* <BrowserRouter>
<Routes>
  <Route path='/landingpage' element={<Landingpage/>}/>
</Routes>
</BrowserRouter> */}
<Controlled/>
<br/>
<h1>------------------------------------------------------------------------</h1>
<Form/>

<br/>
<br/>
<br/>
<br/>
<h1>------------------------------------------------------------------------------------</h1>

<Calci/>
<br/>

<br/>
<br/>
<br/>

<h1>DATA TRANSFER USING useContext hook</h1>

<userData.Provider value="hii">
 <A/>

 </userData.Provider>

<br/>

<Catlog/>
<SideEffects/>
<Fetchdata2/>
<Fetchdata3/>


</div>

   );
}
  
export default App;
