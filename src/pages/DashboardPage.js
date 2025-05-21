import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { HammerIcon } from "lucide-react";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col items-center text-center mt-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Welcome, {user?.name?.split(" ")[0] || "User"}!
      </h1>
      <p className="text-gray-600 mb-8">This is your dashboard.</p>

      <div className="flex flex-col items-center gap-4 bg-gray-100 border border-gray-200 rounded-xl px-6 py-10 shadow-md">
        <HammerIcon className="w-10 h-10 text-yellow-500 animate-bounce" />
        <h2 className="text-xl font-semibold text-gray-800">
          Work in Progress...
        </h2>
        <p className="text-gray-600 max-w-sm">
          We’re actively building this feature to give you the best experience.
          Stay tuned — it’s coming soon!
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
