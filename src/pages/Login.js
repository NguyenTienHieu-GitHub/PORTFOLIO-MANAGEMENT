import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/UseContext"; // Import hook từ UserContext
import users from "../assets/data/user.json"; // Import dữ liệu người dùng từ file JSON
import "../assets/css/Login.css"; // Import file CSS mới

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser(); // Dùng setUser để cập nhật thông tin người dùng vào context

  // Kiểm tra nếu đã có thông tin người dùng trong localStorage khi trang được tải
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate("/home"); // Nếu đã có user trong localStorage, điều hướng về trang Home
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra thông tin đăng nhập
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      // Tạo một bản sao của đối tượng user mà không chứa mật khẩu
      const { password, ...userWithoutPassword } = user;

      // Lưu thông tin người dùng vào localStorage mà không có mật khẩu
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));

      // Cập nhật context
      setUser(userWithoutPassword);

      // Điều hướng đến trang Home
      navigate("/home");
    } else {
      setError("Email hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
