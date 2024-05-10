import { useEffect, useState } from "react";

const SideEffects = () => {
    let [count,setcount]=useState(0)
let[count1,setcount1]=useState(0)

useEffect(()=>{
    console.log("hello");
},[count1])




    return ( 



        <div>

            <h1>{count}</h1>
            <button onClick={()=>setcount(++count)}>Increment</button>
            <h2>{count1}</h2>
            <button onClick={()=>setcount1(++count1)}>Increment</button>
        </div>
     );
}
 
export default SideEffects;     