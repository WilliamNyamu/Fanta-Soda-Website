import { useState } from "react";
function ToggleButton() {
    const [isOn, isSetOn] = useState(false);

    const toggle = ()=>{
        isSetOn((prevState) => !prevState);
    }


    return(
        <>
            <h1>Nimeweza</h1>
            <h3>{isOn? "On": "Off"}</h3>
            <button type="button" onClick={toggle}>{isOn? "Turn Off": "Turn On"}</button>
        </>
    )
   

}



export default ToggleButton;




// export default ToggleButton;


//FROM ChatGPT:
// function ToggleButton() {
//     // Define a state variable to track the toggle status
//     const [isOn, setIsOn] = useState(false); // false indicates "Off"

//     // Function to toggle the state
//     const toggleSwitch = () => {
//         setIsOn((prevState) => !prevState); // Flip the boolean value
//     };

//     return (
//         <>
//             <h4>Toggle Button Example</h4>
//             <h1>{isOn ? "On" : "Off"}</h1>
//             <button type="button" onClick={toggleSwitch}>
//                 {isOn ? "Turn Off" : "Turn On"}
//             </button>
//         </>
//     );
// }
