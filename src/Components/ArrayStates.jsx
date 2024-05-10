import { useState } from "react";
const ArrayStates = () => {

// eslint-disable-next-line
let[arr,setArr]=useState(["hii","hello","Bye"])

    return ( 

<div>
    {arr.map((x)=>{
        return(
            <h1>{x}</h1>
        )
    })}
</div>


     );
}
 
export default ArrayStates;


