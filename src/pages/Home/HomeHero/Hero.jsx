import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="heroContainer">
            
            {/* LAYER 0: Nằm dưới cùng - Quầng sáng Oval mờ ảo */}
            <div className="heroOvalLayer"></div>
          
            {/* LAYER 2: Nằm trên cùng - Nội dung chữ */}
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

            {/* LAYER 1: Nằm giữa - Khối màu trắng/xanh nhạt */}
            <motion.div
                className="animated-box"
                initial={{ x: 668 }} 
                animate={{ x: 0 }}  
                transition={{ 
                    duration: 1, 
                    ease: [0.22, 1.25, 0.36, 1],
                }}
            />
        </div>
    );
};

export default Hero;