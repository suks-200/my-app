
const Child = (props) => {
    console.log(props.data);
    return (
<div>
    <h1>{props.data.name}{props.data.id}</h1>
</div>  

);
}
 
export default Child;