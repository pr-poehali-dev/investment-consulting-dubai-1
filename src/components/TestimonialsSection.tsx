import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр Петров",
      position: "CEO, Tech Solutions",
      avatar: "/placeholder.svg",
      content: "Благодаря Dubai Invest мы смогли успешно выйти на рынок ОАЭ и найти надежных инвесторов для нашего технологического стартапа. Профессиональный подход и глубокое знание местного рынка.",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      position: "Частный инвестор",
      avatar: "/placeholder.svg",
      content: "Сотрудничество с командой Dubai Invest позволило мне диверсифицировать свой инвестиционный портфель и получить стабильный доход от вложений в недвижимость Дубая. Очень довольна результатами!",
      rating: 5
    },
    {
      name: "Михаил Иванов",
      position: "Финансовый директор, Global Trade",
      avatar: "/placeholder.svg",
      content: "Выражаю благодарность специалистам Dubai Invest за профессиональное сопровождение сделки по приобретению коммерческой недвижимости. Все было организовано на высшем уровне.",
      rating: 4
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о нас наши клиенты, и почему они выбирают Dubai Invest
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border/50">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                  {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-muted" />
                  ))}
                </div>
                
                <p className="mb-6 text-muted-foreground">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
