import React, { useEffect, useRef } from "react";
import "./AboutMessage.css";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// TODO: Thay đổi đường dẫn import này thành ảnh thật của bạn
import PlaceholderImage from "../../../assets/picture/About/AboutMessage/Consistency is Flexibility.jpg"; 

// --- COMPONENT TẠO HIỆU ỨNG ĐÁNH CHỮ (TYPEWRITER) ---
const TypewriterText = ({ text, duration }) => {
    const ref = useRef(null);
    // Kích hoạt khi khối này cuộn tới 50% màn hình
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    // Cắt chuỗi từ 0 đến số lượng chữ cái hiện tại đang chạy
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

    useEffect(() => {
        if (isInView) {
            // Chạy từ 0 đến tổng số chữ cái của đoạn văn
            animate(count, text.length, { duration: duration, ease: "linear" });
        }
    }, [isInView, count, text.length, duration]);

    return <motion.p ref={ref}>{displayText}</motion.p>;
};


const AboutMessage = () => {
    const paragraphText = "At Skillcetera, we are a catalyst for personal growth and community empowerment. Our mission is to build a vibrant community of \"Ideas worth spreading — Knowledge worth sharing\", where ideas are celebrated, knowledge is shared, and consistency is the key to unlocking flexibility.";

    return (
        <div className="aboutMessageSection">
            
            {/* 1. HIỆU ỨNG BACKGROUND: Từ nền tối (#11192A) hiện dần màu xanh Linear Gradient */}
            <motion.div 
                className="aboutMessageBgOverlay"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <div className="aboutMessageContainer">
                
                {/* CỘT TRÁI: Ảnh (Luôn xuất hiện trước, không có animation) */}
                <div className="aboutMessageLeft">
                    <img src={PlaceholderImage} alt="Skillcetera Logo" />
                </div>

                {/* CỘT PHẢI: Chứa Title và Text */}
                <div className="aboutMessageRight">
                    
                    {/* 2. HIỆU ỨNG TITLE: Bay từ phải (x: 100px) sang trái */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }} 
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2>
                            Consistency is <span className="text-highlight">flexibility</span>
                        </h2>
                    </motion.div>

                    {/* 3. HIỆU ỨNG TEXT: Đánh từng chữ trong vòng 4s */}
                    <TypewriterText text={paragraphText} duration={4} />

                </div>
                
            </div>
        </div>
    );
};

export default AboutMessage;