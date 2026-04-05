import React from 'react';
import './ReasonCard.css';

// Thêm prop titleColor vào đây
const ReasonCard = ({ title, content, titleColor }) => {
    return (
        <div className="reasonCard">
            {/* Sử dụng style inline để đổi màu. Nếu không truyền màu, mặc định sẽ là màu trắng (#ffffff) */}
            <h3 style={{ color: titleColor || '#CBEDFF' }}>
                {title}
            </h3>
            <p>{content}</p>
        </div>
    );
};

export default ReasonCard;