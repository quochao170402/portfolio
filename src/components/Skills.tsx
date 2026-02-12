import React from 'react';
import { skills } from '../data/data';
import { Database, Layout, Server, Settings, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'backend': return <Server size={24} />;
      case 'frontend': return <Layout size={24} />;
      case 'database': return <Database size={24} />;
      case 'devops': return <Settings size={24} />;
      default: return <Cpu size={24} />;
    }
  };

  return (
    <section id="skills" className="py-32 bg-gray-950 relative overflow-hidden">
       {/* Background noise/grain if user wants, but keeping it clean for now */}
       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

       <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-3 block">My Arsenal</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">
             A comprehensive suite of technologies I use to build scalable and robust applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="group relative">
                   <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   
                   <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-rose-500/30 transition-colors h-full">
                       <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                          {getIcon(category)}
                       </div>
                       
                       <h3 className="text-2xl font-bold text-white capitalize mb-6 flex items-center gap-3">
                           {category}
                       </h3>
                       
                       <div className="flex flex-wrap gap-2">
                           {items.map((skill, index) => (
                               <span key={index} className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-800/80 rounded-lg border border-transparent hover:border-rose-500/30 hover:text-white transition-all cursor-default">
                                   {skill}
                               </span>
                           ))}
                       </div>
                   </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
