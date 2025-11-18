"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const router = useRouter();
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleNoticeClick = () => {
    setIsNoticeOpen(true);
  };

  const handleCloseNotice = () => {
    setIsNoticeOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between gap-4 px-4 py-3 bg-transparent backdrop-blur-sm z-10">
        <div className="flex items-center gap-3 h-[40px]">
          <img
            src="/logo.png"
            alt="Smart Diagram"
            className="h-full w-auto select-none cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          />
          {/* <h1 className="text-xl font-semibold text-gray-800 select-none">Smart Diagram</h1> */}
        </div>
        <button
          type="button"
          onClick={handleNoticeClick}
          className="ml-auto text-xs sm:text-sm px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-100 hover:text-pink-800 transition-colors"
        >
          🎁 进群限时领取免费 claude-4.5-sonnet key
        </button>
      </header>

      {isNoticeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={handleCloseNotice} />
          <div className="relative bg-white rounded-lg border border-gray-200 w-full max-w-sm mx-4 overflow-hidden shadow-lg">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <h2 className="text-sm font-semibold text-gray-900">
                🎁 进群限时领取免费 claude-4.5-sonnet key
              </h2>
              <button
                type="button"
                onClick={handleCloseNotice}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none px-2"
                aria-label="关闭"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <img
                src="/qrcode.png"
                alt="进群二维码"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
