export interface Hotel {
  name: string;
  address: string;
  price: string;
  images: string[];
  mapUrl: string;
}

export interface Place {
  name: string;
  description: string;
  image: string;
  mapUrl: string;
}

export interface FoodSpot {
  name: string;
  description: string;
  image: string;
  mapUrl: string;
}

export interface AboutCard {
  title: string;
  description: string;
  address: string;
  addressLabel: string;
  image: string;
  mapUrl: string;
}

export const hotels: Hotel[] = [
  {
    name: "Dinh Elegant Hanoi Hotel",
    address: "4, Lô 15D Trung Yên, Trung Hòa, Việt Nam",
    price: "1,076,000 VNĐ / đêm",
    images: ["/images/hotel-1.jpg"],
    mapUrl: "https://maps.app.goo.gl/wwfQBPJMFLca1R1N9",
  },
  {
    name: "Khách sạn Grand Dragon Hanoi",
    address: "21 Lê Văn Lương, Nhân Chính, Thanh Xuân, Việt Nam",
    price: "880,000 VNĐ / đêm",
    images: ["/images/hotel-2.jpg"],
    mapUrl: "https://maps.app.goo.gl/xBPbRuiaKsodY4LQ6",
  },
  {
    name: "Căn hộ dịch vụ HB",
    address: "12 Trần Quý Kiên, Việt Nam",
    price: "863,000 VNĐ / đêm",
    images: ["/images/hotel-3.jpg"],
    mapUrl: "https://maps.app.goo.gl/EE1yCeEDG7CnGeQF7",
  },
  {
    name: "22Housing Residence Suites",
    address: "352 Bưởi Street, Hà Nội, Việt Nam",
    price: "802,000 VNĐ / đêm",
    images: ["/images/hotel-4.jpg"],
    mapUrl: "https://maps.app.goo.gl/mA9gZXG6Xki3cjv48",
  },
  {
    name: "Khách sạn Adeline",
    address: "12 Nguyễn Chánh, Việt Nam",
    price: "804,000 – 1,026,000 VNĐ / đêm",
    images: ["/images/hotel-5.jpg"],
    mapUrl: "https://maps.app.goo.gl/fs7ZS7kqxckpKgZXA",
  },
  {
    name: "Sheraton Hanoi West",
    address: "Hà Nội, Việt Nam",
    price: "4,623,029 ₫ / đêm (~$185 USD)",
    images: ["/images/hotel-sheraton.jpg"],
    mapUrl: "https://maps.app.goo.gl/CYoC9WytyTQRWND27",
  },
  {
    name: "Vinhomes Skylake Hà Nội — Gem Apartment",
    address: "Hà Nội, Việt Nam",
    price: "2,167,200 ₫ / đêm (~$87 USD)",
    images: ["/images/hotel-vinhomes.jpg"],
    mapUrl: "https://maps.app.goo.gl/GEpnJvdJj2XykCfq5",
  },
];

export const places: Place[] = [
  {
    name: "Hồ Hoàn Kiếm",
    description:
      "Biểu tượng của Hà Nội, được ví như trái tim của thủ đô với khung cảnh yên bình và không gian đi dạo lý tưởng giữa lòng thành phố.",
    image: "/images/place-hoan-kiem.jpg",
    mapUrl: "https://maps.app.goo.gl/raLPonLiGMsDpCeX8",
  },
  {
    name: "Văn Miếu Quốc Tử Giám",
    description:
      "Trường đại học đầu tiên của Việt Nam, biểu tượng văn hóa – giáo dục hơn 1000 năm. Kiến trúc cổ, không gian yên tĩnh, rất hợp chụp ảnh.",
    image: "/images/place-van-mieu.jpg",
    mapUrl: "https://maps.app.goo.gl/HrrJpbmhJxfwc2PKA",
  },
  {
    name: "Lăng Chủ tịch Hồ Chí Minh",
    description:
      "Khu quảng trường Ba Đình rộng lớn, trang nghiêm – nơi gắn với lịch sử hiện đại Việt Nam.",
    image: "/images/place-lang-bac.jpg",
    mapUrl: "https://maps.google.com/?q=Ho+Chi+Minh+Mausoleum+Hanoi",
  },
  {
    name: "Phố đi bộ Hồ Gươm",
    description:
      "Không gian đi bộ sôi động vào cuối tuần, nơi bạn hòa mình vào nhịp sống Hà Nội với hoạt động đường phố và ẩm thực địa phương.",
    image: "/images/place-pho-di-bo.jpg",
    mapUrl: "https://maps.google.com/?q=Pho+di+bo+Ho+Guom+Hanoi",
  },
  {
    name: "Nhà Hát Lớn Hà Nội",
    description:
      "Công trình kiến trúc Pháp cổ nổi bật giữa trung tâm thủ đô, sang trọng và ấn tượng.",
    image: "/images/place-opera-house.jpg",
    mapUrl: "https://maps.app.goo.gl/edRzzoUPNx9oBqV57",
  },
  {
    name: "Chùa Một Cột",
    description:
      "Ngôi chùa độc đáo với kiến trúc một cột giữa hồ sen, mang đậm nét văn hóa Việt Nam.",
    image: "/images/place-chua-mot-cot.jpg",
    mapUrl: "https://maps.app.goo.gl/UQZr5QSZvznCFHPC9",
  },
  {
    name: "Hồ Tây",
    description:
      "Hồ nước lớn nhất Hà Nội, nổi tiếng với khung cảnh hoàng hôn lãng mạn và không gian thư giãn.",
    image: "/images/place-ho-tay.jpg",
    mapUrl: "https://maps.app.goo.gl/Amk1x6nHZ9ee8kbR7",
  },
  {
    name: "Chợ Đồng Xuân",
    description:
      "Khu chợ lâu đời nằm trong phố cổ, buôn bán sầm uất đủ mọi mặt hàng.",
    image: "/images/place-dong-xuan.jpg",
    mapUrl: "https://maps.app.goo.gl/cGNhos2HooUEhDvW7",
  },
];

