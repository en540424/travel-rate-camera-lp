"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "機能", href: "#features" },
    { label: "使い方", href: "#howto" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl">📸</span>
          <span className="font-black text-gray-900 text-base">旅レートカメラ</span>
        </a>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl text-sm transition-colors shadow-sm"
          >
            公開通知を受け取る
          </a>
        </nav>

        {/* モバイルハンバーガー */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
          aria-label="メニュー"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium py-2.5 px-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white font-bold py-3 px-3 rounded-xl text-center mt-2"
            >
              🔔 公開通知を受け取る
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
