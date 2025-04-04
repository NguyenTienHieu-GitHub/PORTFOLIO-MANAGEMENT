import React, { createContext, useContext, useState, useEffect } from "react";

// Tạo Context cho người dùng
const UserContext = createContext();

// Hook để sử dụng UserContext trong các component khác
export const useUser = () => useContext(UserContext);

// Component UserProvider cung cấp thông tin người dùng cho các component con
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Kiểm tra nếu người dùng đã đăng nhập từ localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Lấy thông tin người dùng từ localStorage và cập nhật context
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
