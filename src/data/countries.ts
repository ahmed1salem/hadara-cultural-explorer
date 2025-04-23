
export interface Country {
  id: string;
  name: string;
  nameArabic: string;
  flagImage: string;
  hero: string;
  capital: string;
  capitalArabic: string;
  officialLanguage: string;
  officialLanguageArabic: string;
  currency: string;
  currencyArabic: string;
  description: string;
  history: string;
  landmarks: Landmark[];
  achievements: Achievement[];
}

export interface Landmark {
  id: string;
  name: string;
  nameArabic: string;
  image: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  titleArabic: string;
  description: string;
  year?: number;
  yearStr?: string;
}

// Initial country data
export const countries: Country[] = [
  {
    id: "egypt",
    name: "Egypt",
    nameArabic: "مصر",
    flagImage: "/placeholder.svg",
    hero: "/placeholder.svg",
    capital: "Cairo",
    capitalArabic: "القاهرة",
    officialLanguage: "Arabic",
    officialLanguageArabic: "العربية",
    currency: "Egyptian Pound",
    currencyArabic: "الجنيه المصري",
    description: "مصر هي مهد الحضارة العربية والفرعونية، تتميز بموقع استراتيجي يربط بين قارتي أفريقيا وآسيا. تعتبر من أقدم الحضارات في العالم وتتمتع بتنوع ثقافي واجتماعي غني.",
    history: "تُعد مصر من أقدم الحضارات في العالم، تأسست حوالي 3100 قبل الميلاد. مرت بالعديد من العصور والحضارات المختلفة بدءًا من العصر الفرعوني، مرورًا بالعصور اليونانية والرومانية والإسلامية. كان لها دور محوري في تاريخ المنطقة العربية والعالم.",
    landmarks: [
      {
        id: "pyramids",
        name: "The Great Pyramids of Giza",
        nameArabic: "أهرامات الجيزة",
        image: "/placeholder.svg",
        description: "أحد عجائب الدنيا السبع، بنيت قبل أكثر من 4500 عام كمقابر للفراعنة. تعد الهرم الأكبر خوفو أكبر الأهرامات الثلاثة وأكثرها إثارة للإعجاب."
      },
      {
        id: "sphinx",
        name: "The Sphinx",
        nameArabic: "أبو الهول",
        image: "/placeholder.svg",
        description: "تمثال أسطوري برأس إنسان وجسد أسد. يُعتقد أنه بُني في عهد الفرعون خفرع حوالي 2500 قبل الميلاد."
      },
    ],
    achievements: [
      {
        id: "canal",
        title: "Suez Canal",
        titleArabic: "قناة السويس",
        description: "قناة السويس هي ممر مائي اصطناعي يربط بين البحر الأبيض المتوسط والبحر الأحمر، وتعد من أهم الممرات المائية في العالم.",
        year: 1869
      },
      {
        id: "library",
        title: "Library of Alexandria",
        titleArabic: "مكتبة الإسكندرية",
        description: "مكتبة الإسكندرية الحديثة هي إحياء لمكتبة الإسكندرية القديمة، وتعد مركزًا ثقافيًا عالميًا.",
        year: 2002
      }
    ]
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    nameArabic: "المملكة العربية السعودية",
    flagImage: "/placeholder.svg",
    hero: "/placeholder.svg",
    capital: "Riyadh",
    capitalArabic: "الرياض",
    officialLanguage: "Arabic",
    officialLanguageArabic: "العربية",
    currency: "Saudi Riyal",
    currencyArabic: "الريال السعودي",
    description: "المملكة العربية السعودية هي أكبر دولة في شبه الجزيرة العربية، وتحتضن الحرمين الشريفين في مكة المكرمة والمدينة المنورة، مما يجعلها وجهة رئيسية للمسلمين حول العالم.",
    history: "تأسست المملكة العربية السعودية الحديثة على يد الملك عبد العزيز آل سعود عام 1932م. تحتل المملكة موقعًا استراتيجيًا في قلب العالم العربي والإسلامي ولها دور محوري في تاريخ المنطقة.",
    landmarks: [
      {
        id: "masjid-al-haram",
        name: "Al-Masjid Al-Haram",
        nameArabic: "المسجد الحرام",
        image: "/placeholder.svg",
        description: "المسجد الحرام هو أكبر مسجد في العالم ويحيط بالكعبة المشرفة، ويعد أقدس موقع في الإسلام."
      },
      {
        id: "riyadh-kingdom-center",
        name: "Kingdom Centre",
        nameArabic: "برج المملكة",
        image: "/placeholder.svg",
        description: "برج المملكة هو أحد أبرز المعالم الحديثة في الرياض، ويعد من أطول المباني في المملكة العربية السعودية."
      }
    ],
    achievements: [
      {
        id: "vision-2030",
        title: "Vision 2030",
        titleArabic: "رؤية 2030",
        description: "خطة إستراتيجية شاملة تهدف إلى تنويع الاقتصاد وتقليل الاعتماد على النفط من خلال تطوير قطاعات متنوعة.",
        year: 2016
      },
      {
        id: "king-abdullah-university",
        title: "King Abdullah University of Science and Technology",
        titleArabic: "جامعة الملك عبدالله للعلوم والتقنية",
        description: "جامعة بحثية متقدمة تركز على العلوم والتكنولوجيا والابتكار.",
        year: 2009
      }
    ]
  },
  {
    id: "morocco",
    name: "Morocco",
    nameArabic: "المغرب",
    flagImage: "/placeholder.svg",
    hero: "/placeholder.svg",
    capital: "Rabat",
    capitalArabic: "الرباط",
    officialLanguage: "Arabic, Amazigh",
    officialLanguageArabic: "العربية، الأمازيغية",
    currency: "Moroccan Dirham",
    currencyArabic: "الدرهم المغربي",
    description: "المغرب بلد يقع في شمال أفريقيا، يتميز بتنوعه الثقافي والطبيعي الفريد. يشتهر بأسواقه التقليدية وعمارته الأندلسية وطبخه العالمي المشهور.",
    history: "يمتد تاريخ المغرب إلى العصور القديمة، حيث سكنه الأمازيغ الأصليون. مر بتأثيرات متنوعة من الفينيقيين والرومان والعرب والأندلسيين والفرنسيين. استقل المغرب عام 1956، وحافظ على تراثه الثقافي الغني.",
    landmarks: [
      {
        id: "medina-fez",
        name: "Medina of Fez",
        nameArabic: "مدينة فاس العتيقة",
        image: "/placeholder.svg",
        description: "مدينة فاس العتيقة هي أكبر منطقة حضرية خالية من السيارات في العالم وموقع للتراث العالمي لليونسكو. تأسست في القرن التاسع وتشتهر بمساجدها ومدارسها القديمة."
      },
      {
        id: "hassan-tower",
        name: "Hassan Tower",
        nameArabic: "صومعة حسان",
        image: "/placeholder.svg",
        description: "صومعة حسان هي مئذنة مسجد غير مكتمل في الرباط، بدأ بناؤها في عام 1195. تعد من أهم المعالم التاريخية في المغرب."
      }
    ],
    achievements: [
      {
        id: "moroccan-solar-project",
        title: "Noor Solar Power Plant",
        titleArabic: "محطة نور للطاقة الشمسية",
        description: "أكبر محطة للطاقة الشمسية المركزة في العالم، وتعد جزءًا من استراتيجية المغرب للطاقة المتجددة.",
        year: 2016
      },
      {
        id: "high-speed-train",
        title: "Al-Boraq High-Speed Train",
        titleArabic: "قطار البراق فائق السرعة",
        description: "أول قطار فائق السرعة في أفريقيا والعالم العربي، يربط بين طنجة والدار البيضاء.",
        year: 2018
      }
    ]
  }
];

// Function to get country by ID
export const getCountryById = (id: string): Country | undefined => {
  return countries.find(country => country.id === id);
};
