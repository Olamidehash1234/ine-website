export default function HeroSection() {
    return (
        <div className="bg-white items-center border-none z-30">
            <div className="px-[16px] py-[40px] sm:px-[80px] sm-[80px]">
                <div className="flex items-center justify-center align-center gap-[20px]">
                    <h1 className="text-center align-center justify-center lg:text-[96px] lg:tracking-normal lg:leading-[73px]">Your Future is Now</h1>
                    <div className="border-[6px] border-[#2563EB] p-[19.32px] rounded-[16.1px]">
                        <img src="/hero/flower.svg" alt="flower icon" className="w-auto h-auto" />
                    </div>
                </div>

                <div className="mt-[20px] lg:mt-[40px] max-w-[740px] mx-auto text-center text-[#000000DE]">
                    <p className="text-[16px] lg:text-[20px] font-medium leading-[26px] text-[#000000DE]">Learn, Build, Grow and gain real skills, mentorship, and AI-powered
                        tools to prepare for your dream career.</p>
                </div>


                <div className="flex flex-col lg:flex-row gap-[10px] items-center justify-center mt-[30px]">
                    <button className="px-[26px] py-[12px] bg-[#000] text-white rounded-[12px] text-[16px] [font-medium">Join the Program</button>
                    <div className="flex gap-[8px]">
                        <button className="px-[20px] py-[10px] border-[2px] border-[#2563EB] rounded-[12px]">Watch How It Works <img src="/hero/play.svg" alt="play icon" className="inline-block ml-[6px]" /></button>
                    </div>
                </div>

                {/* sponsors corner */}
                <div className="lg:mt-[100px]">
                    <p className="font-semibold text-[#373737] lg:text-[18px]">Global Tech Tools & Employers</p>

                    <div className="flex gap-[20px] mt-[30px] items-center justify-between">
                        <img src="/hero/coinbase.svg" alt="" />
                        <img src="/hero/spotify.svg" alt="" />
                        <img src="/hero/slack.svg" alt="" />
                        <img src="/hero/dropbox.svg" alt="" />
                        <img src="/hero/zoom.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
