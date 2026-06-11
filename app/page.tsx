'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06030f] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
            Ai
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-indigo-300 transition">About</a>
            <a href="#work" className="hover:text-indigo-300 transition">Work</a>
            <a href="#contact" className="hover:text-indigo-300 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-purple-950/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl md:text-8xl font-serif font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
              Ai
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200 font-light tracking-widest mb-8">
            by Minal
          </p>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed mb-12">
            Crafting intelligent solutions and digital experiences. Specializing in AI-powered applications, design, and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#work"
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-indigo-400 rounded-full hover:bg-indigo-400/10 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Minal, an AI enthusiast and creative technologist passionate about building innovative solutions that blend intelligence with beautiful design.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With expertise in AI/ML, web development, and digital design, I create products that solve real problems and delight users.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-4 border border-indigo-500/30 rounded-lg hover:border-indigo-400 transition">
              <h3 className="text-indigo-300 font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-400">Building intelligent systems and neural solutions</p>
            </div>
            <div className="p-4 border border-purple-500/30 rounded-lg hover:border-purple-400 transition">
              <h3 className="text-purple-300 font-semibold mb-2">Web Development</h3>
              <p className="text-gray-400">Modern full-stack applications and experiences</p>
            </div>
            <div className="p-4 border border-yellow-500/30 rounded-lg hover:border-yellow-400 transition">
              <h3 className="text-yellow-300 font-semibold mb-2">Digital Design</h3>
              <p className="text-gray-400">Thoughtful design with purpose and aesthetics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Featured Work
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "AI Assistant Platform", desc: "Intelligent chatbot with NLP capabilities", tags: ["AI", "Next.js", "Python"] },
            { title: "Design System", desc: "Comprehensive component library and guidelines", tags: ["Design", "React", "Tailwind"] },
            { title: "Analytics Dashboard", desc: "Real-time data visualization and insights", tags: ["Data", "Next.js", "D3.js"] },
            { title: "Creative Portfolio", desc: "Interactive multimedia showcase", tags: ["Design", "Web", "Animation"] },
          ].map((project, i) => (
            <div
              key={i}
              className="group p-6 border border-white/10 rounded-lg hover:border-indigo-400 transition cursor-pointer bg-white/5 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-400 focus:outline-none transition text-white placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-400 focus:outline-none transition text-white placeholder-gray-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-400 focus:outline-none transition text-white placeholder-gray-500 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        <p>© 2024 Ai by Minal. All rights reserved.</p>
      </footer>
    </div>
  );
}
