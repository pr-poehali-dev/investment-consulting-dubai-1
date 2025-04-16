import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-b.svg" alt="Dubai Invest" className="h-8 invert" />
              <div className="font-semibold text-lg">Dubai Invest</div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Ваш надежный партнер в мире инвестиций и финансового консалтинга в Дубае.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm opacity-80">Dubai Financial Center, Dubai, UAE</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm opacity-80">+971 XX XXX XXXX</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm opacity-80">info@dubaiinvest.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-80 hover:opacity-100">Главная</Link>
              <Link to="/services/investment" className="block text-sm opacity-80 hover:opacity-100">Инвестиционный консалтинг</Link>
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100">О нас</Link>
              <Link to="/contact" className="block text-sm opacity-80 hover:opacity-100">Контакты</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Подписаться на новости</h3>
            <p className="text-sm opacity-80 mb-3">
              Будьте в курсе новостей инвестиционного рынка Дубая
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary">Подписаться</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm opacity-70 text-center">
          © {new Date().getFullYear()} Dubai Invest. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
