// src/layouts/UserLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UserLayout = () => {
  return (
    <div className="user-layout" >
      <Header />
      <main style={{ minHeight: '80vh'}}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default UserLayout;