export const foodSpots: FoodSpot[] = [
  {
    name: "Phở Thìn Lò Đúc",
    description:
      "Quán phở bò nổi tiếng với hương vị đậm đà, nước dùng béo thơm và phong cách xào thịt độc đáo.",
    image:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/fFQVc1mAntrUSnMS9",
  },
  {
    name: "Bún chả Hương Liên",
    description:
      "Quán bún chả nổi tiếng với thịt nướng thơm, nước chấm đậm vị — từng được Tổng thống Obama ghé thăm.",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/pQxLHm82k41qfVBm6",
  },
  {
    name: "Bánh mì 25",
    description:
      "Tiệm bánh mì nổi tiếng trong phố cổ, phù hợp khách quốc tế, dễ ăn và đậm vị Việt.",
    image: "/images/food-banh-mi.jpg",
    mapUrl: "https://maps.google.com/?q=Banh+Mi+25+Hanoi",
  },
  {
    name: "Hanoi Corner Restaurant",
    description:
      "Nhà hàng trong phố cổ, phục vụ đa dạng món Việt truyền thống trong không gian ấm cúng.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80",
    mapUrl: "https://maps.google.com/?q=Hanoi+Corner+Restaurant",
  },
  {
    name: "Cafe Minh",
    description:
      "Cà phê phong cách Hà Nội xưa, không gian mộc mạc yên tĩnh, thích hợp thưởng thức cà phê truyền thống.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80",
    mapUrl: "https://maps.google.com/?q=Cafe+Minh+Hanoi",
  },
  {
    name: "Tung's Kitchen",
    description:
      "Món Việt & chay đa dạng, phù hợp khách quốc tế và vận động viên có chế độ ăn đặc biệt.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80",
    mapUrl: "https://maps.google.com/?q=Tungs+Kitchen+Hanoi",
  },
  {
    name: "Train Track Café",
    description:
      "Quán nằm sát khu đường ray, view rõ tàu đi qua — trải nghiệm độc đáo chỉ có ở Hà Nội.",
    image:
      "https://images.unsplash.com/photo-1565695925686-6d7b5a1f1607?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/VhPS94qUGZaeVnN96",
  },
  {
    name: "Lotteria Mỹ Đình",
    description:
      "Fast-food gần địa điểm thi đấu, mở cửa 08:00–22:30 — tiện lợi cho bữa ăn nhanh.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/gkTMsUrD7aTUZAWt8",
  },
  {
    name: "K-Pub Chicken",
    description:
      "Gà rán kiểu Hàn Quốc, hương vị đậm đà — lựa chọn gần sân thi đấu.",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cee6b5?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/rU6BgnTYeuUq8iwi7",
  },
  {
    name: "Milano Coffee Trần Hữu Dực",
    description:
      "Cà phê Việt Nam quen thuộc, gần địa điểm thi đấu — thích hợp nghỉ ngơi giữa các trận.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/g9RxuAjWDQCw16nNA",
  },
];

export const aboutCards: AboutCard[] = [
  {
    title: "Facolos — Đối tác tin cậy",
    description:
      "Facolos là thương hiệu hàng đầu trong việc cung cấp dụng cụ Pickleball chuyên nghiệp, tiên phong thúc đẩy phong trào thể thao hiện đại tại Việt Nam.",
    addressLabel: "Văn phòng Hà Nội:",
    address: "282 Nguyễn Huy Tưởng, Q. Thanh Xuân, Hà Nội",
    image: "/images/about-facolos.jpg",
    mapUrl: "https://maps.app.goo.gl/vt7AGNdy2fDrxtU28",
  },
  {
    title: "Pickle Global — Nơi khởi nguồn chất lượng",
    description:
      "Nhà máy Pickle Global tự hào là đơn vị sản xuất dụng cụ Pickleball quy mô lớn, áp dụng công nghệ tiên tiến nhất để mang lại sản phẩm đạt chuẩn thi đấu quốc tế.",
    addressLabel: "Địa chỉ:",
    address: "Đường D3, Khu D, KCN Phố Nối A, Như Quỳnh, Hưng Yên",
    image: "/images/about-factory.jpg",
    mapUrl: "https://maps.app.goo.gl/cr8AsiA46kM9jAUMA",
  },
];

export const contact = {
  phone: {
    name: "Võ Trần Quỳnh Trang",
    number: "0986 120 954",
    tel: "0986120954",
  },
  email: {
    label: "Liên hệ qua email",
    address: "Jessica@facolos.com",
  },
};
