import { useRef } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
const Calculator = () => {
    let first =useRef()
    let second =useRef()
    let [res,setres]=useState(0);


    let add=()=>{

let a= first.current.value;
let b= second.current.value;
console.log(a+b);
setres(Number(a)+Number(b));
    

    }
    

    let sub=()=>{
        let a= first.current.value;
let b= second.current.value;
        setres(Number(a)-Number(b));
    }
 let multi=()=>{
    let a= first.current.value;
    let b= second.current.value;
            setres(a*b);
 }
 let div=()=>{
    let a= first.current.value;
    let b= second.current.value;
            setres(a/b);
 }


    return (
        <div>
           <label>Enter number</label>
           <input type="number" ref={first}/><br/>
           <lable>Enter second number</lable>
           <input type ="number" ref={second}/><br/>
           <br/>
           <button onClick={add}>+</button>
           <button onClick={sub}>-</button>
           <button onClick={multi}>*</button>
           <button onClick={div}>/</button>
           <h1>{res }</h1>



           
        </div>
      );
}
 
export default Calculator;