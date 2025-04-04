import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/UseContext"; // Import hook từ UserContext
import users from "../assets/data/user.json"; // Import dữ liệu người dùng từ file JSON

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
      // Lưu thông tin vào localStorage và context
      localStorage.setItem("user", JSON.stringify(user)); // Lưu thông tin người dùng vào localStorage
      setUser(user); // Cập nhật context với thông tin người dùng
      navigate("/home"); // Điều hướng đến trang Home
    } else {
      setError("Email hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center">Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
