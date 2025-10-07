import { useState, useRef, useEffect } from 'react';

export default function SignupSection() {
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Select a role');
  const [selectedPricing, setSelectedPricing] = useState('Starter (₦35,000)');

  const roleDropdownRef = useRef<HTMLDivElement>(null);
  const pricingDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (roleDropdownRef.current && !roleDropdownRef.current.contains(event.target as Node)) {
        setIsRoleOpen(false);
      }
      if (pricingDropdownRef.current && !pricingDropdownRef.current.contains(event.target as Node)) {
        setIsPricingOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const roles = ['Frontend Development', 'Backend Development', "UI/UX Design", "Project Management"];
  const pricingOptions = ['Starter (₦35,000)', 'Hybrid Growth (₦50,000)'];

  return (
    <section className="flex flex-col lg:flex-row min-h-screen font-sans w-full">
      {/* Left section */}
      <div className="bg-[#2563EB] text-white flex flex-col justify-between lg:w-[40%] px-8 lg:px-[100px] py-12 lg:py-[80px] relative overflow-hidden">
        {/* Top content */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <a href="/"><img src="/ine.svg" alt="" /></a>
          </div>

          <h2 className="text-3xl lg:text-4xl font-semibold lg:leading-[120%] leading-snug mb-4">
            Welcome to Image <br /> Nation EduTech
          </h2>

          <p className="text-white/80 max-w-[430px] poppins lg:text-[18px] lg:leading-[26px]">
            Clarity gives you the blocks & components you need to create a truly
            professional website.
          </p>
        </div>

        {/* Bottom testimonial */}
        <div className="mt-12">
          <div className="flex gap-1 mb-3">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.257L12 19.771l-7.417 3.756L6 15.27 0 9.423l8.332-1.268z" />
                </svg>
              ))}
          </div>
          <p className="text-sm sm:text-[21px] poppins lg:leading-[34px] max-w-md mb-6 leading-relaxed">
            “I’ve seen a huge change in my son. He’s more focused, confident, and always talking about the projects they’re building. It’s been more than a program, it’s a direction for his future.”
          </p>

          <div className="flex items-center gap-3">
            <img
              src="/man.png"
              alt="Devon Lane"
              className="w-10 h-10 lg:w-[45px] lg:h-[45px] rounded-full border-white"
            />
            <div>
              <p className="font-semibold poppins text-sm">Mr. Adeyemi</p>
              <p className="text-xs poppins text-white/70">
                Parent (CU)
              </p>
            </div>
          </div>
        </div>

        {/* Curved accent */}
        <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,100 C150,200 350,0 500,100 L500,150 L0,150 Z"
              fill="rgba(255,255,255,0.2)"
            ></path>
          </svg>
        </div>
      </div>

      {/* Right section */}
      <div className="bg-[#F8FAFC] flex flex-col justify-center items-center lg:w-[60%] py-12 px-6 lg:px-16">
        <form className="bg-transparent w-full max-w-[600px] space-y-6 poppins">
          {/* Name and Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block poppins text-sm font-medium text-[#090914] mb-1">
                Full name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-[12px] focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#090914] mb-1">
                Email address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-[12px] focus:outline-none"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-[#090914] mb-1">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-[12px] focus:outline-none"
            />
          </div>

          {/* Role Dropdown */}
          <div className="relative" ref={roleDropdownRef}>
            <label className="block text-sm font-medium text-[#090914] mb-1">
              Pick a role
            </label>
            <button
              type="button"
              className="w-full border border-gray-300 rounded-md px-4 py-[12px] bg-white text-left flex justify-between items-center"
              onClick={() => setIsRoleOpen(!isRoleOpen)}
            >
              {selectedRole}
              <svg className={`w-4 h-4 transition-transform ${isRoleOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isRoleOpen && (
              <div className="absolute z-10 w-full mt-[8px] bg-white border border-gray-300 rounded-[12px] overflow-hidden shadow-lg">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="px-4 py-[14px] hover:bg-[#3663EB] hover:text-white cursor-pointer"
                    onClick={() => {
                      setSelectedRole(role);
                      setIsRoleOpen(false);
                    }}
                  >
                    {role}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pricing Dropdown */}
          <div className="relative" ref={pricingDropdownRef}>
            <label className="block text-sm font-medium text-[#090914] mb-1">
              Select Package
            </label>
            <button
              type="button"
              className="w-full border border-gray-300 rounded-md px-4 py-[12px] bg-white text-left flex justify-between items-center"
              onClick={() => setIsPricingOpen(!isPricingOpen)}
            >
              {selectedPricing}
              <svg className={`w-4 h-4 transition-transform ${isPricingOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isPricingOpen && (
              <div className="absolute z-10 w-full mt-[8px] bg-white border border-gray-300 rounded-[12px] overflow-hidden shadow-lg">
                {pricingOptions.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-[14px] hover:bg-[#3663EB] hover:text-white cursor-pointer"
                    onClick={() => {
                      setSelectedPricing(option);
                      setIsPricingOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#0066FF] text-white font-medium rounded-md py-3 hover:bg-[#0050d1] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
