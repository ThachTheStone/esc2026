import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import Pic1 from "../../../assets/picture/Hero/DSC06449.png"; 
import Pic2 from "../../../assets/picture/Hero/Hero3.png"; 
import Pic3 from "../../../assets/picture/Hero/Hero2.jpg";
const Hero = () => {
    return (
        <div className="heroContainer">
            {/* DẢI BLUR NẰM DƯỚI NAVBAR */}
            <motion.div 
                className="heroOvalLayer"
                initial={{ opacity: 0, scale: 1.5, y: -50 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>

            {/* Tấm kính 1: Nghiêng phải, bay từ mép trái vào */}
            <motion.div
                className="glass-rect"
                initial={{ opacity: 0, x: "-100%", rotate: 35 }}
                animate={{ opacity: 1, x: "35%", rotate: 60 }} /* Chạy vào tới vị trí -10% thì dừng */
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                style={{ left: '0%', top: '-160%' }}
            />

            {/* Tấm kính 2: Nghiêng trái, bay từ mép phải vào */}
            <motion.div
                className="glass-rect"
                initial={{ opacity: 0, x: "100%", rotate: -35 }}
                animate={{ opacity: 1, x: "-30%", rotate: -70 }} 
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                style={{ right: '0%', top: '-145%' }}
            />
        
            {/* ------------------------------------------------- */}

            {/* Lớp Nội dung chữ (Không thay đổi) */}
            <motion.div
                className="heroContent"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >   
                <h1>
                    English Speaking <br />
                    <span className="text-blue">Competition</span>
                </h1>
                
                <p>A public speaking competition for college and university students</p>
                
                <div className="heroContainer-buttons">
                    <a href="https://forms.gle/29UFPSqUqQGGKg7Q8" className="register-btn" target="_blank" rel="noopener noreferrer">
                        Register now <span>→</span>
                    </a>
                </div>
            </motion.div>

            {/* --- HỆ THỐNG 3 KHUNG ẢNH RIÊNG BIỆT --- */}
            <div className="heroImageFrames">
                
                {/* Khung 1: Nằm TRÊN BÊN TRÁI (Vuông, 2/3 chiều cao) */}
                <motion.div
                    className="frame-item frame-left-top"
                    initial={{ opacity: 0, x: 200 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                    <img src={Pic1} alt="ESC Event Top Left" />
                </motion.div>

                {/* Khung 2: Nằm DƯỚI BÊN TRÁI (Chữ nhật ngang, 1/3 chiều cao) */}
                <motion.div
                    className="frame-item frame-left-bottom"
                    initial={{ opacity: 0, x: 200 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                    <img src={Pic2} alt="ESC Event Bottom Left" />
                </motion.div>

                {/* Khung 3: Nằm BÊN PHẢI (Chữ nhật đứng, full chiều cao) */}
                <motion.div
                    className="frame-item frame-right"
                    initial={{ opacity: 0, x: 200 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                >
                    <img src={Pic3} alt="ESC Event Right" />
                </motion.div>

            </div>
        </div>

        
    );
};

export default Hero;