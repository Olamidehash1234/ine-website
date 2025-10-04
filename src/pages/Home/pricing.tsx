export default function Pricing() {
    return (
        <section className="px-[16px] pt-[60px] pb-[80px] sm:px-[80px] sm:pt-[80px] sm:pb-[120px]">
            <div className="flex gap-[5px] align-center items-center mb-[10px]">
                <img src="/dollar.svg" alt="" />
                <p className="text-[16px] lg:text-[20px] font-medium leading-[26px] text-[#000000]">Pricing</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-[30px]">
                <div className="border border-gray-300 rounded-lg px-[24px] py-[40px] m-2">
                    <h2 className="font-semibold sm:text-[22px] text-[#191D23]">Starter</h2>

                    <p className="text-[#44474D] text-[16px] mt-[10px]">Ideal for students who want structured growth alongside school.</p>
                    <div className="mt-6 mb-[16px] flex items-center gap-4">
                        <div className="text-4xl sm:text-[56px] font-semibold text-gray-900">₦50,000</div>
                        <div className="text-[16px] text-[#4B5768] mt-2">/ Month</div>
                    </div>
                    <button className="mt-[16px] py-[10px] border-[1.5px] border-[#1D4ED8] text-[#1D4ED8] rounded-lg w-full">Get Started Now</button>
                    <div className="mt-[30px]">
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#44474D] text-[14px]">Access to career development resources</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#44474D] text-[14px]">Daily learning updates (book summaries, blogs, videos)</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#44474D] text-[14px]">Group mentorship sessions</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#44474D] text-[14px]">Weekend training classes (Sat & Sun, 2hrs/day)</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#44474D] text-[14px]"> Continuous projects with monitoring & feedback</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#44474D] text-[14px]"> AI tools & technology training (future-ready skills)</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/cross.svg" alt="" />
                            <p className="text-[#A0ABBB] text-[14px]">Dedicated personal coach</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/cross.svg" alt="" />
                            <p className="text-[#A0ABBB] text-[14px]">CV & LinkedIn optimization support</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/cross.svg" alt="" />
                            <p className="text-[#A0ABBB] text-[14px]">Internship placement support</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#2157FF] via-[#0006CC] to-[#6A00FF] rounded-[12px] px-[24px] py-[40px] m-2">
                    <h2 className="font-semibold sm:text-[22px] text-white">Hybrid Growth</h2>

                    <p className="text-white text-[16px] mt-[10px]">Best for students who want mentorship, branding, and bigger opportunities.</p>
                    <div className="mt-6 mb-[16px] flex items-center text-center gap-4">
                        <div className="text-4xl sm:text-[56px] font-semibold text-white">₦75,000</div>
                        <div className="text-[16px] text-white mt-2">/ Month</div>
                    </div>
                    <button className="mt-[16px] py-[10px] border-[1.5px] bg-[#FFFFFF] text-[#1D4ED8] rounded-lg w-full">Join the Hybrid Program</button>
                    <div className="mt-[30px]">
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#FFFFFF] text-[14px]">Everything in Starter</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#FFFFFF] text-[14px]">Dedicated career coach & mentorship</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#FFFFFF] text-[14px]">Personalized 3-month growth plan</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#FFFFFF] text-[14px]">CV & LinkedIn optimization support</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#FFFFFF] text-[14px]"> Access to project showcase/demo days (priority slots)</p>
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
                            <p className="text-[#FFFFFF] text-[14px]">CV & LinkedIn optimization support</p>
                        </div>
                        <div className="flex flex-row mt-[10px] gap-[10px] items-center">
                            <img src="/mark1.svg" alt="" />
                            <p className="text-[#FFFFFF] text-[14px]">Internship placement support</p>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}