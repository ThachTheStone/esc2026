import React from "react";
import "./ReasonCard.css";

const ReasonCard = ({ title, content }) => {
    return (
        <div className="reasonCard">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default ReasonCard;
