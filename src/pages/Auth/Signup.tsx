import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Toast from "../../components/Toast";
import PaystackPop from "@paystack/inline-js";
import SignupMarquee from "../../components/SignupMarquee";

export default function SignupSection() {
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select a role");
  const [selectedPricing, setSelectedPricing] = useState("Starter (₦75,000)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "loading" as "success" | "error" | "loading",
  });
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [paymentReference, setPaymentReference] = useState("");

  const roleDropdownRef = useRef<HTMLDivElement>(null);
  const pricingDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        roleDropdownRef.current &&
        !roleDropdownRef.current.contains(event.target as Node)
      ) {
        setIsRoleOpen(false);
      }
      if (
        pricingDropdownRef.current &&
        !pricingDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPricingOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const roles = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Project Management",
  ];
  const pricingOptions = ["Starter (₦75,000)", "Hybrid Growth (₦150,000)"];

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Replace plan helper with amount helper
  const getAmountInKobo = (pricing: string) => {
    // Map package labels to one-time amounts (NGN). Convert to kobo (multiply by 100).
    if (pricing.includes("Hybrid")) {
      return 150000 * 100; // ₦150,000 => 15,000,000 kobo
    }
    // default Starter
    return 75000 * 100; // ₦75,000 => 7,500,000 kobo
  };

  const handlePaystackSuccess = (reference: PaystackTransaction) => {
    // console.log("Payment successful!", reference);
    setPaymentReference(reference.reference);
    setIsPaymentComplete(true);

    // Automatically submit form after successful payment
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: selectedRole,
      package: selectedPricing,
      paymentReference: reference.reference,
      time: new Date().toLocaleString(),
    };

    setToast({
      show: true,
      message: "Payment successful! Submitting your application...",
      type: "loading",
    });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // console.log("SUCCESS!")
          setToast({
            show: true,
            message: "Thank you! Your payment has been submitted successfully.",
            type: "success",
          });
          resetForm();
        },
        (error) => {
          console.error("FAILED...", {
            error: error.text,
            timestamp: new Date().toISOString(),
            formData: templateParams,
          });
          setToast({
            show: true,
            message: "Sorry, something went wrong. Please try again later.",
            type: "error",
          });
        }
      );
  };

  const handlePaystackClose = () => {
    setToast({
      show: true,
      message: "Payment cancelled. Please try again.",
      type: "error",
    });
  };

  // Add this helper function after the existing state declarations
  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "" });
    setSelectedRole("Select a role");
    setSelectedPricing("Starter (₦75,000)");
    setIsPaymentComplete(false);
    setPaymentReference("");
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPaymentComplete) {
      setToast({
        show: true,
        message: "Please complete payment first",
        type: "error",
      });
      return;
    }

    setToast({
      show: true,
      message: "Submitting your application...",
      type: "loading",
    });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: selectedRole,
      package: selectedPricing,
      paymentReference: paymentReference,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // console.log("SUCCESS!", {
          //   status: response.status,
          //   text: response.text,
          //   timestamp: new Date().toISOString(),
          // });
          setToast({
            show: true,
            message:
              "Thank you! Your subscription has been submitted successfully.",
            type: "success",
          });
          resetForm(); // Use the new resetForm function instead of individual resets
        },
        (error) => {
          console.error("FAILED...", {
            error: error.text,
            timestamp: new Date().toISOString(),
            formData: templateParams,
          });
          setToast({
            show: true,
            message: `Sorry, something went wrong. Please try again later.`,
            type: "error",
          });
        }
      );
  };

  const handlePayment = () => {
    const paystack = new PaystackPop();
    const amount = getAmountInKobo(selectedPricing);

    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount, // one-time amount in kobo
      onSuccess: (transaction: any) => handlePaystackSuccess(transaction),
      onCancel: handlePaystackClose,
    });
  };

  return (
    <section className="flex flex-col lg:flex-row min-h-screen font-sans w-full">
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onHide={() => setToast({ ...toast, show: false })}
      />
      {/* Left section */}
      <div className="bg-[#2563EB] text-white flex flex-col justify-between lg:w-[40%] px-8 lg:px-[100px] py-12 lg:py-[80px] relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <a href="/">
              <img src="/ine.svg" alt="" />
            </a>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold lg:leading-[120%] leading-snug mb-4">
            Welcome to Image <br /> Nation EduTech
          </h2>
          <p className="text-white/80 max-w-[430px] poppins lg:text-[18px] lg:leading-[26px]">
            Learn in-demand digital and AI skills, gain real project experience, and get career-ready skills before graduation.
          </p>
        </div>

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
      <div className="bg-[#F8FAFC] flex flex-col justify-center items-center lg:w-[60%] py-12 px-6 lg:px-16 relative">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent w-full max-w-[600px] lg:space-y-[20px] poppins"
        >
          <div className="text-end text-[#d11922] mb-[40px]">
            <h1>*Just 5 slots left</h1>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 gap-[10px] ">
            <div className="flex-1">
              <label className="block poppins text-sm font-medium text-[#090914] mb-1">
                Full name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#01010133] mb-[8px] px-3 py-[10px] text-sm placeholder-[#01010180] lg:leading-[24px]  focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#090914] mb-1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#01010133] mb-[8px] px-3 py-[10px] text-sm placeholder-[#01010180] lg:leading-[24px]  focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#090914] mt-[10px] lg:mt-0 mb-1">
              Whatsapp Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#01010133] mb-[8px] px-3 py-[10px] text-sm placeholder-[#01010180] lg:leading-[24px]  focus:outline-none"
            />
          </div>

          {/* Role Dropdown */}
          <div className="relative" ref={roleDropdownRef}>
            <label className="block text-sm font-medium text-[#090914] mt-[13px] lg:mt-0 mb-1">
              Pick a role
            </label>
            <button
              type="button"
              className="w-full border border-gray-300 rounded-md px-3 py-[10px] bg-white text-left flex justify-between items-center"
              onClick={() => setIsRoleOpen(!isRoleOpen)}
            >
              {selectedRole}
              <svg
                className={`w-4 h-4 transition-transform ${
                  isRoleOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
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
          <div className="relative mb-[20px]" ref={pricingDropdownRef}>
            <label className="block text-sm font-medium text-[#090914] mt-[17px] lg:mt-0 mb-1">
              Select Package
            </label>
            <button
              type="button"
              className="w-full border border-gray-300 rounded-md px-3 py-[10px] bg-white text-left flex justify-between items-center"
              onClick={() => setIsPricingOpen(!isPricingOpen)}
            >
              {selectedPricing}
              <svg
                className={`w-4 h-4 transition-transform ${
                  isPricingOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
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

          <div className="text-[13px] text-gray-600 mb-4">
            <p>
              By subscribing, you agree to automatic monthly payments. You can
              cancel anytime through your payment provider.
            </p>
          </div>

          {formData.email && selectedPricing && !isPaymentComplete ? (
            <button
              type="button"
              onClick={handlePayment}
              className="w-full bg-[#0066FF] text-white font-medium rounded-md py-3 hover:bg-[#0050d1] transition"
            >
              Subscribe
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isPaymentComplete}
              className={`w-full font-medium rounded-md py-3 transition mb-[40px] ${
                isPaymentComplete
                  ? "bg-[#0066FF] text-white hover:bg-[#0050d1]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isPaymentComplete ? "Submit" : "Complete Payment First"}
            </button>
          )}
        </form>

        {/* Marquee component */}
        <SignupMarquee />
      </div>
    </section>
  );
}
