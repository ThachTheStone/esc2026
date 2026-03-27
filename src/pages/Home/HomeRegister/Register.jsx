import React from "react";
import "./Register.css";

const Register = () => {
    return (
        <div className="registerSection">
            {/* Khung chứa ảnh nền. Sau này bạn chỉ cần thả ảnh vào CSS */}
            <div className="registerImagePlaceholder">
                <a 
                    href="https://forms.gle/29UFPSqUqQGGKg7Q8" 
                    className="register-btn-banner" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Register now <span>→</span>
                </a>
                {/* Đã xóa dòng chữ "English Speaking Competition 2026" */}
            </div>
        </div>
    );
};

export default Register;