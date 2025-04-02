"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import Analisis from "../components/Analisis";

const UserAktivitas = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Analisis />
      </div>
    </div>
  );
};

export default UserAktivitas;
