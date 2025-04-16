import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Dubai Invest" className="h-10" />
          <div className="font-semibold text-lg">Dubai Invest</div>
        </div>
        
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-4 w-[400px]">
                  <Link to="/services/investment" className="block p-2 hover:bg-accent rounded-md">
                    Инвестиционный консалтинг
                  </Link>
                  <Link to="/services/strategy" className="block p-2 hover:bg-accent rounded-md">
                    Стратегическое планирование
                  </Link>
                  <Link to="/services/market" className="block p-2 hover:bg-accent rounded-md">
                    Анализ рынка
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                  О нас
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                  Контакты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-2">
          <a href="tel:+971XXXXXXXX" className="hidden md:flex items-center gap-1 text-sm">
            <Phone className="h-4 w-4" />
            <span>+971 XX XXX XXXX</span>
          </a>
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
