import { useState } from "react";

const Controlled = () => {

let [name,setname]=useState("")


let getname=(e)=>{
    setname(e.target.value)
}
let formHAndle=(e)=>{
    e.preventDefault()

    console.log(name);


}
    return (

<div>
    <form>
        <label>Enter Username </label>
        <input type="text" value={name} onChange={getname}/>
        <button onClick={formHAndle}>CliCk TO SUBMIT</button>
    </form>
    <h1>NAME:{name}</h1>
</div>

      );
}
 
export default Controlled;