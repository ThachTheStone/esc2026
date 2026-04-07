import React from "react";
import "./AboutProject.css";
import { motion } from "framer-motion";

// TODO: Thay các link ảnh này bằng 4 ảnh project thật của bạn
import ProjImg1 from "../../../assets/picture/About/AboutProj/ESC.jpg";
import ProjImg2 from "../../../assets/picture/About/AboutProj/SH3.jpg";
import ProjImg3 from "../../../assets/picture/About/AboutProj/SP8.jpg";
import ProjImg4 from "../../../assets/picture/About/AboutProj/TEDx3.jpg";

const AboutProject = () => {
    return (
        <div className="aboutProjectSection">
            
            {/* 1. HIỆU ỨNG TITLE: Fade in từ trên xuống */}
            <motion.div 
                className="aboutProjectTitle"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2>
                    Our <span className="text-highlight">Projects</span>
                </h2>
            </motion.div>

            {/* KHU VỰC CHỨA 4 ẢNH PROJECTS */}
            <div className="aboutProjectGrid">
                
                {/* 2. HIỆU ỨNG PROJECT 1: Từ dưới lên, độ trễ 0.2s */}
                <motion.div 
                    className="projectCard"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ 
                                scale: 1.05, 
                                y: -10, 
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                >
                    <img src={ProjImg1} alt="Project 1" />
                </motion.div>

                {/* PROJECT 2: Độ trễ 0.4s */}
                <motion.div 
                    className="projectCard"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ 
                                scale: 1.05, 
                                y: -10, 
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                >
                    <img src={ProjImg2} alt="Project 2" />
                </motion.div>

                {/* PROJECT 3: Độ trễ 0.6s */}
                <motion.div 
                    className="projectCard"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                    whileHover={{ 
                                scale: 1.05, 
                                y: -10, 
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                >
                    <img src={ProjImg3} alt="Project 3" />
                </motion.div>

                {/* PROJECT 4: Độ trễ 0.8s */}
                <motion.div 
                    className="projectCard"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                    whileHover={{ 
                                scale: 1.05, 
                                y: -10, 
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                >
                    <img src={ProjImg4} alt="Project 4" />
                </motion.div>

            </div>
        </div>
    );
};

export default AboutProject;