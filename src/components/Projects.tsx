import { ArrowUpRight, X, Layers, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import { projects } from '../data/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const categories = ['All', 'Work', 'Freelance'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);





  return (
    <section id="projects" className="py-32 bg-gray-900/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-3 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Works</span>
            </h2>
            <p className="text-gray-400">
                Explore a collection of my latest projects. Drag or scroll to view more.
            </p>
          </div>
          
          {/* Controls & Filter */}
          <div className="flex flex-col items-end gap-4">
              <div className="flex p-1 bg-gray-900/50 border border-white/5 rounded-xl backdrop-blur-sm">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      filter === cat 
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/20' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
          </div>
        </div>
      </div>

      {/* Carousel Track */}
      <div 
        className="w-full overflow-x-auto pb-12 pt-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      > 
         <div 
            className="flex gap-6 px-6 md:px-12 w-max"
         >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={`${project.title}-${index}`}
                layoutId={`project-${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                className="snap-center min-w-[260px] md:min-w-[300px] lg:min-w-[320px] group rounded-2xl bg-gray-900 border border-white/5 overflow-hidden hover:border-rose-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-900/10 flex flex-col cursor-pointer relative"
              >
                <div className="h-40 md:h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={`https://placehold.co/800x600/1f2937/white?text=${project.title.split(' ')[0]}`} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-rose-500 hover:text-white transition-colors shadow-lg">
                          <ArrowUpRight size={16} />
                      </div>
                  </div>

                  <div className="absolute top-4 left-4 z-20">
                     <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-white border border-white/10">
                        {project.type}
                     </span>
                  </div>
                </div>
                
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                     <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-rose-500 transition-colors truncate">{project.title}</h3>
                        {project.company && <p className="text-rose-400 text-xs font-medium mt-0.5">{project.company}</p>}
                     </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed flex-grow line-clamp-2 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800">
                    {project.tech.slice(0, 3).map((tech: string, i: number) => (
                      <span key={i} className="text-[10px] font-semibold text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-[10px] font-semibold text-gray-500 bg-gray-900 border border-gray-800 px-2 py-0.5 rounded-full">
                            +{project.tech.length - 3}
                        </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
      </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
              >
                {/* Close Button */}
                <button 
                   onClick={() => setSelectedProject(null)}
                   className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-rose-600 rounded-full text-white transition-colors z-20"
                >
                   <X size={24} />
                </button>

                {/* Hero Image */}
                <div className="relative h-64 md:h-80 w-full shrink-0">
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                   <img 
                      src={selectedProject.images?.[0] || `https://placehold.co/1200x800/1f2937/white?text=${selectedProject.title}`}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                   />
                   <div className="absolute bottom-6 left-6 md:left-10 z-20">
                      <span className="px-3 py-1 bg-rose-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 inline-block">
                         {selectedProject.type}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                      {selectedProject.company && <p className="text-xl text-gray-300 font-medium">{selectedProject.company}</p>}
                   </div>
                </div>

                <div className="p-6 md:p-10 space-y-10">
                   {/* Description */}
                   <div className="grid md:grid-cols-3 gap-10">
                      <div className="md:col-span-2 space-y-6">
                         <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Layers size={20} className="text-rose-500" /> Project Overview
                         </h3>
                         <p className="text-gray-300 leading-relaxed text-lg">
                            {selectedProject.longDescription || selectedProject.description}
                         </p>

                         {selectedProject.features && (
                            <div className="space-y-4 pt-4">
                                <h4 className="text-white font-bold">Key Deliverables</h4>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                   {selectedProject.features.map((feature, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-400">
                                         <CheckCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                                         <span>{feature}</span>
                                      </li>
                                   ))}
                                </ul>
                            </div>
                         )}
                      </div>

                      {/* Tech Stack Sidebar */}
                      <div className="space-y-6">
                         <div className="bg-gray-800/50 p-6 rounded-2xl border border-white/5">
                            <h4 className="text-white font-bold mb-4">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                               {selectedProject.tech.map((t, i) => (
                                  <span key={i} className="px-3 py-1 bg-rose-500/10 text-rose-400 text-sm font-semibold rounded-lg border border-rose-500/20">
                                     {t}
                                  </span>
                               ))}
                            </div>
                         </div>

                         {selectedProject.architecture && (
                            <div className="bg-gray-800/50 p-6 rounded-2xl border border-white/5">
                                <h4 className="text-white font-bold mb-4">Architecture</h4>
                                <ul className="space-y-2">
                                   {selectedProject.architecture.map((arch, i) => (
                                      <li key={i} className="text-gray-400 text-sm border-l-2 border-rose-500 pl-3">
                                         {arch}
                                      </li>
                                   ))}
                                </ul>
                            </div>
                         )}
                      </div>
                   </div>

                   {/* Image Gallery */}
                   {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="space-y-4 border-t border-gray-800 pt-8">
                         <h3 className="text-xl font-bold text-white">Project Highlights</h3>
                         <div className="grid md:grid-cols-2 gap-4">
                            {selectedProject.images.slice(1).map((img, i) => (
                               <div key={i} className="rounded-xl overflow-hidden border border-white/10 group">
                                  <img 
                                     src={img} 
                                     alt="Project Screenshot" 
                                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                  />
                               </div>
                            ))}
                         </div>
                      </div>
                   )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
};

export default Projects;
