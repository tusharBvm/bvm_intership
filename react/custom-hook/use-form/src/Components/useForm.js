import { useState } from "react"


const useForm = (initialValue) => {
    // console.log("initial Value ==>",initialValue);
    
    const [value,setValue] = useState(initialValue)

    function handleChange(e) {
        // console.log("e ==> ",e);
        setValue(e.target.value)
        // console.log("set value ==>",e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange
    };

    return inputProps
 
}

export default useForm