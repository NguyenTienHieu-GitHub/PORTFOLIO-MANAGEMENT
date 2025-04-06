import React from "react";
import { useUser } from "../components/UseContext"; // Import hook để lấy thông tin người dùng
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng trang
import "../assets/css/Profile.css"; // Import file CSS

const Profile = () => {
  const { user } = useUser(); // Lấy thông tin người dùng từ context
  const navigate = useNavigate();

  // Nếu người dùng chưa đăng nhập, chuyển hướng về trang login
  if (!user) {
    navigate("/login");
    return null; // Không hiển thị gì nếu chưa đăng nhập
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title text-success text-center">User Profile</h2>
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>Occupation:</strong> {user.occupation}
          </p>
          <p>
            <strong>Marital Status:</strong> {user.maritalStatus}
          </p>
          <p>
            <strong>Annual Income After Tax:</strong>{" "}
            {user.annualIncomeAfterTax}
          </p>
          <p>
            <strong>Investment Goals:</strong>
            <ul>
              {user.investmentGoals && user.investmentGoals.length > 0 ? (
                user.investmentGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))
              ) : (
                <li>No investment goals set.</li>
              )}
            </ul>
          </p>
          <p>
            <strong>Risk Tolerance:</strong> {user.riskTolerance}
          </p>
          <p>
            <strong>Investment Experience:</strong>{" "}
            {user.investmentExperience || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
