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
    address: "4, Lot 15D Trung Yen, Trung Hoa, Vietnam",
    price: "1,076,000 VND / night (~$43 USD)",
    images: ["/images/hotel-1.jpg"],
    mapUrl: "https://maps.app.goo.gl/wwfQBPJMFLca1R1N9",
  },
  {
    name: "Grand Dragon Hanoi Hotel",
    address: "21 Le Van Luong, Nhan Chinh, Thanh Xuan, Vietnam",
    price: "880,000 VND / night (~$35 USD)",
    images: ["/images/hotel-2.jpg"],
    mapUrl: "https://maps.app.goo.gl/xBPbRuiaKsodY4LQ6",
  },
  {
    name: "HB Serviced Apartment",
    address: "12 Tran Quy Kien, Vietnam",
    price: "863,000 VND / night (~$35 USD)",
    images: ["/images/hotel-3.jpg"],
    mapUrl: "https://maps.app.goo.gl/EE1yCeEDG7CnGeQF7",
  },
  {
    name: "22Housing Residence Suites",
    address: "352 Buoi Street, Hanoi, Vietnam",
    price: "802,000 VND / night (~$32 USD)",
    images: ["/images/hotel-4.jpg"],
    mapUrl: "https://maps.app.goo.gl/mA9gZXG6Xki3cjv48",
  },
  {
    name: "Adeline Hotel",
    address: "12 Nguyen Chanh, Vietnam",
    price: "804,000 – 1,026,000 VND / night (~$32–41 USD)",
    images: ["/images/hotel-5.jpg"],
    mapUrl: "https://maps.app.goo.gl/fs7ZS7kqxckpKgZXA",
  },
  {
    name: "Sheraton Hanoi West",
    address: "Hanoi, Vietnam",
    price: "4,623,029 VND / night (~$185 USD)",
    images: ["/images/hotel-sheraton.jpg"],
    mapUrl: "https://maps.app.goo.gl/CYoC9WytyTQRWND27",
  },
  {
    name: "Vinhomes Skylake Hanoi — Gem Apartment",
    address: "Hanoi, Vietnam",
    price: "2,167,200 VND / night (~$87 USD)",
    images: ["/images/hotel-vinhomes.jpg"],
    mapUrl: "https://maps.app.goo.gl/GEpnJvdJj2XykCfq5",
  },
];

export const places: Place[] = [
  {
    name: "Hoan Kiem Lake",
    description:
      "The symbol of Hanoi, often called the heart of the capital — a peaceful setting and ideal walking spot in the center of the city.",
    image: "/images/place-hoan-kiem.jpg",
    mapUrl: "https://maps.app.goo.gl/raLPonLiGMsDpCeX8",
  },
  {
    name: "Temple of Literature",
    description:
      "Vietnam's first university, a cultural and educational icon for over 1,000 years. Ancient architecture, serene atmosphere — perfect for photos.",
    image: "/images/place-van-mieu.jpg",
    mapUrl: "https://maps.app.goo.gl/HrrJpbmhJxfwc2PKA",
  },
  {
    name: "Ho Chi Minh Mausoleum",
    description:
      "The grand Ba Dinh Square — solemn and steeped in Vietnam's modern history.",
    image: "/images/place-lang-bac.jpg",
    mapUrl: "https://maps.google.com/?q=Ho+Chi+Minh+Mausoleum+Hanoi",
  },
  {
    name: "Hoan Kiem Walking Street",
    description:
      "A lively pedestrian zone on weekends where you can immerse yourself in Hanoi's street life, food, and culture.",
    image: "/images/place-pho-di-bo.jpg",
    mapUrl: "https://maps.google.com/?q=Pho+di+bo+Ho+Guom+Hanoi",
  },
  {
    name: "Hanoi Opera House",
    description:
      "A stunning French colonial architecture landmark in the heart of the capital — elegant and impressive.",
    image: "/images/place-opera-house.jpg",
    mapUrl: "https://maps.app.goo.gl/edRzzoUPNx9oBqV57",
  },
  {
    name: "One Pillar Pagoda",
    description:
      "A unique pagoda built on a single pillar in a lotus pond — a deeply cultural symbol of Vietnam.",
    image: "/images/place-chua-mot-cot.jpg",
    mapUrl: "https://maps.app.goo.gl/UQZr5QSZvznCFHPC9",
  },
  {
    name: "West Lake",
    description:
      "Hanoi's largest lake, famous for its romantic sunset views and relaxing atmosphere.",
    image: "/images/place-ho-tay.jpg",
    mapUrl: "https://maps.app.goo.gl/Amk1x6nHZ9ee8kbR7",
  },
  {
    name: "Dong Xuan Market",
    description:
      "A historic market in the Old Quarter, bustling with trade and all kinds of goods.",
    image: "/images/place-dong-xuan.jpg",
    mapUrl: "https://maps.app.goo.gl/cGNhos2HooUEhDvW7",
  },
];

