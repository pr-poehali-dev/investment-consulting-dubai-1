import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      value: "250+",
      label: "Успешных проектов"
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      value: "500+",
      label: "Довольных клиентов"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      value: "30%",
      label: "Средняя доходность"
    }
  ];
  
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши достижения</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Цифры говорят сами за себя – мы гордимся результатами, которых достигли наши клиенты
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
