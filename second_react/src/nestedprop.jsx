// Build an application with two components: App (parent) and Child. Pass data from the parent
// to the child using props, where the child displays the data received.
// The App component should have a state variable called data that is initialized to "Hello from    App".
// The App component should render the Child component and pass the data state variable as a prop.
// The Child component should display the data received from the App component.
// The App component should be a function component.
function Apps() {
  const data = "hello from parent";
  return <Child data={data} />;
}
function Child(props) {
  return <h1>{props.data}</h1>;
}
export default Apps;
