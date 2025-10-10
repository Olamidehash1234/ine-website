const steps = [
  {
    number: "01",
    title: "Pick Your Path",
    text: "Choose the career path that excites you. Tech, design, or beyond. From day one, you know where you're heading.",
    image: "/works/path.png",
  },
  {
    number: "02",
    title: "Learn the Skills",
    text: "Attend focused classes that teach you the exact skills needed to solve problems and complete team projects.",
    image: "/works/skills.png",
  },
  {
    number: "03",
    title: "Join a Team",
    text: "Get placed in a real-world team. You’ll report to a coach who acts as your 'employer,' giving you a taste of the workplace.",
    image: "/works/team.png",
  },
  {
    number: "04",
    title: "Build, Fail, and Grow",
    text: "Put your skills into action. You’ll make mistakes, but with feedback and support, you’ll grow stronger in both hard and soft skills like communication and time management.",
    image: "/works/build.png",
  },
  {
    number: "05",
    title: "Repeat & Level Up",
    text: "Tackle bigger challenges, sharpen your skills, and keep improving until you're ready for the real world of work building resilience, confidence to take on anything that comes next.",
    image: "/works/repeat.png",
  },
  {
    number: "06",
    title: "Real Internship Support",
    text: "Work on real tasks with guidance. You’ll have someone to explain what your boss wants and help you deliver with confidence.",
    image: "/works/internship.png",
  },
];

export default function Works() {
  return (
    <div className="px-[16px] pt-[60px] pb-[80px] lg:px-[80px] lg:pt-[80px] lg:pb-[120px]">
      {/* Section Header */}
      <div className="flex gap-[5px] items-center mb-[10px]">
        <img src="/world.svg" alt="World Icon" />
        <p className="text-[16px] lg:text-[20px] font-medium leading-[26px] text-[#000000]">
          How it works?
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[50px] mt-[20px] lg:mt-[40px] items-end">
        {steps.map((step, index) => {
          const isGray = ["02", "04", "06"].includes(step.number);

          return (
            <div key={index} className="flex flex-col gap-4 lg:gap-[30px] flex-grow">
              {/* Number + Title */}
              <div>
                <span
                  className={`font-semibold text-lg lg:text-[40px] ${
                    isGray ? "text-[#494949]" : "text-blue-600"
                  }`}
                >
                  {step.number}
                </span>
                <h3 className="text-lg lg:text-[24px] font-semibold mt-1 lg:mt-[10px]">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-[16px] text-gray-600 mt-1 lg:mt-[10px] leading-[150%]">
                  {step.text}
                </p>
              </div>

              {/* Image */}
              <img
                src={step.image}
                alt={step.title}
                className="rounded-lg w-full h-48 lg:h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
