export default function Matters() {
    return (
        <div className="px-[16px] pb-[60px] sm:px-[80px] sm:pb-[120px] ">
            <div className="flex gap-[5px] align-center items-center mb-[10px]">
                <img src="/about/world.svg" alt="" />
                <p className="text-[16px] lg:text-[20px] font-medium leading-[26px] text-[#000000]">Why this matters?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[41px] mt-[40px]">
                <div className="border-[3px] rounded-[2px] flex flex-col border-[#E5E7EB] px-[28px] pt-[40px] pb-[25px] text-center items-center " style={{ borderImage: "linear-gradient(to bottom, #3021FF 0%, #FF0004 48%, #1D1499 100%) 1" }}>
                    <img src="/project.svg" alt="" className="w-auto h-auto object-cover" />
                    <h2 className="font-semibold text-[20px] lg:text-[24px] mt-[20px]">No Real Projects</h2>
                    <p className="text-[16px] mt-[10px] font-medium leading-[22px] lg:leading-[26px] text-[#3C3C3CDE]">Most graduates have degrees, but no practical portfolio that employers actually care about.</p>
                </div>

                <div className="border-[3px] flex rounded-[2px] flex-col border-[#E5E7EB] p-[20px] lg:p-[40px] text-center items-center " style={{ borderImage: "linear-gradient(to bottom, #3021FF 0%, #FF0004 48%, #1D1499 100%) 1" }}>
                    <img src="/fear.svg" alt="" className="w-auto h-auto object-cover" />
                    <h2 className="font-semibold text-[20px] lg:text-[24px] mt-[20px]">Rising Fear of AI</h2>
                    <p className="text-[16px] mt-[10px] font-medium leading-[22px] lg:leading-[26px] text-[#3C3C3CDE]">Automation and AI are taking away jobs
                        —students worry about being left behind.</p>
                </div>

                <div className="border-[3px] flex flex-col rounded-[8px] border-[#E5E7EB] px-[28px] pt-[40px] pb-[25px] text-center items-center " style={{ borderImage: "linear-gradient(to bottom, #3021FF 0%, #FF0004 48%, #1D1499 100%) 1" }}>
                    <img src="/mentors.svg" alt="" className="w-auto h-auto object-cover" />
                    <h2 className="font-semibold text-[20px] lg:text-[24px] mt-[20px]">No Mentors Or Clear Career Path</h2>
                    <p className="text-[16px] mt-[10px] font-medium leading-[22px] lg:leading-[26px] text-[#3C3C3CDE]">Without guidance, students struggle to choose the right path and build confidence in their future.</p>
                </div>
            </div>

            <div className="flex justify-center align-center mt-[80px] space-x-[10px] ">
                <img src="/star.svg" alt="" />
                <p className="text-center text-[32px] lg:text-[64px] font-bold 
  bg-gradient-to-r from-[#20A1FE] via-[#1ED760] to-[#1878AB] 
  bg-clip-text text-transparent">
                    We’re changing that.
                </p>
                <img src="/star.svg" alt="" />
            </div>
        </div>
    )
}