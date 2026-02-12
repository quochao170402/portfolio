import { ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';
import { profile } from '../data/data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gray-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl">
               <img 
                 src="https://placehold.co/800x600/111827/white?text=About+Image" 
                 alt="Working"
                 className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
               />
               
               {/* Overlay Content */}
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-gray-950 to-transparent">
                  <div className="flex gap-8">
                     <div>
                        <span className="block text-4xl font-bold text-white mb-1">10+</span>
                        <span className="text-sm text-gray-400 uppercase tracking-wider">Projects</span>
                     </div>
                      <div>
                        <span className="block text-4xl font-bold text-white mb-1">3.5</span>
                        <span className="text-sm text-gray-400 uppercase tracking-wider">Years Exp</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          <div>
             <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-rose-500"></span>
                <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">About Me</span>
             </div>
             
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
               Software Engineer with a passion for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Innovation</span>
             </h2>
             
             <p className="text-gray-400 text-lg leading-relaxed mb-8">
               {profile.summary}
             </p>

             <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                   "Frontend Development",
                   "Backend Architecture",
                   "Cloud Integration (GCP)",
                   "Microservices",
                   "Mobile Apps (React Native)",
                   "DevOps & CI/CD"
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-rose-500 shrink-0" size={20} />
                      <span className="text-gray-300 font-medium">{item}</span>
                   </div>
                ))}
             </div>

             <a href="#resume" className="inline-flex items-center gap-2 text-white font-bold group hover:text-rose-500 transition-colors">
                Read more about my journey <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
