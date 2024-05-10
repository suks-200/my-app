import { userData } from "../App";
import { useContext } from "react";
const B = () => {


    let data=useContext(userData)
    return ( 



        <div> 

<h1>{data}</h1>
        </div>
     );
}
 
export default B;