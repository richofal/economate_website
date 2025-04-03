"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import Profil from "../components/Profil";

const UserAktivitas = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Profil />
      </div>
    </div>
  );
};

export default UserAktivitas;
