"use client";

import React from "react";
import AdminSidebar from "../components/AdminSideBar";
import UserDataTable from "../components/UserDataTable";

const AdminPage = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-auto p-6">
        <section className="mb-10">
          <UserDataTable />
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