export const foodSpots: FoodSpot[] = [
  {
    name: "Pho Thin Lo Duc",
    description:
      "Famous beef pho with rich broth and a unique stir-fried beef style.",
    image:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/fFQVc1mAntrUSnMS9",
  },
  {
    name: "Bun Cha Huong Lien",
    description:
      "Famous bun cha with fragrant grilled pork and savory dipping sauce — once visited by President Obama.",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/pQxLHm82k41qfVBm6",
  },
  {
    name: "Banh Mi 25",
    description:
      "A famous banh mi shop in the Old Quarter — great for international visitors, easy to eat, and full of Vietnamese flavor.",
    image: "/images/food-banh-mi.jpg",
    mapUrl: "https://maps.google.com/?q=Banh+Mi+25+Hanoi",
  },
  {
    name: "Hanoi Corner Restaurant",
    description:
      "A restaurant in the Old Quarter serving a wide variety of traditional Vietnamese dishes in a cozy setting.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80",
    mapUrl: "https://maps.google.com/?q=Hanoi+Corner+Restaurant",
  },
  {
    name: "Cafe Minh",
    description:
      "Old Hanoi-style coffee with a rustic, quiet atmosphere — perfect for enjoying traditional Vietnamese coffee.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80",
    mapUrl: "https://maps.google.com/?q=Cafe+Minh+Hanoi",
  },
  {
    name: "Tung's Kitchen",
    description:
      "Diverse Vietnamese and vegetarian dishes — great for international visitors and athletes with special diets.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80",
    mapUrl: "https://maps.google.com/?q=Tungs+Kitchen+Hanoi",
  },
  {
    name: "Train Track Cafe",
    description:
      "A cafe right next to the railway tracks — watch trains pass by for a uniquely Hanoi experience.",
    image: "/images/food-train-track.jpg",
    mapUrl: "https://maps.app.goo.gl/VhPS94qUGZaeVnN96",
  },
  {
    name: "Lotteria My Dinh",
    description:
      "Fast food near the competition venue, open 08:00–22:30 — convenient for a quick meal.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/gkTMsUrD7aTUZAWt8",
  },
  {
    name: "K-Pub Chicken",
    description:
      "Korean-style fried chicken with bold flavors — a tasty option near the venue.",
    image: "/images/food-kpub.jpg",
    mapUrl: "https://maps.app.goo.gl/rU6BgnTYeuUq8iwi7",
  },
  {
    name: "Milano Coffee Tran Huu Duc",
    description:
      "A familiar Vietnamese coffee chain near the venue — great for resting between matches.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80",
    mapUrl: "https://maps.app.goo.gl/g9RxuAjWDQCw16nNA",
  },
];

export const aboutCards: AboutCard[] = [
  {
    title: "Facolos — Your Trusted Partner",
    description:
      "Facolos is a leading brand in professional Pickleball equipment, pioneering the modern sports movement in Vietnam.",
    addressLabel: "Hanoi Office:",
    address: "282 Nguyen Huy Tuong, Thanh Xuan District, Hanoi",
    image: "/images/about-facolos.jpg",
    mapUrl: "https://maps.app.goo.gl/vt7AGNdy2fDrxtU28",
  },
  {
    title: "Pickle Global — Where Quality Begins",
    description:
      "Pickle Global's factory is a large-scale Pickleball equipment manufacturer, using cutting-edge technology to deliver products that meet international competition standards.",
    addressLabel: "Address:",
    address: "D3 Road, Zone D, Pho Noi A Industrial Park, Nhu Quynh, Hung Yen",
    image: "/images/about-factory.jpg",
    mapUrl: "https://maps.app.goo.gl/cr8AsiA46kM9jAUMA",
  },
];

export const contact = {
  phone: {
    name: "Vo Tran Quynh Trang",
    number: "0986 120 954",
    tel: "0986120954",
  },
  email: {
    label: "Contact via email",
    address: "Jessica@facolos.com",
  },
};
