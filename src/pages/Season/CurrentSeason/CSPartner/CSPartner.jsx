import React from "react";
import { motion } from "framer-motion";
import "./CSPartner.css";

// TODO: Thay các đường dẫn này bằng file ảnh thực tế của bạn
// HÀNG 1 (2 Logos)
import Partner1 from "../../../../assets/picture/Season/Ieltsfighter.jpg";
import Partner2 from "../../../../assets/picture/Season/Greenvoices.png";

// HÀNG 2 (4 Logos)
import Partner3 from "../../../../assets/picture/Season/Eduglobal.png";
import Partner4 from "../../../../assets/picture/Season/Eduevent.jpg";
import Partner5 from "../../../../assets/picture/Season/Ieltworkshop.jpg";
import Partner6 from "../../../../assets/picture//Season/Doldinhluc.jpg";

// HÀNG 3 (3 Logos)
import Partner7 from "../../../../assets/picture/Season/EasyIELTS.jpg";
import Partner8 from "../../../../assets/picture/Season/Xuanle.jpg";
import Partner9 from "../../../../assets/picture/Season/lifefourcuts.webp";

const CSPartner = () => {
    return (
        <div className="cs-partner-container">
            
            {/* 1. TITLE: Rơi từ trên xuống */}
            <motion.h2 
                className="cs-partner-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                PARTNERS
            </motion.h2>

            <div className="cs-partner-content">
                
                {/* HÀNG 1: Kích thước 914 x 141 */}
                <motion.div 
                    className="partner-row row-1"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="partner-logo">
                        <div className="partner-logo logo-ielts-fighter">
                            <img src={Partner1} alt="Partner" />
                        </div>
                    </div>
                    <div className="partner-logo"><img src={Partner2} alt="Partner" /></div>
                </motion.div>

                {/* HÀNG 2: Kích thước 1288 x 198 */}
                <motion.div 
                    className="partner-row row-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="partner-logo">
                        <div classname ="partner-logo logo-eduwing">
                            <img src={Partner3} alt="Partner" />
                        </div>
                    </div>
                    <div className="partner-logo">
                        
                            <img src={Partner4} alt="Partner" />
                        
                    </div>
                    <div className="partner-logo"><img src={Partner5} alt="Partner" /></div>
                    <div className="partner-logo"><img src={Partner6} alt="Partner" /></div>
                </motion.div>

                {/* HÀNG 3: Kích thước 1288 x 199 */}
                <motion.div 
                    className="partner-row row-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <div className="partner-logo"><img src={Partner7} alt="Partner" /></div>
                    <div className="partner-logo"><img src={Partner8} alt="Partner" /></div>
                    <div className="partner-logo"><img src={Partner9} alt="Partner" /></div>
                </motion.div>

            </div>
        </div>
    );
};

export default CSPartner;