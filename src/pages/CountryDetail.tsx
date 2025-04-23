
import { useParams } from "react-router-dom";
import { getCountryById } from "@/data/countries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Book, Trophy, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const CountryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const country = getCountryById(id || "");

  if (!country) {
    return (
      <div className="min-h-screen flex flex-col" dir="rtl">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-2">لم يتم العثور على الدولة</h1>
            <p>الدولة المطلوبة غير موجودة أو تم تغيير الرابط.</p>
            <a href="/" className="mt-4 inline-block text-hadara-burgundy hover:underline">
              العودة إلى الصفحة الرئيسية
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen" dir="rtl">
      <Navbar />
      <main className="flex-grow">
        {/* Country Hero */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={country.hero}
            alt={country.nameArabic}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <div className="container mx-auto">
              <div className="flex items-center gap-4">
                <img
                  src={country.flagImage}
                  alt={`علم ${country.nameArabic}`}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg"
                />
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                    {country.nameArabic}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Country Information */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card p-5 rounded-lg shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-hadara-burgundy" size={20} />
                  <h3 className="font-bold">العاصمة</h3>
                </div>
                <p>{country.capitalArabic}</p>
              </div>
              <div className="bg-card p-5 rounded-lg shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hadara-burgundy">
                    <path d="M2 12h5"></path><path d="M17 12h5"></path><path d="M12 2v5"></path><path d="M12 17v5"></path>
                    <circle cx="12" cy="12" r="7"></circle>
                  </svg>
                  <h3 className="font-bold">اللغة الرسمية</h3>
                </div>
                <p>{country.officialLanguageArabic}</p>
              </div>
              <div className="bg-card p-5 rounded-lg shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hadara-burgundy">
                    <circle cx="12" cy="12" r="8"></circle><path d="M12 2v4"></path><path d="M12 18v4"></path>
                    <path d="m4.9 4.9 2.8 2.8"></path><path d="m16.3 16.3 2.8 2.8"></path><path d="M2 12h4"></path>
                    <path d="M18 12h4"></path><path d="m4.9 19.1 2.8-2.8"></path><path d="m16.3 7.7 2.8-2.8"></path>
                  </svg>
                  <h3 className="font-bold">العملة</h3>
                </div>
                <p>{country.currencyArabic}</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-hadara-burgundy">
                نبذة عن {country.nameArabic}
              </h2>
              <p className="text-lg leading-relaxed">
                {country.description}
              </p>
            </div>

            <Tabs defaultValue="history" className="mb-10">
              <TabsList className="mb-6 bg-muted/50">
                <TabsTrigger value="history" className="data-[state=active]:bg-hadara-burgundy data-[state=active]:text-white">
                  <Book className="w-4 h-4 mr-2" />
                  التاريخ
                </TabsTrigger>
                <TabsTrigger value="landmarks" className="data-[state=active]:bg-hadara-burgundy data-[state=active]:text-white">
                  <Landmark className="w-4 h-4 mr-2" />
                  المعالم
                </TabsTrigger>
                <TabsTrigger value="achievements" className="data-[state=active]:bg-hadara-burgundy data-[state=active]:text-white">
                  <Trophy className="w-4 h-4 mr-2" />
                  الإنجازات
                </TabsTrigger>
              </TabsList>

              <TabsContent value="history" className="mt-0">
                <Card className="border-hadara-sand/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">تاريخ {country.nameArabic}</h3>
                    <p className="leading-relaxed">
                      {country.history}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="landmarks" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {country.landmarks.map((landmark) => (
                    <Card key={landmark.id} className="overflow-hidden border-hadara-sand/30">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={landmark.image}
                          alt={landmark.nameArabic}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{landmark.nameArabic}</h3>
                        <p>{landmark.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="mt-0">
                <div className="space-y-6">
                  {country.achievements.map((achievement) => (
                    <Card key={achievement.id} className="border-hadara-sand/30">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{achievement.titleArabic}</h3>
                          {achievement.year && (
                            <span className="bg-hadara-burgundy/10 text-hadara-burgundy px-3 py-1 rounded-full text-sm">
                              {achievement.year}
                            </span>
                          )}
                          {achievement.yearStr && !achievement.year && (
                            <span className="bg-hadara-burgundy/10 text-hadara-burgundy px-3 py-1 rounded-full text-sm">
                              {achievement.yearStr}
                            </span>
                          )}
                        </div>
                        <p>{achievement.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CountryDetail;
