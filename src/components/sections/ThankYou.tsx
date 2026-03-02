import RevealOnScroll from "../ui/RevealOnScroll";

export default function ThankYou() {
  return (
    <section id="thanks" className="py-[var(--section-pad)] bg-off-white text-center">
      <div className="container">
        <RevealOnScroll className="max-w-[600px] mx-auto">
          <span className="section-label">Lời cảm ơn</span>
          <h2 className="section-title mb-6">
            Chúc bạn thi đấu<br />thành công!
          </h2>
          <p className="text-mid-gray leading-[1.85] font-light mb-4">
            Facolos hy vọng những ngày tại Hà Nội sẽ mang đến cho bạn nguồn
            năng lượng tích cực, sự chuẩn bị tốt nhất cho giải đấu PPA Asia và
            nhiều trải nghiệm đáng nhớ bên ngoài sân đấu.
          </p>
          <p className="text-mid-gray leading-[1.85] font-light mb-4">
            Chúc bạn thi đấu thành công và có một hành trình thật trọn vẹn tại
            Việt Nam.
          </p>
          <p className="text-charcoal font-medium">
            Facolos luôn tự hào được đồng hành cùng bạn.
            <br />
            Hẹn gặp lại tại Hà Nội!
          </p>
          <div className="mt-8 font-display text-[1.6rem] font-bold text-charcoal tracking-[.02em]">
            Facolos<span className="text-accent">.</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
