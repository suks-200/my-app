import usersData from "./users.json"
const Fetchdata = () => {

    // let x ={width:"100%",height:"100vh", backgroundColor:"black"}
    return ( 
        // <div style={x}>

         <div> 
            {usersData.map((element)=>{
                return(<div>
                    <table>
                        <td>
                            <tr>Login:{element.login}</tr>
                            <tr>Name:{element.avatar_url}</tr>
                        </td>
                    </table>
                </div>)
            })}
        </div>
     );
}
 
export default Fetchdata;