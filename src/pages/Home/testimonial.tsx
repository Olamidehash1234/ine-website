const testimonials = [
    {
        name: "Tomiwa A.",
        company: " 400lv Computer Sc. Student",
        quote:
            "Before joining Image Nation, I only knew theory. Now I’ve built real projects, learned teamwork, and even use AI tools daily. I feel ready for any challenge.",
    },
    {
        name: "Mrs. Adeyemi",
        company: " Parent (CU)",
        quote:
            "I’ve seen a huge change in my son. He’s more focused, confident, and always talking about the projects they’re building. It’s been more than a program, it’s a direction for his future.",
    },
    {
        name: "Dr. Ajayie",
        company: " Faculty Advisor, Crawford University",
        quote:
            "Partnering with Image Nation EduTech gave our students hands-on experience. The results were clear: creativity, collaboration, and real innovation beyond the classroom.",
    },
    {
        name: "Samuel O.",
        company: "Project Mentor & Software Engineer",
        quote:
            "These students are not just learning skills; they’re solving real problems. Watching them grow from beginners to confident innovators is inspiring.",
    },
];

const Stars = () => (
    <div className="flex space-x-1 mb-2">
        {Array.from({ length: 5 }).map((_, idx) => (
            <span key={idx} className="text-blue-500 text-sm"><img src="/star1.svg" alt="" /></span>
        ))}
    </div>
);

export default function Testimonials() {
    return (
        <section id="testimonials" className="px-[16px] pt-[60px] pb-[80px] lg:px-[80px] lg:pt-[60px] lg:pb-[120px]">
            <div className="flex gap-[5px] align-center items-center mb-[10px]">
                <img src="/chat.svg" alt="" />
                <p className="text-[16px] lg:text-[20px] font-medium leading-[26px] text-[#000000]">Testimonials</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-[35px] mt-[20px] lg:mt-[40px]">
                {testimonials.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700">
                        <Stars />
                        <p className="text-[#090914] mt-4 mb-4 font-medium lg:text-[16px] leading-relaxed">"{item.quote}"</p>
                        <div className="font-medium text-[#090914]">
                            {item.name}{" "}
                            <span className="text-[#64748B] font-medium ml-2">{item.company}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}