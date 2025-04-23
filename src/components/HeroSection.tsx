
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pattern-bg"> 
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-hadara-burgundy">
              استكشف روعة الحضارة العربية
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl text-foreground/80">
              بوابتك الرقمية إلى التراث العربي الغني والإسهامات الثقافية والتاريخية للعالم العربي
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-hadara-burgundy hover:bg-hadara-burgundy/90">
                <Link to="/countries">استكشف الدول</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-hadara-burgundy text-hadara-burgundy hover:bg-hadara-burgundy/10">
                <Link to="/about">تعرف على المشروع</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-hadara-burgundy via-hadara-sand to-hadara-burgundy opacity-80" />
    </div>
  );
};

export default HeroSection;
