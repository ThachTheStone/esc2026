import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Season.css";

// TODO: Đổi đường dẫn thành ảnh thật của bạn sau
import img2023 from "../../assets/picture/Season/ESC2026.jpg";
import img2026 from "../../assets/picture/Season/ESC2026.jpg";
import img2025 from "../../assets/picture/Season/ESC2026.jpg";

const Season = () => {
    return (
        <div className="season-container">
            
            {/* 1. HIỆU ỨNG BACKGROUND: Chạy từ trên (height: 0) xuống dưới (height: 100%) */}
            <motion.div 
                className="season-bg-overlay"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Bọc nội dung lại để nó luôn nằm trên lớp background */}
            <div className="season-content-wrapper">
                
                {/* 3. THẺ TRÁI (2023): Bay lên trước, delay 0.2s. Không có hover */}
                <motion.div 
                    className="season-card card-side hover-active"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="season-image-wrapper">
                        <img src={img2023} alt="ESC 2023" />
                    </div>
                    <div className="season-content">
                        <h3>ESC 2023</h3>
                        <div className="season-actions">
                            <span className="status-badge completed">Completed</span>
                            <div className="view-btn disabled">NO VIEW</div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. THẺ CHÍNH (2026): Bay lên thứ 2, delay 0.4s. 
                    2. HIỆU ỨNG HOVER: Nhún lên (y: -15) áp dụng riêng cho thẻ này */}
                <motion.div 
                    className="season-card card-main hover-active"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ y: -15, transition: { duration: 0.3 } }}
                >
                    <div className="season-image-wrapper">
                        <img src={img2026} alt="ESC 2026" />
                    </div>
                    <div className="season-content">
                        <h3>ESC 2026</h3>
                        <div className="season-actions">
                            <span className="status-badge inprogress">In progress</span>
                            {/* Class active-btn để làm hiệu ứng hover riêng cho nút */}
                            <Link to="/currentSeason" className="view-btn active-btn">View &rarr;</Link>
                        </div>
                    </div>
                </motion.div>

                {/* 3. THẺ PHẢI (2025): Bay lên cuối cùng, delay 0.6s. Không có hover */}
                <motion.div 
                    className="season-card card-side hover-active"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                >
                    <div className="season-image-wrapper">
                        <img src={img2025} alt="ESC 2025" />
                    </div>
                    <div className="season-content">
                        <h3>ESC 2025</h3>
                        <div className="season-actions">
                            <span className="status-badge completed">Completed</span>
                            <div className="view-btn disabled">NO VIEW</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Season;