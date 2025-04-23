
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryCard from "@/components/CountryCard";
import { countries } from "@/data/countries";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Countries = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.nameArabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.capitalArabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.capital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen" dir="rtl">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-hadara-burgundy to-hadara-burgundy/90 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">الدول العربية</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              اكتشف التنوع الثقافي والحضاري الغني للدول العربية من المحيط إلى الخليج
            </p>
          </div>
        </section>

        {/* Search and Countries Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Search */}
            <div className="max-w-md mx-auto mb-10 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/60" size={20} />
              <Input
                placeholder="البحث عن دولة..."
                className="pl-4 pr-10 py-3 bg-background border-border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Countries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCountries.map((country) => (
                <CountryCard
                  key={country.id}
                  id={country.id}
                  name={country.name}
                  nameArabic={country.nameArabic}
                  flagImage={country.flagImage}
                  capital={country.capital}
                  capitalArabic={country.capitalArabic}
                />
              ))}
            </div>

            {filteredCountries.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-foreground/70">
                  لم يتم العثور على نتائج مطابقة للبحث
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Countries;
