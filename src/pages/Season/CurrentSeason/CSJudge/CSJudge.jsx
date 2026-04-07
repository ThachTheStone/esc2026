import React from "react";
import { motion } from "framer-motion";
import "./CSJudge.css";

// TODO: Đổi đường dẫn thành ảnh giám khảo thật của bạn
import Judge1 from "../../../../assets/picture/Season/Jack.jpg";
import Judge2 from "../../../../assets/picture/Season/Jack.jpg";
import Judge3 from "../../../../assets/picture/Season/Mi.jpg";

const CSJudge = () => {
    return (
        <div className="cs-judge-container">
            
            {/* 1. HIỆU ỨNG TITLE: Fade in từ trên xuống */}
            <motion.h2 
                className="cs-judge-title"
                initial={{ opacity: 0, y: -20 }} /* Giảm từ -50 xuống -20 để không bay quá cao */
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} /* Chỉ cần cuộn thấy 30% là chữ đã rơi xuống */
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                PRELIMINARY & SEMI-FINAL JUDGES
            </motion.h2>

            {/* 2. KHU VỰC CHỨA 3 ẢNH */}
            <div className="cs-judge-grid">
                
                {/* ẢNH 1: Bắt đầu ngay (delay 0), xuất hiện trong 1.25s */}
                <motion.div 
                    className="judge-card"
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }} 
                    transition={{ duration: 1.25, delay: 0, ease: "easeOut" }}
                    
                >
                    <img src={Judge1} alt="Judge 1" />
                </motion.div>

                {/* ẢNH 2: Xuất hiện sau ảnh 1 một chút (delay 0.3s) */}
                <motion.div 
                    className="judge-card"
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }} 
                    transition={{ duration: 1.25, delay: 0.3, ease: "easeOut" }}
                    
                >
                    <img src={Judge2} alt="Judge 2" />
                </motion.div>

                {/* ẢNH 3: Xuất hiện cuối cùng (delay 0.6s) */}
                <motion.div 
                    className="judge-card"
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }} 
                    transition={{ duration: 1.25, delay: 0.6, ease: "easeOut" }}
                    
                >
                    <img src={Judge3} alt="Judge 3" />
                </motion.div>

            </div>
        </div>
    );
};

export default CSJudge;