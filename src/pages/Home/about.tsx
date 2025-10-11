export default function AboutSection() {
    return (
        <div id="about" className="px-[16px] pt-[60px] pb-[40px] lg:px-[80px] lg:pt-[80px] lg:pb-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[30px] items-center"> 
                <div>
                    <div className="flex gap-[5px] align-center items-center mb-[10px]">
                        <img src="/about/who.svg" alt="" />
                        <p className="text-[16px] lg:text-[20px] font-medium leading-[26px] text-[#000000]">Who We Are?</p>
                    </div>
                    <p className="text-[20px] lg:text-[36px] font-medium lg:leading-[135%]">We are <span className="text-[#2563EB]">Image Nation EduTech</span>, a career building community helping students go beyond academics. Our focus is on real projects, mentorship, and using modern tools including AI  to prepare students for the future of work. We partner with schools to create opportunities that last a lifetime.</p>
                </div>

                <div className="lg:w-auto lg:h-auto w-full h-[350px]">
                    <img src="/image1.png" alt="" className="w-full h-full object-cover  rounded-[12px]" />
                </div>
            </div>
        </div>
    )
}
