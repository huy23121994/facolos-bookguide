import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeader from "../ui/SectionHeader";

export default function Welcome() {
  return (
    <section id="welcome" className="py-[var(--section-pad)] bg-white">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            label="Lời ngỏ"
            title=""
            titleHtml="Chào mừng đến với<br>Hà Nội"
          />
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 items-center mt-12">
          <RevealOnScroll delay={1} className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[4/5] max-w-[400px] md:max-w-none mx-auto md:mx-0">
            <img
              src="https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=600&q=80"
              alt="Hà Nội"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-accent/20 rounded-2xl" />
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <h3 className="font-display text-[1.6rem] font-semibold mb-4 leading-[1.3]">
              Nơi giao thoa giữa nét cổ kính và nhịp sống hiện đại
            </h3>
            <p className="text-mid-gray leading-[1.8] mb-4 font-light">
              Facolos rất vinh dự được đồng hành cùng các bạn trong hành trình
              đến Việt Nam để tham dự và chuẩn bị cho giải đấu PPA Asia sắp
              tới.
            </p>
            <p className="text-mid-gray leading-[1.8] mb-4 font-light">
              Chúng tôi hy vọng Hà Nội không chỉ là điểm đến thi đấu, mà còn
              là nơi mang đến những trải nghiệm đáng nhớ trước, trong và sau
              giải đấu.
            </p>
            <p className="text-mid-gray leading-[1.8] mb-4 font-light">
              Trong thời gian lưu trú, bên cạnh việc tập trung cho phong độ tốt
              nhất, bạn có thể dành thời gian khám phá những địa danh đặc trưng
              của thành phố, cảm nhận nhịp sống địa phương và thưởng thức các
              món ăn nổi tiếng như phở, bún chả hay cà phê trứng — những hương
              vị rất riêng của Hà Nội.
            </p>
            <p className="text-charcoal font-medium">
              Facolos luôn sẵn sàng hỗ trợ để hành trình của bạn tại Việt Nam
              trở nên thuận tiện, thoải mái và trọn vẹn nhất.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
