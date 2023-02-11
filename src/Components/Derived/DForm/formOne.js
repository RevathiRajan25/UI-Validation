import React from "react";
import { FormContext } from ".";
const FormOne = () =>{
    const {step, setStep,stepTotalCount} = React.useContext(FormContext);
    return(
        <div>
            {step}
        </div>
    )
}
export default FormOne;