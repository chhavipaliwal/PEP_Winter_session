//Create a functional component called Greeting that accepts a prop named name and displays
//"Hello, {name}!" in an <h1> tag.
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
export default Greeting;
