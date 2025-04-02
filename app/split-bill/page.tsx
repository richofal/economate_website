"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import SplitBill from "../components/SplitBill";

const UserAktivitas = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <SplitBill />
      </div>
    </div>
  );
};

export default UserAktivitas;
