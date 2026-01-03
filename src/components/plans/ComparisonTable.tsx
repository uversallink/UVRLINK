import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";

const allPlans = [
  {
    id: "basic",
    name: "Basic",
    type: "internet",
    price: 29,
    speed: "100 Mbps",
  },
  {
    id: "standard",
    name: "Standard",
    type: "internet",
    price: 49,
    speed: "300 Mbps",
  },
  {
    id: "pro",
    name: "Pro",
    type: "internet",
    price: 69,
    speed: "500 Mbps",
    popular: true,
  },
  {
    id: "gig",
    name: "Gig",
    type: "internet",
    price: 89,
    speed: "1 Gig",
  },
  {
    id: "starter",
    name: "Starter",
    type: "tv",
    price: 25,
    channels: "75+",
  },
  {
    id: "choice",
    name: "Choice",
    type: "tv",
    price: 45,
    channels: "125+",
  },
  {
    id: "premium",
    name: "Premium",
    type: "tv",
    price: 75,
    channels: "200+",
    popular: true,
  },
  {
    id: "ultimate",
    name: "Ultimate",
    type: "tv",
    price: 99,
    channels: "300+",
  },
];

const features = [
  { name: "Unlimited Data", plans: ["basic", "standard", "pro", "gig"] },
  { name: "WiFi Router Included", plans: ["basic", "standard", "pro", "gig"] },
  { name: "WiFi 6 Router", plans: ["standard", "pro", "gig"] },
  { name: "WiFi 6E Mesh System", plans: ["pro", "gig"] },
  { name: "Priority Support", plans: ["pro", "gig"] },
  { name: "VIP Support", plans: ["gig"] },
  { name: "Advanced Security Suite", plans: ["pro", "gig"] },
  { name: "Static IP Option", plans: ["pro"] },
  { name: "Static IP Included", plans: ["gig"] },
  { name: "Gaming Optimization", plans: ["gig"] },
  { name: "Local Channels", plans: ["starter", "choice", "premium", "ultimate"] },
  { name: "HD Channels", plans: ["starter", "choice", "premium", "ultimate"] },
  { name: "4K Content", plans: ["premium", "ultimate"] },
  { name: "4K + HDR", plans: ["ultimate"] },
  { name: "Cloud DVR", plans: ["starter", "choice", "premium", "ultimate"] },
  { name: "DVR (30 hours)", plans: ["starter"] },
  { name: "DVR (100 hours)", plans: ["choice"] },
  { name: "DVR (200 hours)", plans: ["premium"] },
  { name: "Unlimited DVR", plans: ["ultimate"] },
  { name: "Sports Tier", plans: ["choice", "premium", "ultimate"] },
  { name: "HBO & Showtime", plans: ["premium", "ultimate"] },
  { name: "All Premium Networks", plans: ["ultimate"] },
  { name: "On-Demand Library", plans: ["choice", "premium", "ultimate"] },
  { name: "Multi-Room Viewing", plans: ["premium", "ultimate"] },
  { name: "6 Simultaneous Streams", plans: ["ultimate"] },
];

const ComparisonTable = () => {
  const [selectedPlans, setSelectedPlans] = useState<string[]>(["pro", "premium", "gig"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const togglePlan = (planId: string) => {
    if (selectedPlans.includes(planId)) {
      if (selectedPlans.length > 1) {
        setSelectedPlans(selectedPlans.filter((id) => id !== planId));
      }
    } else if (selectedPlans.length < 3) {
      setSelectedPlans([...selectedPlans, planId]);
    }
  };

  const selectedPlanDetails = allPlans.filter((p) => selectedPlans.includes(p.id));
  const relevantFeatures = features.filter((f) =>
    f.plans.some((p) => selectedPlans.includes(p))
  );

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Compare Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            Select up to 3 plans to compare side-by-side
          </p>
        </motion.div>

        {/* Plan Selector */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl flex items-center justify-between"
            >
              <span className="text-foreground">
                {selectedPlans.length} plan{selectedPlans.length !== 1 ? "s" : ""} selected
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 p-4">
                <p className="text-sm text-muted-foreground mb-3">Select up to 3 plans:</p>
                
                <div className="mb-4">
                  <p className="text-xs font-medium text-secondary mb-2">Internet Plans</p>
                  <div className="flex flex-wrap gap-2">
                    {allPlans.filter(p => p.type === "internet").map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => togglePlan(plan.id)}
                        disabled={!selectedPlans.includes(plan.id) && selectedPlans.length >= 3}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                          selectedPlans.includes(plan.id)
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed"
                        }`}
                      >
                        {plan.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-accent mb-2">TV Packages</p>
                  <div className="flex flex-wrap gap-2">
                    {allPlans.filter(p => p.type === "tv").map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => togglePlan(plan.id)}
                        disabled={!selectedPlans.includes(plan.id) && selectedPlans.length >= 3}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                          selectedPlans.includes(plan.id)
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed"
                        }`}
                      >
                        {plan.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        <motion.div
          className="max-w-5xl mx-auto overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 bg-card rounded-tl-xl border-b border-border">
                  <span className="font-display font-semibold text-foreground">Features</span>
                </th>
                {selectedPlanDetails.map((plan, index) => (
                  <th
                    key={plan.id}
                    className={`p-4 text-center border-b border-border ${
                      index === selectedPlanDetails.length - 1 ? "rounded-tr-xl" : ""
                    } ${plan.popular ? "bg-accent/10" : "bg-card"}`}
                  >
                    <div className="space-y-1">
                      {plan.popular && (
                        <span className="inline-block bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                      <p className="font-display font-bold text-lg text-foreground">{plan.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {plan.speed || `${plan.channels} Channels`}
                      </p>
                      <p className="font-display font-bold text-2xl text-foreground">
                        ${plan.price}<span className="text-sm font-normal">/mo</span>
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {relevantFeatures.map((feature, index) => (
                <tr key={feature.name} className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                  <td className="p-4 text-sm text-foreground">{feature.name}</td>
                  {selectedPlanDetails.map((plan) => (
                    <td key={plan.id} className={`p-4 text-center ${plan.popular ? "bg-accent/5" : ""}`}>
                      {feature.plans.includes(plan.id) ? (
                        <Check className="w-5 h-5 text-secondary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-4 bg-card rounded-bl-xl border-t border-border"></td>
                {selectedPlanDetails.map((plan, index) => (
                  <td
                    key={plan.id}
                    className={`p-4 text-center border-t border-border ${
                      index === selectedPlanDetails.length - 1 ? "rounded-br-xl" : ""
                    } ${plan.popular ? "bg-accent/10" : "bg-card"}`}
                  >
                    <button
                      className={`w-full py-3 rounded-full font-semibold transition-all ${
                        plan.popular
                          ? "bg-accent text-accent-foreground hover:shadow-lg"
                          : "bg-primary text-primary-foreground hover:shadow-lg"
                      }`}
                    >
                      Choose {plan.name}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
