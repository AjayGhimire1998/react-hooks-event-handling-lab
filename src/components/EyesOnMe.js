import react from "react";

export default function EyesOnMe(){
    return(
    <button type="button" 
    name="button"
    onFocus={ () => {
        console.log("Good!")
    }}
    onBlur={ () => {
        console.log("Hey! Eyes on me!")
    }}>
        Eyes on me
    </button>
    )
};
