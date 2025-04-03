"use client";

import React from "react";
import AdminSidebar from "../components/AdminSideBar";
import ActivityLog from "../components/ActivityLog";

const AdminPage = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-auto p-6">
        <section>
          <ActivityLog />
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
