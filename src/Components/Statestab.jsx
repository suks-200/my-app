import { useState } from "react";

const Table = () => {

// eslint-disable-next-line
    let[emp,setemp]=useState([{empid:1,empname:"Rajesh",companyname:"infix"},
    {empid:1,empname:"Rajesh",companyname:"infix"},
    {empid:1,empname:"Rajesh",companyname:"infix"},
    {empid:1,empname:"Rajesh",companyname:"infix"},
    {empid:1,empname:"Rajesh",companyname:"infix"},
    {empid:1,empname:"Rajesh",companyname:"infix"}])
    return (

        <div>
            <Table>
                <tr>
                    <td>EMp-ID</td>
                    <td>EMP-Name</td>
                    <td>Enmp-Company</td>

                </tr>
                {emp.map((x)=>{
                    return(
                        <tr>
                            <td>{emp.empid}</td>
                            <td>{emp.empname}</td>
                            <td>{emp.companyname}</td>
                        </tr>
                    )
                })}
            </Table>
        </div>
      );
}
 
export default Table ;