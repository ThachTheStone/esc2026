import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="heroContainer">
          
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

            
            <motion.div
                className="animated-box"
        
                initial={{ x: 668 }} 
                animate={{ x: 0 }}  
               
                transition={{ 
                    duration: 1, 
                    ease: [0.22, 1.25, 0.36, 1], // Đây là ma thuật cubic-bezier
                }}
            />
        </div>
    );
};

export default Hero;