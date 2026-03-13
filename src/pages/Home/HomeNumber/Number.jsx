import React, { useEffect, useRef } from "react";
import "./Number.css";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import microIcon from "../../../assets/icon/microphone-svgrepo-com.svg";
import universityIcon from "../../../assets/icon/university-svgrepo-com.svg";
import peopleIcon from "../../../assets/icon/people-svgrepo-com.svg";
import prizeIcon from "../../../assets/icon/achivement-mission-sport-svgrepo-com.svg";

// --- COMPONENT XỬ LÝ ĐẾM SỐ (TÍCH HỢP FRAMER MOTION) ---
const Counter = ({ to, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 }); // Bắt đầu chạy khi khu vực hiện 50%
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            animate(count, to, { duration: 1.5, ease: "easeOut" }); // Chạy trong 1.5s
        }
    }, [isInView, count, to]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

// --- COMPONENT CHÍNH ---
const Number = () => {
    return (
        <div className="numberContainer">
            {/* Cột trái: Tiêu đề và nội dung */}
            <div className="numberLeft">
                <h1>
                    Competition <span className="highlight-blue">Highlights</span>
                </h1>
                <p>A snapshot of ESC's growth, impact, and nationwide reach over the years.</p>
            </div>

            {/* Cột phải: 4 thông số hiển thị Animation */}
            <div className="numberRight">
                {/* Khối 1 */}
                <div className="statItem">
                    <div className="statIcon">
                        <img src={microIcon} alt=""/>
                    </div>
                    <div className="statText">
                        <h2><Counter to={3} suffix="+" /></h2>
                        <p>seasons</p>
                    </div>
                </div>

                {/* Khối 2 */}
                <div className="statItem">
                    <div className="statIcon">
                        <img src={universityIcon} alt=""/>
                    </div>
                    <div className="statText">
                        <h2><Counter to={20} suffix="+" /></h2>
                        <p>universities and colleges</p>
                    </div>
                </div>

                {/* Khối 3 */}
                <div className="statItem">
                    <div className="statIcon">
                        <img src={peopleIcon} alt=""/>
                    </div>
                    <div className="statText">
                        <h2><Counter to={200} suffix="+" /></h2>
                        <p>candidates</p>
                    </div>
                </div>

                {/* Khối 4 */}
                <div className="statItem">
                    <div className="statIcon">
                        <img src={prizeIcon} alt=""/>
                    </div>
                    <div className="statText">
                        <h2><Counter to={70} suffix="+ million VND" /></h2>
                        <p>total prize value</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Number;