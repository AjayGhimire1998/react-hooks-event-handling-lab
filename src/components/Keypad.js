import react from "react";

export default function Keypad() {

    return (
        <div>
            <input type="password" 
            name="password" 
            placeholder="Enter Password"
            onChange={ () =>{
                console.log("Entering password...")
            }}>
            </input>
        </div>
    )
}
