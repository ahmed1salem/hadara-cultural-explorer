
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="font-amiri text-2xl font-bold text-hadara-burgundy">
              حضارة
            </h2>
            <p className="text-sm text-foreground/70">
              بوابتك الرقمية إلى التراث العربي
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            <div className="mb-4 md:mb-0 text-center md:text-start">
              <h3 className="font-amiri text-lg font-bold mb-2">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm hover:text-hadara-burgundy">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link to="/countries" className="text-sm hover:text-hadara-burgundy">
                    الدول
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm hover:text-hadara-burgundy">
                    عن حضارة
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-sm text-foreground/70">
            &copy; {new Date().getFullYear()} حضارة - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
