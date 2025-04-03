"use client";

import React from "react";
import AdminSidebar from "../components/AdminSideBar";
import ExportCSV from "../components/ExportCSV";

const AdminPage = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-auto p-6">
        <section>
          <ExportCSV />
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
