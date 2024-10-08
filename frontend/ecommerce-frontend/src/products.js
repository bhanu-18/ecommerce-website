const products = {
  electronics: [
    {
      id: 1,
      name: "Smartphone",
      price: 299.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525410_sd.jpg;maxHeight=640;maxWidth=550",
      description: "Latest smartphone with all the modern features.",
    },
    {
      id: 2,
      name: "Laptop",
      price: 999.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534625_sd.jpg;maxHeight=1920;maxWidth=1920",
      description: "High-performance laptop for work and gaming.",
    },
    {
      id: 3,
      name: "Smartwatch",
      price: 199.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6568/6568486_sd.jpg;maxHeight=640;maxWidth=550",
      description: "Keep track of your fitness and notifications.",
    },
    {
      id: 4,
      name: "Bluetooth Headphones",
      price: 149.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6447/6447382_sd.jpg;maxHeight=640;maxWidth=550",
      description: "Wireless headphones with superior sound quality.",
    },
    {
      id: 5,
      name: "Gaming Console",
      price: 399.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566039ld.jpg;maxHeight=640;maxWidth=550",
      description: "Next-gen gaming console for ultimate entertainment.",
    },
    {
      id: 6,
      name: "4K Television",
      price: 799.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/ed2f1a31-be16-4137-925e-edc7e48203b4.jpg;maxHeight=640;maxWidth=550",
      description: "Experience movies and shows in stunning 4K resolution.",
    },
    {
      id: 7,
      name: "Tablet",
      price: 499.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566195_sd.jpg;maxHeight=282;maxWidth=600",
      description: "Portable tablet for work and play on the go.",
    },
    {
      id: 8,
      name: "Wireless Charger",
      price: 49.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6511/6511346_sd.jpg;maxHeight=640;maxWidth=550",
      description: "Fast wireless charging for your devices.",
    },
    {
      id: 9,
      name: "Smart Home Speaker",
      price: 129.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6544/6544301cv1d.jpg;maxHeight=640;maxWidth=550",
      description: "Voice-controlled speaker for smart home automation.",
    },
    {
      id: 10,
      name: "VR Headset",
      price: 299.99,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6542/6542114_sd.jpg;maxHeight=640;maxWidth=550",
      description: "Immerse yourself in virtual reality experiences.",
    },
  ],
  clothing: [
    {
      id: 11,
      name: "T-Shirt",
      price: 19.99,
      imageUrl: "https://static.zara.net/assets/public/42fd/86d0/7f93467aac8a/a3f0992a2d0a/00085636505-a1/00085636505-a1.jpg?ts=1721224436416&w=750",
      description: "Comfortable cotton t-shirt available in various sizes.",
    },
    {
      id: 12,
      name: "Jeans",
      price: 49.99,
      imageUrl: "https://s7d2.scene7.com/is/image/aeo/0437_5351_992_l1?$pdp-md-opt$&fmt=webp",
      description: "Stylish jeans with a perfect fit.",
    },
    {
      id: 13,
      name: "Jacket",
      price: 89.99,
      imageUrl: "https://image.hm.com/assets/hm/78/06/78061b7e2392b2bddebe7759f2c0ae8c30a4af82.jpg?imwidth=768",
      description: "Warm and trendy jacket for the colder months.",
    },
    {
      id: 14,
      name: "Sneakers",
      price: 79.99,
      imageUrl: "https://image.hm.com/assets/hm/b7/d1/b7d13ce9554dc992366ac53ba7a89849798ba9cc.jpg?imwidth=768",
      description: "Casual sneakers for everyday wear.",
    },
    {
      id: 15,
      name: "Sunglasses",
      price: 29.99,
      imageUrl: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/32-p7301_f.jpg",
      description: "Stylish sunglasses with UV protection.",
    },
    {
      id: 16,
      name: "Dress",
      price: 69.99,
      imageUrl: "https://www.lulus.com/images/product/xlarge/7551321_1528776.jpg?w=375&hdpi=1",
      description: "Elegant dress perfect for formal occasions.",
    },
    {
      id: 17,
      name: "Cap",
      price: 14.99,
      imageUrl: "https://static.zara.net/assets/public/413e/29b1/da0f40a39550/93e19ca43513/00653221620-p/00653221620-p.jpg?ts=1717750385065&w=750",
      description: "Casual cap for sun protection and style.",
    },
    {
      id: 18,
      name: "Scarf",
      price: 24.99,
      imageUrl: "https://static.zara.net/assets/public/f76a/8e1a/8a9b4b5788ed/b130c0e2e9db/04758206705-p/04758206705-p.jpg?ts=1719395418869&w=750",
      description: "Warm scarf made from soft materials.",
    },
    {
      id: 19,
      name: "Swimsuit",
      price: 34.99,
      imageUrl: "https://static.zara.net/assets/public/d6a3/a938/2d7340e5a607/6c97739416d0/02856212051-p/02856212051-p.jpg?ts=1718030963091&w=750",
      description: "Comfortable swimsuit for the beach or pool.",
    },
    {
      id: 20,
      name: "Belt",
      price: 19.99,
      imageUrl: "https://static.zara.net/assets/public/8392/aa36/7494487294fd/a0383d889787/01736214700-e1/01736214700-e1.jpg?ts=1720787748556&w=750",
      description: "Leather belt that complements any outfit.",
    },
  ],
  books: [
    {
      id: 21,
      name: "The Great Gatsby",
      price: 10.99,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
      description: "A classic novel by F. Scott Fitzgerald.",
    },
    {
      id: 22,
      name: "1984",
      price: 8.99,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
      description: "A dystopian social science fiction novel by George Orwell.",
    },
    {
      id: 23,
      name: "To Kill a Mockingbird",
      price: 7.99,
      imageUrl: "https://m.media-amazon.com/images/I/81aY1lxk+9L._SL1500_.jpg",
      description: "A novel by Harper Lee published in 1960.",
    },
    {
      id: 24,
      name: "Moby-Dick",
      price: 11.99,
      imageUrl: "https://m.media-amazon.com/images/I/71d5wo+-MuL._SL1200_.jpg",
      description: "A novel by Herman Melville published in 1851.",
    },
    {
      id: 25,
      name: "War and Peace",
      price: 14.99,
      imageUrl: "https://m.media-amazon.com/images/I/71wXZB-VtBL._SL1200_.jpg",
      description: "A novel by Leo Tolstoy first published in 1869.",
    },
  ],
  homeAppliances: [
    {
      id: 26,
      name: "Refrigerator",
      price: 899.99,
      imageUrl: "https://m.media-amazon.com/images/I/619Uh-BHVbL._AC_SL1500_.jpg",
      description: "Spacious refrigerator with smart cooling.",
    },
    {
      id: 27,
      name: "Washing Machine",
      price: 649.99,
      imageUrl: "https://m.media-amazon.com/images/I/71+px7jUk5L._AC_SL1500_.jpg",
      description: "High-efficiency washing machine with multiple settings.",
    },
    {
      id: 28,
      name: "Microwave Oven",
      price: 199.99,
      imageUrl: "https://m.media-amazon.com/images/I/41RIZAR-o0L._AC_SL1000_.jpg",
      description: "Compact microwave oven for quick heating and cooking.",
    },
    {
      id: 29,
      name: "Air Conditioner",
      price: 499.99,
      imageUrl: "https://m.media-amazon.com/images/I/71ofqBE9ZIL._AC_SL1500_.jpg",
      description: "Energy-efficient air conditioner with remote control.",
    },
    {
      id: 30,
      name: "Dishwasher",
      price: 749.99,
      imageUrl: "https://m.media-amazon.com/images/I/61uktgglkfL._AC_SL1500_.jpg",
      description: "Quiet dishwasher with multiple wash cycles.",
    },
  ],
  furniture: [
    {
      id: 31,
      name: "Sofa",
      price: 599.99,
      imageUrl: "https://m.media-amazon.com/images/I/61yK3WzaOmL._AC_SL1044_.jpg",
      description: "Comfortable 3-seater sofa in various colors.",
    },
    {
      id: 32,
      name: "Dining Table",
      price: 399.99,
      imageUrl: "https://m.media-amazon.com/images/I/91aP3UkBoqL._AC_SL1500_.jpg",
      description: "Wooden dining table that seats six.",
    },
    {
      id: 33,
      name: "Bed Frame",
      price: 299.99,
      imageUrl: "https://m.media-amazon.com/images/I/61oth542ZwL._AC_SL1080_.jpg",
      description: "Sturdy bed frame with modern design.",
    },
    {
      id: 34,
      name: "Office Chair",
      price: 149.99,
      imageUrl: "https://m.media-amazon.com/images/I/61iGb6Vu1LL._AC_SL1500_.jpg",
      description: "Ergonomic office chair for comfort during work.",
    },
    {
      id: 35,
      name: "Bookshelf",
      price: 99.99,
      imageUrl: "https://m.media-amazon.com/images/I/61vk8I5Oq0L._AC_SL1024_.jpg",
      description: "Spacious bookshelf with multiple compartments.",
    },
  ],
  toys: [
    {
      id: 36,
      name: "LEGO Set",
      price: 59.99,
      imageUrl: "https://m.media-amazon.com/images/I/8160QjpuoOL._AC_SL1500_.jpg",
      description: "Creative LEGO building set for kids and adults.",
    },
    {
      id: 37,
      name: "Dollhouse",
      price: 89.99,
      imageUrl: "https://m.media-amazon.com/images/I/71jrYmYh7jL._AC_SL1500_.jpg",
      description: "Wooden dollhouse with furniture and accessories.",
    },
    {
      id: 38,
      name: "Action Figure",
      price: 19.99,
      imageUrl: "https://m.media-amazon.com/images/I/71iXSJbQpdL._AC_SL1500_.jpg",
      description: "Collectible action figure with movable joints.",
    },
    {
      id: 39,
      name: "Remote Control Car",
      price: 49.99,
      imageUrl: "https://m.media-amazon.com/images/I/81xZzFKCvRL._AC_SL1500_.jpg",
      description: "Fast remote control car with rechargeable battery.",
    },
    {
      id: 40,
      name: "Puzzle",
      price: 14.99,
      imageUrl: "https://m.media-amazon.com/images/I/81aHaWPUl+L._AC_SL1500_.jpg",
      description: "1000-piece puzzle for hours of entertainment.",
    },
  ],
  beauty: [
    {
      id: 41,
      name: "Lipstick",
      price: 29.99,
      imageUrl: "https://m.media-amazon.com/images/I/31QHgcGnKSL._SX300_SY300_QL70_FMwebp_.jpg",
      description: "Long-lasting lipstick available in various shades.",
    },
    {
      id: 42,
      name: "Foundation",
      price: 39.99,
      imageUrl: "https://m.media-amazon.com/images/I/7141S1cZBlL._SL1500_.jpg",
      description: "Flawless foundation for a smooth complexion.",
    },
    {
      id: 43,
      name: "Mascara",
      price: 24.99,
      imageUrl: "https://m.media-amazon.com/images/I/61K6cQhw4EL._SL1500_.jpg",
      description: "Waterproof mascara for voluminous lashes.",
    },
    {
      id: 44,
      name: "Perfume",
      price: 79.99,
      imageUrl: "https://m.media-amazon.com/images/I/71dfKYpnQ2L._SL1500_.jpg",
      description: "Elegant perfume with a lasting fragrance.",
    },
    {
      id: 45,
      name: "Hair Dryer",
      price: 59.99,
      imageUrl: "https://m.media-amazon.com/images/I/61ptGzbOxQL._SL1500_.jpg",
      description: "Powerful hair dryer with multiple settings.",
    },
  ],
  sports: [
    {
      id: 46,
      name: "Yoga Mat",
      price: 19.99,
      imageUrl: "https://m.media-amazon.com/images/I/812bmNPkGXL._AC_SL1500_.jpg",
      description: "Durable yoga mat for all fitness levels.",
    },
    {
      id: 47,
      name: "Running Shoes",
      price: 99.99,
      imageUrl: "https://m.media-amazon.com/images/I/815p4IKVl5L._AC_SY695_.jpg",
      description: "Comfortable running shoes for long-distance runs.",
    },
    {
      id: 48,
      name: "Dumbbell Set",
      price: 59.99,
      imageUrl: "https://m.media-amazon.com/images/I/71HEqww6NtL._AC_SL1500_.jpg",
      description: "Adjustable dumbbell set for strength training.",
    },
    {
      id: 49,
      name: "Bicycle",
      price: 299.99,
      imageUrl: "https://m.media-amazon.com/images/I/81NSMI7pFLL._AC_SL1500_.jpg",
      description: "Mountain bicycle with multiple gears.",
    },
    {
      id: 50,
      name: "Tennis Racket",
      price: 79.99,
      imageUrl: "https://m.media-amazon.com/images/I/512LJEO5sxL._AC_SL1200_.jpg",
      description: "Lightweight tennis racket for all skill levels.",
    },
  ],
  automotive: [
    {
      id: 51,
      name: "Car Vacuum Cleaner",
      price: 49.99,
      imageUrl: "https://m.media-amazon.com/images/I/71oALnRR30L._AC_SL1500_.jpg",
      description: "Portable car vacuum cleaner with powerful suction.",
    },
    {
      id: 52,
      name: "GPS Navigation System",
      price: 149.99,
      imageUrl: "https://m.media-amazon.com/images/I/51rQE1UDWiL._AC_SL1000_.jpg",
      description: "Reliable GPS system with real-time traffic updates.",
    },
    {
      id: 53,
      name: "Dash Cam",
      price: 89.99,
      imageUrl: "https://m.media-amazon.com/images/I/717UWV97ZGL._AC_SL1500_.jpg",
      description: "Full HD dash cam with night vision.",
    },
    {
      id: 54,
      name: "Car Seat Cover",
      price: 59.99,
      imageUrl: "https://m.media-amazon.com/images/I/61S7LwAV00L._AC_SL1500_.jpg",
      description: "Premium leather car seat cover set.",
    },
    {
      id: 55,
      name: "Jump Starter",
      price: 69.99,
      imageUrl: "https://m.media-amazon.com/images/I/71aF7GY0cEL._AC_SL1500_.jpg",
      description: "Compact jump starter with built-in flashlight.",
    },
  ],
  groceries: [
    {
      id: 56,
      name: "Organic Almonds",
      price: 15.99,
      imageUrl: "https://m.media-amazon.com/images/I/61IJn0pC1KL._SL1000_.jpg",
      description: "Raw organic almonds, 1 lb pack.",
    },
    {
      id: 57,
      name: "Olive Oil",
      price: 12.99,
      imageUrl: "https://m.media-amazon.com/images/I/713Np6zjfoL._SL1500_.jpg",
      description: "Extra virgin olive oil, 500ml bottle.",
    },
    {
      id: 58,
      name: "Quinoa",
      price: 9.99,
      imageUrl: "https://m.media-amazon.com/images/I/71FYx5feRtL._SL1500_.jpg",
      description: "Organic quinoa, 2 lb pack.",
    },
    {
      id: 59,
      name: "Dark Chocolate",
      price: 5.99,
      imageUrl: "https://m.media-amazon.com/images/I/71ss8xmMFdL._SL1500_.jpg",
      description: "80% dark chocolate bar, 100g.",
    },
    {
      id: 60,
      name: "Honey",
      price: 7.99,
      imageUrl: "https://m.media-amazon.com/images/I/71IiDDqflEL._SL1500_.jpg",
      description: "Raw organic honey, 16 oz jar.",
    },
  ],
  jewelry: [
    {
      id: 61,
      name: "Gold Necklace",
      price: 199.99,
      imageUrl: "https://www.gorjana.com/cdn/shop/files/2408_NECKLACES-STL-4.jpg?v=1722460943&width=832&height=1248&crop=center",
      description: "Elegant gold necklace with diamond pendant.",
    },
    {
      id: 62,
      name: "Silver Earrings",
      price: 49.99,
      imageUrl: "https://www.sterlingforever.com/cdn/shop/products/SterlingForever_2019.181530-S.jpg?v=1707503058&width=990",
      description: "Sterling silver earrings with cubic zirconia stones.",
    },
    {
      id: 63,
      name: "Men's Watch",
      price: 299.99,
      imageUrl: "https://m.media-amazon.com/images/I/71bIzlId7-L._AC_SX679_.jpg",
      description: "Luxury men's watch with leather strap.",
    },
    {
      id: 64,
      name: "Bracelet",
      price: 89.99,
      imageUrl: "https://m.media-amazon.com/images/I/71R81tHIiUL._AC_SX695_.jpg",
      description: "Gold bracelet with delicate design.",
    },
    {
      id: 65,
      name: "Engagement Ring",
      price: 999.99,
      imageUrl: "https://www.kay.com/productimages/processed/V-994935409_0_800.jpg?pristine=true",
      description: "Diamond engagement ring in white gold.",
    },
  ],
};

export default products;
