import usersData from "./users.json"
import styles from "./catlog.module.css"

const Catlog = () => {





    return ( <div>

        {usersData.map((e)=>{
            return(

                <div id={styles.main}>
                {/* <div >
                    <img id={styles.a} src={require("./profile.jpg") }alt ="image not found"/>
                </div>
     <h1 id={styles.name}>{e.login}</h1>
     <h1 id={styles.name}>Description:</h1>
     <button id={styles.butt}>Add Friend</button>
     <button id={styles.butt}>Message</button> */}
    
    
            </div>
            )
        })}



    </div> );
}
 
export default Catlog;



// import usersData from "./users.json"
// const Fetchdata = () => {

//     // let x ={width:"100%",height:"100vh", backgroundColor:"black"}
//     return ( 
//         // <div style={x}>

//          <div> 
//             {usersData.map((element)=>{
//                 return(<div>
//                     <table>
//                         <td>
//                             <tr>Login:{element.login}</tr>
//                             <tr>Name:{element.avatar_url}</tr>
//                         </td>
//                     </table>
//                 </div>)
//             })}
//         </div>
//      );
// }
 
// export default Fetchdata;