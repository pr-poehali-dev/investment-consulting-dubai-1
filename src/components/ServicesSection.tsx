import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Building, LineChart, PieChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Инвестиционное планирование",
      description: "Разработка персонализированной инвестиционной стратегии с учетом ваших целей и возможностей.",
      icon: <PieChart className="h-8 w-8 text-primary" />,
      link: "/services/planning"
    },
    {
      title: "Анализ рынка недвижимости",
      description: "Экспертный анализ рынка недвижимости Дубая и выявление наиболее перспективных объектов.",
      icon: <Building className="h-8 w-8 text-primary" />,
      link: "/services/real-estate"
    },
    {
      title: "Управление портфелем",
      description: "Профессиональное управление вашими инвестиционными активами для достижения стабильного дохода.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      link: "/services/portfolio"
    }
  ];
  
  return (
    <section className="py-16 bg-accent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг инвестиционного консалтинга для успешного развития вашего бизнеса в Дубае
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={service.link} className="inline-flex items-center text-primary hover:underline">
                  Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
