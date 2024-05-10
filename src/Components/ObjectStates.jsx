import { useState } from "react";

const Object = () => {
    // eslint-disable-next-line

    let[obj,setobj]=useState({name:"Rahul", id:123})

    return ( 

        <div>
            <h1>{obj.name}</h1>
            <h1>{obj.id}</h1>
        </div>
     );
}
 
export default Object;

