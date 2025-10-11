export default function HeroSection() {
    const sponsors = [
        { src: "/hero/google.svg", alt: "Google" },
        { src: "/hero/linkendin.svg", alt: "LinkedIn" },
        { src: "/hero/microsoft.svg", alt: "Microsoft" },
        { src: "/hero/nestle.svg", alt: "Nestle" },
        { src: "/hero/slack.svg", alt: "Slack" },
        { src: "/hero/aws.svg", alt: "AWS" },
        { src: "/hero/unilever.svg", alt: "Unilever" },
    ];

    return (
        <div className="bg-white items-center border-none z-30">
            <div className="px-[16px] py-[40px] lg:px-[80px] sm-[80px]">
                <div className="flex items-center justify-center align-center gap-[10px]">
                    <h1 className="text-[33px] text-center align-center justify-center lg:text-[82px] lg:tracking-normal lg:leading-[73px]">Your Future is Now</h1>
                    <div className="border-[3px] lg:border-[6px] border-[#2563EB] p-[10px] lg:p-[19.32px] rounded-[12px] lg:rounded-[16.1px]">
                        <img src="/hero/flower.svg" alt="flower icon" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
                    </div>
                </div>

                <div className="mt-[14px] lg:mt-[40px] max-w-[740px] mx-auto text-center text-[#000000DE]">
                    <p className="text-[14px] lg:text-[20px] font-medium leading-[20px] lg:leading-[26px] text-[#000000DE]">Learn, Build, Grow and gain real skills, mentorship, and AI-powered
                        tools to prepare for your dream career.</p>
                </div>


                <div className="flex flex-col lg:flex-row gap-[10px] justify-center mt-[30px]">
                    <a href="/signup"><button className="px-[60px] py-[12px] bg-[#000] w-full lg:w-auto text-white rounded-[12px] text-[16px] font-medium">Join the Program</button></a>
                    {/* <div className="flex gap-[8px] w-full lg:w-auto">
                        <button className="px-[20px] py-[10px] border-[2px] border-[#2563EB] rounded-[12px] w-full lg:w-auto">
                            Watch How It Works <img src="/hero/play.svg" alt="play icon" className="inline-block ml-[6px]" />
                        </button>
                    </div> */}
                </div>

                {/* sponsors corner */}
                <div id="works" className="pt-[50px] lg:mt-[100px]">
                    <p className="font-semibold text-[#373737] lg:text-[18px]">Tech Tools & Aspirational Employers</p>

                    <div className="overflow-x-hidden scrollbar-hide mt-[10px] lg:mt-[30px]">
                        <div className="flex items-center gap-[50px] lg:gap-[90px] animate-marquee whitespace-nowrap">
                            {sponsors.map((sponsor, index) => (
                                <img
                                    key={index}
                                    src={sponsor.src}
                                    alt={sponsor.alt}
                                    className="inline-block"
                                />
                            ))}
                            {/* Duplicate for seamless marquee */}
                            {sponsors.map((sponsor, index) => (
                                <img
                                    key={`dup-${index}`}
                                    src={sponsor.src}
                                    alt={sponsor.alt}
                                    className="inline-block"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .animate-marquee {
                        animation: marquee 20s linear infinite;
                    }
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }

                    @media (max-width: 768px){
                    .animate-marquee{
                        animation: marquee 6s linear infinite}
                    }
                `}</style>
            </div>
        </div>
    )
}
