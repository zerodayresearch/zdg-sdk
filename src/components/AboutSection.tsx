import { motion } from "framer-motion";
import { Globe, ShieldCheck, Search, Award, Lock, Server, Users, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Search,
    label: "Vulnerability Research",
    desc: "Deep-dive analysis of zero-day exploits and undisclosed vulnerabilities across enterprise platforms and critical infrastructure.",
  },
  {
    icon: ShieldCheck,
    label: "Penetration Testing",
    desc: "Authorized simulation of real-world attacks to evaluate your security posture and uncover exploitable weaknesses.",
  },
  {
    icon: Globe,
    label: "Indonesia & Singapore",
    desc: "Dual-headquartered operations enabling rapid response across Southeast Asia's most dynamic digital markets.",
  },
  {
    icon: Award,
    label: "Since 2014",
    desc: "A decade of proven expertise in offensive security, trusted by Fortune 500 companies and government agencies.",
  },
  {
    icon: Lock,
    label: "Threat Mitigation",
    desc: "End-to-end threat containment strategies designed to neutralize advanced persistent threats before impact.",
  },
  {
    icon: Server,
    label: "Infrastructure Hardening",
    desc: "Comprehensive server and network fortification to eliminate attack surfaces and enforce defense-in-depth.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
              // Introduce
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Zeroday Technologies
              <span className="text-gradient"> Ltd</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Zeroday Technologies Ltd (or ZDG ASIAN) is a private cybersecurity firm founded in 2014 
                with operations in Indonesia and Singapore, specializing in vulnerability research, 
                penetration testing, and security solutions.
              </p>
              <p>
                The company focuses on protecting global organizations from digital threats and has 
                experience with platforms like HackerOne, Google, and IBM. Known for finding and validating 
                critical vulnerabilities such as CVE-2012-3153.
              </p>
              <p className="text-sm font-mono text-primary/70">
                Pwned Security Executions Code
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="bg-card border border-border rounded-lg p-5 card-hover group"
              >
                <item.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-display font-semibold text-foreground text-sm mb-1.5">{item.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
