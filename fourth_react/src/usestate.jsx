//make a object names travel  in which three variables :placeto visit , duration :both are fixed, iternary :it is
//not finalized we have to update this only 
//declare an object and try to change the state of an iternary using usestate hook in react
//write a code for the same secnerio using spread operator
// import { React, useState } from "react";
// function Travel() {
//     const [travel, setTravel] = useState({ place: "Mumbai", duration: 1 });
//     function changePlace() {
//         setTravel({ ...travel, place: "Delhi", duration: 2 });
//     }
//     return (
//         <div>
//             <h1>Travel</h1>
//             <h2>Place to visit : {travel.place}</h2>
//             <h2>Duration : {travel.duration} day</h2>
//             <button onClick={changePlace}>Change Place</button>
//         </div>
//     );
// }
// export default Travel;
//import { React, useState } from "react";
// function Travel(){
//     const [place, setPlace] = useState("Mumbai");
//     const [duration, setDuration] = useState(1);
//     function changePlace() {
//         setPlace("Delhi");
//         setDuration(2);
//     }
//     return (
//         <div>
//             <h1>Travel</h1>
//             <h2>Place to visit : {place}</h2>
//             <h2>Duration : {duration} day</h2>
//             <button onClick={changePlace}>Change Place</button>
//         </div>
//     );
// }
// export default Travel;
import { React, useState } from "react";
function Travel() {
    const [travel, setTravel] = useState({ place: "Mumbai", duration: 1, iternary: "Not Final" });
    function changePlace() {
        setTravel({ ...travel, iternary: "Final" });
    }
    return (
        <div>
            <h1>Travel</h1>
            <h2>Place to visit : {travel.place}</h2>
            <h2>Duration : {travel.duration} day</h2>
            <h2>Iternary : {travel.iternary}</h2>
            <button onClick={changePlace}>Change Place</button>
        </div>
    );
}
export default Travel;



