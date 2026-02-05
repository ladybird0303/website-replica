import React from 'react';
import { Gavel, Users, Scale, Shield, FileText, Heart, Building2, Globe } from 'lucide-react';

const categories = [
  { name: 'Criminal Law', icon: Scale, count: '120+ Lawyers' },
  { name: 'Family & Divorce', icon: Users, count: '85+ Lawyers' },
  { name: 'Property & Land', icon: Building2, count: '200+ Lawyers' },
  { name: 'Corporate Law', icon: Globe, count: '90+ Lawyers' },
  { name: 'Civil Litigation', icon: Gavel, count: '150+ Lawyers' },
  { name: 'Documentation', icon: FileText, count: '60+ Lawyers' },
  { name: 'Cyber Crime', icon: Shield, count: '45+ Lawyers' },
  { name: 'Human Rights', icon: Heart, count: '30+ Lawyers' },
];

export const ServiceCategories = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Expertise Areas</h2>
          <p className="mt-4 text-lg text-slate-600">Browse lawyers by their area of specialty</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-100 group">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                <cat.icon className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition-colors">{cat.name}</h3>
              <p className="text-slate-500 text-sm mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
