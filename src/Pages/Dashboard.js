import React from "react";
import Card from "../Components/Derived/card";
import CardJSON from '../Assets/JSON/customerDetail.json';
import './style.scss';

const Dashboard = () =>{
    return(
        <div className="dashboard">
            <label className="mt-3 mb-3">Dashboard</label>
            <Card cardData={CardJSON?.data}/>
        </div>
    )
}
export default Dashboard;