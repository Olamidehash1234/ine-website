export default function Navbar() {
  return (
    <section className="section">
      <div className="bg-[#00048F] py-[20px] px-[16px] sm:py-[30px] sm:px-[80px] flex justify-between items-center">
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>

        <div className="items-center space-x-[30px] text-white text-[16px] font-medium">
          <a href="">About</a>
          <a href="">Industries</a>
          <a href="">Pricing</a>
          <a href="">Testimonials</a>
        </div>
      </div>

      <img src="/hero/illustration.png" alt="" className="w-full h-full border-none funny-image" />
    </section>
  );
}
