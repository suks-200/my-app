import { useRef } from "react";
import { useState } from "react";
const Uncontrolled = () => {

    let userName =useRef()
    let userCompany = useRef()
    let [name,setname]=useState();
    let[company,setcompany]=useState()


let fromHandle=(e)=>{
    e.preventDefault()
    console.log("from submitted");
    // console.log(`userName:${userName.current.value}`);
    // console.log(`userCompany:${userCompany.current.value}`);
    setname(userName.current.value);
    setcompany(userCompany.current.value)

}

    return (
        <div>
<form onSubmit={fromHandle}>
<lable>Enter Username</lable>





<input type="text" ref={userName}/>
<lable>Enter UserCompany</lable>
<input type="text" ref={userCompany}/>
<button>Submit</button>
<h1>Username:{name}</h1>
<be/>

<h1>UserComapny:{company}</h1>
</form>
        </div>
      );
}
 
export default Uncontrolled;