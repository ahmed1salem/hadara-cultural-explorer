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
    description: "المملكة العربية السعودية هي أكبر دولة في شبه الجزيرة العربية، وتحتضن الحرمين الشريفين في مكة المكرمة والمدينة المنورة. تشهد المملكة تطوراً مستمراً في مختلف المجالات وفق رؤية 2030.",
    history: "تأسست المملكة العربية السعودية الحديثة على يد الملك عبد العزيز آل سعود عام 1932م. منذ ذلك الحين، شهدت المملكة تطوراً كبيراً في مختلف المجالات الاقتصادية والاجتماعية والثقافية.",
    landmarks: [
      {
        id: "masjid-al-haram",
        name: "Al-Masjid Al-Haram",
        nameArabic: "المسجد الحرام",
        image: "/placeholder.svg",
        description: "أكبر مسجد في العالم ويضم الكعبة المشرفة، قبلة المسلمين في صلاتهم"
      },
      {
        id: "prophets-mosque",
        name: "The Prophet's Mosque",
        nameArabic: "المسجد النبوي",
        image: "/placeholder.svg",
        description: "ثاني أقدس المساجد في الإسلام، يقع في المدينة المنورة ويضم قبر النبي محمد ﷺ"
      },
      {
        id: "kingdom-centre",
        name: "Kingdom Centre",
        nameArabic: "مركز المملكة",
        image: "/placeholder.svg",
        description: "برج شاهق في قلب الرياض، يعد من أبرز معالم العمارة الحديثة في المملكة"
      },
      {
        id: "edge-of-the-world",
        name: "Edge of the World",
        nameArabic: "حافة العالم",
        image: "/placeholder.svg",
        description: "موقع جيولوجي مذهل يقع شمال الرياض، يوفر إطلالة خلابة على الصحراء"
      }
    ],
    achievements: [
      {
        id: "vision-2030",
        title: "Vision 2030",
        titleArabic: "رؤية 2030",
        description: "خطة إستراتيجية طموحة لتنويع الاقتصاد وتطوير القطاعات غير النفطية",
        year: 2016
      }
    ]
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    nameArabic: "الإمارات العربية المتحدة",
    flagImage: "/placeholder.svg",
    hero: "/placeholder.svg",
    capital: "Abu Dhabi",
    capitalArabic: "أبوظبي",
    officialLanguage: "Arabic",
    officialLanguageArabic: "العربية",
    currency: "UAE Dirham",
    currencyArabic: "الدرهم الإماراتي",
    description: "دولة حديثة تجمع بين التراث العربي الأصيل والتطور العمراني والتكنولوجي المعاصر. تعتبر مركزاً تجارياً وسياحياً عالمياً.",
    history: "تأسست دولة الإمارات العربية المتحدة في عام 1971 باتحاد سبع إمارات. نجحت في التحول من اقتصاد يعتمد على صيد اللؤلؤ إلى قوة اقتصادية إقليمية.",
    landmarks: [
      {
        id: "burj-khalifa",
        name: "Burj Khalifa",
        nameArabic: "برج خليفة",
        image: "/placeholder.svg",
        description: "أطول مبنى في العالم، يرتفع إلى 828 متراً ويعد رمزاً للتطور العمراني في دبي"
      },
      {
        id: "palm-jumeirah",
        name: "Palm Jumeirah",
        nameArabic: "نخلة جميرا",
        image: "/placeholder.svg",
        description: "جزيرة اصطناعية على شكل نخلة، تضم فنادق ومنتجعات فاخرة"
      },
      {
        id: "sheikh-zayed-mosque",
        name: "Sheikh Zayed Grand Mosque",
        nameArabic: "جامع الشيخ زايد الكبير",
        image: "/placeholder.svg",
        description: "تحفة معمارية تجمع بين الفن الإسلامي والعمارة الحديثة في أبوظبي"
      },
      {
        id: "dubai-mall",
        name: "The Dubai Mall",
        nameArabic: "دبي مول",
        image: "/placeholder.svg",
        description: "أكبر مركز تجاري في العالم من حيث المساحة الإجمالية"
      }
    ],
    achievements: [
      {
        id: "expo-2020",
        title: "Expo 2020 Dubai",
        titleArabic: "إكسبو 2020 دبي",
        description: "استضافة أول معرض إكسبو في الشرق الأوسط وأفريقيا وجنوب آسيا",
        year: 2021
      },
      {
        id: "hope-probe",
        title: "Emirates Mars Mission",
        titleArabic: "مسبار الأمل",
        description: "أول مهمة عربية لاستكشاف المريخ",
        year: 2021
      }
    ]
  },
  {
    id: "qatar",
    name: "Qatar",
    nameArabic: "قطر",
    flagImage: "/placeholder.svg",
    hero: "/placeholder.svg",
    capital: "Doha",
    capitalArabic: "الدوحة",
    officialLanguage: "Arabic",
    officialLanguageArabic: "العربية",
    currency: "Qatari Riyal",
    currencyArabic: "الريال القطري",
    description: "قطر دولة تجمع بين الأصالة والحداثة، وتشهد نهضة عمرانية وثقافية كبيرة. نجحت في استضافة كأس العالم 2022 وتطوير بنيتها التحتية بشكل مذهل.",
    history: "استقلت قطر عن المملكة المتحدة في عام 1971. شهدت تطوراً سريعاً بفضل اكتشاف النفط والغاز، وأصبحت من أغنى دول العالم.",
    landmarks: [
      {
        id: "national-museum",
        name: "National Museum of Qatar",
        nameArabic: "متحف قطر الوطني",
        image: "/placeholder.svg",
        description: "مبنى مستوحى من وردة الصحراء، يحكي تاريخ قطر وتراثها"
      },
      {
        id: "lusail-stadium",
        name: "Lusail Stadium",
        nameArabic: "استاد لوسيل",
        image: "/placeholder.svg",
        description: "الملعب الرئيسي لكأس العالم 2022، يتسع لـ 80,000 متفرج"
      },
      {
        id: "pearl-qatar",
        name: "The Pearl-Qatar",
        nameArabic: "اللؤلؤة-قطر",
        image: "/placeholder.svg",
        description: "جزيرة اصطناعية فاخرة تضم مساكن ومتاجر ومطاعم"
      },
      {
        id: "katara",
        name: "Katara Cultural Village",
        nameArabic: "الحي الثقافي كتارا",
        image: "/placeholder.svg",
        description: "مجمع ثقافي يضم مسارح ومعارض ومطاعم تعكس الثقافة القطرية"
      }
    ],
    achievements: [
      {
        id: "world-cup-2022",
        title: "FIFA World Cup 2022",
        titleArabic: "كأس العالم 2022",
        description: "استضافة أول كأس عالم في الشرق الأوسط",
        year: 2022
      },
      {
        id: "education-city",
        title: "Education City",
        titleArabic: "المدينة التعليمية",
        description: "مجمع تعليمي يضم فروعاً لجامعات عالمية مرموقة",
        year: 2003
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
    officialLanguage: "Arabic",
    officialLanguageArabic: "العربية",
    currency: "Moroccan Dirham",
    currencyArabic: "الدرهم المغربي",
    description: "المغرب هي دولة تقع في شمال أفريقيا، تتميز بتنوع ثقافي وجغرافي كبير، من جبال الأطلس إلى الصحراء الكبرى والساحل الأطلسي والمتوسطي.",
    history: "تاريخ المغرب غني بالحضارات المتعاقبة، من الفينيقيين والرومان إلى الدول الإسلامية المختلفة. كان المغرب مركزاً مهماً للتجارة والثقافة عبر القرون.",
    landmarks: [
      {
        id: "medina-fez",
        name: "Medina of Fez",
        nameArabic: "مدينة فاس القديمة",
        image: "/placeholder.svg",
        description: "أكبر منطقة مدينة قديمة في العالم، مليئة بالأزقة والمساجد والمدارس التاريخية."
      },
      {
        id: "hassan-tower",
        name: "Hassan Tower",
        nameArabic: "صومعة حسان",
        image: "/placeholder.svg",
        description: "مئذنة مسجد لم يكتمل بناؤه في الرباط، تعود للقرن الثاني عشر."
      }
    ],
    achievements: [
      {
        id: "tgv",
        title: "Al Boraq High-Speed Rail",
        titleArabic: "قطار البراق فائق السرعة",
        description: "أول قطار فائق السرعة في أفريقيا والعالم العربي.",
        year: 2018
      }
    ]
  },
  {
    id: "algeria",
    name: "Algeria",
    nameArabic: "الجزائر",
    flagImage: "/placeholder.svg",
    hero: "/placeholder.svg",
    capital: "Algiers",
    capitalArabic: "الجزائر العاصمة",
    officialLanguage: "Arabic",
    officialLanguageArabic: "العربية",
    currency: "Algerian Dinar",
    currencyArabic: "الدينار الجزائري",
    description: "الجزائر هي أكبر دولة في أفريقيا، تتميز بتنوع جغرافي كبير من البحر المتوسط إلى الصحراء الكبرى.",
    history: "تاريخ الجزائر غني بالحضارات القديمة والنضال من أجل الاستقلال. كانت موطناً للحضارات النوميدية والرومانية والعثمانية قبل الاستقلال عن فرنسا في 1962.",
    landmarks: [
      {
        id: "casbah",
        name: "Casbah of Algiers",
        nameArabic: "قصبة الجزائر",
        image: "/placeholder.svg",
        description: "مدينة تاريخية محصنة في قلب الجزائر العاصمة، مدرجة في قائمة التراث العالمي."
      },
      {
        id: "djamaa-el-djazair",
        name: "Great Mosque of Algiers",
        nameArabic: "جامع الجزائر الأعظم",
        image: "/placeholder.svg",
        description: "ثالث أكبر مسجد في العالم وأكبر مسجد في أفريقيا."
      }
    ],
    achievements: [
      {
        id: "independence",
        title: "Independence",
        titleArabic: "الاستقلال",
        description: "استقلال الجزائر عن الاستعمار الفرنسي.",
        year: 1962
      }
    ]
  },
  {
    id: "tunisia",
    name: "Tunisia",
    nameArabic: "تونس",
    flagImage: "/placeholder.svg",
    hero: "/placeholder.svg",
    capital: "Tunis",
    capitalArabic: "تونس العاصمة",
    officialLanguage: "Arabic",
    officialLanguageArabic: "العربية",
    currency: "Tunisian Dinar",
    currencyArabic: "الدينار التونسي",
    description: "تونس هي دولة تقع في شمال أفريقيا على ساحل البحر المتوسط، تشتهر بتراثها التاريخي الغني وشواطئها الجميلة.",
    history: "تونس موطن لحضارة قرطاج القديمة، وشهدت تعاقب العديد من الحضارات. كانت مركزاً مهماً للحضارة الإسلامية في شمال أفريقيا.",
    landmarks: [
      {
        id: "carthage",
        name: "Ancient Carthage",
        nameArabic: "قرطاج القديمة",
        image: "/placeholder.svg",
        description: "موقع أثري يضم بقايا المدينة الفينيقية-الرومانية القديمة."
      },
      {
        id: "mosque-uqba",
        name: "Great Mosque of Kairouan",
        nameArabic: "جامع عقبة",
        image: "/placeholder.svg",
        description: "أقدم مسجد في شمال أفريقيا وأحد أهم المساجد في العالم الإسلامي."
      }
    ],
    achievements: [
      {
        id: "democracy",
        title: "Arab Spring",
        titleArabic: "الربيع العربي",
        description: "أول دولة عربية تشهد تحولاً ديمقراطياً في إطار الربيع العربي.",
        year: 2011
      }
    ]
  }
];

// Function to get country by ID
export const getCountryById = (id: string): Country | undefined => {
  return countries.find(country => country.id === id);
};
