import React from "react";
import { motion } from "framer-motion";
import "./CSOrganizer.css";

// TODO: Đổi đường dẫn thành ảnh logo thật của bạn
import FPTLogo from "../../../../assets/picture/Season/FPT-banner.jpg";
import SkillceteraLogo from "../../../../assets/picture/Season/logo trắng.png";

const CSOrganizer = () => {
    return (
        <div className="cs-organizer-container">
            
            {/* 1. TITLE: Animation rơi từ trên xuống, màu Gradient y hệt Judge & Prize */}
            <motion.h2 
                className="cs-organizer-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                ORGANIZERS
            </motion.h2>

            {/* 2. KHU VỰC CHỨA 2 LOGO */}
            <div className="cs-organizer-grid">
                
                {/* LOGO TRÁI (FPT) */}
                <motion.div 
                    className="organizer-logo-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="or-logo"><img src={FPTLogo} alt="FPT University Organizer" /></div>
                </motion.div>

                {/* LOGO PHẢI (SKILLCETERA) - Trễ hơn một chút (0.4s) */}
                <motion.div 
                    className="organizer-logo-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <div className="or-logo"><img src={SkillceteraLogo} alt="Skillcetera Organizer" /></div>
                </motion.div>

            </div>
        </div>
    );
};

export default CSOrganizer;