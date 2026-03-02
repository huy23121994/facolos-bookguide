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
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
    ],
    mapUrl: "https://maps.app.goo.gl/wwfQBPJMFLca1R1N9",
  },
  {
    name: "Khách sạn Grand Dragon Hanoi",
    address: "21 Lê Văn Lương, Nhân Chính, Thanh Xuân, Việt Nam",
    price: "880,000 VNĐ / đêm",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80",
    ],
    mapUrl: "https://maps.app.goo.gl/xBPbRuiaKsodY4LQ6",
  },
  {
    name: "Căn hộ dịch vụ HB",
    address: "12 Trần Quý Kiên, Việt Nam",
    price: "863,000 VNĐ / đêm",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80",
    ],
    mapUrl: "https://maps.app.goo.gl/EE1yCeEDG7CnGeQF7",
  },
  {
    name: "22Housing Residence Suites",
    address: "352 Bưởi Street, Hà Nội, Việt Nam",
    price: "802,000 VNĐ / đêm",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
    ],
    mapUrl: "https://maps.app.goo.gl/mA9gZXG6Xki3cjv48",
  },
  {
    name: "Khách sạn Adeline",
    address: "12 Nguyễn Chánh, Việt Nam",
    price: "804,000 – 1,026,000 VNĐ / đêm",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    ],
    mapUrl: "https://maps.app.goo.gl/fs7ZS7kqxckpKgZXA",
  },
];

export const places: Place[] = [
  {
    name: "Hồ Hoàn Kiếm",
    description:
      "Biểu tượng của Hà Nội, được ví như trái tim của thủ đô với khung cảnh yên bình và không gian đi dạo lý tưởng giữa lòng thành phố.",
    image:
      "https://images.unsplash.com/photo-1535952385273-fce3ce04c5e8?w=500&q=80",
    mapUrl: "https://maps.app.goo.gl/raLPonLiGMsDpCeX8",
  },
  {
    name: "Văn Miếu Quốc Tử Giám",
    description:
      "Trường đại học đầu tiên của Việt Nam, biểu tượng văn hóa – giáo dục hơn 1000 năm. Kiến trúc cổ, không gian yên tĩnh, rất hợp chụp ảnh.",
    image:
      "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=500&q=80",
    mapUrl: "https://maps.app.goo.gl/HrrJpbmhJxfwc2PKA",
  },
  {
    name: "Lăng Chủ tịch Hồ Chí Minh",
    description:
      "Khu quảng trường Ba Đình rộng lớn, trang nghiêm – nơi gắn với lịch sử hiện đại Việt Nam.",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&q=80",
    mapUrl: "https://maps.google.com/?q=Ho+Chi+Minh+Mausoleum+Hanoi",
  },
  {
    name: "Phố đi bộ Hồ Gươm",
    description:
      "Không gian đi bộ sôi động vào cuối tuần, nơi bạn hòa mình vào nhịp sống Hà Nội với hoạt động đường phố và ẩm thực địa phương.",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=500&q=80",
    mapUrl: "https://maps.google.com/?q=Pho+di+bo+Ho+Guom+Hanoi",
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
    image:
      "https://images.unsplash.com/photo-1600454309261-3e7f7c8d3e67?w=200&q=80",
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
];

export const aboutCards: AboutCard[] = [
  {
    title: "Facolos — Đối tác tin cậy",
    description:
      "Facolos là thương hiệu hàng đầu trong việc cung cấp dụng cụ Pickleball chuyên nghiệp, tiên phong thúc đẩy phong trào thể thao hiện đại tại Việt Nam.",
    addressLabel: "Văn phòng Hà Nội:",
    address: "282 Nguyễn Huy Tưởng, Q. Thanh Xuân, Hà Nội",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    mapUrl: "https://maps.app.goo.gl/vt7AGNdy2fDrxtU28",
  },
  {
    title: "Pickle Global — Nơi khởi nguồn chất lượng",
    description:
      "Nhà máy Pickle Global tự hào là đơn vị sản xuất dụng cụ Pickleball quy mô lớn, áp dụng công nghệ tiên tiến nhất để mang lại sản phẩm đạt chuẩn thi đấu quốc tế.",
    addressLabel: "Địa chỉ:",
    address: "Đường D3, Khu D, KCN Phố Nối A, Như Quỳnh, Hưng Yên",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&q=80",
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
