import React, { useState, useEffect, useRef } from "react";
import "./AboutSection.css";
import { motion, useInView } from "framer-motion";

import Pic1 from "../../../assets/picture/aboutPic.jpg";
import Pic2 from "../../../assets/picture/SampleAbout.jpg"; 
import Pic3 from "../../../assets/picture/SampleAbout2.jpg"; 

const images = [Pic1, Pic2, Pic3];

const AboutSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    // Hàm chuyển ảnh
    const paginate = (newDirection) => {
        let nextIndex = currentIndex + newDirection;
        // Xử lý vòng lặp: Hết ảnh 3 thì cuộn ngược về ảnh 1
        if (nextIndex >= images.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = images.length - 1;
        
        setCurrentIndex(nextIndex);
    };

    // Khi người dùng bấm trực tiếp vào gạch ngang
    const jumpToImage = (index) => {
        setCurrentIndex(index);
    };

    // Autoplay: Tự động trượt sau 4s
    useEffect(() => {
        if (isInView) {
            const timer = setInterval(() => {
                paginate(1);
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [isInView, currentIndex]); // Reset bộ đếm mỗi khi currentIndex thay đổi (người dùng vừa tương tác)

    // Xử lý khi kéo thả xong
    const handleDragEnd = (e, { offset }) => {
        const swipeThreshold = 50; // Vuốt quá 50px mới chuyển trang
        if (offset.x < -swipeThreshold) {
            paginate(1); // Vuốt sang trái -> Xem ảnh tiếp theo
        } else if (offset.x > swipeThreshold) {
            paginate(-1); // Vuốt sang phải -> Xem ảnh trước đó
        }
    };

    return (
        <div className="aboutSecContainer" ref={containerRef}>
            {/* THAY ĐỔI LỚN NHẤT: Dùng một thanh cuộn (track) chứa tất cả ảnh */}
            <motion.div
                className="slider-track"
                drag="x"
                
                
                onDragEnd={handleDragEnd}
                // Khúc này sẽ dịch chuyển cả dải băng chứa ảnh dựa trên index
                animate={{ x: `-${currentIndex * 100}%` }} 
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {images.map((img, index) => (
                    // Khối wrapper này giúp tạo đường kẻ trắng giữa các ảnh
                    <div className="slide-wrapper" key={index}>
                        <img
                            src={img}
                            alt={`ESC Event Slide ${index + 1}`}
                            className="slider-image"
                            draggable={false} // Chặn trình duyệt kéo ảnh (gây xung đột với framer-motion)
                        />
                    </div>
                ))}
            </motion.div>

            {/* Thanh điều hướng ngang */}
            <div className="slider-indicators">
                {images.map((_, index) => (
                    <div 
                        key={index} 
                        className={`indicator-dash ${index === currentIndex ? "active" : ""}`}
                        onClick={() => jumpToImage(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutSection;