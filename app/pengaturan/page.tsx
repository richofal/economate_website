"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import Pengaturan from "../components/Pengaturan";

const UserAktivitas = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Pengaturan />
      </div>
    </div>
  );
};

export default UserAktivitas;
