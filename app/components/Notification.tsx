"use client";

import React, { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";

interface Notification {
  id: number;
  userId: string;
  message: string;
  type: "success" | "error" | "info";
}

const Notification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error" | "info">("info");
  const [selectedUserId, setSelectedUserId] = useState("user123");
  const [status, setStatus] = useState<string | null>(null);
  const userIds = ["user123", "user456", "user789"];

  const addNotification = (
    userId: string,
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    const id = Date.now();
    const newNotification: Notification = { id, userId, message, type };
    setNotifications((prev) => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, 5000);
  };

  const handleSendNotification = () => {
    if (message.trim()) {
      try {
        addNotification(selectedUserId, message, type);
        setMessage("");
        setStatus("Notifikasi berhasil dikirim!");
      } catch {
        setStatus("Gagal mengirim notifikasi.");
      }

      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Kirim Notifikasi</h1>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Masukkan pesan notifikasi"
          className="border text-gray-700 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value as "success" | "error" | "info")
          }
          className="border text-gray-700 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="success">Sukses</option>
          <option value="error">Error</option>
          <option value="info">Info</option>
        </select>
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="border text-gray-700 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {userIds.map((userId) => (
            <option key={userId} value={userId}>
              {userId}
            </option>
          ))}
        </select>
        <button
          onClick={handleSendNotification}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
        >
          Kirim Notifikasi
        </button>
      </div>

      {status && (
        <div className="text-center text-white bg-gray-700 p-2 rounded mt-4 shadow-md">
          {status}
        </div>
      )}

      <div className="fixed bottom-4 right-4 space-y-2 w-80">
        {notifications
          .filter((notif) => notif.userId === selectedUserId)
          .map((notif) => (
            <div
              key={notif.id}
              className={`p-4 rounded shadow-lg text-white flex items-center space-x-3 transform transition-all ${
                notif.type === "success"
                  ? "bg-green-500"
                  : notif.type === "error"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            >
              {notif.type === "success" && <FaCheckCircle />}
              {notif.type === "error" && <FaExclamationCircle />}
              {notif.type === "info" && <FaInfoCircle />}
              <span>{notif.message}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notification;
