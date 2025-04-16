import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и наши эксперты свяжутся с вами для консультации по вопросам инвестиций в Дубае
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">Оставить заявку</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Имя</label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">Телефон</label>
                  <Input id="phone" placeholder="+7 XXX XXX XX XX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Сообщение</label>
                <Textarea id="message" placeholder="Опишите ваш запрос..." rows={4} />
              </div>
              <Button className="w-full">Отправить заявку</Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Наши контакты</h3>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <div className="bg-primary/10 rounded-full p-2.5">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-muted-foreground">Dubai Financial Center, Dubai, UAE</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-primary/10 rounded-full p-2.5">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-muted-foreground">+971 XX XXX XXXX</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-primary/10 rounded-full p-2.5">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">info@dubaiinvest.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Почему выбирают нас</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p>Индивидуальный подход к каждому клиенту</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p>Прозрачность на всех этапах сотрудничества</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p>Глубокое знание особенностей рынка Дубая</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
