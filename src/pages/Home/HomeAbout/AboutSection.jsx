import React, { useState, useEffect, useRef } from "react";
import "./AboutSection.css";
import { motion, useInView } from "framer-motion";

import Pic1 from "../../../assets/picture/ARTBOARD 01.png";
import Pic2 from "../../../assets/picture/ARTBOARD 02.png"; 
import Pic3 from "../../../assets/picture/ARTBOARD 03.png"; 

const images = [Pic1, Pic2, Pic3];

const AboutSection = () => {
    // Không giới hạn index nữa, nó có thể chạy tới dương vô cực hoặc âm vô cực
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    // Công thức toán học (Modulo) để quy đổi index vô cực về đúng 3 ảnh (0, 1, 2)
    const actualImageIndex = ((currentIndex % images.length) + images.length) % images.length;

    // Luôn render sẵn 5 khung hình: 2 cái bên trái, 1 cái ở giữa, 2 cái bên phải
    const visibleIndices = [
        currentIndex - 2,
        currentIndex - 1,
        currentIndex,
        currentIndex + 1,
        currentIndex + 2
    ];

    const paginate = (direction) => {
        setCurrentIndex((prev) => prev + direction);
    };

    // Nâng cấp hàm bấm nút: Tự động tính quãng đường ngắn nhất để xoay dải băng
    const jumpToImage = (targetIndex) => {
        let diff = targetIndex - actualImageIndex;
        // Nếu khoảng cách xa hơn một nửa, đi đường vòng ngược lại sẽ nhanh hơn
        if (diff > images.length / 2) diff -= images.length;
        if (diff < -images.length / 2) diff += images.length;
        
        setCurrentIndex(currentIndex + diff);
    };

    // Autoplay sau 4s
    useEffect(() => {
        if (isInView) {
            const timer = setInterval(() => {
                paginate(1);
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [isInView, currentIndex]);

    // Xử lý kéo thả
    const handleDragEnd = (e, { offset }) => {
        const swipeThreshold = 50; 
        if (offset.x < -swipeThreshold) {
            paginate(1); 
        } else if (offset.x > swipeThreshold) {
            paginate(-1); 
        }
    };

    return (
        <div className="aboutSecContainer" ref={containerRef}>
            <motion.div
                className="slider-track"
                drag="x"
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                // Dải băng liên tục dịch chuyển dựa trên index vô cực
                animate={{ x: `-${currentIndex * 100}%` }} 
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Lặp qua 5 khung hình ảo đã tạo sẵn */}
                {visibleIndices.map((absoluteIndex) => {
                    // Dò xem khung hình này tương ứng với bức ảnh thật nào
                    const imgIndex = ((absoluteIndex % images.length) + images.length) % images.length;
                    
                    return (
                        <div 
                            key={absoluteIndex} // Key này giúp ảnh không bị nháy khi thay đổi
                            className="slide-wrapper"
                            style={{
                                // Kỹ thuật xếp chồng: Ảnh sẽ tự động xếp nối đuôi nhau
                                left: `${absoluteIndex * 100}%`,
                            }}
                        >
                            <img
                                src={images[imgIndex]}
                                alt={`ESC Event Slide ${imgIndex + 1}`}
                                className="slider-image"
                                draggable={false} 
                            />
                        </div>
                    );
                })}
            </motion.div>

            {/* Thanh điều hướng */}
            <div className="slider-indicators">
                {images.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`indicator-dash ${idx === actualImageIndex ? "active" : ""}`}
                        onClick={() => jumpToImage(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutSection;