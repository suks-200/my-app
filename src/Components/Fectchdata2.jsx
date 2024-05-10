import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./fetchdata2.module.css"
import img from "./profile.jpg"

const Fetchdata2 = () => {
let[user,setUser]=useState([])


useEffect(()=>{
    axios.get("https://api.github.com/users")

    .then((response)=>{setUser(response.data)})
    .catch(()=>{console.log("error");})
},[])

    return (<div>
        {user.map((user)=>{

            let addfriend=()=>{
                alert(`sent sucessfullt to $(user.id)`)
            }
            return(
               <div id={styles.userpro}><div id={styles.border}>
                <div id={styles.img}><img id={styles.img} src={require("./profile.jpg")}/></div>
                <h1 id={styles.name}>{user.login}</h1>
                <button onClick={addfriend} id={styles.button}>ADD FRIEND</button>
                <button>View Profile</button>
                </div></div>
            )
        })}
    </div>  );
}
 
export default Fetchdata2;