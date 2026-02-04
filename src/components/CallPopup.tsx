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
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-center">
            Internet or Cable Not Working?
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Get instant help for slow internet, outages, setup issues, or cable problems.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-accent">
              {phoneNumber}
            </p>
          </div>
          
          <Button
            onClick={handleCall}
            className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            CALL SUPPORT NOW
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            Quick assistance • No forms • Talk to a real agent
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallPopup;
