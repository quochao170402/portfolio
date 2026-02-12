import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import React from 'react';
import { education, experience } from '../data/data';
import { ExperienceItem as IExperienceItem } from '../types';

interface ExperienceItemProps {
    exp: IExperienceItem;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => {
  return (
    <div className="relative group">
      {/* Timeline Node */}
      <span className="absolute -left-[41px] sm:-left-[47px] md:-left-[59px] top-0 h-6 w-6 rounded-full border-4 border-gray-950 bg-gray-800 group-hover:bg-rose-500 group-hover:scale-110 transition-all duration-300 z-10 shadow-[0_0_0_4px_rgba(3,7,18,1)]"></span>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
         <h4 className="text-2xl font-bold text-white group-hover:text-rose-500 transition-colors">{exp.role}</h4>
         <span className="text-sm font-bold text-gray-400 whitespace-nowrap bg-gray-900 border border-gray-800 px-3 py-1 rounded-full">
            {exp.period}
         </span>
      </div>
      
      <div className="mb-4">
        <h5 className="text-lg font-medium text-rose-400 mb-1 flex items-center gap-2">
            {exp.company}
            {exp.type && <span className="text-xs text-gray-500 border border-gray-700 px-2 py-0.5 rounded-full">{exp.type}</span>}
        </h5>
      </div>
      
      <div className="bg-gray-900/50 rounded-2xl border border-white/5 p-6 hover:bg-gray-900 transition-colors shadow-sm hover:shadow-md">
        <ul className="space-y-3 mb-6">
          {exp.description.map((item, i) => (
            <li key={i} className="text-gray-400 text-lg leading-relaxed flex items-start gap-4">
               <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0 opacity-60"></span>
               <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {exp.tech.map((tech, i) => (
                <span key={i} className="text-xs font-semibold text-rose-300 bg-rose-500/10 px-2.5 py-1 rounded-md">
                    {tech}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="resume" className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-900/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-3 block">My Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional growth and academic background.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education - Featured Card */}
          <div className="mb-20">
             <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-rose-500/10 text-rose-500">
                    <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Academic Background</h3>
             </div>

             <div className="grid gap-6">
                {education.map((edu, index) => (
                   <div key={index} className="group relative bg-gray-900 border border-white/5 rounded-2xl p-8 hover:border-rose-500/30 transition-all hover:shadow-lg hover:shadow-rose-900/10">
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                      
                      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                         <div>
                            <h4 className="text-xl font-bold text-white mb-1">{edu.school}</h4>
                            <p className="text-rose-400 font-medium">{edu.degree}</p>
                         </div>
                         <div className="flex items-center gap-2 text-sm font-bold text-gray-500 bg-gray-950 px-4 py-2 rounded-full border border-gray-800 shrink-0">
                            <Calendar size={14} />
                            {edu.period}
                         </div>
                      </div>
                      
                      {edu.gpa && (
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-sm font-semibold border border-rose-500/20">
                            <span>GPA: {edu.gpa}</span>
                         </div>
                      )}
                   </div>
                ))}
             </div>
          </div>

          {/* Experience - Vertical Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 rounded-lg bg-rose-500/10 text-rose-500">
                    <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
             </div>

            <div className="space-y-12 relative border-l-2 border-gray-800 ml-3 sm:ml-4 md:ml-6 pl-8 sm:pl-10 md:pl-12 pb-4">
              {experience.map((exp, index) => (
                <ExperienceItem key={index} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
