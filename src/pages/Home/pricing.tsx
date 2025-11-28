import { useEffect, useState } from "react";

export default function Pricing() {
  // Persisted countdown target (survives reloads)
  const [target, setTarget] = useState<Date>(() => {
    try {
      const saved = localStorage.getItem("pricing_target");
      if (saved) {
        const d = new Date(saved);
        if (!isNaN(d.getTime())) return d;
      }
    } catch {
      // ignore localStorage errors
    }

    // default target if none saved: 60 days + same offsets as before
    const d = new Date();
    d.setDate(d.getDate() + 60);
    d.setHours(d.getHours() + 20);
    d.setMinutes(d.getMinutes() + 54);
    d.setSeconds(d.getSeconds() + 9);

    try {
      localStorage.setItem("pricing_target", d.toISOString());
    } catch {
      /* ignore write errors */
    }
    return d;
  });

  // Ensure saved target is valid and in the future; regenerate and persist if it's in the past
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pricing_target");
      const now = new Date();
      if (saved) {
        const d = new Date(saved);
        if (!isNaN(d.getTime()) && d > now) {
          if (d.getTime() !== target.getTime()) setTarget(d);
          return;
        }
      }
      // saved target missing or expired -> create a fresh future target and persist
      const d = new Date();
      d.setDate(d.getDate() + 60);
      d.setHours(d.getHours() + 20);
      d.setMinutes(d.getMinutes() + 54);
      d.setSeconds(d.getSeconds() + 9);
      localStorage.setItem("pricing_target", d.toISOString());
      setTarget(d);
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, target.getTime() - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      const pad = (n: number) => String(n).padStart(2, "0");

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        mins: pad(mins),
        secs: pad(secs),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section
      id="pricing"
      className="px-[16px] pt-[40px] pb-[80px] lg:px-[80px] lg:pt-[40px] lg:pb-[120px]"
    >
      {/* Header row: title left, countdown right */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[20px] justify-between mb-6">
        <h1 className="text-[18px] lg:text-[40px] font-semibold text-[#0F172A]">
          Join the next cohort <span aria-hidden>🎉</span>
        </h1>

        <div className="text-left">
          <p className="text-sm font-medium text-[#000000]">Portal Closes In:</p>
          <div className="mt-[5px] flex items-center align-center gap-[10px] text-center">
            <div>
              <div className="text-[20px] lg:text-[28px] font-bold">
                {timeLeft.days} :
              </div>
              <div className="text-[10px] lg:text-[12px] font-medium text-[#000000]">Days</div>
            </div>
            <div>
              <div className="text-[20px] lg:text-[28px] font-bold">
                {timeLeft.hours} :
              </div>
              <div className="text-[10px] lg:text-[12px] font-medium text-[#000000]">Hours</div>
            </div>
            <div>
              <div className="text-[20px] lg:text-[28px] font-bold">
                {timeLeft.mins} :
              </div>
              <div className="text-[10px] lg:text-[12px] font-medium text-[#000000]">Min</div>
            </div>
            <div>
              <div className="text-[20px] lg:text-[28px] font-bold">
                {timeLeft.secs}
              </div>
              <div className="text-[10px] lg:text-[12px] font-medium text-[#000000]">Sec</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of pricing cards (kept as requested) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[30px] gap-[20px]">
        <div className="border b lg:text-[12px] font-mediumorder-[#000000] rounded-lg px-[24px] py-[40px]">
          <h2 className="font-semibold lg:text-[22px] text-[#191D23]">
            Starter
          </h2>

          <p className="text-[#44474D] text-[16px] mt-[10px]">
            Ideal for students who want structured growth alongside school.
          </p>
          <div className="mt-6 mb-[16px] flex items-center gap-4">
            <div className="text-4xl lg:text-[56px] font-semibold text-gray-900">
              ₦75,000
            </div>
            <div className="text-[16px] text-[#4B5768] mt-2">/ 3 months cycle </div>
          </div>
          <a href="/signup">
            <button className="mt-[16px] py-[10px] border-[1.5px] border-[#1D4ED8] text-[#1D4ED8] rounded-lg w-full">
              Get Started Now
            </button>
          </a>
          <div className="mt-[30px]">
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#44474D] text-[14px]">
                Access to career development resources
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#44474D] text-[14px]">
                Daily learning updates (book summaries, blogs, videos)
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#44474D] text-[14px]">Group mentorship sessions</p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#44474D] text-[14px]">
                Weekend training classes (Sat & Sun, 2hrs/day)
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#44474D] text-[14px]">
                Continuous projects with monitoring & feedback
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#44474D] text-[14px]">
                AI tools & technology training (future-ready skills)
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/cross.svg" alt="" />
              <p className="text-[#A0ABBB] text-[14px]">Dedicated personal coach</p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/cross.svg" alt="" />
              <p className="text-[#A0ABBB] text-[14px]">
                CV & LinkedIn optimization support
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/cross.svg" alt="" />
              <p className="text-[#A0ABBB] text-[14px]">Internship placement support</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2157FF] via-[#0006CC] to-[#6A00FF] rounded-[12px] px-[24px] py-[40px]">
          <h2 className="font-semibold lg:text-[22px] text-white">Hybrid Growth</h2>

          <p className="text-white text-[16px] mt-[10px]">
            Best for students who want mentorship, branding, and bigger opportunities.
          </p>
          <div className="mt-6 mb-[16px] flex items-center text-center gap-4">
            <div className="text-4xl lg:text-[56px] font-semibold text-white">
              ₦150,000
            </div>
            <div className="text-[16px] text-white mt-2">/ 3 months cycle </div>
          </div>
          <a href="/signup">
            <button className="mt-[16px] py-[10px] border-[1.5px] bg-[#FFFFFF] text-[#1D4ED8] rounded-lg w-full">
              Join the Hybrid Program
            </button>
          </a>
          <div className="mt-[30px]">
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#FFFFFF] text-[14px]">Everything in Starter</p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#FFFFFF] text-[14px]">
                Dedicated career coach & mentorship
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#FFFFFF] text-[14px]">Personalized 3-month growth plan</p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#FFFFFF] text-[14px]">
                CV & LinkedIn optimization support
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#FFFFFF] text-[14px]">
                Access to project showcase/demo days (priority slots)
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#FFFFFF] text-[14px]">More advanced use of AI tools</p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#FFFFFF] text-[14px]">Dedicated personal coach</p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#FFFFFF] text-[14px]">
                CV & LinkedIn optimization support
              </p>
            </div>
            <div className="flex flex-row mt-[10px] gap-[10px] items-center">
              <img src="/mark1.svg" alt="" />
              <p className="text-[#FFFFFF] text-[14px]">Internship placement support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}