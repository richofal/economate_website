"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();

  const profile = {
    photo: "",
    fullName: "John Doe",
    nickname: "Johnny",
    gender: "Laki-laki",
    email: "john.doe@example.com",
    birthDate: "1990-01-01",
    phone: "08123456789",
    address: "Jl. Contoh Alamat No. 123, Jakarta",
  };

  return (
    <div className="bg-blue-50 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-[#089BFF] text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Profil Saya</h2>
          <p className="text-sm mt-2">Lihat informasi pribadi Anda di sini.</p>
        </div>

        {/* Profil Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">
            Informasi Profil
          </h3>
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
            </div>
            <div>
              <label className="block text-black font-bold mb-2">
                Nama Lengkap
              </label>
              <p className="text-black">{profile.fullName}</p>
            </div>
            <div>
              <label className="block text-black font-bold mb-2">
                Nama Panggilan
              </label>
              <p className="text-black">{profile.nickname}</p>
            </div>
            <div>
              <label className="block text-black font-bold mb-2">
                Jenis Kelamin
              </label>
              <p className="text-black">{profile.gender}</p>
            </div>
            <div>
              <label className="block text-black font-bold mb-2">Email</label>
              <p className="text-black">{profile.email}</p>
            </div>
            <div>
              <label className="block text-black font-bold mb-2">
                Tanggal Lahir
              </label>
              <p className="text-black">{profile.birthDate}</p>
            </div>
            <div>
              <label className="block text-black font-bold mb-2">
                Nomor Telepon
              </label>
              <p className="text-black">{profile.phone}</p>
            </div>
            <div>
              <label className="block text-black font-bold mb-2">Alamat</label>
              <p className="text-black">{profile.address}</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/pengaturan")}
            className="mt-4 px-4 py-2 bg-[#089BFF] text-white rounded-lg font-bold hover:bg-blue-600"
          >
            Edit Profil
          </button>
        </div>

        {/* Tips Section */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-700">Tips Keamanan</h3>
          <ul className="list-disc list-inside mt-4 text-green-800">
            <li>Gunakan kata sandi yang kuat dan unik untuk akun Anda.</li>
            <li>
              Jangan bagikan informasi pribadi Anda kepada pihak yang tidak
              dikenal.
            </li>
            <li>
              Perbarui informasi profil Anda secara berkala untuk menjaga
              keakuratan data.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
