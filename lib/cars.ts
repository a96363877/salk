// Car data structure
export interface Car {
    id: string
    name: string
    image: string
    rating: number
    seats: number
    doors: number
    price: number
    type: string
    brand: string
    description?: string
    features?: string[]
  }
  
  // Car database
  
  export const cars: Car[] = [
    {
      id: "land-rover-defender",
      name: "Land Rover Defender",
      image: "/05-17.webp",
      rating: 4.9,
      seats: 4,
      doors: 4,
      price: 750,
      type: "suv",
      brand: "land-rover",
      description: "سيارة دفع رباعي فاخرة مع قدرات عالية على الطرق الوعرة وتصميم عصري",
      features: ["دفع رباعي", "مكيف هواء", "نظام ملاحة", "كاميرا خلفية", "مقاعد جلدية"],
    },
    {
      id: "land-cruiser",
      name: "Land Cruiser",
      image: "/05-14.webp",
      rating: 4.8,
      seats: 7,
      doors: 4,
      price: 650,
      type: "suv",
      brand: "toyota",
      description: "سيارة دفع رباعي موثوقة ومريحة مناسبة للعائلات والرحلات الطويلة",
      features: ["دفع رباعي", "مكيف هواء", "نظام ملاحة", "كاميرا خلفية", "مقاعد جلدية", "7 مقاعد"],
    },
    {
      id: "hyundai-creta",
      name: "Hyundai Creta",
      image: "/Hyundai-Creta-2024.webp",
      rating: 4.7,
      seats: 5,
      doors: 4,
      price: 200,
      type: "suv",
      brand: "hyundai",
      description: "كروس أوفر اقتصادية مع مساحة داخلية جيدة وميزات تكنولوجية حديثة",
      features: ["بلوتوث", "مكيف هواء", "شاشة لمس", "كاميرا خلفية", "مثبت سرعة"],
    },
    {
      id: "mini-cooper-ev",
      name: "Mini Cooper EV",
      image: "/Mini-Cooper-EV-3.webp",
      rating: 4.9,
      seats: 4,
      doors: 2,
      price: 250,
      type: "sedan",
      brand: "mini",
      description: "سيارة كهربائية صغيرة وعصرية مثالية للتنقل في المدينة بأسلوب مميز",
      features: ["كهربائية بالكامل", "شحن سريع", "شاشة لمس", "نظام صوتي ممتاز", "تحكم مناخي"],
    },
    {
      id: "mercedes-g63",
      name: "Mercedes G63",
      image: "/Mercedes-G-63-2024-2.webp",
      rating: 5.0,
      seats: 5,
      doors: 4,
      price: 1200,
      type: "suv",
      brand: "mercedes",
      description: "سيارة دفع رباعي فاخرة للغاية مع أداء قوي وتصميم أيقوني",
      features: ["محرك V8 توربو", "نظام صوت فاخر", "مقاعد مدفأة ومبردة", "نظام ترفيهي متطور", "فتحة سقف بانورامية"],
    },
    {
      id: "nissan-kicks",
      name: "Nissan Kicks",
      image: "/02.webp",
      rating: 4.6,
      seats: 5,
      doors: 4,
      price: 180,
      type: "suv",
      brand: "nissan",
      description: "كروس أوفر مدمجة واقتصادية مع استهلاك وقود منخفض وتقنيات سلامة متقدمة",
      features: ["بلوتوث", "كاميرا 360 درجة", "مكيف هواء", "نظام مراقبة النقطة العمياء", "تحكم مناخي"],
    },
    {
      id: "changan-c1",
      name: "Changan C1",
      image: "/03-4.webp",
      rating: 4.5,
      seats: 4,
      doors: 4,
      price: 160,
      type: "sedan",
      brand: "changan",
      description: "سيارة سيدان اقتصادية مع تصميم عصري وميزات تكنولوجية حديثة بسعر مناسب",
      features: ["شاشة لمس", "بلوتوث", "كاميرا خلفية", "مكيف هواء", "مثبت سرعة"],
    },
    {
      id: "lexus-c1",
      name: "Lexus C1",
      image: "/01-1.webp",
      rating: 4.8,
      seats: 5,
      doors: 4,
      price: 550,
      type: "sedan",
      brand: "lexus",
      description: "سيارة سيدان فاخرة مع تصميم أنيق وتقنيات متطورة وراحة استثنائية",
      features: ["مقاعد جلدية", "نظام صوت فاخر", "فتحة سقف", "نظام ملاحة", "مقاعد مدفأة ومبردة"],
    },
    {
        id: "mercedes-g63",
        name: "Mercedes G63",
        image: "/Mercedes-G-63-2024-2.webp", // Using placeholder until real images are available
        rating: 4.9,
        seats: 7,
        doors: 4,
        price: 1200,
        type: "suv",
        brand: "Mercedes-Benz",
        description: "سيارة SUV فاخرة تجمع بين الأداء العالي والتصميم الأنيق، مناسبة للرحلات العائلية والمناسبات الخاصة.",
        features: ["نظام دفع رباعي", "مقاعد جلدية", "نظام ملاحة", "كاميرا خلفية", "نظام صوت فاخر"]
      },
      {
        id: "lexus-lx570",
        name: "Lexus LX570",
        image: "/02-13.webp",
        rating: 4.8,
        seats: 8,
        doors: 4,
        price: 1100,
        type: "suv",
        brand: "Lexus",
        description: "سيارة SUV فاخرة توفر راحة استثنائية وتقنيات متطورة، مثالية للقيادة في المدينة والطرق الوعرة.",
        features: ["مقاعد مدفأة", "نظام ترفيه خلفي", "نظام ملاحة", "نظام تعليق هوائي", "فتحة سقف"]
      },
      {
        id: "toyota-land-cruiser",
        name: "Toyota Land Cruiser",
        image: "/05-14.webp",
        rating: 4.7,
        seats: 7,
        doors: 4,
        price: 900,
        type: "suv",
        brand: "Toyota",
        description: "سيارة SUV قوية وموثوقة، مناسبة للرحلات الطويلة والطرق الوعرة، مع مساحة داخلية واسعة.",
        features: ["نظام دفع رباعي", "مقاعد مريحة", "نظام ملاحة", "كاميرا خلفية", "نظام صوت عالي الجودة"]
      },
      {
        id: "mercedes-CLA250",
        name: "Mercedes CLA250",
        image: "/Mercedes CLA250.webp",
        rating: 4.9,
        seats: 5,
        doors: 4,
        price: 1000,
        type: "sedan",
        brand: "Mercedes",
        description: "سيارة سيدان فاخرة تجمع بين الأداء العالي والراحة الفائقة والتكنولوجيا الحديثة.",
        features: ["نظام قيادة ذكي", "مقاعد جلدية", "نظام ترفيهي خلفي", "تحكم كهربائي بالمقاعد", "كاميرات 360 درجة"]
      },
      {
        id: "chevrolet-tahoe",
        name: "Chevrolet Tahoe",
        image: "/tahoavif.avif",
        rating: 4.6,
        seats: 7,
        doors: 4,
        price: 850,
        type: "suv",
        brand: "Chevrolet",
        description: "سيارة دفع رباعي كبيرة تناسب العائلات، توفر أداءً قوياً ومساحة واسعة.",
        features: ["شاشة لمس", "بلوتوث", "مقاعد مريحة", "نظام ملاحة", "نظام صوتي محيطي"]
      },
      {
        id: "range-rover-vogue",
        name: "Range Rover Vogue",
        image: "/08-1.webp",
        rating: 4.4,
        seats: 5,
        doors: 4,
        price: 350,
        type: "sedan",
        brand: "Kia",
        description: "سيارة اقتصادية أنيقة وعصرية، مثالية للقيادة داخل المدينة مع ميزات تكنولوجية حديثة.",
        features: ["مكيف أوتوماتيكي", "شاشة عرض", "نظام أمان ذكي", "كاميرا خلفية", "نظام تحكم بالثبات"]
      },
      {
        id: "land-rover-defender",
        name: "Land Rover Defender",
        image: "/Land-Rover-Defender-7.webp",
        rating: 4.9,
        seats: 4,
        doors: 4,
        price: 750,
        type: "suv",
        brand: "Land Rover",
        description: "سيارة دفع رباعي فاخرة مع قدرات عالية على الطرق الوعرة وتصميم عصري",
        features: ["دفع رباعي", "مكيف هواء", "نظام ملاحة", "كاميرا خلفية", "مقاعد جلدية"]
      },
     
  ]
  
  // Function to get car by ID
  export function getCarById(id: string): Car | undefined {
    return cars.find((car) => car.id === id)
  }
