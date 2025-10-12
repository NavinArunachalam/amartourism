
import React from "react";
import { Outlet } from "react-router-dom";


const AdminLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <main style={{ flex: 1, padding: "20px" }}>
          <Outlet /> {/* Admin pages like dashboard, category list, etc. */}
        </main>
      </div>
    </div>
   
  );
};

export default AdminLayout;
