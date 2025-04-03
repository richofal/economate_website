"use client";

import React, { useState } from "react";

const UserDataTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 25 },
    { id: 3, name: "Alice Johnson", email: "alice.j@example.com", age: 35 },
  ]);

  const deleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const addUser = () => {
    const name = prompt("Masukkan nama pengguna:");
    const email = prompt("Masukkan email pengguna:");
    const age = prompt("Masukkan usia pengguna:");

    if (name && email && age && !isNaN(Number(age))) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
        age: Number(age),
      };
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
  };

  const updateUser = (id: number) => {
    const user = users.find((u) => u.id === id);
    if (!user) return;

    const name = prompt("Masukkan nama pengguna baru:", user.name);
    const email = prompt("Masukkan email pengguna baru:", user.email);
    const age = prompt("Masukkan usia pengguna baru:", user.age.toString());

    if (name && email && age && !isNaN(Number(age))) {
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === id ? { ...u, name, email, age: Number(age) } : u
        )
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Manajemen Pengguna</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-green-600 transition duration-300"
        onClick={addUser}
      >
        Tambah Pengguna
      </button>
      <table className="w-full text-black border-collapse bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Usia</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
              } hover:bg-gray-200 transition duration-300`}
            >
              <td className="border px-4 py-2 text-center">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2 text-center">{user.age}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="text-red-500 hover:text-red-700 transition duration-300"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>{" "}
                |{" "}
                <button
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                  onClick={() => updateUser(user.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
