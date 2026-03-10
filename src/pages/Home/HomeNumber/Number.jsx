import React, { useEffect, useRef } from "react";
import "./Number.css";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// 1. Tạo một Component phụ để xử lý logic đếm số
const Counter = ({ to, suffix }) => {
    const ref = useRef(null);
    
    // Kiểm tra xem thẻ này đã xuất hiện trên màn hình chưa (chỉ kích hoạt 1 lần)
    const isInView = useInView(ref, { once: true }); 
    
    const count = useMotionValue(0);
    // Làm tròn số và nối thêm chữ phía sau (ví dụ: "+", "+ million VND")
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            // Hiệu ứng chạy từ 0 đến biến 'to', thời gian 'duration' là 1s
            animate(count, to, { duration: 1 }); 
        }
    }, [isInView, count, to]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

// 2. Lắp ráp vào giao diện chính
const Number = () => {
    return (
        <div className="numberContainer">
            <h1>ESC in Numbers</h1>
            <div className="numberItems">
                <div className="numberItem">
                    {/* Truyền số đích đến và phần chữ nối phía sau vào */}
                    <h2><Counter to={3} suffix="+" /></h2>
                    <p>Seasons</p>
                </div>
                
                <div className="numberItem">
                    <h2><Counter to={20} suffix="+" /></h2>
                    <p>Universities</p>
                </div>
                
                <div className="numberItem">
                    <h2><Counter to={200} suffix="+" /></h2>
                    <p>Contestants</p>
                </div>

                <div className="numberItem-full">
                    <h2><Counter to={50} suffix="+ million VND" /></h2>
                    <p>Total prize</p>
                </div>
            </div>
        </div>
    );
}

export default Number;