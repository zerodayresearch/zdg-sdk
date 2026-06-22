import { motion } from "framer-motion";
import teamPetter from "@/assets/team-petter.png";
import teamBella from "@/assets/610956333_122239053698133286_390574820313624389_n.png";

const team = [
  {
    name: "Ibnu Rusdianto",
    role: "Chief Security Officer",
    image: teamPetter,
  },
  {
    name: "Ikhsan Adi Prayogo",
    role: "Junior of Digital Forensics",
    image: teamBella,
  },
  {
    name: "Thomas Andri Hutomo",
    role: "Lead Reverse Engineering & CSI/OSEE Experts",
    image: teamPetter,
  },
  {
    name: "Sukirno Adi Sampurno",
    role: "Security Architecture Lead",
    image: teamPetter,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="relative py-24">
      <div className="section-divider mb-20" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
            // Our Experts
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Meet The <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our team of certified security professionals combines deep technical expertise 
            with practical experience to deliver exceptional cybersecurity services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden card-hover"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-xs font-mono text-primary mb-1 uppercase tracking-wider">
                  {member.role}
                </p>
                <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
