import React, { useState, useEffect } from 'react';
import { Heart, Soup, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import SignatureCanvas from '@/components/SignatureCanvas';

const MomoPactWebsite: React.FC = () => {
  const [momosLeft, setMomosLeft] = useState(5);
  const [promiseRevealed, setPromiseRevealed] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true);
    setTimeout(() => {
      toast({
        title: "Welcome to The Momo Pact! 🍜",
        description: "Our special journey made with love.",
        duration: 5000,
      });
    }, 1000);
  }, []);

  const handleTakeMomo = () => {
    if (momosLeft > 0) {
      setMomosLeft(momosLeft - 1);
      
      const messages = [
        "Last momo! Use it wisely! 💖",
        "Just 2 momos left! I'm still here for you! 💕",
        "3 momos remaining. You're halfway there! 🌟",
        "4 momos left. Remember I care! 🤗",
        "You took your first momo! Four more to go! 🥟"
      ];
      
      toast({
        title: "Momo Taken! 🍜",
        description: messages[5 - momosLeft - 1],
        variant: "default",
      });
    }
  };

  const revealPromise = () => {
    setPromiseRevealed(true);
    if (!promiseRevealed) {
      toast({
        title: "Promise Revealed! ❤️",
        description: "Our special commitment is now visible.",
        variant: "default",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const floatingVariants = {
    initial: { y: 0 },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E8] to-[#FFE8F0] text-[#333333] font-['Poppins'] overflow-x-hidden">
      <div className="container mx-auto px-4 py-6">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
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
        </motion.nav>
        
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="relative inline-block"
            animate={animateHeader ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1.2 } }
            }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-['Pacifico'] text-[#FF7E5F] mb-4 drop-shadow-lg"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.3
              }}
            >
              The Momo Pact 🍜
            </motion.h1>
            <motion.div 
              className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF7E5F] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            ></motion.div>
          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl text-[#7D5FFF] mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            A Promise Between Two Hearts
          </motion.p>
        </motion.header>

        <motion.div 
          className="grid md:grid-cols-2 gap-10 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section 
            className="order-2 md:order-1"
            variants={itemVariants}
          >
            <motion.div 
              className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-700 border border-[#FFD9E6] hover:shadow-2xl cursor-pointer 
                ${promiseRevealed ? 'hover:scale-105' : 'hover:scale-102'}`}
              onClick={revealPromise}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.98 }}
            >
              {!promiseRevealed ? (
                <motion.div 
                  className="text-center py-12"
                  initial="initial"
                  animate="float"
                  variants={floatingVariants}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0] 
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Heart className="mx-auto text-[#FF7E5F] mb-6" size={64} />
                  </motion.div>
                  <p className="text-lg">Click to Reveal the Promise</p>
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.p 
                    className="font-['Caveat'] text-3xl text-[#7D5FFF] leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Our Momo Promise (11/04/25): I will always be here for you, 
                    no matter what challenges we face. Just like these momos, 
                    our connection is warm, comforting, and unbreakable.
                  </motion.p>
                  
                  {promiseRevealed && <SignatureCanvas />}
                </motion.div>
              )}
            </motion.div>
          </motion.section>

          <motion.section 
            className="order-1 md:order-2"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border border-[#FFD9E6]"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-3xl mb-6 text-[#FF7E5F] font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Momo Counter
              </motion.h2>
              <div className="flex flex-col gap-6">
                <div className="flex justify-center space-x-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: i < momosLeft ? 1 : 0.7, 
                        opacity: i < momosLeft ? 1 : 0.3 
                      }}
                      transition={{ 
                        delay: 0.5 + (i * 0.1),
                        duration: 0.4,
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20 
                      }}
                      className={i < momosLeft ? "" : "grayscale"}
                    >
                      <Soup 
                        key={i} 
                        className={`text-[#7D5FFF] ${i < momosLeft ? "animate-pulse" : ""}`} 
                        size={36} 
                      />
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={handleTakeMomo} 
                    disabled={momosLeft === 0}
                    className="bg-[#FF7E5F] hover:bg-[#FF5A5F] text-white py-3 px-6 rounded-full font-medium shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none w-full"
                  >
                    Take a Momo
                  </Button>
                </motion.div>
              </div>
              
              {momosLeft === 0 && (
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.p 
                    className="text-[#7D5FFF] font-['Caveat'] text-2xl"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    All momos used! Our promise continues forever! ❤️
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          </motion.section>
        </motion.div>

        <motion.footer 
          className="text-center mt-16 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#7D5FFF] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          ></motion.div>
          <motion.p 
            className="text-sm text-[#7D5FFF]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Made with ❤️ for Sakshi
          </motion.p>
        </motion.footer>
      </div>
    </div>
  );
};

export default MomoPactWebsite;
