const Child1 = (props) => {
    console.log(props);
    return (
  <div>
  <h1>  {props.data[0].name}{props.data[0].id}</h1>
  </div>


      );
}
 
export default Child1;