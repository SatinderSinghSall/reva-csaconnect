import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user?.name || "User"}!
      </h1>
      <p className="text-gray-700">This is your dashboard.</p>
    </div>
  );
};

export default DashboardPage;
