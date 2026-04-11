import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MessageSquare, Phone, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-[3rem] p-12 md:p-20 border-white/10 relative overflow-hidden hardware-border">
          {/* Background Atmosphere */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <div className="micro-label mb-6 text-brand-primary">Contact Operations</div>
              <h2 className="text-5xl md:text-6xl mb-8 leading-[0.9] tracking-tighter">
                Ready to <br />
                <span className="italic-serif">Initialize?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Connect with our technical architects to discuss your agentic interface requirements. We operate on a global scale.
              </p>

              <div className="space-y-8">
                <ContactItem icon={<Mail className="w-5 h-5" />} label="Neural Stream" value="hello@aetheris.757tech.pro" />
                <ContactItem icon={<Globe className="w-5 h-5" />} label="HQ Location" value="757tech.pro / Virtual Core" />
                <ContactItem icon={<Phone className="w-5 h-5" />} label="Direct Line" value="+1 (757) AGENTIC" />
              </div>
            </div>

            <div className="lg:col-span-7">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <FormInput label="Full Name" name="name" placeholder="John Doe" />
                <FormInput label="Email Address" name="email" placeholder="john@company.com" type="email" />
                <div className="md:col-span-2">
                  <FormInput label="Project Scope" name="project" placeholder="Enterprise Agent Orchestration" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="micro-label ml-1">Transmission Details</label>
                  <textarea 
                    name="message"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand-primary/50 transition-all min-h-[160px] hardware-border"
                    placeholder="Describe your neural architecture requirements..."
                  />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full py-6 bg-brand-primary text-bg-dark font-bold rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 neon-glow-primary group">
                    Initialize Handshake <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-all duration-500">
        {icon}
      </div>
      <div>
        <div className="micro-label text-gray-600 mb-1">{label}</div>
        <div className="text-white font-medium group-hover:text-brand-primary transition-colors">{value}</div>
      </div>
    </div>
  );
}

function FormInput({ label, placeholder, name, type = "text" }: { label: string; placeholder: string; name: string; type?: string }) {
  return (
    <div className="space-y-3">
      <label className="micro-label ml-1">{label}</label>
      <input 
        type={type}
        name={name}
        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand-primary/50 transition-all hardware-border"
        placeholder={placeholder}
      />
    </div>
  );
}
