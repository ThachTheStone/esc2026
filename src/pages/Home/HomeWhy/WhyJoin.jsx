import React from "react";
import "./WhyJoin.css";
import ReasonCard from "./ReasonCard.jsx";

const WhyJoin = () => {
    return (
        <div className="whyContainer">
            <h1 className="whyTitle">The Value of ESC</h1>
            
            <div className="whyCards">
                <ReasonCard 
                    title={<>Real-World<br/>Confidence</>} 
                    content="Build confidence by speaking English in competitive, high-pressure situations." 
                />
                <ReasonCard 
                    title={<>Critical Thinking<br/>Growth</>} 
                    content="Develop deeper analysis and structured arguments on global issues." 
                />
                <ReasonCard 
                    title={<>Powerful<br/>Networking</>} 
                    content="Connect with ambitious students and expand meaningful academic relationships." 
                />
            </div>
        </div>
    );
};

export default WhyJoin;