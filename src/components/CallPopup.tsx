import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CallPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "855-750-6771";

  useEffect(() => {
    // Show popup when component mounts (on page load or refresh)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500); // Small delay for better UX

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Phone className="w-6 h-6 text-accent animate-pulse" />
            Call Us Now!
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Get independent guidance on the best internet and TV plans for your needs.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Speak with our expert advisors
            </p>
            <p className="text-3xl font-bold text-accent">
              {phoneNumber}
            </p>
          </div>
          
          <Button
            onClick={handleCall}
            className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
          
          {/* Availability text removed as requested */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallPopup;
