import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeader from "../ui/SectionHeader";

export default function Venue() {
  return (
    <section id="venue" className="py-[var(--section-pad)] bg-off-white">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            label="Thông tin giải đấu"
            title="Địa điểm thi đấu"
            description='Cung Thể Thao Điền Kinh — "thánh đường" thể thao đỉnh cao tại Việt Nam'
          />
        </RevealOnScroll>
        <RevealOnScroll delay={1} className="mt-10 bg-white rounded-[20px] overflow-hidden shadow-[0_2px_40px_rgba(0,0,0,.04)]">
          <img
            className="w-full aspect-[21/9] object-cover object-[100%_70%] block"
            src="/images/venue.jpg"
            alt="Sân thi đấu"
            loading="lazy"
          />
          <div className="p-[clamp(24px,4vw,48px)]">
            <h3 className="font-display text-[1.5rem] font-semibold mb-2">
              Trung tâm Huấn luyện &amp; Thi đấu TDTT Hà Nội
            </h3>
            <p className="text-mid-gray text-[.92rem] mb-5 font-light">
              Đường Trần Hữu Dực, P. Cầu Diễn, Q. Nam Từ Liêm, Hà Nội
            </p>
            <p className="text-mid-gray leading-[1.8] font-light">
              Đây là "thánh đường" của điền kinh và các môn thể thao đỉnh cao
              tại Việt Nam. Với không gian thoáng đãng, cơ sở vật chất đạt
              chuẩn quốc tế, nơi đây thường xuyên tổ chức các giải đấu tầm cỡ
              khu vực.
            </p>
            <div className="flex gap-5 md:gap-8 mt-7 flex-wrap">
              <div className="flex items-center gap-2.5 text-[.88rem] font-medium text-charcoal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-accent shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Thời gian: 01 – 05/04/2026
              </div>
              <div className="flex items-center gap-2.5 text-[.88rem] font-medium text-charcoal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-accent shrink-0">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Chuẩn quốc tế
              </div>
              <a
                href="https://maps.app.goo.gl/vCgp494rdTtaDMHX7"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2.5 text-[.88rem] font-medium text-accent-dark no-underline hover:text-charcoal transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-accent shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Xem bản đồ
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
