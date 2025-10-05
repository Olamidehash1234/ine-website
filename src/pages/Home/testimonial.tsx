const testimonials = [
    {
        name: "Jenny Wilson",
        company: "Grower.io",
        quote:
            "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    },
    {
        name: "Devon Lane",
        company: "DLDesign.co",
        quote:
            "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    },
    {
        name: "Devon Lane",
        company: "DLDesign.co",
        quote:
            "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    },
    {
        name: "Devon Lane",
        company: "DLDesign.co",
        quote:
            "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
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
        <section id="testimonials" className="px-[16px] pt-[60px] pb-[80px] sm:px-[80px] sm:pt-[60px] sm:pb-[120px]">
            <div className="flex gap-[5px] align-center items-center mb-[10px]">
                <img src="/chat.svg" alt="" />
                <p className="text-[16px] lg:text-[20px] font-medium leading-[26px] text-[#000000]">Testimonials</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[20px] lg:mt-[40px]">
                {testimonials.map((item, index) => (
                    <div key={index} className="text-sm text-gray-700">
                        <Stars />
                        <p className="text-[#090914] mt-4 mb-4 font-medium sm:text-[16px] leading-relaxed">"{item.quote}"</p>
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