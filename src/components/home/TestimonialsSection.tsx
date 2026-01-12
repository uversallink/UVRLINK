import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Work From Home Mom",
    content: "Uversal Link helped me understand all my options without any pressure. Their guidance made it easy to find the right internet plan for our family's needs.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "David Chen",
    role: "Tech Enthusiast",
    content: "I appreciated the independent advice. They explained the differences between providers clearly and helped me make an informed decision.",
    rating: 5,
    avatar: "DC",
  },
  {
    name: "Maria Rodriguez",
    role: "Small Business Owner",
    content: "The assistance was exactly what I needed. They researched options in my area and explained everything without any sales pressure. Very professional service.",
    rating: 5,
    avatar: "MR",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-3 sm:mb-4">
            What People Say
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70">
            Hear from users who received independent guidance from our advisory service
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary-foreground/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent mb-4 sm:mb-6" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-primary-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center">
            <p className="font-display font-bold text-2xl sm:text-3xl text-primary-foreground">500K+</p>
            <p className="text-xs sm:text-sm">Happy Customers</p>
          </div>
          <div className="w-px h-10 sm:h-12 bg-primary-foreground/20"></div>
          <div className="text-center">
            <p className="font-display font-bold text-2xl sm:text-3xl text-primary-foreground">4.9/5</p>
            <p className="text-xs sm:text-sm">Average Rating</p>
          </div>
          <div className="w-px h-10 sm:h-12 bg-primary-foreground/20"></div>
          <div className="text-center">
            <p className="font-display font-bold text-2xl sm:text-3xl text-primary-foreground">#1</p>
            <p className="text-xs sm:text-sm">Rated Provider</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
