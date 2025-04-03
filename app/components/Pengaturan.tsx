"use client";
import React, { useState } from "react";
import Image from "next/image";

const Pengaturan = () => {
  const [profile, setProfile] = useState({
    photo: "",
    fullName: "",
    nickname: "",
    gender: "",
    email: "",
    birthDate: "",
  });

  const [settings, setSettings] = useState({
    language: "Indonesia",
    notifications: true,
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSettingsChange = (
    field: keyof typeof settings,
    value: string | boolean
  ) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-blue-50 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-[#089BFF] text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Pengaturan</h2>
        </div>

        {/* Profil Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Profil</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-full border border-black flex items-center justify-center overflow-hidden">
                {profile.photo ? (
                  <Image
                    src={profile.photo}
                    alt="Foto Profil"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">No Photo</span>
                )}
              </div>
              <button
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "image/*";
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        if (reader.result) {
                          setProfile((prev) => ({
                            ...prev,
                            photo: reader.result as string,
                          }));
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  };
                  input.click();
                }}
                className="px-4 py-2 bg-[#089BFF] text-white rounded-lg font-bold hover:bg-blue-600"
              >
                Unggah Foto
              </button>
            </div>
            <div>
              <label className="block text-black font-bold mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) =>
                  handleProfileChange("fullName", e.target.value)
                }
                className="w-full text-black border border-black rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-black font-bold mb-2">
                Nama Panggilan
              </label>
              <input
                type="text"
                value={profile.nickname}
                onChange={(e) =>
                  handleProfileChange("nickname", e.target.value)
                }
                className="w-full text-black border border-black rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-black font-bold mb-2">
                Jenis Kelamin
              </label>
              <select
                value={profile.gender}
                onChange={(e) => handleProfileChange("gender", e.target.value)}
                className="w-full text-black border border-black rounded-lg px-4 py-2"
              >
                <option value="">Pilih</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div>
              <label className="block text-black font-bold mb-2">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleProfileChange("email", e.target.value)}
                className="w-full text-black border border-black rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-black font-bold mb-2">
                Tanggal Lahir
              </label>
              <input
                type="date"
                value={profile.birthDate}
                onChange={(e) =>
                  handleProfileChange("birthDate", e.target.value)
                }
                className="w-full text-black border border-black rounded-lg px-4 py-2"
              />
            </div>
          </div>
        </div>

        {/* Pengaturan Aplikasi Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">
            Pengaturan Aplikasi
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-black font-bold mb-2">Bahasa</label>
              <select
                value={settings.language}
                onChange={(e) =>
                  handleSettingsChange("language", e.target.value)
                }
                className="w-full border text-black border-black rounded-lg px-4 py-2"
              >
                <option value="Indonesia">Indonesia</option>
                {/* <option value="English">English</option> */}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-black font-bold">Notifikasi</label>
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) =>
                  handleSettingsChange("notifications", e.target.checked)
                }
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        {/* Bantuan Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Bantuan</h3>
          <p className="text-gray-700">
            Jika Anda membutuhkan bantuan, silakan hubungi tim dukungan kami di{" "}
            <a
              href="mailto:support@economate.com"
              className="text-[#089BFF] underline"
            >
              support@economate.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pengaturan;
