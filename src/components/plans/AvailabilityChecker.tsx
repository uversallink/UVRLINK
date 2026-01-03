import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, XCircle, Loader2, Zap, Wifi, Tv } from "lucide-react";

interface AvailabilityResult {
  available: boolean;
  speeds: string[];
  tvAvailable: boolean;
  fiberAvailable: boolean;
  message: string;
}

// Simulated availability data based on zip code patterns
const checkAvailability = (zipCode: string): AvailabilityResult => {
  const firstDigit = parseInt(zipCode[0]);
  
  // Simulate different availability based on zip code patterns
  if (zipCode.length !== 5 || isNaN(parseInt(zipCode))) {
    return {
      available: false,
      speeds: [],
      tvAvailable: false,
      fiberAvailable: false,
      message: "Please enter a valid 5-digit zip code",
    };
  }

  // Most areas have full service
  if (firstDigit >= 1 && firstDigit <= 7) {
    return {
      available: true,
      speeds: ["100 Mbps", "300 Mbps", "500 Mbps", "1 Gig"],
      tvAvailable: true,
      fiberAvailable: true,
      message: "Great news! Full fiber service is available in your area.",
    };
  }

  // Some areas have limited service
  if (firstDigit === 8) {
    return {
      available: true,
      speeds: ["100 Mbps", "300 Mbps"],
      tvAvailable: true,
      fiberAvailable: false,
      message: "Service is available! Fiber upgrade coming soon to your area.",
    };
  }

  // Remote areas
  return {
    available: true,
    speeds: ["100 Mbps"],
    tvAvailable: false,
    fiberAvailable: false,
    message: "Basic internet service is available. TV service coming soon!",
  };
};

const AvailabilityChecker = () => {
  const [zipCode, setZipCode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<AvailabilityResult | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setResult(null);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const availability = checkAvailability(zipCode);
    setResult(availability);
    setIsChecking(false);
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">Check Your Address</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            See What's Available in Your Area
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8">
            Enter your zip code to discover the services and speeds available at your address
          </p>

          <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
                placeholder="Enter ZIP code"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent text-lg font-medium"
                maxLength={5}
              />
            </div>
            <button
              type="submit"
              disabled={zipCode.length !== 5 || isChecking}
              className="btn-coral disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              {isChecking ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Checking...</span>
                </>
              ) : (
                <span>Check Availability</span>
              )}
            </button>
          </form>

          {/* Results */}
          {result && (
            <motion.div
              className="bg-card rounded-2xl p-8 text-left shadow-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start gap-4 mb-6">
                {result.available ? (
                  <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                )}
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    {result.available ? "Service Available!" : "Limited Service"}
                  </h3>
                  <p className="text-muted-foreground">{result.message}</p>
                </div>
              </div>

              {result.available && result.speeds.length > 0 && (
                <div className="grid sm:grid-cols-3 gap-4">
                  {/* Internet Speeds */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Wifi className="w-5 h-5 text-secondary" />
                      <span className="font-medium text-foreground">Internet</span>
                    </div>
                    <div className="space-y-1">
                      {result.speeds.map((speed) => (
                        <span
                          key={speed}
                          className="inline-block mr-2 mb-1 px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full"
                        >
                          {speed}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* TV */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Tv className="w-5 h-5 text-accent" />
                      <span className="font-medium text-foreground">TV Service</span>
                    </div>
                    <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                      result.tvAvailable 
                        ? "bg-accent/20 text-accent" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {result.tvAvailable ? "Available" : "Coming Soon"}
                    </span>
                  </div>

                  {/* Fiber */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-gold" />
                      <span className="font-medium text-foreground">Fiber</span>
                    </div>
                    <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                      result.fiberAvailable 
                        ? "bg-gold/20 text-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {result.fiberAvailable ? "Available" : "Coming Soon"}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AvailabilityChecker;
