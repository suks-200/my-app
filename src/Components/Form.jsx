import { useState } from "react";

const Form = () => {


let [name,setname]=useState("")
let [num,setnum]=useState()
let [add,setadd]=useState("")
 let addname=(e)=>{
    setname(e.target.value)
 }
 let addnum=(e)=>{
    setnum(e.target.value)
 }
 let addadd=(e)=>{
    setadd(e.target.value)
 }
 let adddata=(e)=>

{e.preventDefault()
    console.log(name);
console.log(num);
console.log(add);
}



    return (    <div>
        <form>
            <h1>Controlledform </h1>
            <label>Enter Your Username
            </label>
            <input type="text" value={name} onChange={addname}/>
     <label>Enter Phone nummber</label>
     <input type="number"   value={num} onChange={addnum}/>
     <label>Enter Your Address</label>
     <input type="text"  value={add} onChange={addadd}/>
     <button onClick={adddata}>CLICK TO SUBMIT</button>
        </form>
    </div> );
}
 
export default Form;