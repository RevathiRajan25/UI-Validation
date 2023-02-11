import React from 'react';
import './style.scss'
import { FormContext } from '../../Derived/DForm';

const Step = () =>{
    const {step, setStep,stepTotalCount} = React.useContext(FormContext);
    console.log(step, setStep,stepTotalCount,"value")
    return(
        <div className='step-bar'>
            <div className='d-flex justify-content-between'>
                {stepTotalCount?.length > 0 && stepTotalCount?.map((item,index)=>{
                    return(
                        <div className={stepTotalCount?.length === index +1 ? "row d-flex":'row d-flex'}>
                            <div className='btn-container'>
                            <button 
                            // disabled={item?.form === step || item?.form > step} 
                            onClick={()=> setStep(index+1)} className={item?.form === step ? "step-btn btn-active" :  item?.form > step ? "step-btn inactive" : "step-btn completed"}>{item.form}</button>
                            </div>
                            {/* {stepTotalCount?.length === index +1 ? "": */}
                            <div className={item?.form === step ? "line active" :  item?.form > step ? "line inactive" : "line completed"}>
                   
                            </div>
                    
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Step;