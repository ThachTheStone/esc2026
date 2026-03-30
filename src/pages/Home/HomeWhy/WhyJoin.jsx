import React from "react";
import "./WhyJoin.css";
import ReasonCard from "./ReasonCard.jsx";
import { motion } from "framer-motion"; // Đừng quên import thư viện này nhé

const WhyJoin = () => {
    return (
        <div className="whyContainer">
            {/* QUẦNG SÁNG BLUR CÓ ANIMATION: Trượt từ dưới đáy lên */}
        <motion.div 
            className="whyBottomBlur"
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} /* Đã xóa amount: 0.3 để nó nhạy hơn, cứ lướt tới là hiện */
            transition={{ duration: 1.2, ease: "easeOut" }}
        ></motion.div>

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