
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountryCard from "@/components/CountryCard";
import Footer from "@/components/Footer";
import { countries } from "@/data/countries";
import { MapPin, Landmark, Trophy } from "lucide-react";

const Index = () => {
  // Get a subset of featured countries
  const featuredCountries = countries.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen" dir="rtl">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />

        {/* Introduction Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hadara-burgundy">
                تراث خالد وحضارة عريقة
              </h2>
              <p className="text-lg text-foreground/80">
                على مدار آلاف السنين، قدم العالم العربي إسهامات لا تُحصى للبشرية في العلوم والفنون والثقافة. حضارة هي بوابتك لاكتشاف هذا التراث الغني والتاريخ العريق الذي شكل العالم الحديث.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center text-center p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-hadara-burgundy/10 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-hadara-burgundy" />
                </div>
                <h3 className="text-xl font-bold mb-2">استكشف الدول العربية</h3>
                <p className="text-foreground/70">
                  تعرف على المعالم والتاريخ والثقافة الفريدة لكل دولة من الدول العربية
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="bg-hadara-burgundy/10 p-4 rounded-full mb-4">
                  <Landmark className="h-8 w-8 text-hadara-burgundy" />
                </div>
                <h3 className="text-xl font-bold mb-2">اكتشف المعالم التاريخية</h3>
                <p className="text-foreground/70">
                  جولة افتراضية بين أهم المعالم التاريخية والأثرية في العالم العربي
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="bg-hadara-burgundy/10 p-4 rounded-full mb-4">
                  <Trophy className="h-8 w-8 text-hadara-burgundy" />
                </div>
                <h3 className="text-xl font-bold mb-2">الإنجازات العربية</h3>
                <p className="text-foreground/70">
                  تعرف على الإنجازات العربية المعاصرة والقديمة وتأثيرها على العالم
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Countries Section */}
        <section className="py-16 bg-muted/30 geometric-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hadara-burgundy">
                دول مختارة
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                استكشف بعض الدول العربية ذات التاريخ الغني والمتنوع
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCountries.map((country) => (
                <div key={country.id} className="animate-fade-in" style={{ animationDelay: `${featuredCountries.indexOf(country) * 0.2}s` }}>
                  <CountryCard
                    id={country.id}
                    name={country.name}
                    nameArabic={country.nameArabic}
                    flagImage={country.flagImage}
                    capital={country.capital}
                    capitalArabic={country.capitalArabic}
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/countries" className="inline-block py-3 px-6 bg-hadara-burgundy text-white rounded-md hover:bg-hadara-burgundy/90 transition duration-300">
                عرض جميع الدول
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
