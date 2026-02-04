import emailjs from '@emailjs/browser';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { profile } from '../data/data';
import { ContactFormState } from '../types';

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<ContactFormState>({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        if (!form.current) return;

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus('Configuration error. Please check environment variables.');
            console.error('Missing EmailJS environment variables');
            return;
        }

        emailjs
            .sendForm(
                serviceId,
                templateId,
                form.current,
                { publicKey }
            )
            .then(
                () => {
                    setStatus('Message sent successfully!');
                    form.current?.reset(); 
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                },
                (error) => {
                    setStatus('Failed to send message. Please try again.');
                    console.error('FAILED...', error.text);
                }
            );
    };

    return (
        <section id="contact" className="py-32 bg-gray-950">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-16">

                    {/* Info Column */}
                    <div className="lg:col-span-2">
                        <span className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-3 block">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Together!</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            I'm currently available for freelance projects and full-time roles. If you have a project that needs some creative touch, let's connect.
                        </p>

                        <div className="space-y-8">
                            <ContactItem icon={<MapPin size={24} />} title="Location" value={profile.location} />
                            <ContactItem icon={<Mail size={24} />} title="Email" value={profile.email} size="lg" link={`mailto:${profile.email}`} />
                            <ContactItem icon={<Phone size={24} />} title="Phone" value="+84 999 999 999" />
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-3">
                        <div className="bg-gray-900 border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl">
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <InputGroup label="Your Name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                                    <InputGroup label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} placeholder="+84 000 000 000" />
                                </div>

                                <InputGroup label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                                <InputGroup label="Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" />

                                <div className="space-y-2">
                                    <label className="text-gray-400 font-medium text-sm ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all resize-none placeholder-gray-600"
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-gradient-to-r from-rose-600 to-rose-500 text-white font-bold py-5 rounded-xl hover:shadow-lg hover:shadow-rose-500/25 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-3">
                                    {status === 'Sending...' ? 'Sending...' : 'Send Message'} <ArrowRight size={20} />
                                </button>
                                {status && <p className="text-center text-sm mt-4 text-gray-300">{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ContactItemProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    link?: string;
    size?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, link }) => (
    <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-rose-500 border border-white/5 shrink-0">
            {icon}
        </div>
        <div>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wide mb-1">{title}</p>
            {link ? (
                <a href={link} className="text-xl text-white font-medium hover:text-rose-500 transition-colors">{value}</a>
            ) : (
                <p className="text-xl text-white font-medium">{value}</p>
            )}
        </div>
    </div>
);

interface InputGroupProps {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, type = "text", name, value, onChange, placeholder }) => (
    <div className="space-y-2">
        <label className="text-gray-400 font-medium text-sm ml-1">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all placeholder-gray-600"
        />
    </div>
);

export default Contact;
