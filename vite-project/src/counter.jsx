import { useState } from "react";

function Counter(){
    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(0);

    const plusIncrement = () => {
        setIncrement((prevState) => prevState + 1);
    }

    const minusDecrement = ()=> {
        setDecrement((prevState) => prevState - 1);
    }



    return(
        <>
            <h4>My Counter Program</h4>
            <button type="button" onClick={plusIncrement}>Plus ({increment})</button>
            <button type="button" onClick={minusDecrement}>Minus({decrement})</button>
        </>
    )
}

export default Counter;

//From ChatGPT:
// import { useState } from "react";

// function Counter() {
//     // Define a single state variable for the counter
//     const [count, setCount] = useState(0);

//     // Function to increment the counter
//     const increment = () => {
//         setCount((prevState) => prevState + 1);
//     }

//     // Function to decrement the counter
//     const decrement = () => {
//         // Prevent decrementing below 0
//         if (count > 0) {
//             setCount((prevState) => prevState - 1);
//         }
//     }

//     // Function to reset the counter
//     const reset = () => {
//         setCount(0);
//     }

//     return (
//         <>
//             <h4>My Counter Program</h4>
//             <h1>Count: {count}</h1>
//             <button type="button" onClick={increment}>Plus ({count})</button>
//             <button type="button" onClick={decrement}>Minus ({count})</button>
//             <button type="button" onClick={reset}>Reset</button>
//         </>
//     )
// }

// export default Counter;
