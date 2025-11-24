import { useEffect, useState } from "react";

export default function SignupMarquee() {
  const universities = [
    "Ahmadu Bello University",
    "University of Ibadan",
    "University of Lagos",
    "Covenant University",
    "University of Nigeria, Nsukka",
    "Obafemi Awolowo University",
    "University of Benin",
    "University of Ilorin",
    "Bayero University Kano",
    "University of Port Harcourt",
    "Federal University of Technology Minna",
    "University of Jos",
    "University of Maiduguri",
    "Lagos State University",
    "Ekiti State University",
    "Modibbo Adama University",
    "University of Abuja",
    "Rivers State University",
    "Delta State University",
    "Pan-Atlantic University",
    "American University of Nigeria",
    "Nigerian Defence Academy",
    "University of Agriculture Makurdi",
    "Federal University Oye-Ekiti",
  ];

  const firstNames = [
    "Chidinma","Chukwuemeka","Aisha","Tunde","Ifeoma","Ade","Fatima","Emeka",
    "Sadiq","Amaka","Ngozi","Kamil","Uche","Hauwa","Samuel","Bolade","Ikenna",
    "Bintu","Zainab","Oluchi","Seun","Yusuf","Oluwatobi","Musa","Kelechi",
    "Ibrahim","Rasheed","Temitope","Ijeoma","Nana","Osas","Bamidele","Ibrahimah"
  ];
  const lastNames = [
    "Okonkwo","Abubakar","Oluwole","Olagunju","Balogun","Eze","Ibrahim","Adebayo",
    "Ojo","Nwankwo","Akintola","Ogundele","Afolabi","Onyeka","Ali","Ajayi",
    "Ogunleye","Nnamani","Abiola","Okorie","Adenuga","Chukwu","Oladipo","Bello",
    "Suleiman","Akinsanya","Owusu","Ibe","Usman","Okafor","Akanbi"
  ];

  const plans = ["Starter", "Hybrid Growth"];

  const random = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

  const capitalize = (s: string) =>
    s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s;

  const makeMessage = () => {
    const name = `${capitalize(random(firstNames))} ${capitalize(random(lastNames))}`;
    const uni = random(universities);
    const plan = random(plans);
    const planLabel = plan === "Hybrid Growth" ? "hybrid plan" : "starter plan";
    return `${name} (${uni}) just registered for the ${planLabel}.`;
  };

  const [marqueeItems, setMarqueeItems] = useState<string[]>(
    () => Array.from({ length: 6 }).map(() => makeMessage())
  );

  useEffect(() => {
    const t = setInterval(() => {
      setMarqueeItems((prev) => {
        const next = [makeMessage(), ...prev.slice(0, prev.length - 1)];
        return next;
      });
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="absolute left-0 right-0 bottom-[10px] bg-[#3663EB] shadow-md overflow-hidden border border-gray-100">
        <div className="px-4 py-2 text-[14px] text-white">
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-marquee">
              {marqueeItems.concat(marqueeItems).map((m, i) => (
                <span key={i} className="whitespace-nowrap">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-marquee {
          display: inline-flex;
          align-items: center;
          gap: 3rem;
          animation: marquee-scroll 70s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
