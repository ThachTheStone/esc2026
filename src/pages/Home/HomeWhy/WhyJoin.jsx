import React from "react";
import "./WhyJoin.css";
import global from "../../../assets/icon/global.svg";
import ReasonCard from "./ReasonCard.jsx";

const WhyJoin = () => {
    return (
        <div className="whyContainer">
            <h1>Why join ESC?</h1>
            <div className="cards">
                <ReasonCard
                    icon = {global}
                    title = "Main reason"
                    content = {"Built by organizers who truly understand the TEDx journey, TON transforms real experience into practical support for every stage of your event."}
                />

                <ReasonCard
                    icon = {global}
                    title = "Main reason"
                    content = {"Built by organizers who truly understand the TEDx journey, TON transforms real experience into practical support for every stage of your event."}
                />
            
                <ReasonCard
                    icon = {global}
                    title = "Main reason"
                    content = {"Built by organizers who truly understand the TEDx journey, TON transforms real experience into practical support for every stage of your event."}
                />
            
                <ReasonCard
                    icon = {global}
                    title = "Main reason"
                    content = {"Built by organizers who truly understand the TEDx journey, TON transforms real experience into practical support for every stage of your event."}
                />
            
                <ReasonCard
                    icon = {global}
                    title = "Main reason"
                    content = {"Built by organizers who truly understand the TEDx journey, TON transforms real experience into practical support for every stage of your event."}
                />
            
                <ReasonCard
                    icon = {global}
                    title = "Main reason"
                    content = {"Built by organizers who truly understand the TEDx journey, TON transforms real experience into practical support for every stage of your event."}
                />
            </div>
            
        </div>
    );
}

export default WhyJoin;