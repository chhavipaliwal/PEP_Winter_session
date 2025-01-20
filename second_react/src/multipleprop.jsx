// Design a component UserProfile that takes firstName, lastName, and age as props and displays
// them in a structured format.
function UserProfile(props) {
  return (
    <div>
      <h1>
        {props.firstName} {props.lastName}
      </h1>
      <p>Age: {props.age}</p>
    </div>
  );
}
export default UserProfile;
