import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dental1 from "@/assets/dental-1.jpg";
import dental2 from "@/assets/dental-2.jpg";
import dental3 from "@/assets/dental-3.jpg";
import dental4 from "@/assets/dental-4.jpg";
import logo from "@/assets/logo.png";
import { useRef } from "react";

const dentalImages = [
  {
    src: dental1,
    alt: "Professional dental implant procedure",
    title: "Advanced Implant Surgery"
  },
  {
    src: dental2,
    alt: "Beautiful smile transformation",
    title: "Smile Transformation"
  },
  {
    src: dental3,
    alt: "Modern dental clinic interior",
    title: "State-of-the-Art Facility"
  },
  {
    src: dental4,
    alt: "Happy patient with perfect smile",
    title: "Satisfied Patients"
  }
];

export const DentalCarousel = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [logoVisible, setLogoVisible] = useState(false);

  // Scroll animation for logo
  useEffect(() => {
    const handleScroll = () => {
      if (!logoRef.current) return;
      const rect = logoRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setLogoVisible(true);
      } else {
        setLogoVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % dentalImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % dentalImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + dentalImages.length) % dentalImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <>
      {/* Logo with scroll animation */}
      <div
        ref={logoRef}
        className={`flex justify-center items-center my-8 transition-all duration-700
          ${logoVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
      >
        <img
          src={logo}
          alt="Clinic Logo"
          className="h-24 w-auto drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 4px 24pxrgba(255, 157, 0, 0.67))' }}
        />
      </div>

      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-medical bg-medicalBlue-light border-4 border-medicalGold">
        {/* Main image display */}
        <div className="relative h-full">
          {dentalImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentImage ? "translate-x-0" : 
                index < currentImage ? "-translate-x-full" : "translate-x-full"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-medicalGold hover:bg-medicalGold-dark border-medicalGold-dark text-medicalBlue shadow-medical"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-medicalGold hover:bg-medicalGold-dark border-medicalGold-dark text-medicalBlue shadow-medical"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {dentalImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full border-2 transition-colors ${
                index === currentImage
                  ? "bg-medicalGold border-medicalGold-dark"
                  : "bg-medicalBlue-light border-medicalGold"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};