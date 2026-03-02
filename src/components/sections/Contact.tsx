import { contact } from "../../data/guide-data";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-[var(--section-pad)] bg-dark text-white relative overflow-hidden">
      <div className="container">
        <RevealOnScroll>
          <span className="section-label !text-accent-light">Hỗ trợ</span>
          <h2 className="section-title !text-white">Liên hệ</h2>
          <p className="section-desc !text-white/55">
            Nếu bạn cần hỗ trợ về giải đấu, di chuyển hoặc y tế, vui lòng liên hệ
          </p>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 mt-10 items-start">
          <RevealOnScroll delay={1} className="flex gap-4 items-start p-7 rounded-2xl bg-white/4 border border-white/7 transition-colors duration-300 hover:bg-white/7">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[22px] h-[22px] text-accent-light">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[.95rem] font-semibold mb-1 text-white">Hotline</h4>
              <p className="text-[.88rem] text-white/50 font-light">{contact.phone.name}</p>
              <a href={`tel:${contact.phone.tel}`} className="text-accent-light no-underline font-medium transition-colors duration-200 hover:text-white">
                {contact.phone.number}
              </a>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={2} className="flex gap-4 items-start p-7 rounded-2xl bg-white/4 border border-white/7 transition-colors duration-300 hover:bg-white/7">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[22px] h-[22px] text-accent-light">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <h4 className="text-[.95rem] font-semibold mb-1 text-white">Email</h4>
              <p className="text-[.88rem] text-white/50 font-light">{contact.email.label}</p>
              <a href={`mailto:${contact.email.address}`} className="text-accent-light no-underline font-medium transition-colors duration-200 hover:text-white">
                {contact.email.address}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
