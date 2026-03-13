import React, { useState, useEffect, useRef } from "react";
import "./AboutSection.css";
import { motion, AnimatePresence, useInView } from "framer-motion";

// --- CHỖ ĐỂ BẠN CHÈN ẢNH VÀO ĐÂY ---
// Bạn hãy đổi đường dẫn "../../../assets/picture/..." thành 3 bức ảnh thật của bạn nhé
import Pic1 from "../../../assets/picture/aboutPic.jpg"; 
import Pic2 from "../../../assets/picture/aboutPic.jpg"; 
import Pic3 from "../../../assets/picture/aboutPic.jpg"; 

const images = [Pic1, Pic2, Pic3];

const AboutSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    
    // Kiểm tra xem thẻ này đã xuất hiện trên màn hình của người dùng chưa
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    useEffect(() => {
        // Chỉ bắt đầu đếm giờ nếu người dùng đã lướt tới khu vực này
        if (isInView) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000); // 4000ms = 4 giây
            
            // Dọn dẹp bộ đếm khi component bị đóng
            return () => clearInterval(timer);
        }
    }, [isInView]);

    // Cấu hình hiệu ứng trượt
    const slideVariants = {
        enter: { x: "100%" }, // Ảnh mới: Đứng chờ sẵn ở sát mép phải
        center: { 
            x: 0, 
            transition: { duration: 0.8, ease: "easeInOut" } // Thời gian trượt là 0.8s
        },
        exit: { 
            x: "-100%", // Ảnh cũ: Trượt bay sang sát mép trái
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    return (
        <div className="aboutSecContainer" ref={containerRef}>
            {/* AnimatePresence giúp theo dõi và tạo hiệu ứng cho thẻ bị xóa đi khỏi màn hình */}
            <AnimatePresence>
                <motion.img
                    key={currentIndex} // Phải có key để React biết đây là các ảnh khác nhau
                    src={images[currentIndex]}
                    alt={`ESC Event Slide ${currentIndex + 1}`}
                    className="slider-image"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                />
            </AnimatePresence>
        </div>
    );
}

export default AboutSection;