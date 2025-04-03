"use client";

import React from "react";
import AdminSidebar from "../components/AdminSideBar";
import DashboardStats from "../components/DashboardStats";

const AdminPage = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-auto p-6">
        {/* Analisis pengguna */}
        <section>
          <h2 className="text-2xl text-black font-semibold mb-4">
            Dashboard Stats
          </h2>
          <DashboardStats />
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
