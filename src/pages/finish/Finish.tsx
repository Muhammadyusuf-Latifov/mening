import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Ro'yxatdan o'tganingiz uchun rahmat!</h1>
      <p>Sizning ma’lumotlaringiz qabul qilindi.</p>

      <Button
        type="primary"
        onClick={() => navigate("/")} // kerak bo‘lsa asosiy sahifaga qaytish
        style={{ marginTop: "20px" }}
      >
        Asosiy sahifaga qaytish
      </Button>
    </div>
  );
};

export default ThankYouPage;
