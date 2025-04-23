
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

interface CountryCardProps {
  id: string;
  name: string;
  nameArabic: string;
  flagImage: string;
  capital: string;
  capitalArabic: string;
}

const CountryCard = ({
  id,
  name,
  nameArabic,
  flagImage,
  capital,
  capitalArabic,
}: CountryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/country/${id}`}>
      <Card 
        className={cn(
          "overflow-hidden card-shadow border border-hadara-sand/30", 
          isHovered ? "transform -translate-y-2" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={flagImage || "/placeholder.svg"}
            alt={`علم ${nameArabic}`}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          <div className="absolute bottom-0 w-full p-4">
            <h3 className="font-amiri text-xl md:text-2xl font-bold text-white drop-shadow-md">
              {nameArabic}
            </h3>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-foreground/70">
            <MapPin size={16} />
            <span className="text-sm">
              العاصمة: {capitalArabic}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountryCard;
