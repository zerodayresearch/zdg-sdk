import { motion } from "framer-motion";

const VideoIntro = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="section-divider mb-20" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-lg overflow-hidden glow-border">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/G-aQgjGLWQo?autoplay=1&mute=1&loop=1&playlist=G-aQgjGLWQo&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="ZDG Asian Team Intro"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Subtle frame overlay */}
            <div className="absolute inset-0 pointer-events-none border border-primary/10 rounded-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoIntro;
