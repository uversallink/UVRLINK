import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Tv, Trophy, Film, Newspaper, Baby, Music, Globe, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Channels", icon: Tv },
  { id: "sports", name: "Sports", icon: Trophy },
  { id: "movies", name: "Movies & Entertainment", icon: Film },
  { id: "news", name: "News", icon: Newspaper },
  { id: "kids", name: "Kids & Family", icon: Baby },
  { id: "music", name: "Music", icon: Music },
  { id: "international", name: "International", icon: Globe },
  { id: "premium", name: "Premium", icon: Sparkles },
];

const channels = [
  // Sports
  { name: "ESPN", number: 206, category: "sports", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "ESPN2", number: 209, category: "sports", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "NFL Network", number: 212, category: "sports", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "NBA TV", number: 216, category: "sports", packages: ["premium", "ultimate"], hd: true },
  { name: "MLB Network", number: 213, category: "sports", packages: ["premium", "ultimate"], hd: true },
  { name: "Fox Sports 1", number: 219, category: "sports", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "NBC Sports", number: 220, category: "sports", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "Golf Channel", number: 218, category: "sports", packages: ["premium", "ultimate"], hd: true },
  { name: "Tennis Channel", number: 217, category: "sports", packages: ["ultimate"], hd: true },
  { name: "NHL Network", number: 215, category: "sports", packages: ["ultimate"], hd: true },
  
  // Movies & Entertainment
  { name: "AMC", number: 254, category: "movies", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "FX", number: 248, category: "movies", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "TNT", number: 245, category: "movies", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "TBS", number: 247, category: "movies", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "USA Network", number: 242, category: "movies", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "Syfy", number: 244, category: "movies", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "E! Entertainment", number: 236, category: "movies", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "Bravo", number: 237, category: "movies", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "Comedy Central", number: 249, category: "movies", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "MTV", number: 331, category: "movies", packages: ["choice", "premium", "ultimate"], hd: true },
  
  // News
  { name: "CNN", number: 202, category: "news", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "Fox News", number: 360, category: "news", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "MSNBC", number: 356, category: "news", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "CNBC", number: 355, category: "news", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "Bloomberg TV", number: 353, category: "news", packages: ["premium", "ultimate"], hd: true },
  { name: "BBC World News", number: 346, category: "news", packages: ["premium", "ultimate"], hd: true },
  { name: "HLN", number: 204, category: "news", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "Weather Channel", number: 362, category: "news", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  
  // Kids & Family
  { name: "Disney Channel", number: 290, category: "kids", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "Nickelodeon", number: 299, category: "kids", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "Cartoon Network", number: 296, category: "kids", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "Disney XD", number: 292, category: "kids", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "Nick Jr.", number: 301, category: "kids", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "Disney Junior", number: 289, category: "kids", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "PBS Kids", number: 288, category: "kids", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "Boomerang", number: 298, category: "kids", packages: ["premium", "ultimate"], hd: true },
  
  // Music
  { name: "MTV Live", number: 332, category: "music", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "VH1", number: 335, category: "music", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "CMT", number: 327, category: "music", packages: ["choice", "premium", "ultimate"], hd: true },
  { name: "BET", number: 329, category: "music", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  
  // International
  { name: "Telemundo", number: 405, category: "international", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "Univision", number: 402, category: "international", packages: ["starter", "choice", "premium", "ultimate"], hd: true },
  { name: "TV5 Monde", number: 420, category: "international", packages: ["premium", "ultimate"], hd: true },
  { name: "RAI Italia", number: 425, category: "international", packages: ["ultimate"], hd: true },
  
  // Premium
  { name: "HBO", number: 501, category: "premium", packages: ["premium", "ultimate"], hd: true },
  { name: "HBO 2", number: 502, category: "premium", packages: ["premium", "ultimate"], hd: true },
  { name: "HBO Max", number: 503, category: "premium", packages: ["premium", "ultimate"], hd: true },
  { name: "Showtime", number: 545, category: "premium", packages: ["premium", "ultimate"], hd: true },
  { name: "Showtime 2", number: 546, category: "premium", packages: ["premium", "ultimate"], hd: true },
  { name: "Starz", number: 525, category: "premium", packages: ["ultimate"], hd: true },
  { name: "Cinemax", number: 515, category: "premium", packages: ["ultimate"], hd: true },
  { name: "Epix", number: 535, category: "premium", packages: ["ultimate"], hd: true },
];

const packageColors = {
  starter: "bg-muted text-muted-foreground",
  choice: "bg-secondary/20 text-secondary",
  premium: "bg-accent/20 text-accent",
  ultimate: "bg-primary/20 text-primary",
};

const packageNames = {
  starter: "Starter",
  choice: "Choice",
  premium: "Premium",
  ultimate: "Ultimate",
};

const ChannelLineup = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const filteredChannels = channels.filter((channel) => {
    const categoryMatch = selectedCategory === "all" || channel.category === selectedCategory;
    const packageMatch = !selectedPackage || channel.packages.includes(selectedPackage);
    return categoryMatch && packageMatch;
  });

  return (
    <>
      <Helmet>
        <title>Channel Lineup - StreamLink TV Channels by Package</title>
        <meta
          name="description"
          content="Browse all StreamLink TV channels organized by category. Find sports, movies, news, kids channels and more in each package."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Channel Lineup
              </h1>
              <p className="text-xl text-primary-foreground/70">
                Explore all the channels available in each TV package
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted/30 sticky top-20 z-30 border-b border-border">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:bg-muted"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Package Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground py-2">Filter by package:</span>
              <button
                onClick={() => setSelectedPackage(null)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  !selectedPackage ? "bg-foreground text-background" : "bg-muted hover:bg-muted/80"
                }`}
              >
                All
              </button>
              {Object.entries(packageNames).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPackage(key)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedPackage === key
                      ? packageColors[key as keyof typeof packageColors].replace("/20", "")
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Channel Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground mb-6">
              Showing {filteredChannels.length} channels
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredChannels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  className="bg-card rounded-xl p-4 border border-border hover:shadow-card transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{channel.name}</h3>
                      <p className="text-sm text-muted-foreground">Channel {channel.number}</p>
                    </div>
                    {channel.hd && (
                      <span className="text-xs font-bold bg-secondary/20 text-secondary px-2 py-1 rounded">
                        HD
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {channel.packages.map((pkg) => (
                      <span
                        key={pkg}
                        className={`text-xs px-2 py-0.5 rounded ${packageColors[pkg as keyof typeof packageColors]}`}
                      >
                        {packageNames[pkg as keyof typeof packageNames]}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
              Package Legend
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {Object.entries(packageNames).map(([key, name]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className={`w-4 h-4 rounded ${packageColors[key as keyof typeof packageColors]}`}></span>
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ChannelLineup;
