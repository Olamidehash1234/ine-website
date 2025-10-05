export default function Getting() {
    return (
        <div className="px-[16px] pb-[60px] sm:px-[80px] sm:pb-[80px] ">
            <div className="flex gap-[5px] align-center items-center mb-[10px]">
                <img src="/gift.svg" alt="" />
                <p className="text-[16px] lg:text-[20px] font-medium leading-[26px] text-[#000000]">Why you get?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-[41px] mt-[40px]">
                <div className="border-[3px] rounded-[2px] flex flex-col border-[#E5E7EB] px-[25px] pt-[40px] pb-[40px] text-center items-center "style={{  borderImage: "linear-gradient(to bottom, #3021FF 0%, #1ED760 48%, #1D1499 100%) 1" }}>
                    <img src="/settings.svg" alt="" className="w-auto h-auto object-cover" />
                    <h2 className="font-semibold text-[20px] lg:text-[24px] mt-[20px]">Practical Training</h2>
                    <p className="text-[16px] mt-[10px] font-medium leading-[26px] text-[#3C3C3CDE]">Learn real industry skills.</p>
                </div>

                <div className="border-[3px] flex rounded-[2px] flex-col border-[#E5E7EB] px-[25px] pt-[40px] pb-[40px] text-center items-center "style={{  borderImage: "linear-gradient(to bottom, #3021FF 0%, #1ED760 48%, #1D1499 100%) 1" }}>
                    <img src="/project1.svg" alt="" className="w-auto h-auto object-cover" />
                    <h2 className="font-semibold text-[20px] lg:text-[24px] mt-[20px]">Project Experience</h2>
                    <p className="text-[16px] mt-[10px] font-medium leading-[26px] text-[#3C3C3CDE]">Work on real challenges every month.</p>
                </div>

                <div className="border-[3px] flex flex-col rounded-[8px] border-[#E5E7EB] px-[25px] pt-[40px] pb-[40px] text-center items-center "style={{  borderImage: "linear-gradient(to bottom, #3021FF 0%, #1ED760 48%, #1D1499 100%) 1" }}>
                    <img src="/coaching.svg" alt="" className="w-auto h-auto object-cover" />
                    <h2 className="font-semibold text-[20px] lg:text-[24px] mt-[20px]">Mentorship & Coaching</h2>
                    <p className="text-[16px] mt-[10px] font-medium leading-[26px] text-[#3C3C3CDE]">1-on-1 and group career guidance.</p>
                </div>

                <div className="border-[3px] flex flex-col rounded-[8px] border-[#E5E7EB] px-[25px] pt-[40px] pb-[40px] text-center items-center" style={{  borderImage: "linear-gradient(to bottom, #3021FF 0%, #1ED760 48%, #1D1499 100%) 1" }}>
                    <img src="/smiling-ai.svg" alt="" className="w-auto h-auto object-cover" />
                    <h2 className="font-semibold text-[20px] lg:text-[24px] mt-[20px]">AI Tools Access</h2>
                    <p className="text-[16px] mt-[10px] font-medium leading-[26px] text-[#3C3C3CDE]">Learn to use AI as a tool, not a threat.</p>
                </div>
            </div>
        </div>
    )
}