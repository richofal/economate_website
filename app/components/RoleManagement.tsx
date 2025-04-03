"use client";

import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const RoleManagement = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Moderator",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.j@example.com",
      role: "User",
    },
  ]);

  const roles = ["Admin", "User"];

  const updateUserRole = (id: number, newRole: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg text-white">
      <h3 className="text-3xl font-bold text-white mb-6 font-sans">
        Manajemen Role
      </h3>
      <table className="w-full text-gray-800 border-collapse">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="border border-indigo-700 px-4 py-2">ID</th>
            <th className="border border-indigo-700 px-4 py-2">Nama</th>
            <th className="border border-indigo-700 px-4 py-2">Email</th>
            <th className="border border-indigo-700 px-4 py-2">Role</th>
            <th className="border border-indigo-700 px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`${
                index % 2 === 0 ? "bg-blue-400" : "bg-blue-300"
              } hover:bg-indigo-500 transition duration-300 ease-in-out`}
            >
              <td className="border border-indigo-700 px-4 py-2 text-center">
                {user.id}
              </td>
              <td className="border border-indigo-700 px-4 py-2">
                {user.name}
              </td>
              <td className="border border-indigo-700 px-4 py-2">
                {user.email}
              </td>
              <td className="border border-indigo-700 px-4 py-2 text-center">
                {user.role}
              </td>
              <td className="border border-indigo-700 px-4 py-2 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <select
                    className="border border-indigo-300 rounded px-2 py-1 bg-white text-gray-800 hover:bg-gray-100 transition duration-200"
                    value={user.role}
                    onChange={(e) => updateUserRole(user.id, e.target.value)}
                  >
                    {roles.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <FaUserEdit className="text-white text-lg cursor-pointer hover:text-gray-300 transition duration-200" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
