"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import Activity from "../components/Activity";

const UserAktivitas = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Activity />
      </div>
    </div>
  );
};

export default UserAktivitas;
