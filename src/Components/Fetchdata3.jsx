import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./fetchdata3.module.css"

const Fetchdata3 = () => {

    let[user,setuser]=useState([])
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{setuser(response.data)})
    .catch(()=>{
        console.log("error");
    })
},[])

    return ( 
        <div>
            {user.map((user)=>{
                let sendRequest=()=>{
                    alert(`Friend Request sent sucessfully to $(user.login)`)
                }
                return(
                    <div id={styles.profile}>
                       <div id={styles.id}> <h1>{user.id}</h1></div><br/>
                        <h1 id={styles.title}>{user.title}</h1>
                        <button id={styles.butt} onClick={sendRequest}>SEND FRIEND REQUEST</button>
                        </div>
                )
            })}
        </div>
     );
}
 
export default Fetchdata3;

