import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="section relative">
      <div className="bg-[#00048F] py-[20px] px-[16px] sm:py-[30px] sm:px-[80px] flex justify-between items-center">
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-[30px] text-white text-[16px] font-medium">
          <a href="">About</a>
          <a href="">Industries</a>
          <a href="">Pricing</a>
          <a href="">Testimonials</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-white text-[24px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu */}
          <div className="fixed top-0 right-0 w-[250px] h-full bg-[#00048F] text-white text-[16px] font-medium flex flex-col space-y-[20px] py-[20px] px-[16px] z-20">
            <a href="">About</a>
            <a href="">Industries</a>
            <a href="">Pricing</a>
            <a href="">Testimonials</a>
          </div>
        </>
      )}

      <img src="/hero/illustration.png" alt="" className="w-full h-full border-none funny-image" />
    </section>
  );
}
