import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="heroContainer">
            {/* DẢI BLUR NẰM DƯỚI NAVBAR: Hiệu ứng từ ngoài gom vào */}
            <motion.div 
                className="heroOvalLayer"
                initial={{ opacity: 0, scale: 1.5, y: -50 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>
          
            {/* Lớp Nội dung */}
            <motion.div
                className="heroContent"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >   
                <h1>
                    <style>
                    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
                    </style>
                    English Speaking <br className="h1-mong" />
                    <span className="text-blue">Competition</span>
                </h1>
                
                <p>A public speaking competition for college and university students</p>
                
                <div className="heroContainer-buttons">
                    <a href="https://forms.gle/29UFPSqUqQGGKg7Q8" className="register-btn" target="_blank" rel="noopener noreferrer">
                        Register now <span>→</span>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;