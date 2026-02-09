import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import { profile } from '../data/data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-2 border border-rose-500/30 bg-rose-500/5 rounded-full mb-6">
               <span className="text-rose-400 font-semibold tracking-wide text-sm uppercase">👋 Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              {profile.name.split(' ')[0]} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                {profile.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light flex items-center gap-3">
              <span className="w-12 h-[1px] bg-gray-500"></span>
              {profile.role}
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 border-l-2 border-gray-700 pl-6">
              {profile.shortSummary}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a href="#projects" className="px-8 py-4 bg-rose-600 text-white rounded-full font-bold hover:bg-rose-500 transition-all shadow-[0_0_30px_-5px_rgba(225,29,72,0.6)] hover:shadow-[0_0_40px_-5px_rgba(225,29,72,0.8)] text-center">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-full font-bold hover:border-white hover:bg-white/5 transition-all text-center">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6">
               <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Connect with me</span>
               <div className="flex space-x-4">
                <SocialLink href={profile.social.github} icon={<Github size={22} />} />
                <SocialLink href={profile.social.linkedin} icon={<Linkedin size={22} />} />
                <SocialLink href={`mailto:${profile.email}`} icon={<Mail size={22} />} />
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              {/* Complex circle decorations */}
              <div className="absolute inset-0 rounded-full border border-gray-800 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-gray-800 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/20 to-transparent rounded-full blur-2xl" />
              
              {/* Profile Image Container */}
              <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-white/10 bg-gray-900 shadow-2xl relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-20 group-hover:opacity-40 transition-opacity" />
                <img
                   src="https://placehold.co/600x600/111827/white?text=QH"
                   alt={`Portrait of ${profile.name}, ${profile.role}`}
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />
              </div>

               {/* Stats or Floating Cards */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="absolute bottom-20 -left-6 bg-gray-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl z-30 flex items-center gap-4"
               >
                 <div className="w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold">
                    3+
                 </div>
                 <div>
                    <p className="text-xs text-gray-400 uppercase">Years of</p>
                    <p className="text-white font-bold">Experience</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-rose-500 hover:bg-rose-500 transition-all duration-300 group"
  >
    <span className="group-hover:scale-110 transition-transform">{icon}</span>
  </a>
);

export default Hero;
