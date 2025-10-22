import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    title: "PM-eBus Sewa",
    subtitle: "Payment Security Mechanism",
    description: "Empowering electric bus transportation across India with secure payment systems and efficient fleet management.",
    icon: "🚌",
    label: "Electric Bus Fleet"
  },
  {
    title: "Green Transportation",
    subtitle: "Sustainable Future",
    description: "Building a cleaner, greener India through electric mobility solutions for public transport.",
    icon: "🌱",
    label: "Eco-Friendly Transport"
  },
  {
    title: "Smart Payment System",
    subtitle: "Secure & Efficient",
    description: "Advanced payment security mechanisms ensuring transparent and reliable financial transactions.",
    icon: "💳",
    label: "Digital Payments"
  }
];

export const HeroSection = () => {
  const [autoplay] = useState(() => Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section className="relative bg-gradient-to-b from-accent/20 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{ loop: true }}
          plugins={[autoplay]}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                      {slide.title}
                      <span className="block text-primary mt-2">{slide.subtitle}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="shadow-lg hover:shadow-xl">
                        Learn More
                      </Button>
                      <Button size="lg" variant="outline" className="shadow-md">
                        View Schemes
                      </Button>
                    </div>
                  </div>
                  <div className="relative animate-scale-in">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm">
                      <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="text-6xl">{slide.icon}</div>
                          <p className="text-muted-foreground">{slide.label}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
