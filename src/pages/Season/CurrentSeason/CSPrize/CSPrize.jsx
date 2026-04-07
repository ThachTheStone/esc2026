import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CSPrize.css";

// TODO: Thay đường dẫn bằng 3 ảnh giải thưởng thực tế của bạn
import Prize2nd from "../../../../assets/picture/Season/SecondA.jpg";
import Prize1st from "../../../../assets/picture/Season/FirstA.jpg";
import Prize3rd from "../../../../assets/picture/Season/ThirdA.jpg";

const CSPrize = () => {
    // State để quản lý việc bật/tắt ảnh full màn hình
    const [selectedImage, setSelectedImage] = useState(null);

    // Hàm mở ảnh
    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    // Hàm đóng ảnh
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="cs-prize-container">
            
            {/* 1. TITLE: Animation rơi từ trên xuống, màu Gradient */}
            <motion.h2 
                className="cs-prize-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                PRIZE STRUCTURE
            </motion.h2>

            {/* 2. LƯỚI CHỨA 3 CARD GIẢI THƯỞNG (Kích thước bằng nhau) */}
            <div className="cs-prize-grid">
                
                {/* THẺ TRÁI (Á QUÂN) - Delay 0.2s */}
                <motion.div 
                    className="prize-card"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                    <div className="prize-img-wrapper">
                        <img src={Prize2nd} alt="Second Award" />
                    </div>
                    <div className="prize-action-bar">
                        <button className="prize-view-btn" onClick={() => openModal(Prize2nd)}>
                            View &rarr;
                        </button>
                    </div>
                </motion.div>

                {/* THẺ GIỮA (QUÁN QUÂN) - Delay 0.4s */}
                <motion.div 
                    className="prize-card"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                    <div className="prize-img-wrapper">
                        <img src={Prize2nd} alt="First Award" />
                    </div>
                    <div className="prize-action-bar">
                        <button className="prize-view-btn" onClick={() => openModal(Prize2nd)}>
                            View &rarr;
                        </button>
                    </div>
                </motion.div>

                {/* THẺ PHẢI (QUÝ QUÂN) - Delay 0.6s */}
                <motion.div 
                    className="prize-card"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                    <div className="prize-img-wrapper">
                        <img src={Prize2nd} alt="Third Award" />
                    </div>
                    <div className="prize-action-bar">
                        <button className="prize-view-btn" onClick={() => openModal(Prize2nd)}>
                            View &rarr;
                        </button>
                    </div>
                </motion.div>

            </div>

            {/* 3. MODAL XEM ẢNH FULL MÀN HÌNH */}
            {selectedImage && (
                <div className="prize-modal-overlay" onClick={closeModal}>
                    {/* Ngăn việc click vào bức ảnh cũng bị đóng Modal */}
                    <img 
                        src={selectedImage} 
                        alt="Full Size Prize" 
                        className="prize-modal-img" 
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}

        </div>
    );
};

export default CSPrize;