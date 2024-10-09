import { useState } from "react";

//Hooks allow function components to have access to state and other React features. 
//Because of this, class components are generally no longer needed.

//The React useState Hook allows us to track state in a function component.
//State generally refers to data or properties that need to be tracking in an application.

// useState accepts an initial state and returns two values:

// The current state.
// A function that updates the state.
//The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

function Car(){
    const [car, setCar] = useState({
        brand: "Ford",
        Model: "Mustang",
        Year: 1964,
        Color: "red"
    });

    //the previouState rep the current state of the setCar. It pastes the already stated data and then overrides to change the color to blue
    const updateColor = () => {
        setCar(previousState => { 
            return { ... previousState, Color: "blue"}
        });
    }
    return(
        <>
            <p>My {car.brand} {car.Model} of {car.Year} is {car.Color}</p>
            <button type="button" onClick={updateColor}>Blue</button>
        </>
    )

}
export default Car;