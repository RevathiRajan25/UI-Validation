import React from 'react';
import Man from '../../Assets/Images/images.jpg';
import './style.scss';

const Card = ({cardData}) =>{
 return(
    <div className='card-container'>
{cardData.map((data,index)=>{
    return(
<div key={index} className="card">
            <div className="row no-gutters">
                <div className="col-sm-3">
                    <img className="card-img" src={Man} alt="Suresh Dasari Card"/>
                </div>
                <div className="col-sm-9">
                    <div className="card-body">
                        <h5 className="card-title">{data?.propertyName}</h5>
                        <h6 className="card-text">{data?.location}</h6>
                        <p className="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <a href="#" className="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
})}
        
    </div>
 )
}
export default Card;