import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DecryptedText from '../components/DecryptedText';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-32 border-b border-border hermes-grid">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => navigate('/')}
            className="font-mono text-[10px] tracking-[0.3em] uppercase flex items-center gap-2 mb-12 text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} /> BACK TO HOME
          </button>
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] mb-12 tracking-tighter">
              <DecryptedText 
                text="BEYOND THE" 
                animateOn="view" 
                revealDirection="center"
              /> 
              <br/> 
              <span className="italic text-accent">
                <DecryptedText 
                  text="CAMPUS." 
                  animateOn="view" 
                  revealDirection="center"
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-light leading-relaxed max-w-2xl">
              Makerere College School is a co-educational government aided O and A-level school, 
              deeply rooted in the academic soil of Makerere University since 1945.
            </p>
          </div>
        </div>
      </section>

      {/* History & Overview */}
      <section className="grid lg:grid-cols-2 border-b border-border">
        <div className="p-20 border-r border-border">
          <div className="font-mono text-xs tracking-widest text-accent mb-12 uppercase italic">School Overview</div>
          <h2 className="text-4xl font-serif mb-10 leading-tight tracking-tight uppercase">
            A Legacy Founded by <br/> <span className="italic">London University.</span>
          </h2>
          <div className="space-y-8 text-lg font-light text-text-muted leading-relaxed">
            <p>
              Founded in 1945 by Makerere University—then still a College of London University—MACOS has remained a 
              beacon of quality education in Uganda for over eight decades.
            </p>
            <p>
              Located adjacent to the College of Education and External Studies on Makerere Hill Road, 
              our campus is part of the intellectual heart of Kampala. We operate two main campuses 
              to cater to our growing community of over 3,000 students.
            </p>
          </div>
        </div>
        <div className="p-20 flex flex-col justify-center gap-12 bg-bg-light">
          <div className="border border-border p-12 hover:border-accent transition-colors">
            <div className="font-mono text-[10px] tracking-widest text-accent mb-4 uppercase">Motto</div>
            <div className="text-3xl font-serif tracking-tight">"BE KNOWN BY YOUR WORKS AND ONLY GOOD WORKS"</div>
          </div>
          <div className="border border-border p-12 hover:border-accent transition-colors">
            <div className="font-mono text-[10px] tracking-widest text-accent mb-4 uppercase">Theme 2025</div>
            <div className="text-3xl font-serif tracking-tight italic">"INSPIRING TEAM COMMITMENT"</div>
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className="py-32 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 border border-border">
            <div className="p-16 border-r border-border hover:bg-bg-light transition-all">
              <div className="flex items-center gap-4 mb-10">
                <MapPin className="text-accent" size={24} />
                <h3 className="text-3xl font-serif uppercase tracking-tight">O' Level Campus</h3>
              </div>
              <p className="text-text-muted font-light text-lg mb-8">
                Makerere Hill Road, Kampala. Adjacent to the College of Education and External Studies.
              </p>
              <div className="font-mono text-xs tracking-widest text-accent uppercase">Kampala, UG</div>
            </div>
            <div className="p-16 hover:bg-bg-light transition-all">
              <div className="flex items-center gap-4 mb-10">
                <MapPin className="text-accent" size={24} />
                <h3 className="text-3xl font-serif uppercase tracking-tight">Mulawa Campus</h3>
              </div>
              <p className="text-text-muted font-light text-lg mb-8">
                A' Level Campus located in Mulawa, Kira. Providing a serene environment for advanced studies.
              </p>
              <div className="font-mono text-xs tracking-widest text-accent uppercase">Kira, UG</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-32 border-b border-border hermes-grid">
        <div className="container mx-auto px-6 text-center">
            <div className="font-mono text-xs tracking-[.4em] text-accent mb-8 uppercase italic">Academics</div>
            <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tighter">SCHOOL <span className="italic">CURRICULUM.</span></h2>
            <div className="max-w-2xl mx-auto text-xl text-text-muted font-light leading-relaxed mb-16">
              We strive to enhance learning opportunities for all children by recognizing each child’s unique individuality, 
              academic, social and cultural strengths.
            </div>
            <button className="bg-text-main text-bg px-12 py-6 font-mono text-sm tracking-widest uppercase hover:bg-accent hover:text-text-main transition-all">
              READ CURRICULUM DETAILS
            </button>
        </div>
      </section>
    </div>
  );
};

export default About;
