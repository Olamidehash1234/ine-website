import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Toast from "../../components/Toast";
import PaystackPop from "@paystack/inline-js";

export default function SignupSection() {
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select a role");
  const [selectedPricing, setSelectedPricing] = useState("Starter (₦35,000)");
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
  const pricingOptions = ["Starter (₦35,000)", "Hybrid Growth (₦50,000)"];

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getSubscriptionPlanId = (pricing: string) => {
    // You'll need to create these plan IDs in your Paystack dashboard
    return pricing.includes("Starter")
      ? import.meta.env.VITE_PAYSTACK_STARTER_PLAN_ID
      : import.meta.env.VITE_PAYSTACK_HYBRID_PLAN_ID;
  };

  const handlePaystackSuccess = (reference: PaystackTransaction) => {
    console.log("Payment successful!", reference);
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
        (response) => {
          console.log("SUCCESS!", {
            status: response.status,
            text: response.text,
            timestamp: new Date().toISOString(),
          });
          setToast({
            show: true,
            message: "Thank you! Your subscription has been submitted successfully.",
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
    setSelectedPricing("Starter (₦35,000)");
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
        (response) => {
          console.log("SUCCESS!", {
            status: response.status,
            text: response.text,
            timestamp: new Date().toISOString(),
          });
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
    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      plan: getSubscriptionPlanId(selectedPricing), // Use plan instead of amount
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
            Clarity gives you the blocks & components you need to create a truly
            professional website.
          </p>
        </div>

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
          <p className="text-sm lg:text-[21px] poppins lg:leading-[34px] max-w-md mb-6 leading-relaxed">
            “I’ve seen a huge change in my son. He’s more focused, confident,
            and always talking about the projects they’re building.”
          </p>

          <div className="flex items-center gap-3">
            <img
              src="/man.png"
              alt="Devon Lane"
              className="w-10 h-10 lg:w-[45px] lg:h-[45px] rounded-full border-white"
            />
            <div>
              <p className="font-semibold poppins text-sm">Mr. Adeyemi</p>
              <p className="text-xs poppins text-white/70">Parent (CU)</p>
            </div>
          </div>
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
      <div className="bg-[#F8FAFC] flex flex-col justify-center items-center lg:w-[60%] py-12 px-6 lg:px-16">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent w-full max-w-[600px] space-y-6 poppins"
        >
          <div className="flex flex-col lg:flex-row gap-4">
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
                className="w-full border border-gray-300 rounded-md px-4 py-[12px] focus:outline-none"
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
                className="w-full border border-gray-300 rounded-md px-4 py-[12px] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#090914] mb-1">
              Whatsapp Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
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
              <svg
                className={`w-4 h-4 transition-transform ${isRoleOpen ? "rotate-180" : ""
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
              <svg
                className={`w-4 h-4 transition-transform ${isPricingOpen ? "rotate-180" : ""
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

          <div className="text-sm text-gray-600 mb-4">
            <p>By subscribing, you agree to automatic monthly payments. You can cancel anytime through your payment provider.</p>
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
              className={`w-full font-medium rounded-md py-3 transition ${isPaymentComplete
                ? "bg-[#0066FF] text-white hover:bg-[#0050d1]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              {isPaymentComplete ? "Submit" : "Complete Payment First"}
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
