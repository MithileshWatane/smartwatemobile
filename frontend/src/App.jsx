/* eslint-disable no-unused-vars */
import Landingpage from './landingpage'
import Navbar from './navbar'
import Footer from './footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Report from './report'; // Adjust the path as needed
import Reward from './reward'; // Adjust the path as needed
import Marketplace from './marketplace';
import { ClerkProvider, useUser } from '@clerk/clerk-react';
import AdminLogin from './adminLogin';
import AdminDashboard from './adminDashboard';
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from "./adminnavbar";
import React, { useState, useEffect } from "react";
import Chatbot from './Chatbot';
import Workeradmin from './workeradmin';
import Workerform from './workerform';
import Worker from './worker';
import Review from './review';
import WasteDetectionONNX from "./components/WasteDetectionONNX";


function App() {
  const { user } = useUser();

  if (user) {
    console.log('user ID: ', user.id);
  }
  // ✅ Retrieve stored login state from localStorage
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  // ✅ Update localStorage when isAdmin changes
  useEffect(() => {
    localStorage.setItem("isAdmin", isAdmin);
  }, [isAdmin]);

  return (
    <Router>
      <ToastContainer />

      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Landingpage />
              <Footer />
            </>
          }
        />

        {/* Report Route */}
        <Route
          path="/report"
          element={
            <>
              <Navbar />
              <Report />
              <Footer />
            </>
          }
        />

        {/* Reward Route */}
        <Route
          path="/reward"
          element={
            <>
              <Navbar />
              <Reward />
              <Footer />
            </>
          }
        />

        {/* Marketplace Route */}
        <Route
          path="/marketplace"
          element={
            <>
              <Navbar />
              <Marketplace />
              <Footer />
            </>
          }
        />

        {/* Review Route */}
        <Route
          path="/review"
          element={
            <>
              <Navbar />
              <Review />
              <Footer />
            </>
          }
        />

        {/* Worker Routes */}
        <Route
          path="/worker"
          element={
            <>
              <Navbar />
              <Worker />
              <Footer />
            </>
          }
        />

        <Route
          path="/workerform"
          element={
            <>
              <Navbar />
              <Workerform />
              <Footer />
            </>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/login"
          element={<AdminLogin setIsAdmin={setIsAdmin} />}
        />

        <Route
          path="/admin/dashboard"
          element={
            isAdmin ? (
              <>
                <AdminNavbar />
                <AdminDashboard />
              </>
            ) : (
              <AdminLogin setIsAdmin={setIsAdmin} />
            )
          }
        />

        <Route
          path="/admin/workers"
          element={
            isAdmin ? (
              <>
                <AdminNavbar />
                <Workeradmin />
              </>
            ) : (
              <AdminLogin setIsAdmin={setIsAdmin} />
            )
          }
        />

        {/* Waste Detection ONNX Route */}
        <Route
          path="/detection"
          element={<WasteDetectionONNX />}
        />
      </Routes>

      {/* Chatbot - Available on all pages */}
      <Chatbot />
    </Router>
  )
}

export default App
