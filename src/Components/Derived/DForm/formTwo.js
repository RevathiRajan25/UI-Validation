import React from "react";
import { FormContext } from ".";
const FormTwo = () =>{
    const {step, setStep,stepTotalCount} = React.useContext(FormContext);
    return(
        <div>
            {step}
        </div>
    )
}
export default FormTwo;