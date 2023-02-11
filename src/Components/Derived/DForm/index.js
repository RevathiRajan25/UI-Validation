import React, { useEffect, useState } from 'react';
import Step from '../../Global/Step';
import FormOne from './formOne';
import FormThree from './formThree';
import FormTwo from './formTwo';

export const FormContext = React.createContext();

const FormComponent = () =>{
    const [stepTotalCount, setStepTotalCount] = useState([]);
    const [step, setStep] = useState("");
    useEffect(()=>{
        setStepTotalCount([
            {
                form:1
            },
            {
                form:2
            },
            {
                form:3
            },
            // {
            //     form:4
            // },
            // {
            //     form:5
            // }
        ])
        setStep(2)
    },[])
    const renderComponent = (step) =>{
        switch(step) {
            case 1:
                return <FormOne/>;
            case 2:
                return <FormTwo/>
            case 3:
                return <FormThree/>
        }
    }
return(
    <FormContext.Provider value={{step, setStep,stepTotalCount}}>
 <div style={{padding:"10px 50px"}}>
    <Step />
    {renderComponent(step)}
    </div>
    </FormContext.Provider>
   
)
}
export default FormComponent;