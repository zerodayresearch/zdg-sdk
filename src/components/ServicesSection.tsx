import { motion } from "framer-motion";
import {
  Fingerprint,
  Eye,
  ShieldAlert,
  FileCheck,
  Cloud,
  Code2,
  Siren,
  Network,
} from "lucide-react";

const services = [
  {
    icon: Fingerprint,
    title: "Digital Forensics",
    desc: "Expert analysis of digital evidence for incident response, legal proceedings, and internal investigations.",
  },
  {
    icon: Eye,
    title: "Cybersecurity Intelligence",
    desc: "Proactive threat intelligence to identify and mitigate potential security threats before they impact your organization.",
  },
  {
    icon: ShieldAlert,
    title: "Penetration Testing",
    desc: "Comprehensive security assessments to identify vulnerabilities in your systems before attackers do.",
  },
  {
    icon: FileCheck,
    title: "Security Compliance",
    desc: "Expert guidance to achieve and maintain compliance with industry standards and regulations.",
  },
  {
    icon: Cloud,
    title: "Secure Cloud Infrastructure",
    desc: "Design and implementation of secure cloud environments with robust security controls.",
  },
  {
    icon: Code2,
    title: "Secure Development",
    desc: "Integration of security throughout the software development lifecycle to build secure applications.",
  },
  {
    icon: Siren,
    title: "Incident Response",
    desc: "24/7 emergency response to security incidents with rapid containment and remediation.",
  },
  {
    icon: Network,
    title: "Security Architecture",
    desc: "Design and implementation of robust security architectures tailored to your organization's needs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24">
      <div className="section-divider mb-20" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
            // Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Comprehensive <span className="text-gradient">Cyber Defense</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We offer a comprehensive suite of cybersecurity services to protect your organization 
            from evolving threats across your digital ecosystem.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card border border-border rounded-lg p-6 card-hover cursor-pointer"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              <p className="mt-4 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more →
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
