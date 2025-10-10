export default function HeroSection() {
    return (
        <div className="bg-white items-center border-none z-30">
            <div className="px-[16px] py-[40px] lg:px-[80px] sm-[80px]">
                <div className="flex items-center justify-center align-center gap-[10px]">
                    <h1 className="text-[33px] text-center align-center justify-center lg:text-[82px] lg:tracking-normal lg:leading-[73px]">Your Future is Now</h1>
                    <div className="border-[6px] border-[#2563EB] p-[10px] lg:p-[19.32px] rounded-[16.1px]">
                        <img src="/hero/flower.svg" alt="flower icon" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
                    </div>
                </div>

                <div className="mt-[14px] lg:mt-[40px] max-w-[740px] mx-auto text-center text-[#000000DE]">
                    <p className="text-[14px] lg:text-[20px] font-medium leading-[20px] lg:leading-[26px] text-[#000000DE]">Learn, Build, Grow and gain real skills, mentorship, and AI-powered
                        tools to prepare for your dream career.</p>
                </div>


                <div className="flex flex-col lg:flex-row gap-[10px] items-center justify-center mt-[30px]">
                    <a href="/signup"><button className="px-[60px] py-[12px] bg-[#000] w-full lg:w-auto text-white rounded-[12px] text-[16px] font-medium">Join the Program</button></a>
                    {/* <div className="flex gap-[8px] w-full lg:w-auto">
                        <button className="px-[20px] py-[10px] border-[2px] border-[#2563EB] rounded-[12px] w-full lg:w-auto">
                            Watch How It Works <img src="/hero/play.svg" alt="play icon" className="inline-block ml-[6px]" />
                        </button>
                    </div> */}
                </div>

                {/* sponsors corner */}
                <div id="works" className=" pt-[50px] lg:mt-[100px] overflow-hidden">
                    <p className="font-semibold text-[#373737] lg:text-[18px]">Tech Tools & Aspirational Employers</p>

                    <div className="flex inline-flex gap-[20px] lg:mt-[30px] mt-[10px] items-center justify-between whitespace-nowrap overflow-x w-full">
                        <img src="/hero/google.svg" alt="Google" className="inline-block" />
                        <img src="/hero/linkendin.svg" alt="LinkedIn" className="inline-block" />
                        <img src="/hero/microsoft.svg" alt="Microsoft" className="inline-block" />
                        <img src="/hero/nestle.svg" alt="Dropbox" className="inline-block" />
                        <img src="/hero/slack.svg" alt="Zoom" className="inline-block" />
                        <img src="/hero/aws.svg" alt="Zoom" className="inline-block" />
                        <img src="/hero/unilever.svg" alt="Zoom" className="inline-block" />
                    </div>
                </div>
            </div>
        </div>
    )
}
