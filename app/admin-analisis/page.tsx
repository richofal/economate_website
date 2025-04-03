"use client";

import React from "react";
import AdminSidebar from "../components/AdminSideBar";
import UserAnalytics from "../components/UserAnalytics";

const AdminPage = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-auto p-6">
        <section>
          <UserAnalytics />
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
