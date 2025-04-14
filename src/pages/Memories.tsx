
import React from 'react';
import { Calendar, Heart, Navigation } from 'lucide-react';
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

const MemoryItem = ({ date, title, description }: { date: string, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-[#FFD9E6] mb-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-3">
        <Calendar className="text-[#FF7E5F] mr-3" size={20} />
        <span className="text-[#7D5FFF] font-semibold">{date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#FF7E5F]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Memories: React.FC = () => {
  const memories = [
    {
      date: 'August 2023',
      title: 'First time we met',
      description: 'Do you remember that day? Tumhe mujhse haath milaane me bhi dar laga tha. Aur ab dekho',
    },
    {
      date: 'September 2023',
      title: 'First time we stayed after class',
      description: 'We stayed back after class to talk about ourselves.'
    }
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
              <BreadcrumbPage>Memories Timeline</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-['Pacifico'] text-[#FF7E5F] mb-4">Our Momo Memories</h1>
          <div className="flex justify-center items-center">
            <div className="h-0.5 w-16 bg-[#7D5FFF]"></div>
            <Heart className="mx-3 text-[#FF7E5F]" />
            <div className="h-0.5 w-16 bg-[#7D5FFF]"></div>
          </div>
          <p className="text-lg text-[#7D5FFF] mt-4">A journey of our special moments together</p>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-[#7D5FFF] opacity-30"></div>
            <div className="space-y-12">
              {memories.map((memory, index) => (
                <div key={index} className="relative pl-14">
                  <div className="absolute left-0 top-6 w-12 h-12 bg-[#FF7E5F] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <MemoryItem 
                    date={memory.date}
                    title={memory.title}
                    description={memory.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 pb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#7D5FFF] to-transparent mx-auto mb-6"></div>
          <p className="text-sm text-[#7D5FFF]">Made with ❤️ for Sakshi</p>
        </footer>
      </div>
    </div>
  );
};

export default Memories;
