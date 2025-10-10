export default function Journey() {
    return (
        <section className="px-[16px] pt-[60px] pb-[80px] lg:px-[80px] lg:pt-[80px] lg:pb-[120px]">
            <div className="flex gap-[5px] align-center items-center mb-[10px]">
                <img src="/rocket.svg" alt="" />
                <p className="text-[16px] lg:text-[20px] font-medium leading-[26px] text-[#000000]">The Journey</p>
            </div>

            <div className="mt-[20px] lg:mt-[60px] grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-[0px]">
                <div className="flex flex-col gap-4 lg:gap-[30px] items-center">
                    <div className="bg-[#7193FF] text-white w-[144px] h-[144px] rounded-full flex items-center justify-center font-bold text-lg">
                        Year 1
                    </div>
                    <div className="h-[70px] bg-[#7193FF] w-[2.54px]"></div>
                    <img src="/icon1.svg" alt="" />

                    <div className="flex flex-col gap-[10px] items-center text-center">
                        <img src="/settings1.svg" alt="" className="w-[40px] h-[40px]" />

                        <h2 className="font-bold text-[21.3px] text-[#7193FF]"> Foundation & Skills </h2>

                        <p className="font-bold text-[14px] text-[#000000]">Digital Skills Training</p>
                        <p className="font-medium text-[#494949] max-w-[400px]">Students learn the basics: Frontend, Backend, UI/UX, and Project Management. Intro to AI as a tool, not a threat.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 lg:gap-[30px] items-center">
                    <div className="flex flex-col gap-[10px] items-center text-center lg:mt-[58px]">
                        <img src="/light.svg" alt="" className="w-[40px] h-[40px]" />

                        <h2 className="font-bold text-[21.3px] text-[#4A7EEE]">  Big Projects & Innovation </h2>

                        <p className="font-bold text-[14px] text-[#000000]">Work on multiple projects + 2 major challenges:</p>
                        <p className="font-medium text-[#494949] max-w-[400px]">Tech-for-School Project.
                            Creative Innovation Challenge
                            (judged by faculty + mentors).</p>
                    </div>
                    <img src="/icon2.svg" alt="" />
                    <div className="h-[70px] bg-[#7193FF] w-[2.54px]"></div>
                    <div className="bg-[#3E6EE7] text-white w-[144px] h-[144px] rounded-full flex items-center justify-center font-bold text-lg">
                        Year 2
                    </div>

                </div>

                <div className="flex flex-col gap-4 lg:gap-[30px] items-center">
                    <div className="bg-[#0D46CC] text-white w-[144px] h-[144px] rounded-full flex items-center justify-center font-bold text-lg">
                        Year 3
                    </div>
                    <div className="h-[70px] bg-[#7193FF] w-[2.54px]"></div>
                    <img src="/icon3.svg" alt="" />

                    <div className="flex flex-col gap-[10px] items-center text-center">
                        <img src="/growth.svg" alt="" className="w-[40px] h-[40px]" />

                        <h2 className="font-bold text-[21.3px] text-[#2563EB]"> Career Growth & Coaching </h2>

                        <p className="font-bold text-[14px] text-[#000000]">Professional Development</p>
                        <p className="font-medium text-[#494949] max-w-[400px]">Continuous project work, mentorship, career guidance, AI & cloud exposure.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 lg:gap-[30px] items-center">
                    <div className="flex flex-col gap-[10px] items-center text-center lg:mt-[26px]">
                        <img src="/internship.svg" alt="" className="w-[40px] h-[40px]" />

                        <h2 className="font-bold text-[21.3px] text-[#050395]"> Internship & Real-World Experience </h2>

                        <p className="font-bold text-[14px] text-[#000000]">6–12 month internship in partner companies.</p>
                        <p className="text-[#494949] max-w-[400px] font-medium">Benefits: Real product work, mentorship, networking, 4 years of experience by graduation.</p>
                    </div>
                    <img src="/icon4.svg" alt="" />
                    <div className="h-[70px] bg-[#7193FF] w-[2.54px]"></div>
                    <div className="bg-[#050395] text-white w-[144px] h-[144px] rounded-full flex items-center justify-center font-bold text-lg">
                        Year 4
                    </div>

                </div>
            </div>
        </section>
    )
}