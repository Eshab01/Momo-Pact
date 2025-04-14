
import React from 'react';
import { Image, Navigation, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery: React.FC = () => {
  // Placeholder data for momo types
  const momoTypes = [
    {
      name: "Steamed Veg Momos",
      description: "Delicate steamed dumplings filled with finely chopped vegetables and aromatic spices.",
      icon: "🥟"
    },
    {
      name: "Fried Momos",
      description: "Crispy on the bottom, soft on top - the perfect texture combination for momo lovers.",
      icon: "🥘"
    },
    {
      name: "Tandoori Momos",
      description: "Smoky, char-grilled dumplings filled with juicy minced chicken, seasoned with aromatic spices, and marinated in a rich tandoori blend.",
      icon: "🥟"
    },
    {
      name: "Aur bhi koi hote hain kya??",
      description: "Agar koi aur hote hain to vo bhi",
      icon: "🍳"
    }
  ];

  // Memory quotes
  const quotes = [
    "Vo raat me momos khana yaad hai?",
    "Vo mujhe jabar dasti momos khilana yaad hai?",
    "Five se jyada nhi milege tumhe!!",
    "Jyada chatni ke saath lenge abse",
    "Every momo moment with you is special"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E8] to-[#FFE8F0] text-[#333333] font-['Poppins']">
      <div className="container mx-auto px-4 py-6">
        {/* Navigation */}
        <nav className="mb-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/memories">Memories</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/gallery">Momo Gallery</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Momo Gallery</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-['Pacifico'] text-[#FF7E5F] mb-4">Momo Gallery</h1>
          <div className="flex justify-center items-center">
            <div className="h-0.5 w-16 bg-[#7D5FFF]"></div>
            <Heart className="mx-3 text-[#FF7E5F]" />
            <div className="h-0.5 w-16 bg-[#7D5FFF]"></div>
          </div>
          <p className="text-lg text-[#7D5FFF] mt-4">A showcase of our momo adventures</p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-[#FF7E5F] mb-6">Types of Momos you Love</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {momoTypes.map((momo, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#FFD9E6]">
                <div className="text-4xl mb-3">{momo.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#7D5FFF]">{momo.name}</h3>
                <p className="text-gray-600">{momo.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-[#FF7E5F] mb-6">Momo Memories</h2>
          
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              {quotes.map((quote, index) => (
                <CarouselItem key={index}>
                  <div className="bg-gradient-to-r from-[#FF7E5F]/10 to-[#7D5FFF]/10 p-8 rounded-lg">
                    <div className="text-center">
                      <p className="font-['Caveat'] text-2xl text-[#333333] mb-4">"{quote}"</p>
                      <div className="flex justify-center">
                        <Heart className="text-[#FF7E5F]" size={20} fill="#FF7E5F" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <footer className="text-center mt-16 pb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#7D5FFF] to-transparent mx-auto mb-6"></div>
          <p className="text-sm text-[#7D5FFF]">Made with ❤️ for Sakshi</p>
        </footer>
      </div>
    </div>
  );
};

export default Gallery;
