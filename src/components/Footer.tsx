import { Github, Heart, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import { profile } from '../data/data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
           <div className="mb-6 md:mb-0">
             <a href="#" className="text-2xl font-bold font-sans tracking-tight text-white group">
                {profile.name.split(' ')[0]}<span className="text-rose-500">{profile.name.split(' ').slice(1).join(' ')}</span>
             </a>
             <p className="text-gray-500 mt-2 text-sm max-w-xs">
                Building digital experiences with passion and precision.
             </p>
           </div>
           
           <div className="flex space-x-6">
              <SocialLink href={profile.social.github} icon={<Github size={20} />} />
              <SocialLink href={profile.social.linkedin} icon={<Linkedin size={20} />} />
              <SocialLink href={`mailto:${profile.email}`} icon={<Mail size={20} />} />
           </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
           <p className="text-gray-600 mb-4 md:mb-0">
             &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
           </p>
           
           <div className="flex items-center gap-1 text-gray-600">
             <span>Made with</span>
             <Heart size={14} className="text-rose-600 fill-rose-600 animate-pulse" />
             <span>using React & Tailwind</span>
           </div>
        </div>
      </div>
    </footer>
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
    className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-rose-500 hover:bg-rose-500 transition-all"
  >
    {icon}
  </a>
);

export default Footer;
