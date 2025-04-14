
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const SignatureCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas style
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000e6';
    
    // Make canvas responsive
    const updateCanvasSize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Reset stroke style after resize
      if (ctx) {
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000e6';
      }
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [showCanvas]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    setIsDrawing(true);
    
    // Get mouse position
    let clientX: number;
    let clientY: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Get mouse position
    let clientX: number;
    let clientY: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      
      // Prevent scrolling while drawing
      e.preventDefault();
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
    setHasSigned(true);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSigned(false);
  };

  const confirmSignature = () => {
    if (!hasSigned) {
      toast({
        title: "Please sign first",
        description: "You need to sign before confirming",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Signature Confirmed! ✨",
      description: "Your Momo Pact is officially signed!",
      variant: "default",
    });
    
    setTimeout(() => {
      setShowCanvas(false);
    }, 1500);
  };

  return (
    <motion.div 
      className="w-full mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {!showCanvas ? (
        <motion.button
          onClick={() => setShowCanvas(true)}
          className="py-3 px-6 bg-[#7D5FFF] text-white rounded-full font-medium shadow-md w-full max-w-md mx-auto block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign The Momo Pact
        </motion.button>
      ) : (
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg border border-[#FFD9E6] max-w-2xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl text-[#FF7E5F] font-semibold mb-3 text-center">Sign Your Momo Pact</h3>
          <p className="text-center mb-4 text-[#333333]">Please sign below to make your promise official</p>
          
          <div className="canvas-container border-2 border-gray-300 rounded-lg mb-4 overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-60 bg-[#F1F0FB] touch-none"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={endDrawing}
              onMouseLeave={endDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={endDrawing}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={clearCanvas}
              className="bg-[#FBEDEE] text-[#FF7E5F] hover:bg-[#ffdce0]"
            >
              Clear
            </Button>
            <Button
              onClick={confirmSignature}
              className="bg-[#7D5FFF] text-white hover:bg-[#6A4FF0]"
              disabled={!hasSigned}
            >
              Confirm Signature
            </Button>
            <Button
              onClick={() => setShowCanvas(false)}
              variant="outline"
              className="border-[#FFD9E6] text-[#7D5FFF]"
            >
              Cancel
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SignatureCanvas;
