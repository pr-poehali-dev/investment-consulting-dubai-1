import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    "Более 10 лет опыта работы на рынке инвестиций в ОАЭ",
    "Команда сертифицированных финансовых аналитиков и консультантов",
    "Индивидуальный подход к каждому клиенту",
    "Успешно реализованные проекты с высокой доходностью"
  ];
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/team-image.jpg" 
              alt="Наша команда" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">О Dubai Invest</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Dubai Invest — ведущая консалтинговая компания, специализирующаяся на инвестиционных услугах в Дубае и ОАЭ. Мы помогаем нашим клиентам принимать обоснованные инвестиционные решения и достигать финансовых целей в динамичной экономике региона.
            </p>
            
            <div className="space-y-2 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button>
              Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
