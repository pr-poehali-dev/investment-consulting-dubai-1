import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 -z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 -z-20"
        style={{ backgroundImage: "url('/dubai-skyline.jpg')" }}
      />
      
      <div className="container py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Инвестиционный консалтинг в Дубае
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Профессиональные услуги по инвестициям и управлению активами для максимизации вашего капитала в ОАЭ
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Консультация эксперта
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Наши услуги
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
