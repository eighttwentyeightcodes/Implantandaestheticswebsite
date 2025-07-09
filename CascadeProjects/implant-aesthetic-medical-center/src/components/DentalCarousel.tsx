import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import implantProcedure from "@/assets/implantprocedure.jpg";
import dermaClinic from "@/assets/derma.jpg";
import expertCare from "@/assets/expertcare.JPG";
import logo from "@/assets/logo.png";

const dentalImages = [
  {
    src: implantProcedure,
    alt: "Advanced dental implant procedure",
    title: "Crafting Your Perfect Smile",
    catchyPhrase: "Experience the Gold Standard in Dental Implants",
    buttonLink: "/dental-implants"
  },
  {
    src: expertCare,
    alt: "A dentist providing expert care to a patient",
    title: "Excellence in Every Detail",
    catchyPhrase: "Discover Our Commitment to Expert Care",
    buttonLink: "/about-us"
  },
  {
    src: dermaClinic,
    alt: "Derma haven",
    title: "Unveil Your Radiant Skin",
    catchyPhrase: "Aesthetic Dermatology for a Flawless You",
    buttonLink: "/dermatology-services"
  }
];

export const DentalCarousel = () => {
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
    <div className="relative w-full h-[500px] overflow-hidden">

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
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white pr-8">
              <h3 className="text-4xl font-bold mb-2 text-white">{image.title}</h3>
              <p className="text-2xl font-semibold bg-gradient-to-r from-medicalGold to-amber-300 text-transparent bg-clip-text mb-4">
                {image.catchyPhrase}
              </p>
              <a href={image.buttonLink}>
                <Button variant="outline" className="bg-medicalGold hover:bg-medicalGold/90 border-none text-medicalBlue-dark font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-medicalGold hover:bg-medicalGold/90 border-medicalBlue text-medicalBlue"
        onClick={prevImage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-medicalGold hover:bg-medicalGold/90 border-medicalBlue text-medicalBlue"
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
            className={`w-3 h-3 rounded-full transition-colors border border-medicalGold ${
              index === currentImage ? "bg-medicalGold" : "bg-medicalGold/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
