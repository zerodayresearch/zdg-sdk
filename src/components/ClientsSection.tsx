import { motion } from "framer-motion";

const clients = [
  { name: "HackerOne", color: "#494649" },
  { name: "Bugcrowd", color: "#F26822" },
  { name: "Exodus", color: "#1F2937" },
  { name: "Cosmos", color: "#2E3148" },
  { name: "Brave", color: "#FB542B" },
  { name: "Google VRP", color: "#4285F4" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "YesWeHack", color: "#1E90FF" },
  { name: "Slack", color: "#4A154B" },
  { name: "Mail.ru", color: "#005FF9" },
];

const ClientsSection = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-20" />
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
            // Projects We Secured
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Trusted By <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            These are projects for which we have submitted valid security reports.
          </p>
        </motion.div>
      </div>

      {/* Sliding logos */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-slide-logos">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-16 px-8 bg-card border border-border rounded-md hover:border-primary/30 transition-all duration-300"
            >
              <span className="font-mono text-sm font-semibold text-muted-foreground whitespace-nowrap tracking-wider">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
