import { useState } from "react";

const Calci = () => {

let[num,setnum]=useState()
let[num1,setnum1]=useState()
let[res,setres]=useState()

let numf=(e)=>{
    setnum(e.target.value)


}
let second=(e)=>{
    setnum1(e.target.value)
}

let add=(e)=>{

    e.preventDefault()
    console.log(Number(num)+Number(num1));
    setres(Number(num)+Number(num1))
}
let subs=(e)=>{
    e.preventDefault()
    console.log(num-num1);
setres(num-num1)
}

let multi=(e)=>{
e.preventDefault()
console.log(num*num1);

setres(num*num1)
}
let div=(e)=>{
e.preventDefault()
console.log(num/num1);
setres(num/num1)
}

    return (

<div>
    <form>
        <label>Enter the first number</label>
        <input type="number" value={num} onChange={numf}/>
        <label>Enter the second number</label>
        <input type="nmumber" value={num1} onChange={second}/>

        <button onClick={add}>+</button>
        <button onClick={subs}>-</button>
        <button onClick={multi}>*</button>
        <button onClick={div}>/</button>
    </form>
    <h1>{res}</h1>


    <br/>
    <br/>
</div>


      );
}
 
export default Calci;