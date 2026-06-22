import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.webp" alt="ZDG Asian" className="w-5 h-5" />
              <span className="font-mono font-bold tracking-wider text-foreground">
                ZDG<span className="text-primary">ASIAN</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Zeroday Technologies Ltd — Private cybersecurity firm specializing in vulnerability research, 
              penetration testing, and security solutions since 2014.
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-4">
              Gandaria 8 Office Tower, South Jakarta
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Digital Forensics</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Penetration Testing</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Threat Intelligence</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Incident Response</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Zeroday Technologies Ltd. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Pwned Security Executions Code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
