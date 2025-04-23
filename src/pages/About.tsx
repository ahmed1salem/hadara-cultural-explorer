
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Globe, Landmark } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen" dir="rtl">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-hadara-burgundy to-hadara-burgundy/90 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">عن حضارة</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              بوابة رقمية للتراث العربي والإنجازات الثقافية
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-hadara-burgundy">
                رسالتنا
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  حضارة هي منصة رقمية شاملة مكرسة لعرض النسيج الثقافي الغني والعمق التاريخي والإنجازات الحديثة للدول العربية. يهدف الموقع إلى توفير تجربة تعليمية غامرة تسلط الضوء على الروايات المتنوعة والمعالم الثقافية والابتكارات المعاصرة في جميع أنحاء العالم العربي.
                </p>
                <p>
                  نؤمن بأهمية الحفاظ على التراث العربي وتقديمه بطريقة عصرية وجذابة للأجيال الحالية والقادمة. نسعى من خلال حضارة إلى بناء جسر بين الماضي العريق والحاضر المزدهر للعالم العربي.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-hadara-burgundy">
              مميزات المنصة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-hadara-sand/30 card-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-hadara-burgundy/10 p-4 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-hadara-burgundy" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">تصميم متقدم للغة العربية</h3>
                  <p>
                    واجهة مستخدم عربية أصيلة مع اهتمام خاص بالخطوط والتصميم الذي يحترم الهوية العربية
                  </p>
                </CardContent>
              </Card>

              <Card className="border-hadara-sand/30 card-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-hadara-burgundy/10 p-4 rounded-full mb-4">
                    <Landmark className="h-8 w-8 text-hadara-burgundy" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">معلومات شاملة عن الدول</h3>
                  <p>
                    استكشاف تفصيلي للدول العربية مع معلومات عن المعالم التاريخية والثقافية والإنجازات المعاصرة
                  </p>
                </CardContent>
              </Card>

              <Card className="border-hadara-sand/30 card-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-hadara-burgundy/10 p-4 rounded-full mb-4">
                    <Book className="h-8 w-8 text-hadara-burgundy" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">محتوى تعليمي غني</h3>
                  <p>
                    محتوى تعليمي وثقافي غني يسلط الضوء على تاريخ وإنجازات الحضارة العربية عبر العصور
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-hadara-burgundy">
                رؤيتنا المستقبلية
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  نتطلع مستقبلاً إلى توسيع نطاق المنصة لتشمل:
                </p>
                <ul>
                  <li>إضافة المزيد من الدول العربية بمعلومات تفصيلية وشاملة</li>
                  <li>دعم تعدد اللغات لنشر المعرفة عن الحضارة العربية عالمياً</li>
                  <li>تطوير محتوى تفاعلي يشمل جداول زمنية وعناصر وسائط متعددة</li>
                  <li>إنشاء منصة تعليمية متكاملة للمدارس والجامعات</li>
                  <li>تطوير تطبيقات للهواتف الذكية لتعزيز الوصول إلى المحتوى</li>
                </ul>
                <p>
                  نسعى من خلال حضارة إلى أن نصبح المرجع الأول والأشمل للتعريف بالحضارة العربية وتراثها الغني بأسلوب عصري ومتطور.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
