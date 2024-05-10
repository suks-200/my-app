import { useState } from "react";
const States = () => {

// eslint-disable-next-line
    let [abc,setAbc]= useState("hii")
    let [num,setnum] =useState(0)



 let x=()=>{
   setAbc("Bye")
 }

 let y=()=>{
    setnum(num+1)
 }
let z=()=>{
    setnum(num-1)
}
let r=()=>{
    setnum(0)
}
    return ( 

        <div>
            <h1>{abc}</h1>
            <h1>{abc}</h1>

            <h1>{abc}</h1>

            <h1>{abc}</h1>

            <h1>{abc}</h1>
            <h1>{abc}</h1>

            <h1>{abc}</h1>

            
            <button onClick={x}>Click MEE TO Change</button>

            <b/><b/>

            <h1>{num}</h1>
            <button onClick={y}>INcrement</button>
            <button onClick={z}>Decrement</button>
            <button onClick={r}> Resest</button>




        </div>
     );
}
 
export default States;