import React, { useState } from "react";
import Draggable from "react-draggable";
import fb from "../../images/fb.jpg";
import fb1 from "../../images/fb1.jpg";
import fb3 from "../../images/fb3.jpg";
import fb4 from "../../images/fb4.jpg";
import fb2 from "../../images/fb2.jpg";
const ProfilePage = () => {
  const [hover, setHover] = useState(false);
  const friends = [fb2, fb1, fb3, fb4]; // Dùng chính ảnh fb.jpg

  return (
    <div className="w-full bg-gray-800 text-white flex flex-col items-center">
      {/* Cover Photo */}
      <div className="w-full h-60 bg-gray-700 relative">
        <button className="absolute bottom-4 right-4 bg-white text-black px-3 py-1 rounded text-sm font-semibold">
          📷 Thêm ảnh bìa
        </button>
      </div>

      {/* Profile Section */}
      <div className="relative w-full max-w-5xl -mt-20 flex items-center pl-10">
        {/* Avatar (Draggable) - Làm to hơn */}
        <Draggable>
          <div
            className={`w-48 h-48 rounded-full border-4 border-gray-100 overflow-hidden cursor-pointer transition-all ${
              hover ? "border-blue-500 shadow-lg scale-110" : ""
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={fb}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            {hover && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm font-semibold">
                ✏️ Chỉnh sửa ảnh
              </div>
            )}
          </div>
        </Draggable>

        {/* Profile Info */}
        <div className="ml-5 mt-20">
          <h1 className="text-3xl font-bold">Võ Chí Triều</h1>
          <p className="text-gray-400">2.5K người bạn</p>

          {/* Friends List */}
          <div className="flex mt-2">
            {friends.map((friend, i) => (
              <img
                key={i}
                src={friend}
                alt={`Friend ${i + 1}`}
                className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover -ml-2"
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex gap-2 mb-6">
            <button className="bg-blue-600 px-4 py-2 text-white rounded text-sm font-semibold">
              + Thêm vào tin
            </button>
            <button className="bg-gray-700 px-4 py-2 text-white rounded text-sm font-semibold">
              ✏️ Chỉnh sửa trang cá nhân
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
