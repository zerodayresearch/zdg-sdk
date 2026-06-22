import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Zero-Day Vulnerabilities: A 2024 Retrospective",
    excerpt: "An analysis of the most critical zero-day vulnerabilities discovered this year and their implications.",
    date: "2024-12-15",
    tag: "Research",
  },
  {
    title: "Advanced Persistent Threats in Southeast Asia",
    excerpt: "Understanding the evolving threat landscape targeting organizations in the ASEAN region.",
    date: "2024-11-28",
    tag: "Intelligence",
  },
  {
    title: "Cloud Security Misconfigurations to Avoid",
    excerpt: "Common cloud security pitfalls and how to implement robust security controls.",
    date: "2024-11-10",
    tag: "Advisory",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-24">
      <div className="section-divider mb-20" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
            // Latest Insights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Stay informed with our latest research, security advisories, and industry insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 card-hover cursor-pointer flex flex-col"
            >
              <span className="font-mono text-xs text-primary border border-primary/20 rounded px-2 py-0.5 w-fit mb-4">
                {post.tag}
              </span>
              <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
