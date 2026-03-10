import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <div className="heroContainer">
            <motion.h1
        initial={{ scale: 0.5, opacity: 0 }} // Bắt đầu: Nhỏ bằng 1 nửa (0.5) và mờ tịt (0)
        animate={{ scale: 1, opacity: 1 }}   // Kết thúc: Kích thước thật (1) và rõ nét (1)
        transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian: 0.8 giây, chuyển động mượt
        >
        English Speaking Competition
        </motion.h1>
            <p>Description</p>
            <div className="heroContainer-buttons">
                <Link to="/season">View current season</Link>
                <Link to="/season">Explore last season</Link>
            </div>
        </div>
    );
};

export default Hero;
