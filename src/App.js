import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//! Components:
import "../src/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Challenges from "./components/Challenges";
import DeveloperCredit from "./components/DeveloperCredit";

import AuthProvider from "./context/AuthContext";

//! Pages:
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import FeedPage from "./pages/FeedPage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailsPage from "./pages/PostDetailsPage";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* 🔐 Protected Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/feed"
                  element={
                    <ProtectedRoute>
                      <FeedPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/create-post"
                  element={
                    <ProtectedRoute>
                      <CreatePostPage />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/posts/:postId"
                  element={
                    <ProtectedRoute>
                      <PostDetailsPage />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/challenges"
                  element={
                    <ProtectedRoute>
                      <Challenges />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <DeveloperCredit />
            <Footer />
          </div>
        </AuthProvider>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
