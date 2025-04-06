import React from "react";
import { Navigate } from "react-router-dom";

// PrivateRoute kiểm tra xem người dùng đã đăng nhập chưa
const PrivateRoute = ({ element }) => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    // Nếu không có user trong localStorage, điều hướng về trang login
    return <Navigate to="/login" />;
  }

  return element; // Nếu đã đăng nhập, render trang yêu cầu
};

export default PrivateRoute;
