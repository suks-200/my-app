import { useState } from "react";
const ArrObj = () => {

    let [arr,setarr]=useState([{name:"Ajay",id:1},
    {name:"Suks",id:2},
    {name:"Sumit",id:4},
    {name:"REshn",id:5},
    {name:"Prince",id:5},
    {name:"naughty",id:3},
    {name:"Prem",id:3}
    ])


    return ( 
        <div>
            <table>
<tr>
    <th>Name</th>
    <th>Id</th>
</tr>
{arr.map((x)=>{
    return(
        <tr>
            <td>{x.name}</td>
            <td>{x.id}</td>
        </tr>
    )
})}





{/* {arr.map((x)=>{
    return(
        <div>
            {/* <h1>{x.name}</h1>
            <h1>{x.id}</h1> */}
          
{/* <tr>
<td>{x.name}</td>
<td>{x.id}</td>

</tr>
<tr>
<td>{x.id}</td>

</tr> */} */


            </table>
        </div>




     );
}
 
export default ArrObj;