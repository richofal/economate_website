"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import Belanja from "../components/Belanja";

const UserAktivitas = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Belanja />
      </div>
    </div>
  );
};

export default UserAktivitas;
